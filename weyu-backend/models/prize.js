import mongoose from 'mongoose';

const prizeSchema = new mongoose.Schema(
  {
    name: String,
    cost: Number,
    quantity: Number,
    asset: String,
  },
  {
    timestamps: true,
  }
);

const Prize = mongoose.model('Prize', prizeSchema);

export default Prize;
