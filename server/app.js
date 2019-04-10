
const express  = require('express')
const NewsAPI = require('newsapi')
const dotenv = require('dotenv')



const app = express()
dotenv.config();
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)

 newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
      }).then(response => {
        console.log(response);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
      });



const newsCategoryRouter = express.Router()

newsCategoryRouter.route('/categories')
    .get((req,res) => {
        const responseJSON = {hello : "This is my API"}
        res.json(responseJSON)
    })

app.use('/api',newsCategoryRouter)
const port = process.env.PORT || 4848;

app.get('/',(req,res) => {
    res.send('Welcome to API')
})


app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})