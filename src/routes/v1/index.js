import express from "express";

import { TweetController, LikeController, CommentController, AuthController } from "../../controllers/index.js";
import {authenticate} from '../../middlewares/authenticate.js'
const router = express.Router();

router.post('/tweets', authenticate, TweetController.createTweet);
router.post('/likes/toggle', LikeController.toggleLike);
router.post('/comments', CommentController.createComment);
router.get('/tweets/:id', TweetController.getTweet);
router.post('/signup', AuthController.signup)
router.post('/login', AuthController.login)
export default router;