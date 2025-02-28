import mongoose from "mongoose";

// const mongoURL = "mongodb://127.0.0.1:27017/taskManager";

const mongoURL = process.env.MONGO_URL;

const dbConnect = async () => {
  try {
    const connectedDB = await mongoose.connect(mongoURL);
    connectedDB && console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
