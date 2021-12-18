const randomPuppy = require('random-puppy');

const getRedditImage = (subreddit: string): string =>
{
    return randomPuppy(subreddit)
}

export default getRedditImage;