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

  isLoading: Boolean = false;

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

  allLabelDate: any[] = [];

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


      this.tableConfig.initializeTableData(this.allLabelDate)

      //FETCH BASED ON PARAMS
      const responseInflasi = await this.marketUpdateService.fetchDataViewInflasiByDate(this.selectedDate, this.selectedMonth);
      this.dataInflasi = responseInflasi
      this.tableConfig.updateTabelInflasi(this.dataInflasi);

      // const date = this.dataInflasi.data[0].tanggal.slice(-4)
      // console.log(date);

      const responsePMI = await this.marketUpdateService.fetchDataViewPMIByDate(this.selectedDate, this.selectedMonth);
      this.dataPMI = responsePMI
      this.tableConfig.updateTabelPMI(this.dataPMI.data);

      const responseRetail = await this.marketUpdateService.fetchDataViewRetailByDate(this.selectedDate, this.selectedMonth);
      this.dataRetail = responseRetail
      this.tableConfig.updateTabelRetail(this.dataRetail.data);

      const responseMoneySupply = await this.marketUpdateService.fetchDataViewnMoneySupplyByDate(this.selectedDate,this.selectedMonth)
      this.dataMoneySupply = responseMoneySupply;
      this.tableConfig.updateTabelMoneySuply(this.dataMoneySupply.data);

      const responseDevisa = await this.marketUpdateService.fetchDataViewDevisaByDate(this.selectedDate, this.selectedMonth);
      this.dataDevisa = responseDevisa
      this.tableConfig.updateTabelDevisa(this.dataDevisa.data);

    } catch (error) {
      console.log(error);
    }
  }

  resetFilter(){
    this.tableConfig.getBackData();
    this.inputDate.value = '';

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

    this.tableConfig.initializeTableData(this.allLabelDate);
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
      // this.lineChartCommodity.initializeCommoditiesLineChart();

      let today = moment().format('DD/MM/YYYY')

      console.log('load before fetch: ' + this.isLoading);
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

      this.dataBondYieldSBN = responseBondYield;
      if(this.dataBondYieldSBN.d.length > 0){
        this.getLabelBondYield = this.dataBondYieldSBN.d.filter((item: any) => item.tenor === 'Label');

        this.dataBondYieldSBN = this.dataBondYieldSBN.d.filter((item: any) => item.tipe.includes('SBN') && item.tenor != 'Label');

        this.dataBondYieldSBN = this.dataBondYieldSBN.map((item: any) => {

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

        this.dataBondYieldUST = responseBondYield;
        this.dataBondYieldUST = this.dataBondYieldUST.d.filter((item: any) => item.tipe.includes('US_TREASURY'));

        this.dataBondYieldUST = this.dataBondYieldUST.map((item: any) => {

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

        console.log(this.dataBondYieldSBN, this.dataBondYieldUST);
      }
      else{
        this.dataBondYieldSBN = [];
        this.dataBondYieldUST = [];
        this.getLabelBondYield = [];
      }

      this.dataCommodtities = responseCommodities;
      if(this.dataCommodtities.d.length > 0){
        this.getLabelCommodities = this.dataCommodtities.d.filter((item: any) => item.kode.includes('Label'));

        this.dataCommodtities = this.dataCommodtities.d.filter((item: any) => !item.kode.includes('Label'));

        this.dataCommodtities = this.dataCommodtities.map((item: any) => {

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
        this.dataCommodtities = [];
        this.getLabelCommodities = [];
      }


      console.log([
        this.getLabelDateKurs,
        this.getLabelInterestRate,
        this.getLabelBondYield,
        this.getLabelCommodities
      ]);

      this.allLabelDate.push(this.getLabelDateKurs);
      this.allLabelDate.push(this.getLabelInterestRate);
      this.allLabelDate.push(this.getLabelBondYield);
      this.allLabelDate.push(this.getLabelCommodities);
      console.log(this.allLabelDate);

      this.dataPDB = responsePDB;
      if(this.dataPDB.data.hasOwnProperty('content')){
        this.dataPDB = this.dataPDB.data.content.map((item: any) => {
          item.nilai = item.nilai.toFixed(2);
          item.nilai = item.nilai.toLocaleString('en-US');

          return item
        })
      }

      const responseInflasi = await this.marketUpdateService.fetchDataInflasi();
      this.dataInflasi = responseInflasi;
      if(this.dataInflasi.data.length > 0){
        this.dataInflasi = this.dataInflasi.data.map((item: any) => {
          item.nilai_year_min0 = item.nilai_year_min0.toFixed(2);
          item.nilai_year_min0 = item.nilai_year_min0.toLocaleString('en-US');

          item.nilai_year_min1 = item.nilai_year_min1.toFixed(2);
          item.nilai_year_min1 = item.nilai_year_min1.toLocaleString('en-US');

          item.nilai_year_min2 = item.nilai_year_min2.toFixed(2);
          item.nilai_year_min2 = item.nilai_year_min2.toLocaleString('en-US');

          item.nilai_year_min3 = item.nilai_year_min3.toFixed(2);
          item.nilai_year_min3 = item.nilai_year_min3.toLocaleString('en-US');

          return item
        })
      }
      else{
        this.dataInflasi = [];
      }

      const responsePMI = await this.marketUpdateService.fetchDataPMI();
      this.dataPMI = responsePMI;
      if(this.dataPMI.data.length > 0){
        this.dataPMI = this.dataPMI.data.map((item: any) => {
          item.nilai_year_min0 = item.nilai_year_min0.toFixed(2);
          item.nilai_year_min0 = item.nilai_year_min0.toLocaleString('en-US');

          item.nilai_year_min1 = item.nilai_year_min1.toFixed(2);
          item.nilai_year_min1 = item.nilai_year_min1.toLocaleString('en-US');

          item.nilai_year_min2 = item.nilai_year_min2.toFixed(2);
          item.nilai_year_min2 = item.nilai_year_min2.toLocaleString('en-US');

          item.nilai_year_min3 = item.nilai_year_min3.toFixed(2);
          item.nilai_year_min3 = item.nilai_year_min3.toLocaleString('en-US');

          return item
        })
      }else{
        this.dataPMI = [];
      }

      const responseRetail = await this.marketUpdateService.fetchDataRetail();
      this.dataRetail = responseRetail;

      if(this.dataRetail.data.length > 0){
        this.dataRetail = this.dataRetail.data.map((item: any) => {
          item.nilai_year_min0 = item.nilai_year_min0.toFixed(2);
          item.nilai_year_min0 = item.nilai_year_min0.toLocaleString('en-US');

          item.nilai_year_min1 = item.nilai_year_min1.toFixed(2);
          item.nilai_year_min1 = item.nilai_year_min1.toLocaleString('en-US');

          item.nilai_year_min2 = item.nilai_year_min2.toFixed(2);
          item.nilai_year_min2 = item.nilai_year_min2.toLocaleString('en-US');

          item.nilai_year_min3 != null ? item.nilai_year_min3 = item.nilai_year_min3.toFixed(2) : item.nilai_year_min3 = 0
          item.nilai_year_min3 = item.nilai_year_min3.toLocaleString('en-US');

          return item
        })
      }else{
        this.dataRetail = [];
      }

      const responseMoneySupply = await this.marketUpdateService.fetchDataMoneySupply();
      this.dataMoneySupply = responseMoneySupply;

      if(this.dataMoneySupply.data.length > 0){
        this.dataMoneySupply = this.dataMoneySupply.data.map((item: any) => {
          // Parse and format number with locale string
          item.triliun_year_min0 = parseFloat(item.triliun_year_min0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          item.triliun_year_min1 = parseFloat(item.triliun_year_min1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          item.triliun_year_min2 = parseFloat(item.triliun_year_min2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          item.triliun_year_min3 = parseFloat(item.triliun_year_min3).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          return item;
      });
      }
      else{
        this.dataMoneySupply = [];
      }

      const responseDevisa = await this.marketUpdateService.fetchDataDevisa();
      this.dataDevisa = responseDevisa;

      if(this.dataDevisa.data.length > 0){
        this.dataDevisa = this.dataDevisa.data.map((item: any) => {
          item.nilai_year_min0 = parseFloat(item.nilai_year_min0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          item.nilai_year_min1 = parseFloat(item.nilai_year_min1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          item.nilai_year_min2 = parseFloat(item.nilai_year_min2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          item.nilai_year_min3 = parseFloat(item.nilai_year_min3).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          return item
        })
      }else{
        this.dataDevisa = [];
      }

      //Grouping data from one API
      // const filteredDataInterestRate = this.dataRKAP.data.content.filter((item: any) => item.grup === 'INTEREST RATE');
      // const filteredDataBondYield = this.dataRKAP.data.content.filter((item: any) => item.grup === 'BOND YIELD');
      // console.log(filteredDataBondYield);

      // const filteredDataKurs = this.dataRKAP.data.content.filter((item: any) => item.grup === 'KURS');
      // const filteredDataCommodities = this.dataRKAP.data.content.filter((item: any) => item.grup === 'COMMODITIES');

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
      console.log('load after fetch: ' + this.isLoading);
      console.log(responseKurs, responseInterestRate, responseBondYield);


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


    this.tableConfig.initializeTableData(this.allLabelDate);
  }

  ngAfterViewInit(): void {

  }

}
