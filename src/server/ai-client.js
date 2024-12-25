import OpenAI from 'openai';
import { config } from './config.js';

export const client = new OpenAI({
    baseURL: config.baseURL,
    apiKey: config.apiKey,
});

export async function getChatResponse(messages) {
    const completion = await client.chat.completions.create({
        temperature: 0.6,
        max_tokens: 512,
        top_p: 0.9,
        top_k: 50,
        model: config.model,
        messages: [
            {
                role: "system",
                content: "You are a gift-finding assistant. Ask up to 7 brief questions about the gift recipient. Each question should be based on previous answers. After gathering information, suggest one gift and provide its Amazon link. Rules: No multiple choice questions. Ask only one question at a time. Keep questions and responses to 1-2 sentences maximum."
            },
            ...messages
        ]
    });
    
    return completion.choices[0].message;
}