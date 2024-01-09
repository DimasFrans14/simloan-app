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
    private marketUpdateService: MarketUpdateService
    // private router: Router
    ){
      // console.log(tableConfig);
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


  //test dev data source
  testData: any;
  testAPIdata: any;

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
  dataInterestRate: any;
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

      this.tableConfig.initializeTableData(this.threeDaysBefore, this.twoDaysBefore, this.yesterday, this.selectedDate)

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

    this.tableConfig.initializeTableData(formatThreeDaysBefore, formatTwoDaysBefore, formatYesterday, formatToday);
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

  async ngOnInit(): Promise<void> {
    try {
      // const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesAll();
      const responsePDB = await this.marketUpdateService.fetchDataPDB();
      const responseKurs = await this.marketUpdateService.fetchDataKurs();
      const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesByDate('05/12/2023');
      const responseBondYield = await this.marketUpdateService.fetchDataBondYield();
      // const responseDataInterestRate = await this.marketUpdateService.fetchDataInterestRate();

      // this.filteredInterestRate = responseDataInterestRate
      // let limitedDIR :any[] = [];
      // for(let i=0; i<5; i++){
      //   limitedDIR.push(this.filteredInterestRate.data.content[i])
      // }

      // console.log(limitedDIR);

      // const keyBY = Object.keys(responseBondYield)
      this.keysBondYield = responseBondYield
      // console.log(Object.keys(this.keysBondYield.data.content[0]));


      const responseInflasi = await this.marketUpdateService.fetchDataInflasi();
      // this.dataInflasi = responseInflasi;

      const responsePMI = await this.marketUpdateService.fetchDataPMI();
      const responseRetail = await this.marketUpdateService.fetchDataRetail();
      const responseMoneySupply = await this.marketUpdateService.fetchDataMoneySupply();
      const responseDevisa = await this.marketUpdateService.fetchDataDevisa();

      const responseInterestRate = await this.marketUpdateService.fetchDataInterestRateRKAP();
      this.dataRKAP = responseInterestRate;

      //Grouping data from one API
      // const filteredDataInterestRate = this.dataRKAP.data.content.filter((item: any) => item.grup === 'INTEREST RATE');
      const filteredDataBondYield = this.dataRKAP.data.content.filter((item: any) => item.grup === 'BOND YIELD');
      // console.log(filteredDataBondYield);

      const filteredDataKurs = this.dataRKAP.data.content.filter((item: any) => item.grup === 'KURS');
      const filteredDataCommodities = this.dataRKAP.data.content.filter((item: any) => item.grup === 'COMMODITIES');

      this.tableConfig.getDataCommodities(responseCommodities);
      this.tableConfig.getDataPDB(responsePDB);
      this.tableConfig.getDataInflasi(responseInflasi);
      this.tableConfig.getDataPMI(responsePMI);
      this.tableConfig.getDataRetail(responseRetail);
      this.tableConfig.getDataMoneySupply(responseMoneySupply);
      this.tableConfig.getDataDevisa(responseDevisa);
      // this.tableConfig.getDataInterestRate(limitedDIR);
      this.tableConfig.getDataBondYield(filteredDataBondYield);
      this.tableConfig.getDataKurs(responseKurs);

    } catch (error) {
      console.log(error);
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

    this.tableConfig.initializeTableData(formatThreeDaysBefore, formatTwoDaysBefore, formatYesterday, formatToday);
    // console.log(this.tableConfig.initializeTableData());
  }

  ngAfterViewInit(): void {

  }

}
