import readPdf from "./ReadPDFFile.js";
import path from 'path';

import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate} from "@langchain/core/prompts";

import readline from "readline";
import * as dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'guide.pdf'); 

let extractedText = ''; 

readPdf(filePath).then((data) => {
    extractedText = data; 
    console.log('Extracted Text:', extractedText);
}).catch((error) => {
    console.error('Error reading PDF:', error);
});


const model = new ChatOpenAI({
    modelNames: "gpt-3.5-turbo",
    temperature: 0.7
});

const prompt = ChatPromptTemplate.fromTemplate(`
    Answer the users' question according to the given document 
    Question: {input}
    Context: {context}
`)

const chain = prompt.pipe(model);
const response = await chain.invoke({
    input:"What is this document about?",
    context: [extractedText]
})
console.log(response);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = () => {
    rl.question("User: ", async (input) => {
        if (input.toLowerCase() === "exit") {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        try {
            const response = await chain.invoke({
                input: input,
                context: [extractedText]
            });
            console.log("Agent:", response.output);
        } catch (error) {
            console.error("Error:", error.message);
        }

        askQuestion(); 
    });
};
askQuestion();