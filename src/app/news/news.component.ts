import { Component } from '@angular/core';
import { NEWS } from 'src/assets/mock-news';
import { News } from 'src/domain/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news = NEWS;
}
