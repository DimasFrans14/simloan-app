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
  allLabelDate: any[] = []

  getLabelDateKurs: any;
  dataKurs: any;
  
  tanggalEditKurs: any;
  namaEditKurs: any;
  nilaiEditKurs: any;

  maxDate = new Date();


  // async getData(){
  //   this.isLoading = true;
  //   console.log(this.isLoading, 'loading 1');
  //   let getYear = moment().format('YYYY')
  //   try {
  //     const data = await this.marketUpdateService.fetchDataKurs(getYear);
  //     this.dataDetail = data;
  //     this.dataDetail = this.dataDetail.d.list;
  //     this.isLoading = false;
  //     console.log(this.isLoading, 'loading 2', this.dataDetail);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   this.tableConfig.setData(this.dataDetail);
  //   console.log('finish get data in func');
  // }
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

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;
      let today = moment().format('DD/MM/YYYY')

      console.log('load before fetch: ' + this.isLoading);
      const responseKurs = await this.marketUpdateService.fetchDataKurs(today);

      this.getLabelDateKurs = responseKurs;
      this.dataKurs = responseKurs;

      if(this.dataKurs.d.length > 0){
        this.getLabelDateKurs = this.getLabelDateKurs.d.filter((item: any) => item.kode.includes('Label'));
      console.log('before', this.getLabelDateKurs);
      this.dataKurs = this.dataKurs.d.map((item: any) => {
        if(item.kode === 'Label'){
        }
        else{
          item.nilai_rkap = parseFloat(item.nilai_rkap);
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_0 = parseFloat(item.h_min_0);
          item.h_min_0 = item.h_min_0.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_1 = parseFloat(item.h_min_1);
          item.h_min_1 = item.h_min_1.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_7 = parseFloat(item.h_min_7);
          item.h_min_7 = item.h_min_7.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_30 = parseFloat(item.h_min_30);
          item.h_min_30 = item.h_min_30.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_rkap = parseFloat(item.change_rkap);
          item.change_rkap = item.change_rkap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_wow = parseFloat(item.change_wow);
          item.change_wow = item.change_wow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_mom = parseFloat(item.change_mom);
          item.change_mom = item.change_mom.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_1day = parseFloat(item.change_1day);
          item.change_1day = item.change_1day.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          return item
        }
      })

      console.log(this.dataKurs);
      console.log('after', this.getLabelDateKurs);
      }
      else{
        this.dataKurs = [];
        this.getLabelDateKurs = []
      }
        
      this.allLabelDate.push(this.getLabelDateKurs);

      this.tableConfig.getDataKurs(this.dataKurs);
      this.isLoading = false;
      console.log('load after fetch: ' + this.isLoading);


    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }

    this.tableConfig.getDataKurs(this.dataKurs);

    let today = new Date();
    let formatToday = moment(today).format("DD/MM/YYYY").toString();

    let getYesterday = new Date();
    let yesterday = getYesterday.setDate(getYesterday.getDate() - 1);
    let formatYesterday = moment(yesterday).format("DD/MM/YYYY").toString();

    let getTwoDaysBefore = new Date();
    let twoDaysBefore = getTwoDaysBefore.setDate(getTwoDaysBefore.getDate() - 2);
    let formatTwoDaysBefore = moment(twoDaysBefore).format("DD/MM/YYYY").toString();

    let getThreeDaysBefore = new Date();
    let threeDaysBefore = getThreeDaysBefore.setDate(getThreeDaysBefore.getDate() - 3);
    let formatThreeDaysBefore = moment(threeDaysBefore).format("DD/MM/YYYY").toString();

    console.log(this.getLabelDateKurs);

    console.log('load data');
    
    // await this.getData();
    await this.getDataRealisasi();
    await this.getDataRkapKursUsd();
    await this.getDataOutlookKursUsd();

    this.tableConfig.initializeTableDataCurrency(this.allLabelDate);
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
