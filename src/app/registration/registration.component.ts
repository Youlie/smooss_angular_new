import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators }from '@angular/forms';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  public userForm;

  CGUChecked = false;

  hasBeenSubmitted = false;

  ngOnInit() {
    this.userForm=this.formbuilder.group({ 
        lastname: this.formbuilder.control('', Validators.required),
        firstname: this.formbuilder.control('', Validators.required),
        nickname: this.formbuilder.control(''),
        email: this.formbuilder.control('', Validators.compose([Validators.email, Validators.required])),
        password: this.formbuilder.control('', Validators.compose([Validators.minLength(9), Validators.required])),
        passwordconf: this.formbuilder.control('', Validators.required),
        checkBoxCGU: this.formbuilder.control(false)
    },{
        validator: PasswordValidator.MatchPassword
    }
  )
  }

  logmoi(valeur) {console.log(valeur)}

  public soumetUserForm(valeur) {
    if (this.userForm.status=="INVALID") {
      this.hasBeenSubmitted = true;
      return;
    }
    // envoi vers le serveur

 
}

}
