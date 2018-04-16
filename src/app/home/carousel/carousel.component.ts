import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides: {
    src: string,
    captionHeading: string
    captionBody: string
  }[]=[];
  constructor() { }

  ngOnInit() {

    this.slides.push({
      'src': 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
      'captionHeading': '',
      'captionBody': 'test 1'
    });
    this.slides.push({
      'src': 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
      'captionHeading': '',
      'captionBody': 'test 2'
    });
    this.slides.push({
      'src': 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
      'captionHeading': '',
      'captionBody': 'test 3'
    });
    this.slides.push({
      'src': 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg',
      'captionHeading': '',
      'captionBody': 'test 4'
    });
  }

}
