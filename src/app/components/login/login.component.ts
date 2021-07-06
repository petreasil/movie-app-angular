import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loginMode: boolean = true;
  constructor(
    private formBulider: FormBuilder,
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBulider.group({
      username: new FormControl(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  passwordValidator() {
    if (this.loginMode) {
      return false;
    }
    const { password, passwordCheck } = this.form.value;

    return password !== passwordCheck;
  }
  switchControl() {
    this.loginMode = !this.loginMode;
    if (this.loginMode) {
      this.form.removeControl('passwordCheck');
    } else {
      this.form.addControl(
        'passwordCheck',
        new FormControl(undefined, [
          Validators.required,
          Validators.minLength(8),
        ])
      );
    }
  }

  async submitForm() {
    //console.log(this.form.value);
    const { username, password } = this.form.value;
    if (this.loginMode) {
      const result = await this.firebaseAuth.signInWithEmailAndPassword(
        username,
        password
      );
      await this.router.navigate(['/movies']);
    } else {
      const result = await this.firebaseAuth.createUserWithEmailAndPassword(
        username,
        password
      );
      await this.router.navigate(['/movies']);
    }
  }
}
