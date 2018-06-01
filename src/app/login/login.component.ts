import { Component, OnInit, NgModule } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SmoossRestService } from '../smooss-rest.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form :FormGroup;
  private resultat;

  constructor(private fb : FormBuilder, private smoossRestService: SmoossRestService){

  }

  ngOnInit() : void {
    this.smoossRestService.getUserById(2).subscribe(res => {
      this.resultat = res;
    })
    this.form = this.fb.group ({
      email : this.fb.control ('', [Validators.required, Validators.minLength(3)]),
      password : this.fb.control ('', [Validators.required, Validators.minLength(3)])

    });
  }

  save(){
    if(this.form.valid){
      console.log(this.form.value);
    }
  }

  onSubmit(value){
    this.smoossRestService.
  }

}
