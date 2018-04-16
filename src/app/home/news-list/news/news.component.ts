import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() news : News
  constructor() { }

  ngOnInit() {
  }

}
