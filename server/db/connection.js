import dns from "node:dns/promises";
import "../utils/loadEnvironment.js";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1"]);

let connectionString = process.env.MONGODB_URI;

if (!connectionString) {
  console.error("Error: MONGODB_URI environment variable is not set");
  process.exit(1);
}


connectionString = connectionString.replace(/\/[^/?]+(\?|$)/, "/$1");

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      dbName: "handloom",
    });
    console.log("MongoDB is connected with Mongoose");
    return mongoose.connection;
  } catch (err) {
    console.error(`MongoDB connection failed: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;