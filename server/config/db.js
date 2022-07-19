import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`.green.bold)
  } catch (error) {
    console.error(`Server error: ${error.message}`.red.bold)
    process.exit(1)
  }
}

export default connectDB
