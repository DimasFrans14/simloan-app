import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gmtn',
  templateUrl: './gmtn.component.html',
  styleUrls: ['./gmtn.component.css']
})
export class GMTNComponent {
  constructor (  private formBuil1der:FormBuilder)
  {}

  today: number = Date.now();

  public createAt:boolean = false;
  public showCreateAt:any = 'showCreateAt';
  public save:boolean = false;
  public show:any = 'showSave';

  tanggal = new FormControl(''); 
  nama_obligasi = new FormControl();  

  doubleTanggal(){
    const tanggal1 =  this.tanggal;
    const tanggal2 =  this.tanggal;
  }
  
  baselineGMTN = new FormGroup({
    tanggal : this.tanggal = new FormControl(''),  
    tahun : new FormControl,
    tenor : new FormControl,
    rateCoupon : new FormControl,
    kurs : new FormControl,
  });

  estimasiBaselineGMTN = new FormGroup({
    tanggal : this.tanggal = new FormControl(''),
    tahun : new FormControl(''),
    tenor : new FormControl(''),
    indicativeRate : new FormControl(''),
    kurs : new FormControl(''),
  })

  showSave() {
    this.save = !this.save;
    if(this.save)  
      this.showCreateAt = "showCreateAt";
    else
      this.showCreateAt = "HideCreateAt";
  }

  showCreateAt1() {
    this.createAt = !this.createAt;
    if(this.createAt)  
      this.show = "showSave";
    else
      this.show = "Hidesave";
  }

  onSubmit(){
    const dataBaselineGMTN = this.baselineGMTN.value;
    const dataEstimasiBaselineGMTN = this.estimasiBaselineGMTN.value;
    // const waktu = this.today = Date.now();
    // console.log(waktu);
    console.log('Data Baseline:', dataBaselineGMTN);
    console.log('Data Estimasi:', dataEstimasiBaselineGMTN);
    this.showSave();
    this.showCreateAt1();
  }
}
