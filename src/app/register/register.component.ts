import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private route: Router){
  }

  divisionValue: string = '';
  name: string = '';
  pass: string = '';
  email: string = '';
  nama_pic: string = '';
  email_pic: string = '';
  roleValue: string = '';
  namaPerusahaan: string = '';


  data = {
    division: this.divisionValue,
    name:this.name,
    pass: '',
    email:this.email,
    nama_pic:this.nama_pic,
    email_pic:this.email_pic,
    roleValue: this.roleValue,
    namaPerusahaan: this.namaPerusahaan
  }

  getValueDivision(val: string){
    this.divisionValue = val;
    this.data.division = val;
  }
  getName(val: string){
    this.name = val;
    this.data.name = val;
  }
  getEmail(val: string){
    this.email = val;
    this.data.email = val;
  }
  getNamePIC(val: string){
    this.nama_pic = val;
    this.data.nama_pic = val;
  }
  getEmailPIC(val: string){
    this.email_pic = val;
    this.data.email_pic = val;
  }

  getValueSelect(val: string) {
    this.roleValue = val;
    this.data.roleValue = val;

  }
  getNamaPerusahaan(val: string) {
    this.namaPerusahaan = val;
    this.data.namaPerusahaan = val;
  }

  getData = () => {

    const pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let generatedPass = '';
    const passLength = pass.length;
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * passLength);
      generatedPass += pass[randomIndex];
    }

    this.data.pass = generatedPass

    console.log(generatedPass);
    console.log(this.data);

    localStorage.setItem('dataRegister', JSON.stringify(this.data))
    // console.log(this.data);
    this.route.navigate(['/login']);

  }
}
