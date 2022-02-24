import express from 'express';
import { addPrize, getPrizes } from '../controllers/prize.js';

const router = express.Router();

router.post('/add', addPrize);
router.get('/', getPrizes);

export default router;
