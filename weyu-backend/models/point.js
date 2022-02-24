import mongoose from 'mongoose';

const pointSchema = new mongoose.Schema(
  {
    points: Number,
    title: String,
    socialApp: String,
  },
  {
    timestamps: true,
  }
);

const Point = mongoose.model('Point', pointSchema);

export default Point;
