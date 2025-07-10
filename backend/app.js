import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 5000;
                                                                                               
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/api/generate", async (req, res) => {
    const { tech } = req.body;

    const prompt = `You are a creative and witty slogan generator. Your job is to come up with one short, fun, and memorable slogan or phrase based on the given programming language or framework.

        The slogan should be:
        - clever or humorous
        - not too generic or boring
        - unique and non-repetitive
        - directly related to the input technology
        - written without mentioning the name of the technology itself
        - not prefixed with the technology name, colon, or quotes
        (❌ no "React: ..." or "Vue: ..." or "\\"...\\"")

        Examples:

        Input: React  
        Output: Write once, use everywhere.

        Input: Python  
        Output: Indent your way to glory.

        Input: Rust  
        Output: Borrow safety, own performance.

        If the input is not a real or recognizable programming language or framework, or you’re unsure, always respond with:
        "Are you sure you provided a valid programming language or framework?"

        Now generate a slogan for:  "${tech}".`;

    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        res.json({ slogan: result.text });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "LLM generation fxailed" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
