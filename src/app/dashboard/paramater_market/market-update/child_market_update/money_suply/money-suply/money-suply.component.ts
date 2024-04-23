import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-money-suply',
  templateUrl: './money-suply.component.html',
  styleUrls: ['./money-suply.component.css']
})
export class MoneySuplyComponent {
  constructor(
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  dataDetail: any;
  dataMoneySupply:any;
  dataDetailRealisasi: any;
  dataDetailRkap: any;
  dataDetailOutlook: any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  realisasiPdbItem!: number;

  allLabelDate: any[] = [];
  allLabelYear: any[] = [];
  getLabelYear: any;
  tanggalEditKurs: any;
  namaEditKurs: any;
  nilaiEditKurs: any;

  months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiMoneySupply();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data.content;
      if (this.dataDetailRealisasi == null){
        console.log('data kosong')
      } else {
        this.dataDetailRealisasi.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
          const aIndex = this.months.indexOf(a.bulan);
          const bIndex = this.months.indexOf(b.bulan);
  
          if (a.tahun > b.tahun) {
            return -1;
          }
          if (a.tahun < b.tahun) {
            return 1;
          }
          if (aIndex > bIndex) {
            return 1;
          }
          if (aIndex < bIndex) {
            return -1;
          }
          return 0;
        });
      }
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    if (this.dataDetailRealisasi == null){
      console.log('data kosong')
    } else {
      this.dataDetailRealisasi.map((item: any) =>{
        item.triliun_beredar != null ? item.triliun_beredar = parseFloat(item.triliun_beredar) : item.triliun_beredar = 0;
        item.triliun_beredar = item.triliun_beredar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      });
    }
    this.tableConfig.setDataRealisasiMoneySupply(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataAllRkap();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data.content;
      if (this.dataDetailRkap == null){
        console.log('data kosong')
      }else{
        this.dataDetailRkap.sort((a: { tahun: number; }, b: { tahun: number; }) => {
          const aYear = a.tahun || 0;
          const bYear = b.tahun || 0;
          return bYear - aYear;
        });
      }
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRkap = this.dataDetailRkap.filter((item:any)=>{
      return item.mtu ==="MONEY_SUPPLY"
    })
    if (this.dataDetailRkap == null){
      console.log('data kosong')
    } else {
      this.dataDetailRkap.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      })
    }
    this.tableConfig.setDataRkapMoneySupply(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data.content;
      if (this.dataDetailOutlook == null){
        console.log('data kosong')
      } else {
        this.dataDetailOutlook.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
          const aIndex = this.months.indexOf(a.bulan);
          const bIndex = this.months.indexOf(b.bulan);
  
          if (a.tahun > b.tahun) {
            return -1;
          }
          if (a.tahun < b.tahun) {
            return 1;
          }
          if (aIndex > bIndex) {
            return 1;
          }
          if (aIndex < bIndex) {
            return -1;
          }
          return 0;
        });
      }    
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    if (this.dataDetailOutlook == null){
      console.log('data kosong')
    } else {
      this.dataDetailOutlook.map((item: any) =>{
        item.triliun_beredar != null ? item.triliun_beredar = parseFloat(item.triliun_beredar) : item.triliun_beredar = 0;
        item.triliun_beredar = item.triliun_beredar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      });
    }
    this.tableConfig.setDataOutlookMoneySupply(this.dataDetailOutlook);
    console.log('finish get data in func');
  }

  async ngOnInit(): Promise<void> {
    console.log('load data');
    try {
      this.isLoading = true;

      let today = moment().format('DD/MM/YYYY')

      const responseMoneySupply = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "MONEY");

      this.dataMoneySupply = responseMoneySupply;
      
      if(this.dataMoneySupply.data.length > 0){
        this.getLabelYear = this.dataMoneySupply.data.filter((item: any) => {
          return item.bulan === 'Bulan';
        })
        this.dataMoneySupply = this.dataMoneySupply.data.filter((item: any) => {
          return item.bulan !== 'Bulan'
        })
      }
      else{
      this.dataMoneySupply = [];
      }
      this.dataMoneySupply = this.dataMoneySupply.map((item: any)=>{
        item.year_min_0 != null ? item.year_min_0 = parseFloat(item.year_min_0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_0 = 0;

        item.year_min_1 != null ? item.year_min_1 = parseFloat(item.year_min_1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_1 = 0;

        item.year_min_2 != null ? item.year_min_2 = parseFloat(item.year_min_2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_2 = 0;

        item.year_min_3 != null ? item.year_min_3 = parseFloat(item.year_min_3).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_3 = 0;
        return item;
      })
      this.allLabelYear = [];

      this.allLabelYear.push(this.getLabelYear[0].year_min_0);
      this.allLabelYear.push(this.getLabelYear[0].year_min_1);
      this.allLabelYear.push(this.getLabelYear[0].year_min_2);
      this.allLabelYear.push(this.getLabelYear[0].year_min_3);

      console.log(this.allLabelYear);
      console.log(this.dataMoneySupply)
      this.tableConfig.setDataMoneySupply(this.dataMoneySupply);

      this.isLoading = false;

    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }

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

    // await this.getData();
    await this.getDataRealisasi();
    await this.getDataRkap();
    await this.getDataOutlook();

    this.tableConfig.initializeTableDataMoneySupply( this.allLabelYear);
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }
  addRow() {
    this.tableConfig.tableRealisasiMoneySupply.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRkapMoneySupply.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookMoneySupply.addRow({});
  }
}
