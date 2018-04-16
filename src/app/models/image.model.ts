export class Image {
public active=false;
public viewerImageLoaded = false;
public transition='enterFromLeft';
    constructor(
        public imgPath: string,
        public thumbImgPath: string,
        public name: string,
        public despription: string,
        public height?: number,
        public width?: number,
        public freeText?: string
    ) { }
}