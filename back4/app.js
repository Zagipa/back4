const express = require('express');
const app = express();
const { TwitterApi } = require('twitter-api-v2');
app.set('view engine', 'ejs');

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to render the tweet.ejs page
app.get('/', (req, res) => {
    res.render('tweet');
});

const client = new TwitterApi({
    appKey: 'QVTJEXxLwc07tDIlfEiCBTh8E',
    appSecret: 'UaIQXte8Ifv6TnZ9AUFRfF0f7aLwDfcQhcGxo7VY9uKOIUjCMe',
    accessToken: '1762528184845979648-oRCglnxIETh3qZtPkuwKfQUyuEsxAs',
    accessSecret: 'dXMOfdliztyzxz4mJZ79tbfEIjxSyKsuIrpxUCG4B2KIx',
});

app.post('/postTweet', async (req, res) => {
    const tweetContent = req.body.tweetContent + " #YourHashtag"; 

    try {
        await client.v2.tweet(tweetContent);
        res.send("Tweet posted successfully!");
    } catch (error) {
        console.error("Failed to post tweet:", error);
        res.send("Failed to post tweet.");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
