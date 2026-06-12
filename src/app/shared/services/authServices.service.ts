import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

const STORAGE_KEY = 'my-secret-key';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  private isLoggedIn = false;

  logout() {
    this.isLoggedIn = false;
  }
  checkLogin() {
    return this.isLoggedIn;
  }

  login(email: string, password: string) {
    const user = localStorage.getItem('users');
    if (!user) return;

    const userParsed = JSON.parse(user);
    const decryptedPassword = CryptoJS.AES.decrypt(
      userParsed.encryptedPassword,
      STORAGE_KEY,
    ).toString(CryptoJS.enc.Utf8);
    this.isLoggedIn = userParsed.email === email && password === decryptedPassword ? true : false;
  }

  signUp(email: string, password: string) {
    const encryptedPassword = CryptoJS.AES.encrypt(password, STORAGE_KEY).toString();
    localStorage.setItem('users', JSON.stringify({ email, encryptedPassword }));
    this.isLoggedIn = true;
  }
}
