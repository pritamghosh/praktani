import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  onActivate(e) {
    console.log("new")
    window.scrollTo(0, 0)
  }
}
