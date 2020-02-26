import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = {
    loginId: '',
    password: '',
    confirmPassword: ''
  };

    localValue = {
    login : '',
    pass : '',
    confirmPass : ''
  };

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.localValue.login = this.form.loginId;
    this.localValue.pass = this.form.password;
    this.localValue.confirmPass = this.form.confirmPassword;
    localStorage.setItem('login', this.localValue.login);
    localStorage.setItem('password', this.localValue.pass);
    localStorage.setItem('confirmPassword', this.localValue.confirmPass);
    this.route.navigateByUrl('/login');
    console.log('signUp');
  }
}
