import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import { stringify } from 'querystring';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth){ }

  async login (email:string,password:string)
  {
    try {
      return await this.afauth.signInWithEmailAndPassword(email,password);
    } catch (err) {
      console.log("error en login: ",err);
      return null;
    }   
  }

}
