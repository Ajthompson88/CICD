import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env file (for local development)
dotenv.config();

// Retrieve the full MongoDB connection string from env var
const uri = process.env.MONGO_DB || process.env.MONGO_DB_URI;
if (!uri) {
  throw new Error('❌ MONGO_DB environment variable is not defined');
}

// Connection options (Mongoose 6+ defaults for new URL parser and unified topology)
const options: mongoose.ConnectOptions = {
  // Optional tuning
  maxPoolSize: 10,                // maintain up to 10 connections in the pool
  serverSelectionTimeoutMS: 5000, // give up initial server selection after 5s
  socketTimeoutMS: 45000,         // close sockets after 45s of inactivity
  family: 4,                      // use IPv4, skip trying IPv6 (::1)
};

// Establish connection
mongoose.connect(uri, options)
  .then(() => {
    const host = mongoose.connection.host; // Get the host of the connection
    console.log(`✅ Connected to MongoDB at host: ${host}`);
  })
  .catch((err) => {
    console.error('❌ Mongo connection error:', err);
    process.exit(1);
  });

// Export the Mongoose connection for use in models
export default mongoose.connection;
