import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string = '';
  pass: string = '';

  data = {
    email: '',
    pass: '',
  }

  constructor(private router: Router) {}

  getValueEmail(val: string) {
    console.log(val);
    this.email = val;
    this.updateData();
  }

  getValuePass(val: string) {
    console.log(val);
    this.pass = val;
    this.updateData();
  }

  updateData() {
    this.data = {
      email: this.email,
      pass: this.pass,
    };
  }

  checkData() {
    console.log(this.data);
  }

  login() {
    if (this.email === 'user@example.com' && this.pass === '123456') {
      this.router.navigate(['/main']);
    } else {
      alert('Email or Password is invalid!');
    }
  }

  ngOnInit(): void {

  }
}
