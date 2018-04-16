import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsList:News[]=[];
  constructor() { }

  ngOnInit() {
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','/assets/images/event/event1.jpg'));
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','/assets/images/event/event1.jpg'));
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','/assets/images/event/event1.jpg'));
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','/assets/images/event/event1.jpg'));
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','assets/images/event/event1.jpg'));
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','assets/images/event/event1.jpg'));
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','assets/images/event/event1.jpg'));
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','assets/images/event/event1.jpg'));
    this.newsList.push(new News(1,'Picnic  on February 18, 2018','assets/images/event/event1.jpg'));
  }

}
