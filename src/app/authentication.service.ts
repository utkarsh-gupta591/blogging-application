import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(email: string, password: string)
  {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string, firstName:string, lastName:string){
    return new Promise((resolve, reject) =>  {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        response.user.updateProfile({
          displayName: firstName + " " + lastName,
          photoURL: "/assets/avatar.jpg"
        }).then(()=>{
          resolve(response.user);
        }).catch((error) => {
          reject(error);
        })

      }).catch((error) => {
          reject(error);
    })
  })
  } //signup
  
}
