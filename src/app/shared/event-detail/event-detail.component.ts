import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event:Event;
  constructor(sanitizer:DomSanitizer) {
    this.event = new Event(1,'assets/images/event/event1.jpg','assets/images/event/eventd1.jpg', new Date(2018, 3, 1), 'G-Shock Bangalore Open Air 2018', 'Rabindra BHavan: Chandernagore','https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAw-bWP-Q-DkRqq5Wwh7DYHs&key=AIzaSyCpGHgbGFdfwB9Gx8YpUBOrMNVMAygAvWw');
    this.event.url = sanitizer.bypassSecurityTrustResourceUrl(this.event.venueLink);   
    console.log(this.event.url);
    
   }

  ngOnInit() {
  }

}
