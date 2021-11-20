import express, { json } from 'express';
import cors from 'cors';

import connectDB from './config/db.js';

// routes
import books from './routes/api/books.js';

const app = express();
app.use(json());

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

