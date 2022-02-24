import express from 'express';
import { addPoint, getPoints } from '../controllers/point.js';

const router = express.Router();

router.post('/add', addPoint);
router.get('/', getPoints);

export default router;
