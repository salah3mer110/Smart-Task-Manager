import { inject, Injectable } from '@angular/core';
import { AuthServices } from '../services/authServices.service';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authServices: AuthServices,
    private router: Router,
  ) {}
  canActivate(): boolean | UrlTree {
    if (this.authServices.checkLogin()) return true;
    return this.router.parseUrl('/login');
  }
}
