import mongoose from "mongoose";

const mongoURL = "mongodb://127.0.0.1:27017/taskManager";

const dbConnect = async () => {
  const connectedDB = await mongoose.connect(mongoURL);
  connectedDB && console.log("Db connected");
};

export default dbConnect;
