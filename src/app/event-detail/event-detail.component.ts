import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  public paragraphDescriptionEvent : string = "Hey guys! I feel SO sorry for those of you who have to abbreviate tweets because you only have 140 characters. Soooooooo lame! Anyway, what's everyone doing today? I'm just type-type-typing away! SO many characters! Talk to you soon. #blessed #280characters #abcdefg";
  public titleEvent : string = "Title de l'évènement";
  public dateEvent : string = "12/06/2017 -- 12/06/2017";
  public timeEvent : string = " 12h12 -- 20h12";
  public authorEvent : string = "Twikey";
  public nbParticipantsEvent : number = 12;

  constructor() { }

  ngOnInit() { }
}