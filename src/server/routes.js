import express from 'express';
import { getChatResponse } from './ai-client.js';

const router = express.Router();

router.post('/chat', async (req, res) => {
    try {
        const response = await getChatResponse(req.body.messages);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;