import express from "express";

import { TweetController, LikeController } from "../../controllers/index.js";

const router = express.Router();

router.post('/tweets', TweetController.createTweet);
router.post('/likes/toggle', LikeController.toggleLike);

export default router;