import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators }from '@angular/forms';
import { PasswordValidator } from './password-validator';
import { SmoossRestService } from '../smooss-rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private rs:SmoossRestService) { }

  public userForm;

  private lastname;
  private firstname;
  private nickname;
  private email;
  private password;
  private picture:"";

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
      // return;
    }
    else{
      this.firstname=valeur.firstname;
      this.lastname=valeur.lastname;
      this.nickname=valeur.nickname;
      this.email=valeur.email;
      this.password=valeur.password;
      this.AskForNewUser();
    }
    // envoi vers le serveur
}

AskForNewUser() {
  this.rs.createNewUser(this.lastname, this.firstname, this.nickname, this.email, this.password, this.picture).subscribe(res => {
    console.log('ok !');
    console.log(res);
    return "/home";
  },
  res => {
    console.log('ko !');
    console.log(res);
    return "/login";
  }
);

}

// AskForNewUser() {
//   this.SmoossRestService.createNewUser(lastname, firstname, nickname, email, password).subscribe()
// }

// @PostMapping(value="/registration")
// 	public String registration(("userForm"))
// 			throws EmailException {

// 		userValidator.validate(userForm, bindingResult);
		
// 		if (bindingResult.hasErrors()) {
// 			return "registration";
// 		}
		
// 		us.create(userForm);
// 		es.sendMail(userForm.getEmail(), "contact@smooss.fr", "Bonjour "+userForm.getFirstName()+" !", "Bienvenue sur Smooss "+userForm.getFirstName()+
// 				" ! Nous sommes heureux de vous compter parmi nos membres ! A très vite sur www.smooss.fr");

// 		//TODO auto login !!!
// 		return "redirect:home";
// 	}

// fonctionCheck(valeurutile) {
//     public get value(lastname, firstname, nickname, email, password) {
//       return null;
//     };
//   }

}
