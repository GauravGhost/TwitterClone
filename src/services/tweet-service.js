const TweetRepository = require('../repositories')

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#\w+/g);
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        // TODO create hashtags and add here.
        return tweet;
    }
}


module.exports = TweetService;