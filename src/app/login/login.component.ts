import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string="";
  userError: any;

  constructor(public fbb:FormBuilder, public authenticationService: AuthenticationService, public routerService:Router) {
    this.loginForm=this.fbb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
   }

   onSubmit(form: any){
     this.authenticationService.login(form.value.email, form.value.password)
     .then((data) => {
      this.message="Logged in successfully."
      this.routerService.navigate(['/myblogs'])
     }).catch((error) => {
       console.log(error);
       this.userError =error;
     })
   }

  ngOnInit() {
  }

}
