export class Event {

    isFutureEvent=false;
    constructor(
        public imgPath: string,
        public date: Date,
        public name: string,
        public location: string
    ) { }
}