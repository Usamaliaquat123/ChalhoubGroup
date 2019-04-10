import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }


  getTrendingNews = () => {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=76153d3f64684d44b4293740dab5cb86')
  }
}
