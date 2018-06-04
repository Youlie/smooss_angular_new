import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-pooling-entry',
  templateUrl: './car-pooling-entry.component.html',
  styleUrls: ['./car-pooling-entry.component.css']
})
export class CarPoolingEntryComponent implements OnInit {

  @Input() driver : string;
  @Input() startLocation : string;
  @Input() endLocation : string;
  @Input() startTime : string;
  @Input() endTime : string;
  @Input() nbSeats : string;
  @Input() size : number;



  constructor() { }

  ngOnInit() {
    console.log(this.size);
  }

}