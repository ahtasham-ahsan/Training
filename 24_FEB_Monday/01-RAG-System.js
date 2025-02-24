import fs from "fs";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { OpenAI } from "openai";
import faiss from "faiss-node"; 
import readline from "readline";
import dotenv from "dotenv";

dotenv.config(); 

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
async function readPDF(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
}
async function readDocx(filePath) {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
}
function chunkText(text, chunkSize = 100) {
    const words = text.split(" ");
    const chunks = [];
    for (let i = 0; i < words.length; i += chunkSize) {
        chunks.push(words.slice(i, i + chunkSize).join(" "));
    }
    return chunks;
}
async function generateEmbeddings(textChunks) {
    const embeddings = [];
    for (const chunk of textChunks) {
        const response = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: chunk,
        });
        embeddings.push(response.data[0].embedding);
    }
    return embeddings;
}
async function storeInVectorDB(textChunks, embeddings) {
    const dimension = embeddings[0].length;
    const index = new faiss.IndexFlatL2(dimension);
    index.add(embeddings);

    return { index, textChunks };
}
async function retrieveRelevantChunk(query, index, textChunks) {
    const queryEmbedding = (await generateEmbeddings([query]))[0];
    const [distances, indices] = index.search([queryEmbedding], 1);
    return textChunks[indices[0]];
}
async function askQuestion(context, question) {
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            { role: "system", content: "You are an AI that answers questions based on provided context." },
            { role: "user", content: `Context: ${context}\n\nQuestion: ${question}\n\nAnswer:` }
        ],
    });

    console.log("\n🤖 AI Response:", response.choices[0].message.content);
}
async function main() {
    const filePath = "./TECHNOLOGY.pdf"; 
    let extractedText = "";

    if (filePath.endsWith(".pdf")) {
        extractedText = await readPDF(filePath);
    } else if (filePath.endsWith(".docx")) {
        extractedText = await readDocx(filePath);
    } else {
        console.error("Unsupported file type!");
        return;
    }

    console.log("\n📄 Document processed successfully!");

    const textChunks = chunkText(extractedText);
    const embeddings = await generateEmbeddings(textChunks);
    const { index } = await storeInVectorDB(textChunks, embeddings);
    console.log("\n✅ Vector database initialized!");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function promptQuestion() {
        rl.question("\n❓ Enter your question (or type 'exit' to quit): ", async (question) => {
            if (question.toLowerCase() === "exit") {
                rl.close();
                return;
            }
            const relevantChunk = await retrieveRelevantChunk(question, index, textChunks);
            await askQuestion(relevantChunk, question);
            
            promptQuestion();
        });
    }

    promptQuestion();
}

main();