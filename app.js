import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import indexRouter from './routes/index.js';
import pokemonRouter from './routes/pokemons.js';
import trainerRouter from './routes/trainer.js';
import bookRouter from './routes/books.js';
import loanRouter from './routes/loan.js'

dotenv.config();
connectDB();

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/pokemons', pokemonRouter);
app.use('/trainers', trainerRouter);
app.use('/books', bookRouter);
app.use('/loan', loanRouter)

app.use(function(req, res, next) {
  next(createError(404));
});

export default app;
