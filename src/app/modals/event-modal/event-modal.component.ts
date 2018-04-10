import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {
  event:Event=new Event('assets/images/smily1.png', new Date(), 'Event 1', 'CGR');
  constructor(private modalRef: BsModalRef) {
    console.log(this.event);
   }

  ngOnInit() {
  }

}
