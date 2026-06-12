import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AuthServices } from '../../shared/services/authServices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authServices = inject(AuthServices);
  private router = inject(Router);
  wrongCredentials() {
    console.log(this.authServices.checkLogin());
    return this.authServices.checkLogin();
  }
  onSubmit(form: NgForm, email: NgModel, password: NgModel) {
    this.authServices.login(email.value, password.value);
    this.router.navigate(['home']);
  }
}
