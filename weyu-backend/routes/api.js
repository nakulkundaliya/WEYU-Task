import express from 'express';
import pointRouter from './point.js';
import prizeRouter from './prize.js';

const app = express();

app.use('/points/', pointRouter);
app.use('/prize/', prizeRouter);

export default app;
