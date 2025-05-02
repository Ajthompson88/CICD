import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO_DB;
if (!uri)
    throw new Error('MONGO_DB environment variable is not defined');
mongoose.connect(uri, { /* options */})
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
    console.error('connection error:', err);
    process.exit(1);
});
const connectionString = process.env.MONGO_DB || 'mongodb://localhost:27017/techquiz';
if (!connectionString) {
    throw new Error('MONGO_DB environment variable is not defined');
}
mongoose.connect(connectionString);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});
export default db;
