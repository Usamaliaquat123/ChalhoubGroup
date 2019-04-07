
const app  = require('express')()
const NewsAPI = require('newsapi')
const dotenv = require('dotenv')

dotenv.config();
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)


const port = process.env.PORT || 4848;



app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})