
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
  hasilTotalBunga: any | null=null;
  hasilBungaPerBulan1: number | null=null;
  hasilBungaPerTahun1: any | null=null;
  hasilTotalBunga1: any | null=null;
  selisihDeltaMiliar: number|null=null;
  selisihDeltaTriliun: number|null=null;
  selisihDelta30TahunTriliun: any | null=null;
  selisihDelta30TahunMiliar: any | null=null;

  constructor (private formBuilder : FormBuilder){

  }
  
  nama_fincost = new FormControl('');
  tanggal = new FormControl('');
  bank = new FormControl('');
  tenor1 = new FormControl('');
  tenor2 = new FormControl('');

  hitungSimulasi1 = new FormGroup({
    obligasi : new FormControl(''),
    asumsi_pinjaman : new FormControl(''),
    indicative_yield : new FormControl(''),
    kurs : new FormControl(''),
    //kurs ambil dari nilai kurs overview harian
    bunga_perbulan : new FormControl(this.hasilBungaPerBulan),
    bunga_pertahun : new FormControl(this.hasilBungaPerTahun),
    total_bunga : new FormControl(this.hasilTotalBunga)  
  });

  
  hitungSimulasi2 = new FormGroup({
    obligasi : new FormControl(''),
    asumsi_pinjaman : new FormControl(''),
    indicative_yield : new FormControl(''),
    kurs : new FormControl(''), 
    //kurs ambil dari nilai kurs overview harian
    bunga_perBulan : new FormControl(this.hasilBungaPerBulan1),
    bunga_pertahun : new FormControl(this.hasilBungaPerTahun1),
    total_bunga : new FormControl(this.hasilTotalBunga1),
  })

  hitungbunga(){
    const tenor1 = this.tenor1.value as unknown as number; 
    const asumsipinjaman = this.hitungSimulasi1.get('asumsi_pinjaman')?.value as unknown as number;
    const indicativeyield = this.hitungSimulasi1.get('indicative_yield')?.value as unknown as number;
    const kurs = this.hitungSimulasi1.get('kurs')?.value as unknown as number;
    //bunga perbulan
    this.hasilBungaPerBulan = asumsipinjaman * ((indicativeyield/100)/12);
    //bunga per tahun
    this.hasilBungaPerTahun = (indicativeyield * asumsipinjaman * kurs)/1000000000000; // kurs
    //total bunga
    this.hasilTotalBunga = this.hasilBungaPerTahun*tenor1;

    const hasil = {
      tanggal: this.tanggal.value,
      bank: this.bank.value,
      tenor_1: this.tenor1.value,
      obligasi: this.hitungSimulasi2.value.obligasi,
      bunga_perbulan: this.hasilBungaPerBulan,
      bunga_pertahun: this.hasilBungaPerTahun,
      total_bunga: this.hasilTotalBunga,
    }
    console.log('simulasi_1:',hasil);
    // console.log('Simulasi 1:',this.hitungSimulasi2.value);
  }

  hitungbunga1(){
    const tenor2 = this.tenor2.value as unknown as number; 
    const asumsipinjaman = this.hitungSimulasi2.get('asumsi_pinjaman')?.value as unknown as number;
    const indicativeyield = this.hitungSimulasi2.get('indicative_yield')?.value as unknown as number;
    const kurs = this.hitungSimulasi2.get('kurs')?.value as unknown as number;
    //bunga perbulan
    this.hasilBungaPerBulan1 = (asumsipinjaman * ((indicativeyield/100)/12));
    //bunga per tahun
    this.hasilBungaPerTahun1 = (indicativeyield * asumsipinjaman * kurs)/1000000000000; // kurs
    //total bunga
    this.hasilTotalBunga1 = this.hasilBungaPerTahun1*tenor2;
    //selisih delta pertahun
    const bungatahun  =  this.hasilBungaPerTahun;
    const bungatahun1 =  this.hasilBungaPerTahun1;
    this.selisihDeltaMiliar = (bungatahun - bungatahun1)*1000000; //milliar
    this.selisihDeltaTriliun = this.selisihDeltaMiliar*1000000;
    //selisih delta 30 tahun
    const totalbunga1 = this.hasilTotalBunga;
    const totalbunga2 = this.hasilTotalBunga1;
    this.selisihDelta30TahunTriliun = totalbunga1 - totalbunga2;
    this.selisihDelta30TahunMiliar = this.selisihDelta30TahunTriliun*1000;

    const selisihDelta = {
      selisih_delta_pertahun_miliar : this.selisihDeltaMiliar,
      selisih_delta_pertahun_triliun : this.selisihDeltaTriliun,
      selisih_delta_30_tahun_miliar : this.selisihDelta30TahunMiliar,
      selisih_delta_30_tahun_triliun : this.selisihDelta30TahunTriliun,
    }
    const hasil = {
      nama_fincost: this.nama_fincost.value,
      tanggal: this.tanggal.value,
      bank: this.bank.value,
      tenor_2: this.tenor1.value,
      obligasi: this.hitungSimulasi2.value.obligasi,
      bunga_perbulan: this.hasilBungaPerBulan1,
      bunga_pertahun: this.hasilBungaPerTahun1,
      total_bunga: this.hasilTotalBunga1,
    }
    console.log('simulasi_2:',hasil)
  }

  hitung(){
    this.hitungbunga()
    this.hitungbunga1()
  }
}
