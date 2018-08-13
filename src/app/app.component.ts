import { Component } from '@angular/core';
import { TogglerService } from './services/toggler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private togglerService:TogglerService){

  }
  onActivate() {
    this.togglerService.toggle(null);
    window.scrollTo(0, 0)
  }
}
