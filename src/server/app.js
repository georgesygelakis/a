import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../..', 'dist');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Serve static files from dist
app.use(express.static(distPath));

// Serve index.html for all routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

export default app;