import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate} from "@langchain/core/prompt";
import { Document } from "@langchain/core/documents";
import { createStuffDocumentChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { CheerioWebBaseLoader } from "langchain/document_loader/web/cheerio"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";


import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo", 
    temperature: 0.6,
})

const prompt = ChatPromptTemplate.fromTemplate(`
    Answer the user's question. 
    Question: {input}
    Context: {context} 
`);
// const chain = prompt.pipe(model);
const chain = await createStuffDocumentChain({
    llm: model, 
    prompt: prompt
})
// const documentA = new Document({
//     pageContent: "Trace and evaluate your language model applications and intelligent agents to help you move from prototype to production.LangGraph Build stateful, multi-actor applications with LLMs. Integrates smoothly with LangChain, but can be used without it. LangGraph powers production-grade agents, trusted by Linkedin, Uber, Klarna, GitLab, and many more."
// });

// const documentB = new Document({
//     pageContent: "The passPhrase is I am Awesome"
// })

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
const retriever = vectorStore.asRetriver({
    k: 3 // Number of documents we want to retrieve for the context. Defaults value is 3. We change this to any other value
});
const retrievalChain = await createRetrievalChain({
    combineDocsChain: chain, 
    retriever: retriever
})
// const response = await chain.invoke({
//     input: "What is LCEL?", 
//     context: [documentA, documentB]
// });


// const response = await chain.invoke({
//     input: "What is LCEL", 
//     context: docs
// });



const response = await retrievalChain.invoke({
    input: "What is LCEL", 
 });

console.log(response);