import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TogglerService {
  private togglerSource = new Subject<any>()
  toggled$: Observable<any> = this.togglerSource.asObservable()
  constructor() { }
  toggle(any: any) {
    this.togglerSource.next(any)
  }
}
