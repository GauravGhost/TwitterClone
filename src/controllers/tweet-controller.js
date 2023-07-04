import { StatusCodes } from 'http-status-codes';
import TweetService from "../services/tweet-service.js";
import { successResponse, errorResponse } from "../utils/common/index.js";
const tweetService = new TweetService();

export const createTweet = async(req, res) => {
    try {
       const response = await tweetService.create(req.body);
       successResponse.data = response;
       return res.status(StatusCodes.CREATED).json(successResponse) 
    } catch (error) {
        errorResponse.err = {name: error.name, message: error.message};
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

export const getTweet = async(req, res) => {
    try {
       const response = await tweetService.get(req.params.id);
       successResponse.data = response;
       return res.status(StatusCodes.OK).json(successResponse) 
    } catch (error) {
        errorResponse.err = {name: error.name, message: error.message};
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

const indexExports = {
    createTweet,
    getTweet
}

export default indexExports;