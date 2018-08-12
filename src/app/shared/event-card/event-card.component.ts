import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: Event
  @Input() slideNo: number
  @Input() isLeftHidden = true;
  @Input() isRightHidden = true;
  @Output() nextSlideEvent = new EventEmitter<any>();
  mouseOvered = false;
  constructor(private router: Router) { }

  nextSlide(isFwd: boolean) {
    console.log(window.screen.height);
    console.log(this.slideNo);
    this.nextSlideEvent.emit(isFwd);
  }
  ngOnInit() {
  }

  onEventClick() {
    if (!this.mouseOvered) {
      this.router.navigate(['event/'+this.event.id]);
    }
  }
}
