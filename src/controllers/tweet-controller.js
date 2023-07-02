import TweetService from "../services/tweet-service.js";
import { successResponse, errorResponse } from "../utils/common/index.js";
const tweetService = new TweetService();

export const createTweet = async(req, res) => {
    try {
       const response = await tweetService.create(req.body);
       successResponse.data = response;
       return res.status(201).json(successResponse) 
    } catch (error) {
        errorResponse.err = {name: error.name, message: error.message};
        return res.status(500).json(errorResponse)
    }
}

const indexExports = {
    createTweet
}

export default indexExports;