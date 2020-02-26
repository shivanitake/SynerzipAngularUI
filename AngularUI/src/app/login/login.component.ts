import { DashboardComponent } from './../../../../GitRepo/src/app/dashboard/dashboard.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    loginId : '',
    password : ''
  };

  loggedIn = false;

  constructor(private route: Router, private login: DashboardComponent) { }
  ngOnInit(): void {
  }

  signIn() {
    if (this.form.loginId === localStorage.getItem('login') && this.form.password === localStorage.getItem('password')) {
      console.log('welcome to dashboard');
      this.loggedIn = true;
      sessionStorage.setItem('email', this.form.loginId);
      sessionStorage.setItem('password', this.form.password);
      this.route.navigateByUrl('/dashboard');
    }  else {
      console.log('Invalid user');
      this.route.navigateByUrl('/login');
    }

  }
}
