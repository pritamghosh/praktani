import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

@Injectable()
export class FileService {

  constructor(private httpService: Http) { }
  getDataFromrResource():any{
    let  json: any;
  this.httpService.get('/assets/files/news-list.json').subscribe(
    (data:Response)=>{
      json= data.json()
     }
  );
  console.log(json);
  return json;
  
}

}
