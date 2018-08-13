import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { TogglerService } from '../services/toggler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = true;
  @ViewChild('toggler') toggler: ElementRef;
  @Input('isCollapsed') isCollapsed:false

  constructor(private togglerService:TogglerService) { 
   
  }
 
  public toggle() {
    let button : HTMLButtonElement =this.toggler.nativeElement
    if(!button.classList.contains('collapsed')){
      button.click();
    }
  }
  ngOnInit() {
    this.toggle();
    this.togglerService.toggled$.subscribe(
      ()=>{
        this.toggle();
      }
    )
  }

}
