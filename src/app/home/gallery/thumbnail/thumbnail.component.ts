import {
  Component, ViewChild, ElementRef, HostListener, ViewChildren,
  ChangeDetectorRef, QueryList, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter, OnDestroy
} from "@angular/core"
import { Http, Response } from "@angular/http"

import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/map'
import { ImageService } from "../../../services/image.service";
import { Thumbnail } from "../../../models/thumbnail.model";
import { Image } from "../../../models/image.model";

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit, OnChanges {
  @Input() thumbnail: Thumbnail;

  currentImage: Image;



  constructor(public ImageService: ImageService) {

    //this.currentImage = this.thumbnail.images.pop();
  }

  public ngOnInit() {
    let index = 0;
    this.currentImage = this.thumbnail.images.pop();
    setInterval(() => {

      this.currentImage = this.thumbnail.images[index];
      if (index === this.thumbnail.images.length-1) {
        index = 0;
      }
      else {
        index = index + 1;
      }
    }, 3000)

  }

  public ngOnChanges(changes: SimpleChanges) {


  }



  public openImageViewer(img: any) {
    this.ImageService.updateImages(this.thumbnail.images)
    this.ImageService.updateSelectedImageIndex(this.thumbnail.images.indexOf(img))
    this.ImageService.showImageViewer(true)
  }


}
