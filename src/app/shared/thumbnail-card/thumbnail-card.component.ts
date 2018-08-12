import { Component, OnInit, Input } from '@angular/core';
import { Thumbnail } from '../../models/thumbnail.model';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-thumbnail-card',
  templateUrl: './thumbnail-card.component.html',
  styleUrls: ['./thumbnail-card.component.scss']
})
export class ThumbnailCardComponent implements OnInit {
  @Input() thumbnail: Thumbnail
  public thumbImgPath: string;
  isMouseEntered = false;
  private thumbImageIndex = 0;
  constructor(private imageService : ImageService) {

  }

  onClick(){
    this.imageService.updateImages( this.thumbnail.images);
    this.imageService.updateSelectedImageIndex(this.thumbImageIndex);
    this.imageService.showImageViewer(true);
  }
  ngOnInit() {
    this.thumbImgPath = this.thumbnail.images[this.thumbImageIndex].thumbImgPath;

    setInterval(() => {
      if (!this.isMouseEntered) {
        this.updatethumbImg();
      }
      
    }, 3000);
  }

  private updatethumbImg() {
    let images = this.thumbnail.images;
    if (this.thumbImageIndex == images.length - 1) {
      this.thumbImageIndex == 0;
    }
    else {
      this.thumbImageIndex++
    }
    this.thumbImgPath = this.thumbnail.images[this.thumbImageIndex].thumbImgPath;
  }

}
