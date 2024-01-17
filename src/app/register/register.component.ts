import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MasterRoleService } from '../services/master_role/master-role.service';
import { AuthService } from '../services/auth/auth.service';
import { MasterDivisiService } from '../services/master_divisi/master-divisi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(
    private route: Router,
    private masterRole: MasterRoleService,
    private masterDivisi: MasterDivisiService,
    private authService: AuthService
    ){
  }

  divisionValue: string = '';
  name: string = '';
  pass: string = '';
  email: string = '';
  nama_pic: string = '';
  email_pic: string = '';
  roleValue!: number;
  namaPerusahaan: string = '';

  selectedRoleId: any = 1;
  selectedDivisionId: any = 1;

  getDataRole: any;
  optionRole: any;

  getDataDivisi: any;
  optionDivisi: any;


  data = {
    name:this.name,
    email:this.email,
    phone_number:'',
    pic:this.nama_pic,
    email_pic:this.email_pic,
    kwenang_pic: '',
    id_devisi: this.selectedDivisionId,
    id_role: this.selectedRoleId,
    id_anak_prhsan: 1,
    // namaPerusahaan: this.namaPerusahaan,
  }

  getValueDivision() {
    console.log(this.selectedDivisionId);
    let getDivisionName = this.optionDivisi.find((item: any) => item.id_devisi == this.selectedDivisionId)
    console.log(getDivisionName);
    this.data.id_devisi = parseInt(this.selectedDivisionId);
    console.log('clicked');
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
    this.data.pic = val;
  }
  getEmailPIC(val: string){
    this.email_pic = val;
    this.data.email_pic = val;
  }

  getValueSelect() {
    console.log(this.selectedRoleId);
    let getRoleName = this.optionRole.find((item: any) => item.id_role == this.selectedRoleId)
    this.data.kwenang_pic = getRoleName.role_name;
    this.data.id_role = parseInt(this.selectedRoleId);
    console.log(getRoleName);
  }

  getNamaPerusahaan(val: string) {
    this.namaPerusahaan = val;
    // this.data.namaPerusahaan = val;
  }

  responseRegist: any;

  registUser = async () => {
    console.log(this.data);
    try {
      const response = await this.authService.registerUser(this.data);
      console.log(response);
      this.responseRegist = response
      if(this.responseRegist.status === 200){
        alert('Regist user berhasil')
        this.route.navigate(['/login'])
      }
      else{
        this.route.navigate(['/register'])
      }
    } catch (error) {
      console.log(error);
    }
  }


    async ngOnInit(): Promise<void> {
      try {

        const responseMasterDivisi = await this.masterDivisi.getMasterDivisi()
        this.getDataDivisi = responseMasterDivisi;
        console.log(this.getDataDivisi);

        const responseMasterRole = await this.masterRole.getMasterRole()
        console.log('response', responseMasterRole);
        this.getDataRole = responseMasterRole
        // if(this.selectionDivision.success){

        // }
      } catch (error) {
        console.log(error);

      }
      this.optionRole = this.getDataRole.data.content;
      this.optionDivisi = this.getDataDivisi.data.content;
      console.log(this.optionDivisi, this.optionRole);
  }
}
