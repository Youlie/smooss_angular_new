import { Component, OnInit } from '@angular/core';
import { SmoossRestService } from '../smooss-rest.service';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css']
})
export class EventManagerComponent implements OnInit {

  private listCardsEvent: any[] = [];
  private resultat;

  constructor(private smoossRestService: SmoossRestService) { }

  ngOnInit() {
    this.smoossRestService.getlistEventsByUserId(2).subscribe(res => {
      this.resultat = res;
      for (let element of this.resultat) {
        this.listCardsEvent.push(element);
        console.log(element);
      }
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../event.service';

// @Component({
//   selector: 'app-event-manager',
//   templateUrl: './event-manager.component.html',
//   styleUrls: ['./event-manager.component.css']
// })
// export class EventManagerComponent implements OnInit {

//   constructor(private es : EventService) { }

//   ngOnInit() {

//   }

// }
