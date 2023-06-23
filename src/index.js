const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repositories/tweet-repository');
const Comment = require('./models/comment');
const app = express();


app.get('/', (req, res) => {
    return res.send("Hello from root")
});


app.listen(4000, async () => {
    console.log(`Server started at 4000`);
    await connect();
    console.log("Database connected");
})