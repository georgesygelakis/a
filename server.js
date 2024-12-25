import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from dist
app.use(express.static('dist'));

const client = new OpenAI({
    baseURL: 'https://api.studio.nebius.ai/v1/',
    apiKey: process.env.NEBIUS_API_KEY,
});

app.post('/api/chat', async (req, res) => {
    try {
        const completion = await client.chat.completions.create({
            temperature: 0.6,
            max_tokens: 512,
            top_p: 0.9,
            top_k: 50,
            model: "meta-llama/Meta-Llama-3.1-70B-Instruct-fast",
            messages: [
                {
                    role: "system",
                    content: "You are a gift-finding assistant. Ask up to 7 brief questions about the gift recipient. Each question should be based on previous answers. After gathering information, suggest one gift and provide its Amazon link. Rules: No multiple choice questions. Ask only one question at a time. Keep questions and responses to 1-2 sentences maximum."
                },
                ...req.body.messages
            ]
        });
        
        res.json(completion.choices[0].message);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Handle all other routes for SPA
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});