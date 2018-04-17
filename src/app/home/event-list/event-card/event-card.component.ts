import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: Event

  @Input() isLeftHidden = true;
  @Input() isRightHidden = true;
  @Output() nextSlideEvent = new EventEmitter<number>();
  mouseOvered = false;
  constructor(private router: Router) { }

  nextSlide(index: number) {
    console.log(index);
    this.nextSlideEvent.emit(index);
  }
  ngOnInit() {
  }

  onEventClick() {
    if (!this.mouseOvered) {
      this.router.navigate(['event/1']);
    }
  }
}
