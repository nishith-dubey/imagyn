import mongoose from "mongoose";

async function connectDB () {
  const mongoConnection = await mongoose.connect(`${process.env.MONGO_URI}`)
  console.log('mongodb', mongoConnection.ConnectionStates.connecting)
} 

export default connectDB