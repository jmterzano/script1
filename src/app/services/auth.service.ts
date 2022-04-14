import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router} from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private router: Router){ }

  async register (email:string,password:string)
  {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    } catch (err) {
      console.log("error en login: ",err);
      return null;
    }   
  }
  
  async login (email:string,password:string)
  {
      return await this.afauth.signInWithEmailAndPassword(email,password).then(res => this.router.navigate(['juegos'])).catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-not-found':
          case 'auth/wrong-password':
          case 'auth/internal-error':
            throw new Error('Credenciales Inválidas');
          default:
            throw new Error(error.message);
        }
      });
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logOut(){
    this.afauth.signOut();
  }

}
