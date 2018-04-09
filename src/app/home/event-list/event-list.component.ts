import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  event1: Event;
  event2: Event;
  private firstEventIndex :number;
  private isArrowClicked=true;
  constructor() { }

  ngOnInit() {
    {
      this.events.push(new Event('assets/images/smily1.png', new Date(), 'Event 1', 'CGR'));
      this.events.push(new Event('assets/images/smily2.png', new Date(), 'Event 2', 'KOL'));
      this.events.push(new Event('assets/images/smily3.jpg', new Date(), 'Event 3', 'BHR'));
      this.events.push(new Event('assets/images/smily4.jpg', new Date(), 'Event 4', 'BLY'));
    }
    this.firstEventIndex=this.events.length-1;
    this.updateEvent(true)


    setInterval(() => {
      if(!this.isArrowClicked){
        this.updateEvent(true);
      }
      else{
        setInterval(() => {
         this.isArrowClicked=false
        }, 4000);
      }
    }, 4000);
  }
   private updateEvent(isFwd: boolean) {
    if (this.events.length != this.firstEventIndex) {
      this.event1 = this.events[this.firstEventIndex];
      this.updateIndex(isFwd);
      this.event2 = this.events[this.firstEventIndex];
      
    }
  }

  private changeEvent(isFwd:boolean){
    this.updateEvent(isFwd);
    this.isArrowClicked=true;
  }
  private updateIndex(isFwd: boolean) {
    if (this.events.length != 0) {
      if (isFwd) {
        if (this.firstEventIndex == this.events.length - 1) {
          this.firstEventIndex = 0;
        }
        else {
          this.firstEventIndex = this.firstEventIndex + 1;
        }
      }
      else {
        if (this.firstEventIndex == 0) {
          this.firstEventIndex = this.events.length - 1;
        }
        else {
          this.firstEventIndex = this.firstEventIndex - 1;
        }
      }
    }
  }
}
