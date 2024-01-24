import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit {

  newsItems: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getLatestNews();
  }

  getLatestNews(): void {
    this.newsService.getLatestNews().subscribe((data) => {
      this.newsItems = data;
    });
  }

}
