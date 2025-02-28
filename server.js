import express from "express";
import cors from "cors";
import userRouter from "./src/userRouter.js";

import dbConnect from "./src/dbConnect.js";
dbConnect();
const app = express();
const PORT = 8000;

// Using static serving method
import path from "path";
const __dirname = path.resolve();

// Serve the static files using middleware
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});

// Using the middleware to refer to the userRouter.js
app.use(cors());

app.use(express.json());

app.use("/api/v1/users", userRouter);
