import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  @Input() titleEvent : string;
  @Input() descriptionEvent : string;
  dayEvent : any = "12";
  monthEvent : any = "Janvier";
  participantEvent : number = 12;

  constructor( ) { }

  ngOnInit() {
  }

}
