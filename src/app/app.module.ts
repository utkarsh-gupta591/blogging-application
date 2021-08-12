import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { BlogsComponent } from './blogs/blogs.component';

var firebaseConfig = {
  apiKey: "AIzaSyATCep3GsVgsg5u1NZ7IHjRpwEnL6kTr9k",
  authDomain: "blogging-application-3b9b0.firebaseapp.com",
  projectId: "blogging-application-3b9b0",
  storageBucket: "blogging-application-3b9b0.appspot.com",
  messagingSenderId: "87962465130",
  appId: "1:87962465130:web:d7ccb223861d60d1806b13",
  measurementId: "G-RTWFHQNW0J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    MenuComponent,
    LoginComponent,
    MyblogsComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
