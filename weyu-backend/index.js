import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apiRouter from './routes/api.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database Connection
let MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //don't show the log when it is test
    if (process.env.NODE_ENV !== 'test') {
      console.log('Connected to %s', MONGODB_URL);
      console.log('App is running ... \n');
      console.log('Press CTRL + C to stop the process. \n');
    }
  })
  .catch((err) => {
    console.error('App starting error:', err.message);
    process.exit(1);
  });

app.get('/', (req, res) => {
  res.send('The server is running.....');
});

app.use('/api/', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
