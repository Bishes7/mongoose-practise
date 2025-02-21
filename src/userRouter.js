import express from "express";

import { deleteData, getData, insertData, updateData } from "./Schema.js";

const router = express.Router();

// Lets create the db  in the database\

// Using the CRUD methods

// GET Method
router.get("/", async (req, res) => {
  const savedData = await getData();
  res.json({
    status: "success",
    message: "Get method implemented",
    savedData,
  });
});

// POST Mrthod
router.post("/", async (req, res) => {
  try {
    const insertedData = await insertData(req.body);
    console.log(req.body);
    res.json({
      status: "success",
      message: "Post method implemented",
      insertedData,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "Error",
    });
  }
});

// Patch Method

router.patch("/", async (req, res) => {
  const { _id, ...rest } = req.body;
  const updatedData = await updateData(_id, rest);
  res.json({
    message: "Patch method implemented",
    updatedData,
  });
});

// Delete Method
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const deletedTask = await deleteData(_id);
  res.json({
    message: "Delete Method implemented",
    deletedTask,
  });
});
export default router;
