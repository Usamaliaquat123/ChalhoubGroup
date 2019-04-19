import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-trending-news',
  templateUrl: './trending-news.component.html',
  styleUrls: ['./trending-news.component.css']
})
export class TrendingNewsComponent   {
  constructor(private newsApi : NewsService,public dialog: MatDialog) {
    this.getTrendingNews()
    this.getSources()

    for(let i=0;i<this.totalLength;i++){
      this.trendingNews.push(this.trendingNews10[i]);
    }
   }
  data : any;
  source : any;
  trendingNews10: any;
  trendingNews: any;
  totalLength : any




  
   async getTrendingNews () {
    await this.newsApi.getTrendingNews('us').subscribe(data => {
      this.data = data
      this.trendingNews10 = this.data.articles
      this.totalLength = this.data.articles.length
      console.log(this.data.articles.length)
    })
  }
  detailpost(post){
    this.dialog.open(ModalComponent,{
      data : {
        description : post.content,
        title : post.title,
        image : post.urlToImage,
        author : post.author,
        date : post.publishedAt,
        source : post.source.name
      }
    })
  }

  async getSources(){
    await this.newsApi.getSourcesChannels().subscribe(source => {
      this.source = source
      this.source = this.source.sources
     })
  }
}
