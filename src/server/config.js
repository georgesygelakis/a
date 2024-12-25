import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    apiKey: process.env.NEBIUS_API_KEY,
    baseURL: 'https://api.studio.nebius.ai/v1/',
    model: 'meta-llama/Meta-Llama-3.1-70B-Instruct-fast'
};