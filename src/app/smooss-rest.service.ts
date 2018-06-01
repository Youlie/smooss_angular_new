import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class SmoossRestService {  constructor(private http: HttpClient) { }
  
private SERVER_URL = 'http://localhost:8080/websmoossspring/api';
private SERVER_URL2 = 'http://localhost:8080/websmoossspring'

  getProfile(){
    return this.http.get(this.SERVER_URL + '/profile');
  }

  getlistEventsByUserId(id: number) {
    return this.http.get(this.SERVER_URL2 +"/events/user/" + id);
  }

  getSingleEvent(id:number) {
    return this.http.get(this.SERVER_URL2 + "/events/" + id);
  }

}