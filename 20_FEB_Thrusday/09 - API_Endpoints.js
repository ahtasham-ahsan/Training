require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const LLAMA_API_URL = process.env.LLAMA_API_URL;

const fetchMCQ = async (model, subject, classLevel) => {
    let prompt = `Generate a multiple-choice question for ${subject} at Class ${classLevel} level. Format: {"question": "...", "options": ["A) ...", "B) ...", "C) ...", "D) ..."], "answer": "A/B/C/D"}`;

    try {
        if (model === "openai") {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-4",
                    messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: prompt }],
                    max_tokens: 100
                },
                { headers: { Authorization: `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" } }
            );
            return JSON.parse(response.data.choices[0].message.content);
        } 
        
        else if (model === "claude") {
            const response = await axios.post(
                "https://api.anthropic.com/v1/messages",
                {
                    model: "claude-2",
                    messages: [{ role: "user", content: prompt }],
                    max_tokens: 100
                },
                { 
                    headers: { 
                        "Authorization": `Bearer ${CLAUDE_API_KEY}`,
                        "Content-Type": "application/json",
                        "anthropic-version": "2023-06-01"  // Required for Anthropic API
                    } 
                }
            );
            return JSON.parse(response.data.content[0].text);
        } 
        
        else if (model === "llama") {
            const response = await axios.post(
                `${LLAMA_API_URL}/v1/chat/completions`,
                {
                    model: "llama-3",
                    messages: [{ role: "user", content: prompt }],
                    max_tokens: 100
                },
                { headers: { "Content-Type": "application/json" } }
            );
            return JSON.parse(response.data.choices[0].message.content);
        } 
        
        else {
            throw new Error("Invalid model. Choose 'openai', 'claude', or 'llama'.");
        }

    } catch (error) {
        console.error("API Request Failed:", error.response?.data || error.message);
        throw new Error("Failed to fetch MCQ. Check API logs for details.");
    }
};

app.get("/get-mcq", async (req, res) => {
    try {
        const { subject, classLevel, model } = req.query;

        if (!subject || !classLevel || !model) {
            return res.status(400).json({ error: "Please provide subject, classLevel, and model (openai, claude, llama)" });
        }

        const mcq = await fetchMCQ(model, subject, classLevel);
        res.json(mcq);
    } catch (error) {
        res.status(500).json({ error: "Error fetching MCQ", details: error.message });
    }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
