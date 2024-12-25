import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});