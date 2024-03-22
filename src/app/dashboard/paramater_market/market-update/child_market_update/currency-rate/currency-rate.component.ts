import { Component, AfterViewInit, OnInit ,Input, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.css']
})
export class CurrencyRateComponent implements OnInit, AfterViewInit {
  constructor(
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  dataDetail: any;
  dataDetailRealisasi: any;
  dataDetailRealisasiNonUsd: any;
  dataDetailRkap: any;
  dataDetailRkapNonUsd: any;
  dataDetailOutlook: any;
  dataDetailOutlookNonUsd: any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  realisasiKursItem!: number;

  tanggalEditKurs: any;
  namaEditKurs: any;
  nilaiEditKurs: any;

  maxDate = new Date();

  formDataRealisasi = {
    'tanggal': '',
    'nama_kurs':'',
    'nilai_realisasi':''
  }

  formDataRKAP = {
    'tanggal': '',
    'nama_kurs':'',
    'nilai_rkap':''
  }

  formDataOutlook = {
    'tanggal': '',
    'nama_kurs':'',
    'nilai_outlook':''
  }

  defaultMacroIndicatorItems = [
    {
      "id": "1",
      "currency": "PDB (%)",
      "rate1": "1.23",
      "rate2": "1.25",
      "rate3": "1.27"
    },
    {
      "id": "2",
      "currency": "Inflasi (%)",
      "rate1": "0.98",
      "rate2": "1.01",
      "rate3": "0.95"
    },
    {
      "id": "3",
      "currency": "Fed Funds Rate (%)",
      "rate1": "1.55",
      "rate2": "1.52",
      "rate3": "1.57"
    },
    {
      "id": "4",
      "currency": "BI 7-Day Reverse Repo (%)",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
    {
      "id": "5",
      "currency": "Yield UST 10-Yr",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
    {
      "id": "6",
      "currency": "Yield SBN 10-Yr",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
  ]

  macroIndicatorSelect = [
    { id: 1, name: 'PDB (%)' },
    { id: 2, name: 'Inflasi (%)' },
    { id: 3, name: 'Fed Funds Rate (%)' },
    { id: 4, name: 'BI 7-Day Reverse Repo (%)' },
    { id: 5, name: 'Yield UST 10-Yr' },
    { id: 6, name: 'Yield SBN 10-Yr' },
  ];

  kursSelect: any;

  async getCurrencyRateData(){
    // try {
    //   const response = await this.dataService.fetchDataKurs();
    //   this.kursSelect = response;
    //   this.kursSelect = this.kursSelect.d.list;
    //   console.log(this.kursSelect);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async getData(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    let getYear = moment().format('YYYY')
    try {
      const data = await this.marketUpdateService.fetchDataKurs(getYear);
      this.dataDetail = data;
      this.dataDetail = this.dataDetail.d.list;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetail);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setData(this.dataDetail);
    console.log('finish get data in func');
  }
  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading RealisasiKursUsd');
    try{
      const dataUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
      const dataNonUsd = await this.marketUpdateService.fetchDataRealisasiKursNonUsd();
      this.dataDetailRealisasi = dataUsd;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      this.dataDetailRealisasiNonUsd = dataNonUsd;
      this.dataDetailRealisasiNonUsd = this.dataDetailRealisasiNonUsd.data;
      this.isLoading = false;
      console.log(this.isLoading,'loading 2', this.dataDetailRealisasi);
    } catch(error) {
      console.log(error)
    }
    this.tableConfig.setDataRealisasiKurs(this.dataDetailRealisasi, this.dataDetailRealisasiNonUsd);
    console.log('finish get data by function')
  }
  async getDataRkapKursUsd(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading RealisasiKursUsd');
    try{
      const dataUsd = await this.marketUpdateService.fetchDataRkapKursUsd();
      const dataNonUsd = await this.marketUpdateService.fetchDataRkapKursNonUsd();
      this.dataDetailRkap = dataUsd;
      this.dataDetailRkap = this.dataDetailRkap.data;
      this.dataDetailRkapNonUsd = dataNonUsd;
      this.dataDetailRkapNonUsd = this.dataDetailRkapNonUsd.data;
      this.isLoading = false;
      console.log(this.isLoading,'loading 2', this.dataDetailRkap);
    } catch(error) {
      console.log(error)
    }
    this.tableConfig.setDataRkapKursUsd(this.dataDetailRkap, this.dataDetailRkapNonUsd);
    console.log('finish get data by function')
  }
  async getDataOutlookKursUsd(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading RealisasiKursUsd');
    try{
      const dataUsd = await this.marketUpdateService.fetchDataOutlookKursUsd();
      const dataNonUsd = await this.marketUpdateService.fetchDataOutlookKursNonUsd();
      this.dataDetailOutlook = dataUsd;
      this.dataDetailOutlook = this.dataDetailOutlook.data;
      this.dataDetailOutlookNonUsd = dataNonUsd;
      this.dataDetailOutlookNonUsd = this.dataDetailOutlookNonUsd.data;
      this.isLoading = false;
      console.log(this.isLoading,'loading 2', this.dataDetailOutlook);
    } catch(error) {
      console.log(error)
    }
    this.tableConfig.setDataOutlookKursUsd(this.dataDetailOutlook, this.dataDetailOutlookNonUsd);
    console.log('finish get data by function')
  }

  onDate(event: any){
    console.log(event);

    console.log(moment(event.value._d).format("DD/MM/YYYY"));

    this.tanggalEditKurs = moment(event.value._d).format("DD/MM/YYYY");
  }

  realisasiKursSelect = (event: any) => {
    console.log(event);
  }

  nilaiEditRealKurs = (val: any) => {
    console.log(val);
  }

  onSubmitRealisasi() {
    this.formDataRealisasi.tanggal = this.tanggalEditKurs
    console.log('Data yang di-submit:', this.formDataRealisasi);
  }

  onSubmitRKAP() {
    this.formDataRKAP.tanggal = this.tanggalEditKurs
    console.log('Data yang di-submit:', this.formDataRKAP);
  }
  onSubmitOutlook() {
    this.formDataOutlook.tanggal = this.tanggalEditKurs
    console.log('Data yang di-submit:', this.formDataOutlook);
  }

  async ngOnInit(): Promise<void> {
    console.log('load data');

    await this.getData();
    await this.getDataRealisasi();
    await this.getDataRkapKursUsd();
    await this.getDataOutlookKursUsd();

    this.tableConfig.initializeTableDataCurrency();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');

  }
  addRow() {
    this.tableConfig.tableRealisasiCurrencyRate.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRKAP.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlook.addRow({});
  }
}
