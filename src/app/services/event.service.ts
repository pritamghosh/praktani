import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable()
export class EventService {
  public events: Event[] = [];
  constructor() { }

}
