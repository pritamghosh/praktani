import { Image } from "./image.model";

export class Thumbnail {
    constructor(
        public title:string,
        public images: Image[],
        public description: string
    ) { }
}