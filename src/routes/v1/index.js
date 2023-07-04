import express from "express";

import { TweetController, LikeController, CommentController, AuthController } from "../../controllers/index.js";

const router = express.Router();

router.post('/tweets', TweetController.createTweet);
router.post('/likes/toggle', LikeController.toggleLike);
router.post('/comments', CommentController.createComment);
router.get('/tweets/:id', TweetController.getTweet);
router.post('/signup', AuthController.signup)
export default router;