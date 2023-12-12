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

  async getData(){
    let data = await this.dataService.fetchDataKurs();
    this.dataAccount = data;
    // console.log(this.dataAccount);
  }

  async login() {

    // Fake API
    // const foundEmailUser = this.dataAccount.find((item: { email: string }) => item.email === this.email);
    // const foundPassUser = this.dataAccount.find((item: { username: string }) => item.username === this.pass);
    // if (foundEmailUser && foundPassUser ) {
    //   this.router.navigate(['/main']);
    // } else {
    //   alert('Email or Password is invalid!');
    // }

    // Local Storage Data
    // this.localData = localStorage.getItem('dataRegister');
    // this.parseData = JSON.parse(this.localData);
    // console.log(this.parseData.email);

    // if (this.parseData.email === this.email && this.parseData.pass === this.pass) {
    //   this.router.navigate(['/main']);
    // } else {
    //   alert('Email or Password is invalid!');
    // }

    //Find user in DB
    try {
      const response = await this.auth.loginUser()
      // console.log(response);
      this.userAccount = response;
    } catch (error) {
      console.log(error);
    }

    /*
    indeks data ke-n kemungkinan harus diubah menjadi data yang akan ditemukan
    based on parameter username dan password yang dikirim dari front end
    */
    localStorage.setItem('userAccount', JSON.stringify(this.userAccount.data.content[0]))

    if (this.userAccount.data.content[0].email === this.email && this.pass === 'simloan123') {
      this.router.navigate(['/main']);
    } else {
      alert('Email or Password is invalid!');
    }
  }

  ngOnInit() {
    // this.getData();
  }
}
