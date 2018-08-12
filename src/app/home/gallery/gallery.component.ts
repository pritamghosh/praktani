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

  private firstThumbnailIndex: number;
  thumbnail1: Thumbnail;
  thumbnail2: Thumbnail;
  thumbnail3: Thumbnail;



  t1 = new Thumbnail('thumb1', [
    new Image('assets/images/gallery/thumb1/bridge.jpg', 'assets/images/gallery/thumb1/bridge.jpg', 'smily 1', ' caption 1', 100, 100),
    new Image('assets/images/gallery/thumb1/coast.jpg', 'assets/images/gallery/thumb1/coast.jpg', 'smily 2', ' caption 2', 100, 100),
    new Image('assets/images/gallery/thumb1/park.jpg', 'assets/images/gallery/thumb1/park.jpg', 'smily 2', ' caption 3', 100, 100),
    new Image('assets/images/gallery/thumb1/benches.jpg', 'assets/images/gallery/thumb1/benches.jpg', 'smily 2', ' caption 4', 100, 100)
  ], 'Description');
  constructor() { }

  ngOnInit() {
    this.thumbnail1 = this.t1;
    this.thumbnails.push(this.t1);
    this.thumbnails.push(
      new Thumbnail('thumb2', [
        new Image('assets/images/gallery/thumb3/coast.jpg', 'assets/images/gallery/thumb2/coast.jpg', 'smily 2', ' caption 2'),
        new Image('assets/images/gallery/thumb3/bridge.jpg', 'assets/images/gallery/thumb2/bridge.jpg', 'smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb3/tunnel.jpg', 'assets/images/gallery/thumb2/tunnel.jpg', 'smily 4', ' caption 4'),
        new Image('assets/images/gallery/thumb3/rocks.jpg', 'assets/images/gallery/thumb2/rocks.jpg', 'smily 3', ' caption 3')
      ], 'Description')
    );
    this.thumbnails.push(
      new Thumbnail('thumb3', [
        new Image('assets/images/gallery/thumb4/park.jpg', 'assets/images/gallery/thumb4/park.jpg', 'smily 3', ' caption 3'),
        new Image('assets/images/gallery/thumb4/benches.jpg', 'assets/images/gallery/thumb4/benches.jpg', 'smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb4/rails.jpg', 'assets/images/gallery/thumb4/rails.jpg', 'smily 4', ' caption 4'),
        new Image('assets/images/gallery/thumb4/coast.jpg', 'assets/images/gallery/thumb4/coast.jpg', 'smily 2', ' caption 2'),
      ], 'Description')
    );
    this.thumbnails.push(
      new Thumbnail('thumb4', [
        new Image('assets/images/gallery/thumb5/tunnel.jpg', 'assets/images/gallery/thumb5/tunnel.jpg', 'smily 3', ' caption 3'),
        new Image('assets/images/gallery/thumb5/rocks.jpg', 'assets/images/gallery/thumb5/rocks.jpg', 'smily 2', ' caption 2'),
        new Image('assets/images/gallery/thumb5/bridge.jpg', 'assets/images/gallery/thumb5/bridge.jpg', 'smily 1', ' caption 1'),
        new Image('assets/images/gallery/thumb5/rails.jpg', 'assets/images/gallery/thumb5/rails.jpg', 'smily 4', ' caption 4')
      ], 'Description')
    );

    this.firstThumbnailIndex = this.thumbnails.length - 1;
    this.updateEvent(true)
  }

  private updateIndex(isFwd: boolean) {
    if (this.thumbnails.length != 0) {
      if (isFwd) {
        if (this.firstThumbnailIndex == this.thumbnails.length - 1) {
          this.firstThumbnailIndex = 0;
        }
        else {
          this.firstThumbnailIndex = this.firstThumbnailIndex + 1;
        }
      }
      else {
        if (this.firstThumbnailIndex == 0) {
          this.firstThumbnailIndex = this.thumbnails.length - 1;
        }
        else {
          this.firstThumbnailIndex = this.firstThumbnailIndex - 1;
        }
      }
    }
  }

  nextSlide(thumbnail:any){
    this.updateEvent(thumbnail)
  }

  private updateEvent(isFwd: boolean) {
    if (this.thumbnails.length != this.firstThumbnailIndex) {
      this.thumbnail1 = this.thumbnails[this.firstThumbnailIndex];
      this.updateIndex(isFwd);
      this.thumbnail2 = this.thumbnails[this.firstThumbnailIndex];
      this.updateIndex(isFwd);
      this.thumbnail3 = this.thumbnails[this.firstThumbnailIndex];
    }
  }

}
