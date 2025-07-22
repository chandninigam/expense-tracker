// eslint-disable-next-line @typescript-eslint/no-require-imports
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
// let mongooseClient;

export default async function connectMongoDb() {
  const client = await mongoose.connect(MONGODB_URI, {});
  // mongooseClient = client;
  return client;
}
