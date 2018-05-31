import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validator} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  formulaire;

  constructor(private formbuilder: FormBuilder) { }

  @Input() private email : string = 'formulaire.email';
  @Input() private firstName : string = 'formulaire.firstname';
  @Input() private lastName : string = 'formulaire.lastName';
  @Input() private nickName : string = 'formulaire.nickName';
  @Output() evenementChangeForm = new EventEmitter();


  ngOnInit() {
    this.formulaire = this.formbuilder.group({
      email: this.formbuilder.control(''),
      firstname: this.formbuilder.control(''),
      lastName: this.formbuilder.control(''),
      nickName: this.formbuilder.control(''),
    });
  }
  
  public soumetForm(value) {
    this.email = value.email;
    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.nickName = value.nickName; 
    this.evenementChangeForm.emit(this.email)
    this.evenementChangeForm.emit(this.firstName)
  }
}