import express from "express";
import cors from "cors";
import userRouter from "./src/userRouter.js";

import dbConnect from "./src/dbConnect.js";
dbConnect();
const app = express();
const PORT = 8000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});

// Using the middleware to refer to the userRouter.js
app.use(cors());

app.use(express.json());

app.use("/api/v1/users", userRouter);

// Using cors as the middleware
