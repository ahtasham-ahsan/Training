import * as dotenv from "dotenv";
dotenv.config();

import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

import { BufferMemory } from "langchain/memory"; 
import { ConversationChain } from "langchain/chains";
import { UpstashRedisChatMessageHistory } from "@langchain/community/stores/message/upstash_redis";


const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    temperature: 0.7
});

const prompt = ChatPromptTemplate.fromTemplate(
    `
    You are an AI Assistant
    History: {history}
    {input}
    `
);

const upstashChatHistory = new UpstashRedisChatMessageHistory({
    sessionId: "chat1",
    config:{
        url:process.env.UPSTASH_REDIS_URL, 
        token: process.env.UPSTASH_REST_TOKEN,
    }
})

const memory = new BufferMemory({
    memoryKey: 'history', 
    chatHistory: upstashChatHistory
})

// const chain = prompt.pipe(model);
const chain = new ConversationChain({
    llm: model, 
    prompt: prompt,
    memory: memory 
})
const inputs = {
    input: "Hi there"
}
const response = await chain.invoke(inputs)
console.log(response); 