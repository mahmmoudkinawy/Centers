import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;
  disabilityVal = false;
  disability() {
    this.disabilityVal = !this.disabilityVal;
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z]*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    national: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    tel: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    gender: new FormControl('', [Validators.required]),
    pass: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
      ),
    ]),
  });

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get national() {
    return this.registerForm.get('national');
  }

  get tel() {
    return this.registerForm.get('tel');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get pass() {
    return this.registerForm.get('pass');
  }

  register() {
    let model = {
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
      national: this.registerForm.controls.national.value,
      phone: this.registerForm.controls.tel.value,
      email: this.registerForm.controls.email.value,
      Gender: this.registerForm.controls.gender.value,
      pass: this.registerForm.controls.pass.value,
    };
    console.log(model);
  }
}
