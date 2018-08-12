import { Component, OnInit } from '@angular/core';
import { Thumbnail } from '../../models/thumbnail.model';
import { Image } from '../../models/image.model';
import { Http,Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-resource',
  templateUrl: './gallery-resource.component.html',
  styleUrls: ['./gallery-resource.component.scss']
})
export class GalleryResourceComponent implements OnInit {
  thumbnails: Thumbnail[] = [];

  constructor(private httpService: Http,private router: Router) { 
    this.httpService.get('/assets/files/gallery-resource.json').subscribe(
      (data: Response) => {
        this.thumbnails = data.json();
        if(this.thumbnails==null){
          this.router.navigate(['/']);
        }
      },
      error=>{
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
    
  }

}
