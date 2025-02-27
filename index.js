import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Import routes using ES module syntax
import memesRoutes from './routes/memes.js';

app.use('/memes', memesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
