import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  signIn() {
    return new Promise((resolve, reject) => {
      resolve(this.isAuth = true);
      // * Connexion avec timer
      // setTimeout(() => {
      //   this.isAuth = true;
      //   resolve(true);
      // }, 2000);
    });
  }

  signOut() {
    this.isAuth = false;
  }
}

