import express from 'express';

import connect from './config/database.js';


import {TweetRepository} from './repositories/index.js';
import TweetService from './services/tweet-service.js';

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from root")
});


app.listen(4000, async () => {
    console.log(`Server started at 4000`);
    await connect();
    console.log("Database connected");
    let ser = new TweetService();
    let result = await ser.create({content: "Dne with this #NOSTALGIC"})
    console.log(result)
})
