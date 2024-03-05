
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
  hasilBungaPerBulan: any | null=null;
  hasilBungaPerTahun: any | null=null;
  hasilTotalBunga: number | null=null;
  hasilBungaPerBulan1: number | null=null;
  hasilBungaPerTahun1: any | null=null;
  hasilTotalBunga1: any | null=null;
  selisihDeltaMiliar: number|null=null;
  selisihDeltaTriliun: number|null=null;
  constructor (private formBuilder : FormBuilder){

  }
  
  tanggal = new FormControl('');
  bank = new FormControl('');
  tenor1 = new FormControl('');
  tenor2 = new FormControl('');

  hitungSimulasi1 = new FormGroup({
    obligasi : new FormControl(''),
    asumsiPinjaman : new FormControl(''),
    indicativeYield : new FormControl(''),
    kurs : new FormControl(''),
    //kurs ambil dari nilai kurs overview harian
    bungaPerBulan : new FormControl(this.hasilBungaPerBulan),
    bungaPertahun : new FormControl(this.hasilBungaPerTahun),
    totalBunga : new FormControl(this.hasilTotalBunga)  
  });

  
  hitungSimulasi2 = new FormGroup({
    obligasi : new FormControl(''),
    asumsiPinjaman : new FormControl(''),
    indicativeYield : new FormControl(''),
    kurs : new FormControl(''), 
    //kurs ambil dari nilai kurs overview harian
    bungaPerBulan : new FormControl(this.hasilBungaPerBulan1),
    bungaPertahun : new FormControl(this.hasilBungaPerTahun1),
    totalBunga : new FormControl(this.hasilTotalBunga1),
  })

  selisihDelta = new FormGroup ({
    selisihDeltaPertahunTriliun  : new  FormControl(this.selisihDeltaTriliun),
    selisihDeltaPertahunMiliar  : new  FormControl(this.selisihDeltaMiliar),
    selisihDeltaPer30ThnTriliun  : new  FormControl(this.selisihDeltaMiliar),
    selisihDeltaPer30ThnMiliar  : new  FormControl(this.selisihDeltaTriliun),
  })


  hitungbunga(){
    const tenor1 = this.tenor1.value as unknown as number; 
    const asumsipinjaman = this.hitungSimulasi1.get('asumsiPinjaman')?.value as unknown as number;
    const indicativeyield = this.hitungSimulasi1.get('indicativeYield')?.value as unknown as number;
    const kurs = this.hitungSimulasi1.get('kurs')?.value as unknown as number;
    //bunga perbulan
    this.hasilBungaPerBulan = asumsipinjaman * (indicativeyield/12);
    //bunga per tahun
    this.hasilBungaPerTahun = (indicativeyield * asumsipinjaman * kurs)/1000000000000; // kurs
    //total bunga
    this.hasilTotalBunga = this.hasilBungaPerTahun*tenor1;
    // const hasil = [
    //   this.tanggal.value,
    //   this.bank.value,
    //   this.tenor1.value,
    //   this.hitungSimulasi1.value.obligasi,
    //   this.hasilBungaPerBulan,
    //   this.hasilBungaPerTahun,
    //   this.hasilTotalBunga
    // ]
    // const data = JSON.stringify(hasil.values);
    // console.log('simulasi 1:',hasil);
    console.log('Simulasi 1:',this.hitungSimulasi2.value);
  }

  hitungbunga1(){
    const tenor2 = this.tenor2.value as unknown as number; 
    const asumsipinjaman = this.hitungSimulasi2.get('asumsiPinjaman')?.value as unknown as number;
    const indicativeyield = this.hitungSimulasi2.get('indicativeYield')?.value as unknown as number;
    const kurs = this.hitungSimulasi2.get('kurs')?.value as unknown as number;
    //bunga perbulan
    this.hasilBungaPerBulan1 = (asumsipinjaman * (indicativeyield/12));
    //bunga per tahun
  this.hasilBungaPerTahun1 = (indicativeyield * asumsipinjaman * kurs)/1000000000000; // kurs
    //total bunga
    this.hasilTotalBunga1 = this.hasilBungaPerTahun1*tenor2;
    //selisih delta pertahun
    const bungatahun  =  this.hasilBungaPerTahun;
    const bungatahun1 =  this.hasilBungaPerTahun1
    this.selisihDeltaMiliar = (bungatahun - bungatahun1)/1000;; //milliar
    this.selisihDeltaTriliun = this.selisihDeltaMiliar*1000;

    // const hasil = [
    //   this.tanggal.value,
    //   this.bank.value,
    //   this.tenor1.value,
    //   this.hitungSimulasi2.value.obligasi,
    //   this.hasilBungaPerBulan1,
    //   this.hasilBungaPerTahun1,
    //   this.hasilTotalBunga1,
    //   this.selisihDeltaMiliar,
    // ]
    // console.log('simulasi 2:',hasil)
    console.log('Simulasi 2:',this.hitungSimulasi1.value);
  }



  hitung(){
    this.hitungbunga()
    this.hitungbunga1()
    console.log('Selisih Delta:',this.selisihDelta.value)
  }

  // bungapertahun(){
  //   this.hasilBungaPerTahun = (this.indicativeyield * this.asumsipinjaman * 15000)/1000000000; // kurs
  //   console.log(this.hasilBungaPerTahun)
  // }

}
