import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-gmtn',
  templateUrl: './gmtn.component.html',
  styleUrls: ['./gmtn.component.css']
})
export class GMTNComponent {
  constructor (  
    private formBuil1der:FormBuilder,
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService,
  )
  {}

  dataGMTN : any;
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
    tahun : new FormControl(''),
    tenor : new FormControl(''),
    rateCoupon : new FormControl(''),
    kurs : new FormControl(''),
  });

  estimasiBaselineGMTN = new FormGroup({
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
    const dataBaselineGMTN = this.baselineGMTN.value.tahun;
    const dataEstimasiBaselineGMTN = this.estimasiBaselineGMTN.value.kurs;
    // const waktu = this.today = Date.now();
    // console.log(waktu);
    console.log('Data Baseline:', dataBaselineGMTN);
    console.log('Data Estimasi:', dataEstimasiBaselineGMTN);
    this.postDataGMTN();
  }
  async getDataGMTN(){
    try {
      const data = await this.marketUpdateService.fetchDataGmtnFincost();
      this.dataGMTN = data;
      this.dataGMTN = this.dataGMTN.data;
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataGMTN(this.dataGMTN);
    console.log('finish get data in func');
  }
  async postDataGMTN(){
    const dataBaselineGMTN = {
      tahun_baseline : this.baselineGMTN.value.tahun,
      tenor_baseline : this.baselineGMTN.value.tenor,
      rate_coupon : this.baselineGMTN.value.rateCoupon,
      rate_kurs : this.baselineGMTN.value.kurs,
      tahun_estimasi_baseline : this.estimasiBaselineGMTN.value.tahun,
      tenor_estimasi_baseline : this.estimasiBaselineGMTN.value.tenor,
      indicative_rate : this.estimasiBaselineGMTN.value.indicativeRate,
      rate_kurs_estimasi_baseline : this.estimasiBaselineGMTN.value.kurs,
      nama_obligasi : this.nama_obligasi.value.toUpperCase(),
      tanggal : this.tanggal.value, 
    }
    await this.marketUpdateService.fetchDataInputGmtnFincost(dataBaselineGMTN);
    console.log(dataBaselineGMTN)
  }
}
