import Point from '../models/point.js';
import {
  successResponse,
  validationError,
  errorResponse,
} from '../helpers/api-response.js';

const addPoint = async (req, res) => {
  try {
    const { points, title, socialApp } = req.body;
    const newPoint = new Point({
      points,
      title,
      socialApp,
    });
    const savePoint = await newPoint.save();
    console.log('savePoint', savePoint);
    return successResponse(res, 'Point added successfully', savePoint);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const getPoints = async (req, res) => {
  try {
    const getPoints = await Point.find();
    return successResponse(res, 'Points fetched successfully', getPoints);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

export { addPoint, getPoints };
