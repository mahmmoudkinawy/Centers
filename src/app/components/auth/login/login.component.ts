import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get pass() {
    return this.loginForm.get('pass');
  }

  login() {
    let model = {
      email: this.loginForm.controls.email.value,
      pass: this.loginForm.controls.pass.value,
    };
    console.log(model);
  }
}
