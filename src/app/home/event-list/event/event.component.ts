import { Component, OnInit,Input } from '@angular/core';
import { Event } from '../../../models/event.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EventModalComponent } from '../../../modals/event-modal/event-modal.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event : Event;
  constructor(private modalService :BsModalService) { }
  openEvent(): void {
    const initialState  = {
      event: this.event,
      class: 'modal-lg'
    };
    this.modalService.show(EventModalComponent,{initialState });
  }
  ngOnInit() {
  }

}
