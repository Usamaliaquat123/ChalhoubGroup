
const app  = require('express')()
const NewsAPI = require('newsapi')

const newsapi = new NewsAPI(process.env.NEWS_API_KEY)

newsapi.v2.topHeadlines({
    
})
const port = process.env.PORT  || 5000



app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})