import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

import movieRoutes from './routes/movies.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = 'mongodb://ufoatmeal:K7F4cl4fqKs9Klum@cluster0-shard-00-00.7jxsn.mongodb.net:27017,cluster0-shard-00-01.7jxsn.mongodb.net:27017,cluster0-shard-00-02.7jxsn.mongodb.net:27017/movies-TylerLeCluse-2394?ssl=true&replicaSet=atlas-nul4wi-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));