import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { EventService } from '../../services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  eventUrl: SafeResourceUrl;
  id: number;
  constructor(private _sanitizer: DomSanitizer,
    private datePipe: DatePipe,
    private _eventService: EventService,
    private router: Router,
    private httpService: Http,
    private route: ActivatedRoute
  ) {
    console.log("1");
    
    this.route.params.subscribe(params => {
      this.id = params['id']
      if (this._eventService.events.length==0) {
        this.httpService.get('/assets/files/event-list.json').subscribe(
          (data: Response) => {
            this._eventService.events = data.json();
            this.fetchEvent();
          }
        );
      } else {
        this.fetchEvent();
      }
    });
    console.log( this.id );
    
    

  }
  fetchEvent() {
    if (this._eventService.events[this.id] != null && this._eventService.events[this.id-1].id == this.id) {
      this.event = this._eventService.events[this.id];
      this.eventUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.event.venueLink);
    }
    else {
      let isFound = false;console.log( this._eventService)
      this._eventService.events.forEach(event => {
        if (event.id == this.id) {
          this.event = event;
          this.eventUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.event.venueLink);
          isFound = true;console.log(''+event.id+isFound)
        }
      })
      if (isFound == false) {
          this.router.navigate(['/event']);
      }
    }
    
  }

  ngOnInit() {
  }

  addToCalender() {
    let url = 'https://calendar.google.com/calendar/r/eventedit';
    url = url + '?text=' + this.event.title;
    url = url + '&dates=' + this.datePipe.transform(this.event.startDate, 'yyyyMMddThhmmss') + '/' + this.datePipe.transform(this.event.endDate, 'yyyyMMddThhmmss');
    //url =url+'&details=';
    url = url + '&location=' + this.event.venueAddress;
    window.open(url);
  }

}
