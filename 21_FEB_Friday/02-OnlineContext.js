import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate} from "@langchain/core/prompt";
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

const chain = await createStuffDocumentChain({
    llm: model, 
    prompt: prompt
});
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
    k: 3
});
const retrievalChain = await createRetrievalChain({
    combineDocsChain: chain, 
    retriever: retriever
});



const response = await retrievalChain.invoke({
    input: "What is LCEL", 
 });

console.log(response);