import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  titleEvent : string = "Test 1";
  descriptionEvent : string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus dolores at corrupti nostrum ratione eveniet natus expedita debitis asperiores harum non nulla, amet inventore suscipit esse possimus impedit optio.";
  dayEvent : any = "12";
  monthEvent : any = "Janvier";
  participantEvent : number = 12;

  constructor() { }

  ngOnInit() {
  }

}
