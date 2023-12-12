import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CustomValidator } from '../validators/custom.validator';
import { CommonModule } from '@angular/common';
/* import { Router } from '@angular/router';
import { User } from '../models/user';
import { Security } from '../utils/security.utils';
import { DataService } from '../services/data.service'; */

@Component({
  standalone: true,
  imports:[ ReactiveFormsModule, FormsModule, CommonModule],
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public submitted: boolean = false;
  public form: FormGroup;
    constructor(
      private router: Router,
      private authService: AuthService,
      private fb: FormBuilder
    ) {
      this.form = new FormGroup({
        'username': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
      });
  } 

  login() {
    this.submitted = true;
    
    if (this.form && this.form.valid) {
      this.authService.login();
      this.router.navigate(['/']);
    }
  }

  get password() {
    return this.form && this.form.get('password');
  }

  get username() {
    return this.form && this.form.get('username');
  }
}
