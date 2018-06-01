import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class SmoossRestService {  constructor(private http: HttpClient) {} 
  
private SERVER_URL = 'http://localhost:8080/websmoossspring/api';
private SERVER_URL2 = 'http://localhost:8080/websmoossspring';
private SERVER_URL3 = 'http://localhost:8080/SpringSmooss';


getProfile(){
  return this.http.get(this.SERVER_URL + '/profile');
}

getlistEventsByUserId(id: number) {
  return this.http.get(this.SERVER_URL2 +"/events/user/" + id);
}

login(email, password) {
  let json = JSON.stringify({
    email:email,
    password:password
  })

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  console.log(json);
  return this.http.post(this.SERVER_URL3 + '/user/login', json, httpOptions);
}
}