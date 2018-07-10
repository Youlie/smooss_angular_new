import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PictureService } from './picture.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-picture-module',
  templateUrl: './picture-module.component.html',
  styleUrls: ['./picture-module.component.css']
})
export class PictureModuleComponent implements OnInit {
  pictures: any[] = [];
  resultat;
  images: any[];
  sourceImg: any[] = [];

  constructor(private ps : PictureService, private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.ps.readAllPictures(2).subscribe(res => {
      this.resultat = res;
      console.log(this.resultat);
      for(let element of this.resultat){
          this.pictures.push(element);
          this.sourceImg.push(element.pictureBase64);
          console.log(this.sourceImg);
          console.log(element.pictureBase64);
      }
      //this.pictures.push(res);
      //this.sourceImg = res.pictureBase64;
      //this.sourceImg = this.getImage();
    })

    // this.images = [];
    // this.images.push({source:'assets/data/images/test/Flavien.jpg', alt:'Description for Image 1', title:'Title 1'});
    // this.images.push({source:'assets/data/images/test/Flavien.jpg', alt:'Description for Image 2', title:'Title 2'});
    // this.images.push({source:'assets/data/images/test/Flavien.jpg', alt:'Description for Image 3', title:'Title 3'});

  }

  getImage(){
    //return this.domSanitizer.bypassSecurityTrustResourceUrl(this.sourceImg);
  }


}