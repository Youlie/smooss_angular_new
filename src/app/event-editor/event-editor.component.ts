import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SmoossRestService } from '../smooss-rest.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private smoossRest: SmoossRestService) { }

  public userProfilForm;
  private name;
  private adress;
  private starTime;
  private startDate;
  private endDate;
  private endTime;
  private description;

  hasBeenSubmitted = false;

  ngOnInit() {
    console.log("hola boubou 1");
    this.userProfilForm = this.formbuilder.group({
      name: this.formbuilder.control(''),
      adress: this.formbuilder.control(''),
      startTime: this.formbuilder.control(''),
      startDate: this.formbuilder.control(''),
      endDate: this.formbuilder.control(''),
      endTime: this.formbuilder.control(''),
      description: this.formbuilder.control('')

    })
    console.log("hola boubou 2");
    this.smoossRest.getCreateEvent().subscribe((af) => {
      console.log(af);
      debugger;
      this.userProfilForm.controls.name.setValue(af["name"]),
      this.userProfilForm.controls.adress.setValue(af["adress"]),
      this.userProfilForm.controls.startTime.setValue(af["startTime"]),
      this.userProfilForm.controls.startDate.setValue(af["startDate"]),
      this.userProfilForm.controls.endDate.setValue(af["endDate"]),
      this.userProfilForm.controls.endTime.setValue(af["endTime"]),
      this.userProfilForm.controls.description.setValue(af["description"])
    })
  }

  validForm(valeur) { console.log(valeur) }

  public soumetUserProfilForm(valeur) {
    if (this.userProfilForm.status == "INVALID") {
      this.hasBeenSubmitted = true;
      return;
    }
  }
  public setForm(value){
    this.name = value.name;
    
    
  }
}






