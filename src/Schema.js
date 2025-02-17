import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },

    hr: {
      type: Number,
      max: 100,
      min: 1,
      required: true,
    },

    type: {
      type: String,
      default: "entry",
      enum: ["entry", "bad"],
    },
  },
  { timestamps: true }
);
const tableName = mongoose.model("list", userSchema);

// Implementing crud methods
export const getData = () => {
  return tableName.find();
};

export const insertData = (taskObj) => {
  return tableName(taskObj).save();
};

export const updateData = (_id, rest) => {
  return tableName.findByIdAndUpdate(_id, rest, {
    new: true,
  });
};

export const deleteData = (_id) => {
  return tableName.findByIdAndDelete(_id);
};
