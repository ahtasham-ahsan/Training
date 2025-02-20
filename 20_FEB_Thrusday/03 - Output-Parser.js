import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser, CommaSeparatedListOutputParser } from "@langchain/core/output_parsers";
import { StructuredOutputParser } from "@langchain/output_parsers";

import * as dotenv from "dotenv";
import { func } from "joi";
dotenv.config();

const model = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo', 
    temperature: 0.7
});

async function call_String_Output_Parser(){
    const prompt1 = ChatPromptTemplate.fromMessages(
        ["system", "Generate a joke based on the word provided by the user"], 
        ["human", "{input}"]
    );
    
    const parser = new StringOutputParser();
    
    const chain2 = prompt1.pipe(model).pipe(parser);
    return await chain2.invoke({
        input: "chicken",
    });
}

async function call_List_Output_Parser(){
    const prompt1 = ChatPromptTemplate.fromTemplate(`provide 5 synonymous for the word {word}`);
    const output_parsers = new CommaSeparatedListOutputParser();
    const chain = prompt1.pipe(model).pipe(output_parsers); 
    return await chain.invoke({
        word: "happy",
    });
}


async function structured_Output_Parser(){
    const prompt1 = ChatPromptTemplate.fromTemplate(`
        Extract information from the following phrases
        Formatting Instructions: {format_instructions}
        Phrase: {phrase}
        `);
    const output_parsers = new StructuredOutputParser().fromNamesAndDescriptions({
        name: "the name of the person", 
        age: "the age of the person",
    });
    const chain = prompt1.pipe(model).pipe(output_parsers); 
    return await chain.invoke({
        phrase: "Max is a 30 years old boy", 
        format_instructions: output_parsers.getFormatInstructions()
    });
}
     

const response1 = await call_String_Output_Parser(); 
console.log(response1);

const response2 = await call_List_Output_Parser();
console.log(response2);

const response3 = await structured_Output_Parser();
console.log(response3);