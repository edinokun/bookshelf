import { Component, Input } from '@angular/core';
import { News } from 'src/domain/news';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css']
})
export class NewsElementComponent {
  @Input() news?: News;
}
