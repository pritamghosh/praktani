import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image.model';
import { Thumbnail } from '../../models/thumbnail.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  thumbnails: Thumbnail[] = [];
  thumbnail1 = new Thumbnail('thumb1', [
    new Image('assets/images/event/event1.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 1', ' caption 1',100,100),
    new Image('assets/images/gallery/thumb1/coast.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 2', ' caption 2',100,100),
    new Image('assets/images/gallery/thumb1/park.jpg', 'assets/images/gallery/thumb2/coast.jpg','smily 2', ' caption 3',100,100),
    new Image('assets/images/gallery/thumb1/benches.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 2', ' caption 4',100,100)
  ],'Description');

  t1 = new Thumbnail('thumb1', [
    new Image('assets/images/gallery/thumb1/bridge.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 1', ' caption 1',100,100),
    new Image('assets/images/gallery/thumb1/coast.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 2', ' caption 2',100,100),
    new Image('assets/images/gallery/thumb1/park.jpg', 'assets/images/gallery/thumb2/coast.jpg','smily 2', ' caption 3',100,100),
    new Image('assets/images/gallery/thumb1/benches.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 2', ' caption 4',100,100)
  ],'Description');
  constructor() { }

  ngOnInit() {

    this.thumbnails.push(this.t1);
    this.thumbnails.push(
      new Thumbnail('thumb2', [
        new Image('assets/images/gallery/thumb2/coast.jpg', 'assets/images/gallery/thumb2/coast.jpg','smily 2', ' caption 2'),
        new Image('assets/images/gallery/thumb2/bridge.jpg', 'assets/images/gallery/thumb2/coast.jpg','smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb2/tunnel.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 4', ' caption 4'),
        new Image('assets/images/gallery/thumb2/rocks.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 3', ' caption 3')
      ],'Description')
    );
    this.thumbnails.push(
      new Thumbnail('thumb3', [
        new Image('assets/images/gallery/thumb3/park.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 3', ' caption 3'),
        new Image('assets/images/gallery/thumb3/benches.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb3/rails.jpg', 'assets/images/gallery/thumb2/coast.jpg','smily 4', ' caption 4'),
        new Image('assets/images/gallery/thumb3/coast.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 2', ' caption 2'),
      ],'Description')
    );
    this.thumbnails.push(
      new Thumbnail('thumb4', [
        new Image('assets/images/gallery/thumb4/tunnel.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 3', ' caption 3'),
        new Image('assets/images/gallery/thumb4/rocks.jpg', 'assets/images/gallery/thumb2/coast.jpg','smily 2', ' caption 2'),
        new Image('assets/images/gallery/thumb4/bridge.jpg','assets/images/gallery/thumb2/coast.jpg', 'smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb4/rails.jpg', 'assets/images/gallery/thumb2/coast.jpg','smily 4', ' caption 4')
      ],'Description')
    );
  }

}
