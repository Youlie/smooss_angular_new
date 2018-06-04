import { Component, OnInit } from '@angular/core';
import { SmoossRestService } from '../smooss-rest.service';

@Component({
  selector: 'app-car-pooling',
  templateUrl: './car-pooling.component.html',
  styleUrls: ['./car-pooling.component.css']
})
export class CarPoolingComponent implements OnInit {

  constructor(private cs : SmoossRestService) { }

  results;

  ngOnInit() {
    this.cs.getCarPoolings(2).subscribe( res => {
      this.results = [];
      this.results = res;
      for(let element of this.results){
        console.log(element.driver.firstName)
      }
      console.log(this.results);
    })
  }

}
