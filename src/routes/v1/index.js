import express from "express";

import { TweetController } from "../../controllers/index.js";

const router = express.Router();

router.post('/tweets', TweetController.createTweet);


export default router;