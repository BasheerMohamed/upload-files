import express from 'express';
import 'dotenv/config';  
import cors from 'cors';
import connectDB from './config/db.js';
import router from './routes/Routes.js';

// Express App
const app = express();
const port = process.env.PORT || 8000;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// Listen to the port
app.listen(port, () => {
    console.log(`Server started listening on port`, port)
})