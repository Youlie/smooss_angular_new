import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SmoossRestService {

  constructor(private http: HttpClient) { }

  private SERVER_URL = 'http://localhost:8080/SpringSmooss/';
  private SERVER_URL2 = 'http://localhost:8080/websmoossspring';

  getProfile(id: number) {
    return this.http.get(this.SERVER_URL + "profile/user/" + id);
    // TODO : lors de l'authentification, on pourra enlever le user/id et taper ainsi:
    //    return this.http.get(this.SERVER_URL + '/profile');
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

  setProfile(id, email, firstName, lastName, nickName) {
    let param = JSON.stringify({
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      nickName: nickName,
    });
    console.log(param);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.SERVER_URL + "profile/user/update", param, httpOptions);
  }

  setCreate(name, adress, startTime, endTime, startDate, endDate, description) {
    let param = JSON.stringify({
      name: name,
      adress: adress,
      startTime: startTime,
      endTime: endTime,
      startDate: startDate,
      endDate: endDate,
      description: description
    });
    console.log(param);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.SERVER_URL + "/ModifyEvent", param);
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

    return this.http.post(this.SERVER_URL + "/user/create", param, httpOptions);
  }

  getSingleEvent(id: number) {
    return this.http.get(this.SERVER_URL2 + "/events/" + id);
  }

  login(email, password) {
    let json = JSON.stringify({
      email: email,
      password: password
    })

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(json);
    return this.http.post(this.SERVER_URL + '/user/login', json, httpOptions);
  }

  getCarPoolings(id: number){
    return this.http.get(this.SERVER_URL + "carpooling/event/" + id);
  }

  addCarPooling(id: number){
    let json = JSON.stringify({
     
    })

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(json);
    return this.http.post(this.SERVER_URL + 'carpooling/create', json, httpOptions);
  }

}
