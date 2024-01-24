import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../services/auth/auth.service';

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

  dataAccount: any;
  userEmail: any;
  localData: any;
  parseData: any;
  userAccount: any;

  isLoading: boolean = false;

  constructor(
    private router: Router,
    private dataService : DataService,
    private auth: AuthService
    ) {}

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

  // checkData() {
  //   this.dataAccount.map((items: any) => {
  //     console.log(items.email);
  //   })
  // }

  async login() {

    this.isLoading = true;
    try {
      const response = await this.auth.loginUser(this.email, this.pass)
      console.log(response);
      this.userAccount = response;
    } catch (error) {
      console.log(error);
    }

    localStorage.setItem('token', JSON.stringify(this.userAccount.data.token).replace(/"/g, ''))
    localStorage.setItem('role', JSON.stringify(this.userAccount.data.user_akses))

    if (this.userAccount.success) {
      this.isLoading = false;
      alert(this.userAccount.message);
      this.router.navigate(['/main']);
    } else {
      this.isLoading = false;
      alert(this.userAccount.message);
    }
  }

  ngOnInit() {
    // this.getData();
  }
}
