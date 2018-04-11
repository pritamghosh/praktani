export class Event {

    isFutureEvent=false;
    constructor(
        public id:number,
        public thumbImgPath: string,
        public bannerImgPath: string,
        public date: Date,
        public title: string,
        public venue: string,
        public venueLink?:string
    ) { }
}