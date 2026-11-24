import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri || mongoUri === 'your_mongodb_connection_string') {
      console.warn('⚠️  [MongoDB] MONGO_URI is not configured in .env. Please add your MongoDB Atlas connection string.');
      return;
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ [MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ [MongoDB] Connection error: ${error.message}`);
  }
};

export default connectDB;
