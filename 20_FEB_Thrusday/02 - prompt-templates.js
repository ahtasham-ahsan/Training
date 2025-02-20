import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo', 
    temperature: 0.7
});
// ------------------------------------------------------------------------------------------------
// Method 01
const prompt = ChatPromptTemplate.fromTemplate(
    'You are a comedian. Tell a joke based on the following words {input}'
);
console.log(await prompt.format({input: "chicken"})); 

const chain = prompt.pipe(model);
const resp = await  chain.invoke({
    input: "dog", 
})
console.log(resp);

// ------------------------------------------------------------------------------------------------
// Method 02

const prompt1 = ChatPromptTemplate.fromMessages(
    ["system", "Generate a joke based on the word provided by the user"], 
    ["human", "{input}"]
);

const chain2 = prompt1.pipe(model);
const resp2 = await chain2.invoke({
    input: "chicken",
});
console.log(resp2);