import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  constructor() { }

  ngOnInit() {
    {
      this.events.push(new Event('assets/images/smily1.png', new Date(), 'Event 1', 'CGR'));
      this.events.push(new Event('assets/images/smily2.png', new Date(), 'Event 2', 'KOL'));
      this.events.push(new Event('assets/images/smily3.jpg', new Date(), 'Event 3', 'BHR'));
      this.events.push(new Event('assets/images/smily4.jpg', new Date(), 'Event 4', 'BLY'));
    }
  }

}
