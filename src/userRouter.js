import express from "express";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const router = express.Router();

// Lets create the db  in the database\

const userSchema = new mongoose.Schema({}, { strict: false });
const tableName = mongoose.model("list", userSchema);

// Using the CRUD methods

// GET Method
router.get("/", async (req, res) => {
  const savedData = await tableName.find();
  res.json({
    message: "Get method implemented",
    savedData,
  });
});

// POST Mrthod
router.post("/", async (req, res) => {
  const insertedData = await tableName(req.body).save();
  console.log(req.body);
  res.json({
    message: "Post method implemented",
    insertedData,
  });
});

// Patch Method

router.patch("/", async (req, res) => {
  const { _id, ...rest } = req.body;
  const updatedData = await tableName.findByIdAndUpdate(_id, rest, {
    new: true,
  });
  res.json({
    message: "Patch method implemented",
    updatedData,
  });
});

// Delete Method
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const deletedTask = await tableName.findByIdAndDelete(_id);
  res.json({
    message: "Delete Method implemented",
    deletedTask,
  });
});
export default router;
