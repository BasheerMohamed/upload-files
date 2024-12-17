import express from 'express';
import { generateSignature } from '../controllers/sign-upload.js';
import { createVideo } from '../controllers/video.js';

const router = express.Router();

router.post('/videos', createVideo);
router.post('/sign-upload', generateSignature);

export default router;