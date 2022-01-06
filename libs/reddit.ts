const { getImage } = require('random-reddit')

const getRedditImage = async (subreddit: string): Promise<string> =>
{
    let image = 'https://cdn.searchenginejournal.com/wp-content/uploads/2015/11/2015-11-11_10-15-49.jpg'
    try {
        image = await getImage(subreddit)
        console.log(image);
    } catch (error) {
        console.log(error)
    }
    return image;
}

export default getRedditImage;