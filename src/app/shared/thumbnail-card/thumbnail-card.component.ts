import { Component, OnInit, Input } from '@angular/core';
import { Thumbnail } from '../../models/thumbnail.model';

@Component({
  selector: 'app-thumbnail-card',
  templateUrl: './thumbnail-card.component.html',
  styleUrls: ['./thumbnail-card.component.scss']
})
export class ThumbnailCardComponent implements OnInit {
  @Input() thumbnail: Thumbnail
  public thumbImgPath = "assets/images/event/event1.jpg";
  constructor() { }

  ngOnInit() {
  }

}
