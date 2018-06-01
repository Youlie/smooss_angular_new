import { Component, OnInit, ViewChild } from '@angular/core';
import { SmoossRestService } from '../smooss-rest.service';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  private paragraphDescriptionEvent : string;
  private titleEvent : string;
  private dateStartEvent;
  private dateEndEvent;
  private timeEvent : string = " 12h12 -- 20h12";
  private authorEvent : string;
  private nbParticipantsEvent : number = 12;
  private resultat;
  private addressEvent;
  private geocoder;

  constructor(private smoossRestService : SmoossRestService) { }

  ngOnInit() { 
    this.geocoder = new google.maps.Geocoder();
    var mapProp = {
      center: new google.maps.LatLng(53.3496, -6.3263),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.smoossRestService.getSingleEvent(4).subscribe( res => {
      this.resultat                   = res;
      this.titleEvent                 = res['name'];
      this.paragraphDescriptionEvent  = res['description'];
      this.authorEvent                = res['admin']['nickName'];
      this.dateStartEvent             = res['start']['epochSecond'];
      this.dateEndEvent               = res['end']['epochSecond'];
      this.addressEvent               = res['localisation'];
      this.codeAddress(this.addressEvent, this.map);
    })
  }

  public codeAddress(address, map) {
    this.geocoder.geocode( {address:address}, function(results,status) {
      if ( status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker( {
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not succ " + status);
      }
    })
  }
  
}