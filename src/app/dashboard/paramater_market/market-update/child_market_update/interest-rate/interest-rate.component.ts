import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-interest-rate',
  templateUrl: './interest-rate.component.html',
  styleUrls: ['./interest-rate.component.css']
})
export class InterestRateComponent implements OnInit, AfterViewInit {

  constructor(
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  dataDetail: any;
  dataDetailRealisasi: any;
  dataDetailRkap: any;
  dataDetailOutlook: any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  realisasiKursItem!: number;
  dataInterestRate: any;
  getLabelInterestRate: any;
  allLabelDate: any[] = [];

  maxDate = new Date();


  // async getData(){
  //   this.isLoading = true;
  //   console.log(this.isLoading, 'loading 1');
  //   let getYear = moment().format('YYYY');
  //   let today = moment().format('DD/MM/YYYY')
  //   try {
  //     const data = await this.marketUpdateService.fetchDataInterestRate(today);
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
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiInterestRate();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRealisasiInterestRate(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataAllRkap();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRkap = this.dataDetailRkap.content.filter((item:any)=>{
      return item.grup ==="INTEREST_RATE"
    })
    this.tableConfig.setDataRkapInterestRate(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookInterestRate();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataOutlookInterestRate(this.dataDetailOutlook);
    console.log('finish get data in func');
  }

  async ngOnInit(): Promise<void> {
    try {

      // const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesAll();
      this.isLoading = true;
      // this.lineChartCommodity.initializeCommoditiesLineChart();

      let today = moment().format('DD/MM/YYYY')

      console.log('load before fetch: ' + this.isLoading);
      const responseKurs = await this.marketUpdateService.fetchDataKurs(today);
      const responseInterestRate = await this.marketUpdateService.fetchDataInterestRate(today);
      

      // this.dataKurs = this.dataKurs.filter((item: any) => !item.kode.includes('Label'));

      this.dataInterestRate = responseInterestRate;
      if(this.dataInterestRate.d.length > 0){
        this.getLabelInterestRate = this.dataInterestRate.d.filter((item: any) => item.kode.includes('Label'));
        this.dataInterestRate = this.dataInterestRate.d.filter((item: any) => !item.kode.includes('Label'))
        this.dataInterestRate = this.dataInterestRate.map((item: any) => {

          item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2);
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 = parseFloat(item.h_min_0).toFixed(2);
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 = parseFloat(item.h_min_1).toFixed(2);
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 = parseFloat(item.h_min_7).toFixed(2);
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 = parseFloat(item.h_min_30).toFixed(2);
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap = parseFloat(item.change_rkap).toFixed(2);
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow = parseFloat(item.change_wow).toFixed(2);
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom = parseFloat(item.change_mom).toFixed(2);
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day = parseFloat(item.change_1day).toFixed(2);
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item
        })
      }
      else{
        this.dataInterestRate = [];
        this.getLabelInterestRate = [];
      }
      this.allLabelDate.push(this.getLabelInterestRate);
      this.tableConfig.getDataInterestRate(this.dataInterestRate);
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
    this.tableConfig.getDataInterestRate(this.dataInterestRate);

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

    console.log('load data');

    // await this.getData();
    await this.getDataRealisasi();
    await this.getDataRkap();
    await this.getDataOutlook();
    
    this.tableConfig.initializeTableDataInterestRate(this.allLabelDate);
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }

  addRow() {
    this.tableConfig.tableRealisasiInterestRate.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRkapInterestRate.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookInterestRate.addRow({});
  }
}
