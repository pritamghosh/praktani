export class News {
    public target :string="_blank"
    constructor(
        public id:number,
        public title: string,
        public source: string,
        public freeText?: string,
    ) { }
}