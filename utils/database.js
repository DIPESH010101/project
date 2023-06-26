import mongoose, { connect } from "mongoose";

let connected = false;
let conn;
export default async function connectDB() {
  try {
    if (!connected) {
      conn = await connect(`${process.env.MONGO_URI}`);
      connected = true;
    }
    return conn;
  } catch (error) {
    console.log(error);
  }
}
