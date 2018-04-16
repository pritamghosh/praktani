import { Image } from "./image.model";

export class Thumbnail {
    constructor(
        public name:string,
        public images: Image[],
        public description: string
    ) { }
}