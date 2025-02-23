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
      status: "error",
      message: error.message,
    });
  }
});

// Patch Method

router.patch("/", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    console.log(req.body);
    const updatedData = await updateData(_id, rest);

    res.json({
      status: "success",
      message: "Your data has been updated successfully",
      updatedData,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// Delete Method
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const deletedTask = await deleteData(_id);
  res.json({
    status: "success",
    message: "Data has been deleted",
    deletedTask,
  });
});
export default router;
