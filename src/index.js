import express, { json, urlencoded } from 'express';

import connect from './config/database.js';
import apiRoutes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);


app.listen(4000, async () => {
    console.log(`Server started at 4000`);
    await connect();
    console.log("Database connected");
    // let ser = new TweetService();
    // let result = await ser.create({content: "Dne with this #NOSTALGIC"})
    // console.log(result)
})
