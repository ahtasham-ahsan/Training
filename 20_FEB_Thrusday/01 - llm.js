import { ChatOpenAI } from "@langchain/openai";
import * as dotenv from  "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo", 
    temperature: 0.7,
    maxTokens: 1000, 
    verbose: true
})

const response1 = await model.invoke("Hello Brother");
const response2 = await model.batch(["Hello Brother", "How are you?"]); // For passing multiple prompts
const response3  = await model.stream("Write a poem for me");  // Returns the response in Chunks
console.log(response1);
for await (const chunk of response3){
    console.log(chunk?.content); 
}

const response4 = await model.streamLog("Write something for me"); // Returns more information along with the chunk