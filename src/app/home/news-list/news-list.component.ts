import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
import { HttpResponse } from 'selenium-webdriver/http';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsList: News[] = [];
  constructor(private httpService: Http) { }
  t
  ngOnInit() {
    this.httpService.get('/assets/files/news-list.json').subscribe(
      (data: Response) => {
        this.newsList = data.json()
      }
    );
  }

}
