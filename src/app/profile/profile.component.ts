import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validator, FormGroup } from '@angular/forms';
import { SmoossRestService } from '../smooss-rest.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public formulaire;

  constructor(private formbuilder: FormBuilder, private smoossRest: SmoossRestService) { }

  ngOnInit() {
    this.formulaire = this.formbuilder.group({
      email: this.formbuilder.control(""),
      firstName: this.formbuilder.control(""),
      lastName: this.formbuilder.control(""),
      nickName: this.formbuilder.control("")
    });
    this.smoossRest.getProfile(69).subscribe((af) => {
      this.formulaire.controls.email.setValue(af["email"]),
      this.formulaire.controls.firstName.setValue(af["firstName"]),
      this.formulaire.controls.lastName.setValue(af["lastName"]),
      this.formulaire.controls.nickName.setValue(af["nickName"]);

    });
  }
  public setForm(valeur){
    this.smoossRest.setProfile(69, valeur.email, valeur.firstName, valeur.lastName, valeur.nickName).subscribe(res=>{
      console.log(res);
    })
  }
}
