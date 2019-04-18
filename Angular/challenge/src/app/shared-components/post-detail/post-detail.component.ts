import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/services/news.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private newsApi : NewsService,public dialog: MatDialog) {this.getSources()}
  articles : any;
  category : any;
  source : any;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
        this.category = params.get('cat')
       this.newsApi.getSpecificCategory(params.get('cat'),'us').subscribe(news => {
          this.articles = news
          this.articles = this.articles.articles.slice(0,10)
      })
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
