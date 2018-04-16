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
  private firstEventIndex: number;
  private isArrowClicked = true;
  private isMouseEntered = false;
  constructor() { }

  ngOnInit() {
    {
      this.events.push(new Event(1,'assets/images/event/event1.jpg','assets/images/event/eventd1.jpg', new Date(2018, 3, 1), 'Event 1', 'Manpho Convention Centre: Bengaluru'));
      this.events.push(new Event(2,'assets/images/event/event2.jpg','assets/images/event/eventd2.jpg', new Date(2018, 4, 13), 'Event 2', 'Rabindra Bhavan : Chandernagore'));
      this.events.push(new Event(3,'assets/images/event/event3.jpg','assets/images/event/eventd3.jpg', new Date(2018, 6, 19), 'Event 3', 'Nazrulmancha : Kolkata'));
      this.events.push(new Event(4,'assets/images/event/event4.jpg','assets/images/event/eventd4.jpg', new Date(2018, 12, 26), 'Event 4', 'Chandernagore Banga Vidyalaya: Chandernagore'));
    }
    this.firstEventIndex = this.events.length - 1;
    this.updateEvent(true)


    // setInterval(() => {
    //   if (!this.isArrowClicked && !this.isMouseEntered) {
    //     this.updateEvent(true);
    //   }
    //   else {
    //     setInterval(() => {
    //       this.isArrowClicked = false
    //     }, 4000);
    //   }
    // }, 4000);
  }

  nextSlide(event:any){
    console.log(event);
  }

  private updateEvent(isFwd: boolean) {
    if (this.events.length != this.firstEventIndex) {
      this.event1 = this.events[this.firstEventIndex];
      this.updateIndex(isFwd);
      this.event2 = this.events[this.firstEventIndex];

    }
  }


  private changeEvent(isFwd: boolean) {
    this.updateEvent(isFwd);
    this.isArrowClicked = true;
  }
  onMouseEnter() {
    this.isMouseEntered = true
  }
  onMouseLeave() {
    this.isMouseEntered = false
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
