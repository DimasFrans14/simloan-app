import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import {TabulatorFull as Tabulator} from 'tabulator-tables';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { DataService } from 'src/app/data.service';
// import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

import { ViewportScroller } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import { OverviewChartService } from 'src/app/services/chart_serivces/overviewChart/overview-chart.service';

interface ExcelData {
  [key: string]: any;
}

@Component({
  selector: 'app-market-update',
  templateUrl: './market-update.component.html',
  styleUrls: ['./market-update.component.css']
})
export class MarketUpdateComponent implements OnInit, AfterViewInit{

  constructor(
    private tableConfig: TableServicesService,
    private viewportScroller: ViewportScroller,
    private marketUpdateService: MarketUpdateService,
    private lineChartCommodity: OverviewChartService
    // private router: Router
    ){
      // console.log(this.lineChartCommodity);
    }

    @ViewChild('datePickerValue', {read:MatInput}) inputDate!: MatInput;

    public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
  }

  excelDataJSON: ExcelData[] = [];

  dataExcel: any;
  excelDataTable: any;

  tableDataCurrency: any;
  tableCurrency:any;

  tableDataInterest: any;
  tableInterest:any;

  tableDataBondYield:any;
  tableBondYield:any;

  tableDataCommodities: any;
  tableCommodities: any;

  tablePMI: any;
  tableDataPMI: any;

  tableRetail: any;
  tableDataRetail: any;

  tableMoneySupply: any;
  tableDataMoneySupply: any;

  tableForeignExchange: any;
  tableDataForeignExchange: any;

  tableUpdate:any;

  files: File[] = [];

  isLoading: boolean = false;
  isLoadingTableKurs: Boolean = false;
  isLoadingTableInterest: boolean = false;
  isLoadingTableBondYield: boolean = false;
  isLoadingTableCommodity: boolean = false;
  isLoadingTablePDB: boolean = false;
  isLoadingTablePMI: boolean = false;
  isLoadingTableInflasi: boolean = false;
  isLoadingTableRetail: boolean = false;
  isLoadingTableM2: boolean = false;
  isLoadingTableCadev: boolean = false;

  //test dev data source
  testData: any;
  testAPIdata: any;

  commoditySeries = this.lineChartCommodity.lineSeries;
  commodityXaxis = this.lineChartCommodity.lineXAxis;
  commodityYaxis = this.lineChartCommodity.lineYaxis;
  commodityChart = this.lineChartCommodity.lineChartDetail;
  commodityStroke = this.lineChartCommodity.lineStroke;

  readExcel(event: any){
    let file = event.addedFiles[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {

      let data;

      var workbook = XLSX.read(fileReader.result, {type:'binary'});
      var sheetNames = workbook.SheetNames;
      // this.excelDataJSON =  XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

      for(let i=0; i<sheetNames.length; i++){
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[i]]);
        this.excelDataJSON.push(data);
      }

      this.tableConfig.setData(this.excelDataJSON);
      // this.excelDataTable = XLSX.utils.sheet_to_html(workbook.Sheets[sheetNames[0]]);

      // this.html = this.sanitizer.bypassSecurityTrustHtml(this.excelDataTable);
      console.log(this.excelDataJSON);
    }
  }

  getDate(date: any){
    console.log(date);
    const formattedDate = moment(this.selectedDate).format('YYYY-MM-DD'); // Contoh format tanggal menggunakan Moment.js
    console.log(formattedDate);
  }

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.readExcel(event)
  }

    onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  dataRKAP: any;
  dataInflasi: any;
  dataMoneySupply: any;
  dataPMI: any;
  dataRetail: any;
  dataDevisa: any;

  selectedMonth!: string;
  selectedDate!: string;
  yesterday!: string;
  twoDaysBefore!: string;
  threeDaysBefore!:string;

  getLabelDateKurs: any;
  getLabelInterestRate: any;
  getLabelBondYield: any;
  getLabelCommodities: any;

  getLabelYear: any;

  allLabelDate: any[] = [];
  allLabelYear: any[] = [];

  //Limiting Datepicker to Today
  maxDate = new Date();

    async onDate(event: MatDatepickerInputEvent<Date>) {
      const formattedToday = moment(event.value).format("DD/MM/YYYY");

      let yesterday = moment(event.value).subtract(1, 'days').format("DD/MM/YYYY");
      let twoDaysBefore = moment(event.value).subtract(2, 'days').format("DD/MM/YYYY");
      let threeDaysBefore = moment(event.value).subtract(3, 'days').format("DD/MM/YYYY");

      console.log([formattedToday, yesterday, twoDaysBefore, threeDaysBefore]);

      // console.log(moment(tes).format("DD/MM/YYYY"));
      this.selectedDate = formattedToday;
      this.yesterday = yesterday;
      this.twoDaysBefore = twoDaysBefore;
      this.threeDaysBefore = threeDaysBefore;

      switch (formattedToday.slice(3, 5)) {
        case '01':
          this.selectedMonth = "Januari";
          break;
        case '02':
          this.selectedMonth = "Februari";
          break;
        case '03':
          this.selectedMonth = "Maret";
          break;
        case '04':
          this.selectedMonth = "April";
          break;
        case '05':
          this.selectedMonth = "Mei";
          break;
        case '06':
          this.selectedMonth = "Juni";
          break;
        case '07':
          this.selectedMonth = "Juli";
          break;
        case '08':
          this.selectedMonth = "Agustus";
          break;
        case '09':
          this.selectedMonth = "September";
          break;
        case '10':
          this.selectedMonth = "Oktober";
          break;
        case '11':
          this.selectedMonth = "November";
          break;
        case '12':
          this.selectedMonth = "Desember";
          break;
      }

      // console.log(month);
  }

  updateColumn(){
    this.tableConfig.editTitle();
  }

  async searchData(){
    try {

      this.isLoading = true;
      // this.isLoadingTableKurs = true;
      // this.isLoadingTableInterest = true;
      // this.isLoadingTableBondYield = true;
      // this.isLoadingTableCommodity = true;
      // this.isLoadingTablePDB = true;
      // this.isLoadingTablePMI = true;
      // this.isLoadingTableInflasi = true;
      // this.isLoadingTableRetail = true;
      // this.isLoadingTableM2 = true;
      // this.isLoadingTableCadev = true;
      // this.lineChartCommodity.initializeCommoditiesLineChart();

      const responseKurs = await this.marketUpdateService.fetchDataKurs(this.selectedDate);
      const responseInterestRate = await this.marketUpdateService.fetchDataInterestRate(this.selectedDate);
      const responseBondYield = await this.marketUpdateService.fetchDataBondYield(this.selectedDate);
      const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesAll(this.selectedDate);
      const responsePDB = await this.marketUpdateService.fetchDataPDB();

      this.getLabelDateKurs = responseKurs;
      this.dataKurs = responseKurs;

      if(this.dataKurs.d.length > 0){
        this.getLabelDateKurs = this.getLabelDateKurs.d.filter((item: any) => item.kode.includes('Label'));

      console.log('before', this.getLabelDateKurs);


      this.dataKurs = this.dataKurs.d.map((item: any) => {

        if(item.kode === 'Label'){

        }
        else{
          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap) : item.nilai_rkap = 0;
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0) : item.h_min_0 = 0
          item.h_min_0 = item.h_min_0.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1) : item.h_min_1 = 0
          item.h_min_1 = item.h_min_1.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7) : item.h_min_7 = 0
          item.h_min_7 = item.h_min_7.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30) : item.h_min_30 = 0
          item.h_min_30 = item.h_min_30.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap) : item.change_rkap = 0;
          item.change_rkap = item.change_rkap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow) : item.change_wow = 0;
          item.change_wow = item.change_wow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom) : item.change_mom = 0;
          item.change_mom = item.change_mom.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day) : item.change_1day = 0
          item.change_1day = item.change_1day.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          return item
        }


      })

      console.log(this.dataKurs);
      console.log('after', this.getLabelDateKurs);
      this.isLoadingTableKurs = false;
      }
      else{
        this.dataKurs = [];
        this.getLabelDateKurs = [];
      this.isLoadingTableKurs = false;

      }

      // this.dataKurs = this.dataKurs.filter((item: any) => !item.kode.includes('Label'));

      this.dataInterestRate = responseInterestRate;
      if(this.dataInterestRate.d.length > 0){
        this.getLabelInterestRate = this.dataInterestRate.d.filter((item: any) => item.kode.includes('Label'));

        this.dataInterestRate = this.dataInterestRate.d.filter((item: any) => !item.kode.includes('Label'))


        this.dataInterestRate = this.dataInterestRate.map((item: any) => {

          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0;
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0;
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0;
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0;
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0;
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0;
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0;
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0;
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0;
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item
        })
      this.isLoadingTableInterest = false;
      }
      else{
        this.dataInterestRate = [];
        this.getLabelInterestRate = [];
      this.isLoadingTableInterest = false;

      }

      this.dataBondYieldSBN = responseBondYield;
      if(this.dataBondYieldSBN.d.length > 0){
        this.getLabelBondYield = this.dataBondYieldSBN.d.filter((item: any) => item.tenor === 'Label');

        this.dataBondYieldSBN = this.dataBondYieldSBN.d.filter((item: any) => item.tipe.includes('SBN') && item.tenor != 'Label');

        this.dataBondYieldSBN = this.dataBondYieldSBN.map((item: any) => {

          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item;
        })

        this.dataBondYieldUST = responseBondYield;
        this.dataBondYieldUST = this.dataBondYieldUST.d.filter((item: any) => item.tipe.includes('US_TREASURY'));

        this.dataBondYieldUST = this.dataBondYieldUST.map((item: any) => {

          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item;
        })

        console.log(this.dataBondYieldSBN, this.dataBondYieldUST);
        this.isLoadingTableBondYield = false;
      }
      else{
        this.dataBondYieldSBN = [];
        this.dataBondYieldUST = [];
        this.getLabelBondYield = [];
        this.isLoadingTableBondYield = false;
      }

      this.dataCommodtities = responseCommodities;
      if(this.dataCommodtities.d.length > 0){
        this.getLabelCommodities = this.dataCommodtities.d.filter((item: any) => item.kode.includes('Label'));

        this.dataCommodtities = this.dataCommodtities.d.filter((item: any) => !item.kode.includes('Label'));

        this.dataCommodtities = this.dataCommodtities.map((item: any) => {

          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item;
        })
        this.isLoadingTableCommodity = false;
      }
      else{
        this.dataCommodtities = [];
        this.getLabelCommodities = [];
        this.isLoadingTableCommodity = false;
      }

      console.log('filter tanggal', [
        this.getLabelDateKurs,
        this.getLabelInterestRate,
        this.getLabelBondYield,
        this.getLabelCommodities
      ]);

      this.allLabelDate = [];

      this.allLabelDate.push(this.getLabelDateKurs);
      this.allLabelDate.push(this.getLabelInterestRate);
      this.allLabelDate.push(this.getLabelBondYield);
      this.allLabelDate.push(this.getLabelCommodities);


      console.log(this.allLabelDate);

      this.dataPDB = responsePDB;
      if(this.dataPDB.data.hasOwnProperty('content')){
        this.dataPDB = this.dataPDB.data.content.map((item: any) => {
          item.nilai != null ? item.nilai = item.nilai.toFixed(2): item.nilai = 0;
          item.nilai = item.nilai.toLocaleString('en-US');

          return item
        })
        this.isLoadingTablePDB = false;
      }
      else{
        this.dataPDB = [];
        this.isLoadingTablePDB = false;
      }

      const responseInflasi = await this.marketUpdateService.fetchAllDataMacroIndicator(this.selectedDate, "INFLASI");

      this.dataInflasi = responseInflasi;

      if(this.dataInflasi.data.length > 0){
        this.getLabelYear = this.dataInflasi.data.filter((item: any) => {
          return item.bulan === 'Bulan';
        })
        this.dataInflasi = this.dataInflasi.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataInflasi = this.dataInflasi.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableInflasi = false;
      }
      else{
        this.dataInflasi = [];
        // this.isLoadingTableInflasi = false;
      }

      const responsePMI = await this.marketUpdateService.fetchAllDataMacroIndicator(this.selectedDate, "PMI");
      this.dataPMI = responsePMI;

      if(this.dataPMI.data.length > 0){
        this.dataPMI = this.dataPMI.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataPMI = this.dataPMI.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTablePMI = false;
      }else{
        this.dataPMI = [];
        // this.isLoadingTablePMI = false;
      }

      const responseRetail = await this.marketUpdateService.fetchAllDataMacroIndicator(this.selectedDate, "RETAIL");
      this.dataRetail = responseRetail;

      if(this.dataRetail.data.length > 0){
        this.dataRetail = this.dataRetail.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataRetail = this.dataRetail.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableRetail = false;
      }else{
        this.dataRetail = [];
        // this.isLoadingTableRetail = false;
      }

      const responseMoneySupply = await this.marketUpdateService.fetchAllDataMacroIndicator(this.selectedDate, "MONEY");
      this.dataMoneySupply = responseMoneySupply;

      if(this.dataMoneySupply.data.length > 0){
        this.dataMoneySupply = this.dataMoneySupply.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataMoneySupply = this.dataMoneySupply.map((item: any) => {
          // Parse and format number with locale string
          item.year_min_0 != null ? item.year_min_0 = parseFloat(item.year_min_0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_0 = 0;

          item.year_min_1 != null ? item.year_min_1 = parseFloat(item.year_min_1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_1 = 0;

          item.year_min_2 != null ? item.year_min_2 = parseFloat(item.year_min_2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_2 = 0;

          item.year_min_3 != null ? item.year_min_3 = parseFloat(item.year_min_3).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_3 = 0;

          return item;
      });
      // this.isLoadingTableRetail = false;
      }
      else{
        this.dataMoneySupply = [];
      // this.isLoadingTableRetail = false;
      }

      const responseDevisa = await this.marketUpdateService.fetchAllDataMacroIndicator(this.selectedDate, "CADEV");
      this.dataDevisa = responseDevisa;

      if(this.dataDevisa.data.length > 0){
        this.dataDevisa = this.dataDevisa.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataDevisa = this.dataDevisa.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableCadev = false;
      }else{
        this.dataDevisa = [];
        // this.isLoadingTableCadev = false;
      }

      this.allLabelYear = [];

      this.allLabelYear.push(this.getLabelYear[0].year_min_0);
      this.allLabelYear.push(this.getLabelYear[0].year_min_1);
      this.allLabelYear.push(this.getLabelYear[0].year_min_2);
      this.allLabelYear.push(this.getLabelYear[0].year_min_3);

      console.log(this.allLabelYear);

      this.tableConfig.getDataKurs(this.dataKurs);
      this.tableConfig.getDataInterestRate(this.dataInterestRate);

      console.log(this.dataBondYieldSBN, this.dataBondYieldUST);

      this.tableConfig.getDataBondYield(this.dataBondYieldSBN, this.dataBondYieldUST);
      this.tableConfig.getDataCommodities(this.dataCommodtities);
      this.tableConfig.getDataPDB(this.dataPDB);
      this.tableConfig.getDataInflasi(this.dataInflasi);
      this.tableConfig.getDataPMI(this.dataPMI);
      this.tableConfig.getDataRetail(this.dataRetail);
      this.tableConfig.getDataMoneySupply(this.dataMoneySupply);
      this.tableConfig.getDataDevisa(this.dataDevisa);

      // const responseInflasi = await this.marketUpdateService.fetchDataViewInflasiByDate(this.selectedDate, this.selectedMonth);
      // this.dataInflasi = responseInflasi
      // this.tableConfig.updateTabelInflasi(this.dataInflasi);

      // const responsePMI = await this.marketUpdateService.fetchDataViewPMIByDate(this.selectedDate, this.selectedMonth);
      // this.dataPMI = responsePMI
      // this.tableConfig.updateTabelPMI(this.dataPMI.data);

      // const responseRetail = await this.marketUpdateService.fetchDataViewRetailByDate(this.selectedDate, this.selectedMonth);
      // this.dataRetail = responseRetail
      // this.tableConfig.updateTabelRetail(this.dataRetail.data);

      // const responseMoneySupply = await this.marketUpdateService.fetchDataViewnMoneySupplyByDate(this.selectedDate,this.selectedMonth)
      // this.dataMoneySupply = responseMoneySupply;
      // this.tableConfig.updateTabelMoneySuply(this.dataMoneySupply.data);

      // const responseDevisa = await this.marketUpdateService.fetchDataViewDevisaByDate(this.selectedDate, this.selectedMonth);
      // this.dataDevisa = responseDevisa
      // this.tableConfig.updateTabelDevisa(this.dataDevisa.data);

      this.tableConfig.initializeTableData(this.allLabelDate, this.allLabelYear);
      this.isLoading = false;

    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
  }

  async resetFilter(){
    // this.tableConfig.getBackData();
    // this.inputDate.value = '';

    // let today = new Date();
    // let formatToday = moment(today).format("DD/MM/YYYY").toString();

    // let getYesterday = new Date();
    // let yesterday = getYesterday.setDate(getYesterday.getDate() - 1);
    // let formatYesterday = moment(yesterday).format("DD/MM/YYYY").toString();

    // let getTwoDaysBefore = new Date();
    // let twoDaysBefore = getTwoDaysBefore.setDate(getTwoDaysBefore.getDate() - 2);
    // let formatTwoDaysBefore = moment(twoDaysBefore).format("DD/MM/YYYY").toString();

    // let getThreeDaysBefore = new Date();
    // let threeDaysBefore = getThreeDaysBefore.setDate(getThreeDaysBefore.getDate() - 3);
    // let formatThreeDaysBefore = moment(threeDaysBefore).format("DD/MM/YYYY").toString();

    this.isLoading = true;
    const today = moment().format('DD/MM/YYYY');

    const responseKurs = await this.marketUpdateService.fetchDataKurs(today);
      const responseInterestRate = await this.marketUpdateService.fetchDataInterestRate(today);
      const responseBondYield = await this.marketUpdateService.fetchDataBondYield(today);
      const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesAll(today);
      const responsePDB = await this.marketUpdateService.fetchDataPDB();

      this.getLabelDateKurs = responseKurs;
      this.dataKurs = responseKurs;

    if(this.dataKurs.d.length > 0){
      this.getLabelDateKurs = this.getLabelDateKurs.d.filter((item: any) => item.kode.includes('Label'));

    console.log('before', this.getLabelDateKurs);


    this.dataKurs = this.dataKurs.d.map((item: any) => {

      if(item.kode === 'Label'){

      }
      else{
        item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap) : item.nilai_rkap = 0;
        item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0) : item.h_min_0 = 0
        item.h_min_0 = item.h_min_0.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1) : item.h_min_1 = 0
        item.h_min_1 = item.h_min_1.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7) : item.h_min_7 = 0
        item.h_min_7 = item.h_min_7.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30) : item.h_min_30 = 0
        item.h_min_30 = item.h_min_30.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap) : item.change_rkap = 0;
        item.change_rkap = item.change_rkap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        item.change_wow != null ? item.change_wow = parseFloat(item.change_wow) : item.change_wow = 0;
        item.change_wow = item.change_wow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        item.change_mom != null ? item.change_mom = parseFloat(item.change_mom) : item.change_mom = 0;
        item.change_mom = item.change_mom.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        item.change_1day != null ? item.change_1day = parseFloat(item.change_1day) : item.change_1day = 0
        item.change_1day = item.change_1day.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item
      }


    })

    console.log(this.dataKurs);
    console.log('after', this.getLabelDateKurs);
    // this.isLoadingTableKurs = false;
    }
    else{
      this.dataKurs = [];
      this.getLabelDateKurs = [];
    // this.isLoadingTableKurs = false;

    }

    // this.dataKurs = this.dataKurs.filter((item: any) => !item.kode.includes('Label'));

    this.dataInterestRate = responseInterestRate;
    if(this.dataInterestRate.d.length > 0){
      this.getLabelInterestRate = this.dataInterestRate.d.filter((item: any) => item.kode.includes('Label'));

      this.dataInterestRate = this.dataInterestRate.d.filter((item: any) => !item.kode.includes('Label'))


      this.dataInterestRate = this.dataInterestRate.map((item: any) => {

        item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0;
        item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

        item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0;
        item.h_min_0 = item.h_min_0.toLocaleString('en-US');

        item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0;
        item.h_min_1 = item.h_min_1.toLocaleString('en-US');

        item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0;
        item.h_min_7 = item.h_min_7.toLocaleString('en-US');

        item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0;
        item.h_min_30 = item.h_min_30.toLocaleString('en-US');

        item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0;
        item.change_rkap = item.change_rkap.toLocaleString('en-US');

        item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0;
        item.change_wow = item.change_wow.toLocaleString('en-US');

        item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0;
        item.change_mom = item.change_mom.toLocaleString('en-US');

        item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0;
        item.change_1day = item.change_1day.toLocaleString('en-US');
        return item
      })
    // this.isLoadingTableInterest = false;
    }
    else{
      this.dataInterestRate = [];
      this.getLabelInterestRate = [];
    // this.isLoadingTableInterest = false;

    }

    this.dataBondYieldSBN = responseBondYield;
    if(this.dataBondYieldSBN.d.length > 0){
      this.getLabelBondYield = this.dataBondYieldSBN.d.filter((item: any) => item.tenor === 'Label');

      this.dataBondYieldSBN = this.dataBondYieldSBN.d.filter((item: any) => item.tipe.includes('SBN') && item.tenor != 'Label');

      this.dataBondYieldSBN = this.dataBondYieldSBN.map((item: any) => {

        item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
        item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

        item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
        item.h_min_0 = item.h_min_0.toLocaleString('en-US');

        item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
        item.h_min_1 = item.h_min_1.toLocaleString('en-US');

        item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
        item.h_min_7 = item.h_min_7.toLocaleString('en-US');

        item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
        item.h_min_30 = item.h_min_30.toLocaleString('en-US');

        item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
        item.change_rkap = item.change_rkap.toLocaleString('en-US');

        item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
        item.change_wow = item.change_wow.toLocaleString('en-US');

        item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
        item.change_mom = item.change_mom.toLocaleString('en-US');

        item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
        item.change_1day = item.change_1day.toLocaleString('en-US');
        return item;
      })

      this.dataBondYieldUST = responseBondYield;
      this.dataBondYieldUST = this.dataBondYieldUST.d.filter((item: any) => item.tipe.includes('US_TREASURY'));

      this.dataBondYieldUST = this.dataBondYieldUST.map((item: any) => {

        item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
        item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

        item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
        item.h_min_0 = item.h_min_0.toLocaleString('en-US');

        item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
        item.h_min_1 = item.h_min_1.toLocaleString('en-US');

        item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
        item.h_min_7 = item.h_min_7.toLocaleString('en-US');

        item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
        item.h_min_30 = item.h_min_30.toLocaleString('en-US');

        item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
        item.change_rkap = item.change_rkap.toLocaleString('en-US');

        item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
        item.change_wow = item.change_wow.toLocaleString('en-US');

        item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
        item.change_mom = item.change_mom.toLocaleString('en-US');

        item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
        item.change_1day = item.change_1day.toLocaleString('en-US');
        return item;
      })

      console.log(this.dataBondYieldSBN, this.dataBondYieldUST);
      // this.isLoadingTableBondYield = false;
    }
    else{
      this.dataBondYieldSBN = [];
      this.dataBondYieldUST = [];
      this.getLabelBondYield = [];
      // this.isLoadingTableBondYield = false;
    }

    this.dataCommodtities = responseCommodities;
    if(this.dataCommodtities.d.length > 0){
      this.getLabelCommodities = this.dataCommodtities.d.filter((item: any) => item.kode.includes('Label'));

      this.dataCommodtities = this.dataCommodtities.d.filter((item: any) => !item.kode.includes('Label'));

      this.dataCommodtities = this.dataCommodtities.map((item: any) => {

        item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
        item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

        item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
        item.h_min_0 = item.h_min_0.toLocaleString('en-US');

        item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
        item.h_min_1 = item.h_min_1.toLocaleString('en-US');

        item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
        item.h_min_7 = item.h_min_7.toLocaleString('en-US');

        item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
        item.h_min_30 = item.h_min_30.toLocaleString('en-US');

        item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
        item.change_rkap = item.change_rkap.toLocaleString('en-US');

        item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
        item.change_wow = item.change_wow.toLocaleString('en-US');

        item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
        item.change_mom = item.change_mom.toLocaleString('en-US');

        item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
        item.change_1day = item.change_1day.toLocaleString('en-US');
        return item;
      })
      // this.isLoadingTableCommodity = false;
    }
    else{
      this.dataCommodtities = [];
      this.getLabelCommodities = [];
      // this.isLoadingTableCommodity = false;
    }

    console.log('filter tanggal', [
      this.getLabelDateKurs,
      this.getLabelInterestRate,
      this.getLabelBondYield,
      this.getLabelCommodities
    ]);

    this.allLabelDate = [];

    this.allLabelDate.push(this.getLabelDateKurs);
    this.allLabelDate.push(this.getLabelInterestRate);
    this.allLabelDate.push(this.getLabelBondYield);
    this.allLabelDate.push(this.getLabelCommodities);


    console.log(this.allLabelDate);

    this.dataPDB = responsePDB;
    if(this.dataPDB.data.hasOwnProperty('content')){
      this.dataPDB = this.dataPDB.data.content.map((item: any) => {
        item.nilai != null ? item.nilai = item.nilai.toFixed(2): item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US');

        return item
      })
      // this.isLoadingTablePDB = false;
    }
    else{
      this.dataPDB = [];
      // this.isLoadingTablePDB = false;
    }

    const responseInflasi = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "INFLASI");

      this.dataInflasi = responseInflasi;

      if(this.dataInflasi.data.length > 0){
        this.getLabelYear = this.dataInflasi.data.filter((item: any) => {
          return item.bulan === 'Bulan';
        })
        this.dataInflasi = this.dataInflasi.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataInflasi = this.dataInflasi.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableInflasi = false;
      }
      else{
        this.dataInflasi = [];
        // this.isLoadingTableInflasi = false;
      }

      const responsePMI = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "PMI");
      this.dataPMI = responsePMI;

      if(this.dataPMI.data.length > 0){
        this.dataPMI = this.dataPMI.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataPMI = this.dataPMI.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTablePMI = false;
      }else{
        this.dataPMI = [];
        // this.isLoadingTablePMI = false;
      }

      const responseRetail = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "RETAIL");
      this.dataRetail = responseRetail;

      if(this.dataRetail.data.length > 0){
        this.dataRetail = this.dataRetail.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataRetail = this.dataRetail.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableRetail = false;
      }else{
        this.dataRetail = [];
        // this.isLoadingTableRetail = false;
      }

      const responseMoneySupply = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "MONEY");
      this.dataMoneySupply = responseMoneySupply;

      if(this.dataMoneySupply.data.length > 0){
        this.dataMoneySupply = this.dataMoneySupply.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataMoneySupply = this.dataMoneySupply.map((item: any) => {
          // Parse and format number with locale string
          item.year_min_0 != null ? item.year_min_0 = parseFloat(item.year_min_0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_0 = 0;

          item.year_min_1 != null ? item.year_min_1 = parseFloat(item.year_min_1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_1 = 0;

          item.year_min_2 != null ? item.year_min_2 = parseFloat(item.year_min_2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_2 = 0;

          item.year_min_3 != null ? item.year_min_3 = parseFloat(item.year_min_3).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_3 = 0;

          return item;
      });
      // this.isLoadingTableRetail = false;
      }
      else{
        this.dataMoneySupply = [];
      // this.isLoadingTableRetail = false;
      }

      const responseDevisa = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "CADEV");
      this.dataDevisa = responseDevisa;

      if(this.dataDevisa.data.length > 0){
        this.dataDevisa = this.dataDevisa.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataDevisa = this.dataDevisa.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableCadev = false;
      }else{
        this.dataDevisa = [];
        // this.isLoadingTableCadev = false;
      }

      this.allLabelYear = [];

      this.allLabelYear.push(this.getLabelYear[0].year_min_0);
      this.allLabelYear.push(this.getLabelYear[0].year_min_1);
      this.allLabelYear.push(this.getLabelYear[0].year_min_2);
      this.allLabelYear.push(this.getLabelYear[0].year_min_3);

      console.log(this.allLabelYear);

      this.tableConfig.getDataKurs(this.dataKurs);
      this.tableConfig.getDataInterestRate(this.dataInterestRate);

      console.log(this.dataBondYieldSBN, this.dataBondYieldUST);

      this.tableConfig.getDataBondYield(this.dataBondYieldSBN, this.dataBondYieldUST);
      this.tableConfig.getDataCommodities(this.dataCommodtities);
      this.tableConfig.getDataPDB(this.dataPDB);
      this.tableConfig.getDataInflasi(this.dataInflasi);
      this.tableConfig.getDataPMI(this.dataPMI);
      this.tableConfig.getDataRetail(this.dataRetail);
      this.tableConfig.getDataMoneySupply(this.dataMoneySupply);
      this.tableConfig.getDataDevisa(this.dataDevisa);

      this.tableConfig.initializeTableData(this.allLabelDate, this.allLabelYear);
      this.isLoading = false;
  }

  keysBondYield: any;
  filteredInterestRate: any;

  onSubmit(event: any) {
    let targetColumn = [];
    let targetBool = [];
    for(let i=0; i<event.target.length - 1; i++){
      if(event.target[i].checked){
        targetColumn.push(event.target[i].id);
      }
    }
    for(let i=0; i<event.target.length - 1; i++){
      if(event.target[i]){
        targetBool.push(event.target[i].checked);
      }
    }
    this.tableConfig.customizeTableColumn(targetColumn, targetBool)
  }

  hideColumn(){
    // this.tableConfig.hideColumn();
  }

  showColumn(){
    this.tableConfig.showColumn();
  }

  dataKurs: any;

  dataInterestRate: any;
  dataCommodtities: any;

  dataBondYieldSBN: any;
  dataBondYieldUST: any;

  dataPDB: any;

  async ngOnInit(): Promise<void> {
    try {

      // const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesAll();
      this.isLoading = true;

      // this.isLoadingTableKurs = true;
      // this.isLoadingTableInterest = true;
      // this.isLoadingTableBondYield = true;
      // this.isLoadingTableCommodity = true;
      // this.isLoadingTablePDB = true;
      // this.isLoadingTablePMI = true;
      // this.isLoadingTableInflasi = true;
      // this.isLoadingTableRetail = true;
      // this.isLoadingTableM2 = true;
      // this.isLoadingTableCadev = true;

      let today = moment().format('DD/MM/YYYY')

      const responseKurs = await this.marketUpdateService.fetchDataKurs(today);
      const responseInterestRate = await this.marketUpdateService.fetchDataInterestRate(today);
      const responseBondYield = await this.marketUpdateService.fetchDataBondYield(today);
      const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesAll(today);
      const responsePDB = await this.marketUpdateService.fetchDataPDB();

      this.getLabelDateKurs = responseKurs;
      this.dataKurs = responseKurs;

      if(this.dataKurs.d.length > 0){
        this.getLabelDateKurs = this.getLabelDateKurs.d.filter((item: any) => item.kode.includes('Label'));

        console.log('before', this.getLabelDateKurs);
        this.dataKurs = this.dataKurs.d.map((item: any) => {

        if(item.kode === 'Label'){

        }
        else{
          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap) : item.nilai_rkap = 0;
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0) : item.h_min_0 = 0
          item.h_min_0 = item.h_min_0.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1) : item.h_min_1 = 0
          item.h_min_1 = item.h_min_1.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7) : item.h_min_7 = 0
          item.h_min_7 = item.h_min_7.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30) : item.h_min_30 = 0
          item.h_min_30 = item.h_min_30.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap) : item.change_rkap = 0;
          item.change_rkap = item.change_rkap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow) : item.change_wow = 0;
          item.change_wow = item.change_wow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom) : item.change_mom = 0;
          item.change_mom = item.change_mom.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day) : item.change_1day = 0
          item.change_1day = item.change_1day.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          return item
        }
      })

      console.log(this.dataKurs);
      console.log('after', this.getLabelDateKurs);
      // this.isLoadingTableKurs = false;
      }
      else{
        this.dataKurs = [];
        this.getLabelDateKurs = [];
      // this.isLoadingTableKurs = false;

      }

      // this.dataKurs = this.dataKurs.filter((item: any) => !item.kode.includes('Label'));

      this.dataInterestRate = responseInterestRate;
      if(this.dataInterestRate.d.length > 0){
        this.getLabelInterestRate = this.dataInterestRate.d.filter((item: any) => item.kode.includes('Label'));

        this.dataInterestRate = this.dataInterestRate.d.filter((item: any) => !item.kode.includes('Label'))


        this.dataInterestRate = this.dataInterestRate.map((item: any) => {

          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0;
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0;
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0;
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0;
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0;
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0;
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0;
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0;
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0;
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item
        })
      // this.isLoadingTableInterest = false;
      }
      else{
        this.dataInterestRate = [];
        this.getLabelInterestRate = [];
      // this.isLoadingTableInterest = false;

      }

      this.dataBondYieldSBN = responseBondYield;
      if(this.dataBondYieldSBN.d.length > 0){
        this.getLabelBondYield = this.dataBondYieldSBN.d.filter((item: any) => item.tenor === 'Label');

        this.dataBondYieldSBN = this.dataBondYieldSBN.d.filter((item: any) => item.tipe.includes('SBN') && item.tenor != 'Label');

        this.dataBondYieldSBN = this.dataBondYieldSBN.map((item: any) => {

          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item;
        })

        this.dataBondYieldUST = responseBondYield;
        this.dataBondYieldUST = this.dataBondYieldUST.d.filter((item: any) => item.tipe.includes('US_TREASURY'));

        this.dataBondYieldUST = this.dataBondYieldUST.map((item: any) => {

          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item;
        })

        console.log(this.dataBondYieldSBN, this.dataBondYieldUST);
        // this.isLoadingTableBondYield = false;
      }
      else{
        this.dataBondYieldSBN = [];
        this.dataBondYieldUST = [];
        this.getLabelBondYield = [];
        // this.isLoadingTableBondYield = false;
      }

      this.dataCommodtities = responseCommodities;
      if(this.dataCommodtities.d.length > 0){
        this.getLabelCommodities = this.dataCommodtities.d.filter((item: any) => item.kode.includes('Label'));

        this.dataCommodtities = this.dataCommodtities.d.filter((item: any) => !item.kode.includes('Label'));

        this.dataCommodtities = this.dataCommodtities.map((item: any) => {

          item.nilai_rkap != null ? item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2) : item.nilai_rkap = 0
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 != null ? item.h_min_0 = parseFloat(item.h_min_0).toFixed(2) : item.h_min_0 = 0
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 != null ? item.h_min_1 = parseFloat(item.h_min_1).toFixed(2) : item.h_min_1 = 0
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 != null ? item.h_min_7 = parseFloat(item.h_min_7).toFixed(2) : item.h_min_7 = 0
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 != null ? item.h_min_30 = parseFloat(item.h_min_30).toFixed(2) : item.h_min_30 = 0
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap != null ? item.change_rkap = parseFloat(item.change_rkap).toFixed(2) : item.change_rkap = 0
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow != null ? item.change_wow = parseFloat(item.change_wow).toFixed(2) : item.change_wow = 0
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom != null ? item.change_mom = parseFloat(item.change_mom).toFixed(2) : item.change_mom = 0
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day != null ? item.change_1day = parseFloat(item.change_1day).toFixed(2) : item.change_1day = 0
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item;
        })
        // this.isLoadingTableCommodity = false;
      }
      else{
        this.dataCommodtities = [];
        this.getLabelCommodities = [];
        // this.isLoadingTableCommodity = false;
      }

      console.log('filter tanggal', [
        this.getLabelDateKurs,
        this.getLabelInterestRate,
        this.getLabelBondYield,
        this.getLabelCommodities
      ]);

      this.allLabelDate = [];

      this.allLabelDate.push(this.getLabelDateKurs);
      this.allLabelDate.push(this.getLabelInterestRate);
      this.allLabelDate.push(this.getLabelBondYield);
      this.allLabelDate.push(this.getLabelCommodities);


      console.log(this.allLabelDate);

      this.dataPDB = responsePDB;
      if(this.dataPDB.data.hasOwnProperty('content')){
        this.dataPDB = this.dataPDB.data.content.map((item: any) => {
          item.nilai != null ? item.nilai = item.nilai.toFixed(2): item.nilai = 0;
          item.nilai = item.nilai.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTablePDB = false;
      }
      else{
        this.dataPDB = [];
        // this.isLoadingTablePDB = false;
      }

      const responseInflasi = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "INFLASI");

      this.dataInflasi = responseInflasi;

      if(this.dataInflasi.data.length > 0){
        this.getLabelYear = this.dataInflasi.data.filter((item: any) => {
          return item.bulan === 'Bulan';
        })
        this.dataInflasi = this.dataInflasi.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataInflasi = this.dataInflasi.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableInflasi = false;
      }
      else{
        this.dataInflasi = [];
        // this.isLoadingTableInflasi = false;
      }

      const responsePMI = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "PMI");
      this.dataPMI = responsePMI;

      if(this.dataPMI.data.length > 0){
        this.dataPMI = this.dataPMI.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataPMI = this.dataPMI.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTablePMI = false;
      }else{
        this.dataPMI = [];
        // this.isLoadingTablePMI = false;
      }

      const responseRetail = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "RETAIL");
      this.dataRetail = responseRetail;

      if(this.dataRetail.data.length > 0){
        this.dataRetail = this.dataRetail.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataRetail = this.dataRetail.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableRetail = false;
      }else{
        this.dataRetail = [];
        // this.isLoadingTableRetail = false;
      }

      const responseMoneySupply = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "MONEY");
      this.dataMoneySupply = responseMoneySupply;

      if(this.dataMoneySupply.data.length > 0){
        this.dataMoneySupply = this.dataMoneySupply.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataMoneySupply = this.dataMoneySupply.map((item: any) => {
          // Parse and format number with locale string
          item.year_min_0 != null ? item.year_min_0 = parseFloat(item.year_min_0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_0 = 0;

          item.year_min_1 != null ? item.year_min_1 = parseFloat(item.year_min_1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_1 = 0;

          item.year_min_2 != null ? item.year_min_2 = parseFloat(item.year_min_2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_2 = 0;

          item.year_min_3 != null ? item.year_min_3 = parseFloat(item.year_min_3).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.year_min_3 = 0;

          return item;
      });
      // this.isLoadingTableRetail = false;
      }
      else{
        this.dataMoneySupply = [];
      // this.isLoadingTableRetail = false;
      }

      const responseDevisa = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "CADEV");
      this.dataDevisa = responseDevisa;

      if(this.dataDevisa.data.length > 0){
        this.dataDevisa = this.dataDevisa.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataDevisa = this.dataDevisa.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableCadev = false;
      }else{
        this.dataDevisa = [];
        // this.isLoadingTableCadev = false;
      }

      this.allLabelYear = [];

      this.allLabelYear.push(this.getLabelYear[0].year_min_0);
      this.allLabelYear.push(this.getLabelYear[0].year_min_1);
      this.allLabelYear.push(this.getLabelYear[0].year_min_2);
      this.allLabelYear.push(this.getLabelYear[0].year_min_3);

      console.log(this.allLabelYear);


      this.tableConfig.getDataKurs(this.dataKurs);
      this.tableConfig.getDataInterestRate(this.dataInterestRate);
      this.tableConfig.getDataBondYield(this.dataBondYieldSBN, this.dataBondYieldUST);
      this.tableConfig.getDataCommodities(this.dataCommodtities);
      this.tableConfig.getDataPDB(this.dataPDB);
      this.tableConfig.getDataInflasi(this.dataInflasi);
      this.tableConfig.getDataPMI(this.dataPMI);
      this.tableConfig.getDataRetail(this.dataRetail);
      this.tableConfig.getDataMoneySupply(this.dataMoneySupply);
      this.tableConfig.getDataDevisa(this.dataDevisa);

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

    console.log(this.getLabelDateKurs);


    this.tableConfig.initializeTableData(this.allLabelDate, this.allLabelYear);
  }

  ngAfterViewInit(): void {

  }

}
