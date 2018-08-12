import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { Http,Response } from '@angular/http';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-resource',
  templateUrl: './event-resource.component.html',
  styleUrls: ['./event-resource.component.scss']
})
export class EventResourceComponent implements OnInit {
  events: Event[] = [];
  constructor(private httpService: Http,private _eventService:EventService) {
    this.httpService.get('/assets/files/event-list.json').subscribe(
      (data: Response) => {
        this.events = data.json();
        this._eventService.events =  data.json();
      }
    );
   }

  ngOnInit() {
  }

}
