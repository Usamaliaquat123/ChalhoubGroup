// import { MomentCustomPipe } from './pipes/moment-custom.pipe';
import { Component } from '@angular/core';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  constructor(private newsApi : NewsService){
    this.getTrendingNews()
    }
  notify(){
    alert('Notification service not available')
  }
  data : any
  trendingNews10: any;


   async getTrendingNews () {
    await this.newsApi.getTrendingNews().subscribe(data => {
      this.data = data
      this.trendingNews10 = this.data.articles.slice(0,10)
      console.log(this.data.articles.slice(0,10))
    })
  }


}
