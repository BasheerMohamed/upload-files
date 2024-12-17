import videoModal from '../modal/videoModal.js'

export const createVideo = async (req, res) => {
    const { imgUrl, videoUrl } = req.body; // Ensure imgUrl is coming from the frontend
  
    try {
      const newVideo = new videoModal({
        imageUrl: imgUrl,  // Ensure imgUrl is assigned here
        videoUrl: videoUrl,
      });
  
      await newVideo.save();
      res.status(200).json({ message: 'Video uploaded successfully' });
    } catch (error) {
      console.error('Error creating video:', error);
      res.status(500).json({ message: 'Error uploading video' });
    }
  };
  