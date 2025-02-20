import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate} from "@langchain/core/prompt";

import { createStuffDocumentChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

import { CheerioWebBaseLoader } from "langchain/document_loader/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

import { AIMessage, HumanMessage } from "@langchain/core/messages"
import { MessagesPlaceholder } from "@langchain/core/prompts";

import { createHistoryAwareRetriever } from "@langchain/chains/history_aware_retriever"


import * as dotenv from "dotenv";
dotenv.config();

const createVectorStore = async () =>{
    const loader = new CheerioWebBaseLoader(
        "https://js.langchain.com/docs/integrations/document_loaders/web_loaders/"
    );
    const docs = await loader.load()
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize:200,
        chunkOverlap: 20
    });
    const split_docs = await splitter.splitDocuments(docs);
    const embeddings = new OpenAIEmbeddings();
    const vectorStore = await MemoryVectorStore.fromDocument(
        split_docs, 
        embeddings
    );
    return vectorStore;
}

const createChain = async () => {
    const model = new ChatOpenAI({
        modelName: "gpt-3.5-turbo", 
        temperature: 0.6,
    })
    
    // const prompt = ChatPromptTemplate.fromTemplate(`
    //     Answer the user's question. 
    //     Question: {input}
    //     Chat History: {chat_history}
    //     Context: {context} 
    // `);
    const prompt = ChatPromptTemplate.fromMessages([
        [
            "system", 
            "Answer the user's question based on the context provided: {context}",
        ], 
        new MessagesPlaceholder("chat_history"),
        [
            "user", "{input}",
        ]
    ])
    const chain = await createStuffDocumentChain({
        llm: model, 
        prompt: prompt
    });


    const retriever = vectorStore.asRetriver({
        k: 3 // Number of documents we want to retrieve for the context. Defaults value is 3. We change this to any other value
    });
    const retrieverPrompt = ChatPromptTemplate.fromMessages([
        new MessagesPlaceholder("chat_history"), 
        ["user", "{input}"], 
        ["user", "Gien the above conversation, generate a search query to look up in order to get information relevant to the converation"]
    ])
    const historyAwareRetriever = await createHistoryAwareRetriever({
        llm: model, 
        retriever: retriever, 
        rephrasePrompt: retrieverPrompt
    })
    const conversationChain = await createRetrievalChain({
        combineDocsChain: chain, 
        retriever: historyAwareRetriever
    })
    
    return conversationChain;
};

const vectorStore = await createVectorStore()
const chain = await createChain(vectorStore);

const chatHistory = [
    new HumanMessage("Hello"),
    new AIMessage("Hi, How can I help you?"), 
    new HumanMessage("My name is Wade"), 
    new AIMessage("Hello Wade, how can i assist you today?"), 
    new HumanMessage("What is LCEL?")   ,
    new AIMessage("LCEL stands for Langchain Expression Language") ,
]

const response = await chain.invoke({
    input: "What is LCEL", 
    chat_history: chatHistory 
 });


console.log(response);