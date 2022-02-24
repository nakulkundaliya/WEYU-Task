import Prize from '../models/prize.js';
import {
  successResponse,
  validationError,
  errorResponse,
} from '../helpers/api-response.js';

const addPrize = async (req, res) => {
  try {
    const { name, cost, quantity, asset } = req.body;
    const newPrize = new Prize({
      name,
      cost,
      quantity,
      asset,
    });
    const savePrize = await newPrize.save();
    console.log('savePrize', savePrize);
    return successResponse(res, 'Prize added successfully', savePrize);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const getPrizes = async (req, res) => {
  try {
    const getPrizes = await Prize.find();
    return successResponse(res, 'Prizes fetched successfully', getPrizes);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

export { addPrize, getPrizes };
