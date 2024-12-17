import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database Connected...'));
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/cloudinary`);
}

export default connectDB;