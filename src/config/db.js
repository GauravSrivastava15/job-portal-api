import mongoose from "mongoose";

const connectionURL = process.env.MONGODB_URI

export const connectToDb = async () => {
  try {
    await mongoose.connect(connectionURL);
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
}; 
