import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private routerService: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
          if(user){
            resolve(true);
          } else {
            this.routerService.navigate(['/login']);
            resolve(false);
          }
        })
      }) // promise
  }
  
}
