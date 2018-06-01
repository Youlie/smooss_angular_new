import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmoossRestService {
    constructor(private http: HttpClient) { }

  private SERVER_URL = 'http://localhost:8080/SpringSmooss/';
  private SERVER_URL2 = 'http://localhost:8080/websmoossspring'

  getProfile(id: number) {
    return this.http.get(this.SERVER_URL + "profile/user/" + id);
  }
  getlistEventsByUserId(id: number) {
    return this.http.get(this.SERVER_URL2 + "/events/user/" + id);
  }
  setProfile(id, email, firstName, lastName, nickName) {
    let param = JSON.stringify({
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      nickName: nickName,
    }
    );
    console.log(param);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.SERVER_URL + "profile/user/update", param, httpOptions);
  }
}