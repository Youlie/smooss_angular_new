import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  pictures : string[] = [];

  constructor(private http : HttpClient) {
    // this.http.get('http://localhost:8080/SmoossSpring/picture')
    // .subscribe(res => {
    //   let resultat = res['results'];
    //   for(let picture of resultat){
    //     this.pictures.push(picture.picture);
    //     console.log(picture);
    //   }
    // })
  }

  public addPicture(card : string){
    this.pictures.push(card);
  }

  public deletePicture(id : number){
    this.pictures.splice(id,id);
  }

  public updatePicture(id : number){
  }

  public readPicture(id : number) {
    return this.http.get('http://localhost:8080/SpringSmooss/picture/'+id);
  }

  public readAllPictures(id : number){
    return this.http.get('http://localhost:8080/SpringSmooss/picture/event/'+id);
  }

}
