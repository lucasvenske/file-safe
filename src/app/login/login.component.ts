import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* import { Router } from '@angular/router';
import { User } from '../models/user';
import { Security } from '../utils/security.utils';
import { DataService } from '../services/data.service'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /* public form: FormGroup;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  } */

  ngOnInit() {
    /* const token = Security.getToken();
    if (token) {
      this
        .service
        .refreshToken()
        .subscribe(
          (data: any) => {
            this.setUser(data.customer, data.token);
          },
          (err) => {
            localStorage.clear();
          }
        );
    } */
  }

  /* submit() {
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        (data: any) => {
          this.setUser(data.customer, data.token);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  setUser(user: User, token: string) {
    Security.set(user, token);
    this.router.navigate(['/']);
  } */
}
