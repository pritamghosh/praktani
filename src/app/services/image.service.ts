import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import { Image } from '../models/image.model';

@Injectable()
export class ImageService {
    private imagesUpdatedSource = new Subject<any[]>()
    private imageSelectedIndexUpdatedSource = new Subject<number>()
    private showImageViewerSource = new Subject<boolean>()

    imagesUpdated$ : Observable<Image[]> = this.imagesUpdatedSource.asObservable()
    imageSelectedIndexUpdated$ : Observable<number> = this.imageSelectedIndexUpdatedSource.asObservable()
    showImageViewerChanged$ : Observable<boolean> = this.showImageViewerSource.asObservable()

    updateImages(images: Image[]) {
        this.imagesUpdatedSource.next(images)
    }

    updateSelectedImageIndex(newIndex: number) {
        this.imageSelectedIndexUpdatedSource.next(newIndex)
    }

    showImageViewer(show: boolean) {
        this.showImageViewerSource.next(show)
    }
}