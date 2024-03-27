import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../services/auth/auth.service';
import Swal from 'sweetalert2';

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

    if(this.userAccount.hasOwnProperty('data')){
      const user_account = {
        user: this.userAccount.data.name,
        role: this.userAccount.data.role_name
      }

      localStorage.setItem('account', JSON.stringify(user_account))
      localStorage.setItem('token', JSON.stringify(this.userAccount.data.token).replace(/"/g, ''))
    }

    if (this.userAccount.success) {
      this.isLoading = false;

      Swal.fire({
        title: "Berhasil!",
        text: `Login Berhasil`,
        icon: "success"
        }).then((result: any) => {
          if(result.isConfirmed){
            this.router.navigate(['/main']);
          }
        })

    } else if(this.userAccount.status === 404){
      this.isLoading = false;

       Swal.fire({
        title: "Gagal!",
        text: `Login Gagal`,
        icon: "error"
        })

    }
  }

  ngOnInit() {
    // this.getData();
  }
}
