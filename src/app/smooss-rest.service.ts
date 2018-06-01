import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmoossRestService {
  constructor(private http: HttpClient) { }

  private SERVER_URL = 'http://localhost:8080/SmoossSpring/';
  private SERVER_URL2 = 'http://localhost:8080/websmoossspring'

  // getProfile(){
  //   return this.http.get(this.SERVER_URL + '/profile');
  // }

  getProfile(id: number) {
    return this.http.get(this.SERVER_URL + "profile/user/" + id);
  }

  // event-editor.component = create >>
  getCreateEvent() {
    return this.http.get(this.SERVER_URL + "event/create/");
  }

  // event-editor.component = edit >>
  getEditEvent(id: number) {
    return this.http.get(this.SERVER_URL + "event/:" + id + "/edit");
  }

  getlistEventsByUserId(id: number) {
    return this.http.get(this.SERVER_URL2 + "/events/user/" + id);
  }
  setCreate(name, adress, startTime, endTime, startDate, endDate, description) {
    let param = JSON.stringify({
      name: name,
      adress:adress,
      startTime:startTime,
      endTime:endTime,
      startDate:startDate,
      endDate:endDate,
      description:description
    }
  );
  console.log(param);

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  return this.http.post(this.SERVER_URL + "/ModifyEvent", param );
  }
}
