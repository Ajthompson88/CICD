import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/techquiz';

const options: mongoose.ConnectOptions = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

mongoose.connect(uri, options)
  .then(() => {
    console.log(`✅ Connected to MongoDB at ${uri}`);
  })
  .catch((err) => {
    console.error(`❌ Mongo connection error to ${uri}:`, err);
    process.exit(1);
  });

export default mongoose.connection;
