import { SafeResourceUrl } from "@angular/platform-browser";

export class Event {
    isFutureEvent=false;
    constructor(
        public id:number,
        public thumbImgPath: string,
        public bannerImgPath: string,
        public startDate: Date,
        public endDate:Date,
        public title: string,
        public venue: string,
        public venueAddress : string,
        public venueLink?:string
    ) {
        
    }
}