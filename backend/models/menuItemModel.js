import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    title: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema)

export default MenuItem