import fetch from "node-fetch";
import fs from "fs";
import pdfParse from "pdf-parse";
import mammoth from "mammoth"; 
import readline from "readline"; 


async function readPDF(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
}

async function readDocx(filePath) {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
}

async function askQuestion(context, question) {
    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "mistral",
            prompt: `Context: ${context}\n\nQuestion: ${question}\n\nAnswer:`
        })
    });

    let fullResponse = "";

    for await (const chunk of res.body) {
        const text = chunk.toString();
        try {
            const parsed = JSON.parse(text);
            if (parsed.response) {
                fullResponse += parsed.response;
            }
        } catch (err) {
            console.error("Error parsing chunk:", text);
        }
    }

    console.log("\nAI Response:", fullResponse.trim());
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

    console.log("\n📄 File content extracted successfully!");

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
            await askQuestion(extractedText, question);
            promptQuestion();
        });
    }

    promptQuestion();
}

main();
