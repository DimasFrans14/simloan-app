import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-hitung-fincost',
  templateUrl: './hitung-fincost.component.html',
  styleUrls: ['./hitung-fincost.component.css']
})
export class HitungFincostComponent {

  public hitungKalkulasi:boolean = true;
  public buttonHitung:any = 'hideHitungKalkulasi';

  constructor (private formBuilder : FormBuilder){

  }

  hitungSimulasi1 = new FormGroup({
    bank : new FormControl(''),
    tanggal : new FormControl(''),
    tenor1 : new FormControl(''),
    obligasi :new FormControl(''),
    asumsiPinjaman :new FormControl(''),
    indicativeYield : new FormControl(''),
    //kurs ambil dari nilai kurs overview harian
    bungaPerbulan : new FormControl(''),
    bungaPertahun : new FormControl(''),
    totalBunga : new FormControl('') 
  });

  hitungSimulasi2 = new FormGroup({
    bank : new FormControl(''),
    tanggal : new FormControl(''),
    tenor1 : new FormControl(''),
    obligasi :new FormControl(''),
    asumsiPinjaman :new FormControl(''),
    indicativeYield : new FormControl(''),
    //kurs ambil dari nilai kurs overview harian
    bungaPerbulan : new FormControl(''),
    bungaPertahun : new FormControl(''),
    totalBunga : new FormControl('') 
  });

  hitungSimulasi(){
    const simulasi1 = this.hitungSimulasi1.value;
    const simulasi2 = this.hitungSimulasi2.value;

    
  }

  toggleHitungKalkulasi() {
    this.hitungKalkulasi = !this.hitungKalkulasi;
    if(this.hitungKalkulasi)  
      this.buttonHitung = "showhitungKalkulasi";
    else
      this.buttonHitung = "HideInterestRate";
  }

}
