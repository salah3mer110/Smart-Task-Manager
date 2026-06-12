import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthServices } from '../../shared/services/authServices.service';
import { Router } from '@angular/router';

function hasSpaces(control: AbstractControl): ValidationErrors | null {
  return control.value.includes(' ') ? { hasSpaces: true } : null;
}

function checkMatchPasswords(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password !== confirmPassword ? { missMatched: true } : null;
}

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email, hasSpaces]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    },
    {
      validators: checkMatchPasswords,
    },
  );
  private router = inject(Router);
  authServices = inject(AuthServices);

  email = this.form.controls.email;
  password = this.form.controls.password;
  confirmPassword = this.form.controls.confirmPassword;

  onSubmit() {
    this.authServices.signUp(this.email.value!, this.password.value!);
    this.router.navigate(['home']);
  }
}
