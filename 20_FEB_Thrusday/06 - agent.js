// import * as dotenv from "dotenv";
// dotenv.config()

// import { ChatOpenAI } from "@langchain/openai";
// import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";

// import { createOpenAIFunctionAgent, AgentExecutor } from "langchain/agents"
// import { TavilySearchResults } from "@langchain/community/tools/tavily_search"
// import { HumanMessage, AIMessage } from "@langchain/core/messages";

// import readline, { createInterface } from "readline"; 

// const model = new ChatOpenAI({
//     modelName: "gpt-3.5-turbo-1106", 
//     temperature: 0.6
// });

// const prompt = ChatPromptTemplate.fromMessages([
//     ("system", "You are a helpful assistant called Max"), 
//     new MessagesPlaceholder("chat_history"), 
//     ("human", "{input}"), 
//     new MessagesPlaceholder("agent_scratchpad")
// ]);

// const searchTool = new TavilySearchResults();

// const tools = [searchTool ];
// // instead of chains, we will create agents
// const agent = await createOpenAIFunctionAgent({
//     llm: model, 
//     prompt, 
//     tools,
// })

// const agentExecutor = new AgentExecutor({
//     agent, 
//     tools,
// })

// const rl = createInterface({
//     input: process.stdin, 
//     output: process.stdout, 
// });

// const chatHistory = [];

// const askQuestion = () => {

// rl.question("User: ", (input) => {
//     if(input.toLowerCase() === "exit"){
//         rl.close();
//         return;
//     }
//     const response = agentExecutor.invoke({
//         input: input , 
//         chat_history : chatHistory
//     });
    
//     console.log("Agent: ", response.output); 
//     chatHistory.push(new HumanMessage(input));
//     chatHistory.push(new AIMessage(response.output));
// });
// askQuestion();
// };

// askQuestion(); 
import * as dotenv from "dotenv";
dotenv.config();

import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";

import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

import readline from "readline";

// Initialize OpenAI model
const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo-1106",
    temperature: 0.6
});

// Define Prompt Template
const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful assistant called Max"],
    new MessagesPlaceholder("chat_history"),
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad")
]);

// Define tools
const searchTool = new TavilySearchResults();
const tools = [searchTool];

// Initialize Agent Executor
const agentExecutor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "openai-functions",
    verbose: true
});

// Setup Readline Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chatHistory = [];

// Function to handle user input
const askQuestion = () => {
    rl.question("User: ", async (input) => {
        if (input.toLowerCase() === "exit") {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        try {
            const response = await agentExecutor.invoke({
                input: input,
                chat_history: chatHistory
            });

            console.log("Agent:", response.output);
            chatHistory.push(new HumanMessage(input));
            chatHistory.push(new AIMessage(response.output));
        } catch (error) {
            console.error("Error:", error.message);
        }

        askQuestion(); // Recursively ask for next input
    });
};

// Start chat loop
askQuestion();