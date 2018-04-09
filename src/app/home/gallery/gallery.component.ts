import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image.model';
import { Thumbnail } from '../../models/thumbnail.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  thumbnails: Thumbnail[] = [];
  t1 = new Thumbnail('thumb1', [
    new Image('assets/images/gallery/thumb1/bridge.jpg', 'smily 1', ' caption 1',100,100),
    new Image('assets/images/gallery/thumb1/coast.jpg', 'smily 2', ' caption 2',100,100),
    new Image('assets/images/gallery/thumb1/park.jpg', 'smily 2', ' caption 3',100,100),
    new Image('assets/images/gallery/thumb1/benches.jpg', 'smily 2', ' caption 4',100,100)
  ]);
  constructor() { }

  ngOnInit() {

    this.thumbnails.push(this.t1);
    this.thumbnails.push(
      new Thumbnail('thumb2', [
        new Image('assets/images/gallery/thumb2/coast.jpg', 'smily 2', ' caption 2'),
        new Image('assets/images/gallery/thumb2/bridge.jpg', 'smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb2/tunnel.jpg', 'smily 4', ' caption 4'),
        new Image('assets/images/gallery/thumb2/rocks.jpg', 'smily 3', ' caption 3')
      ])
    );
    this.thumbnails.push(
      new Thumbnail('thumb3', [
        new Image('assets/images/gallery/thumb3/park.jpg', 'smily 3', ' caption 3'),
        new Image('assets/images/gallery/thumb3/benches.jpg', 'smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb3/rails.jpg', 'smily 4', ' caption 4'),
        new Image('assets/images/gallery/thumb3/coast.jpg', 'smily 2', ' caption 2'),
      ])
    );
    this.thumbnails.push(
      new Thumbnail('thumb4', [
        new Image('assets/images/gallery/thumb4/tunnel.jpg', 'smily 3', ' caption 3'),
        new Image('assets/images/gallery/thumb4/rocks.jpg', 'smily 2', ' caption 2'),
        new Image('assets/images/gallery/thumb4/bridge.jpg', 'smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb4/rails.jpg', 'smily 4', ' caption 4')
      ])
    );
  }

}
