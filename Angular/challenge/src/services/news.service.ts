import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }


  getTrendingNews = (country) => {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=76153d3f64684d44b4293740dab5cb86`)
  }
  getSpecificCategory = (category,country) => {
    return this.http.get(`https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=76153d3f64684d44b4293740dab5cb86`)
  }
  getSourcesChannels = () => {
    return this.http.get(`https://newsapi.org/v2/sources?apiKey=76153d3f64684d44b4293740dab5cb86`)
  }
}
