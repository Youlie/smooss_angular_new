import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SmoossRestService {
    constructor(private http: HttpClient) { }

  private SERVER_URL = 'http://localhost:8080/SpringSmooss/api';
  private SERVER_URL2 = 'http://localhost:8080/SpringSmooss';

  getProfile() {
    return this.http.get(this.SERVER_URL + '/profile');
  }

  getlistEventsByUserId(id: number) {
    return this.http.get(this.SERVER_URL2 + "/events/user/" + id);
  }

  createNewUser(lastnameEntry, firstnameEntry, nicknameEntry, emailEntry, passwordEntry, pictureEntry) {
    let param = JSON.stringify(
      {
        email: emailEntry,
        password: passwordEntry,
        firstName: firstnameEntry,
        lastName: lastnameEntry,
        nickName: nicknameEntry
      }
    );
    console.log(param);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.SERVER_URL2 + "/user/create", param, httpOptions);
  }

  getSingleEvent(id: number) {
    return this.http.get(this.SERVER_URL2 + "/events/" + id);
  }

}