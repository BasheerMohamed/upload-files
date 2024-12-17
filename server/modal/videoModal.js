import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
    timestamp: {type: Boolean, default: true} // Enables automatic timestamping
});

const videoModel = mongoose.models.Video || mongoose.model('Video', videoSchema);

export default videoModel;