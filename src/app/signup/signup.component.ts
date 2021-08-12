import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signinForm: FormGroup;
  message: String="";
  userError: any;
  constructor(public ffb: FormBuilder, public authenticationService: AuthenticationService, public routerService: Router) {

    this.signinForm = this.ffb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.isPasswordsMatching("password", "confirmPassword")
    })
   }

   isPasswordsMatching(passwordKey : string, confirmPasswordKey :string){
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
     if(password.value == confirmPassword.value)
     {
       return;
     }
     else
     {
       confirmPassword.setErrors({
         notEqualToPassword: true
       })
     }
    }
  } //isPasswordMatching

  ngOnInit() {
  }

  onSubmit(signupForm: FormGroup){
    let email: string = signupForm.value.email;
    let password: string = signupForm.value.password;
    let firstName: string = signupForm.value.firstName;
    let lastName: string = signupForm.value.lastName;
    this.authenticationService.signup(email, password, firstName, lastName)
    .then((user: any) => {
      firebase.firestore().collection("users").doc(user.uid).set({
        firstName: signupForm.value.firstName,
        lastName: signupForm.value.lastName,
        email: signupForm.value.email,
        photoURL: "/assets/avatar.jpg"
      }).then(() => {
        this.userError = null;
        this.routerService.navigate(['/myblogs'])
      }).catch((error) =>{
        this.userError=error;
      })
    }).catch((error) => {
      console.log(error);
      this.userError=error;
    })
  } //onSubmit

}
