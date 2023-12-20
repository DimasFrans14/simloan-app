import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

import { ViewportScroller } from '@angular/common';

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
    private sanitizer: DomSanitizer,
    private tableConfig: TableServicesService,
    private dataService: DataService,
    private viewportScroller: ViewportScroller
    // private router: Router
    ){
      // console.log(tableConfig);
    }

    public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
  }

  // html: SafeHtml = "";
  // @ViewChild('tableau') tableau!: ElementRef<HTMLDivElement>;

  // @ViewChild(TableServicesComponent, {static: false}) table!: TableServicesComponent;

  excelDataJSON: ExcelData[] = [];

  dataExcel: any;
  excelDataTable: any;

  selectedDate!: moment.Moment;
  someFunction() {
    const formattedDate = moment(this.selectedDate).format('YYYY-MM-DD'); // Contoh format tanggal menggunakan Moment.js
    // Lakukan sesuatu dengan formattedDate
    console.log(formattedDate);

  }

  //variabel data table

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
      // console.log(event);
      // console.log(sheetNames.length);
      // console.log(workbook.Sheets);
      console.log(this.excelDataJSON);
    }
  }

  getDate(date: any){
    console.log(date);
    const formattedDate = moment(this.selectedDate).format('YYYY-MM-DD'); // Contoh format tanggal menggunakan Moment.js
    // Lakukan sesuatu dengan formattedDate
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

    async onDate(event: MatDatepickerInputEvent<Date>) {
      const selectedDate = event.value;
      console.log(selectedDate);

      const formattedDate = moment(event.value).format("DD/MM/YYYY");
      // Lakukan sesuatu dengan formattedDate
      console.log(formattedDate.slice(3,5));

      let month;
      switch (formattedDate.slice(3, 5)) {
        case '01':
          month = "Januari";
          break;
        case '02':
          month = "Februari";
          break;
        case '03':
          month = "Maret";
          break;
        case '04':
          month = "April";
          break;
        case '05':
          month = "Mei";
          break;
        case '06':
          month = "Juni";
          break;
        case '07':
          month = "Juli";
          break;
        case '08':
          month = "Agustus";
          break;
        case '09':
          month = "September";
          break;
        case '10':
          month = "Oktober";
          break;
        case '11':
          month = "November";
          break;
        case '12':
          month = "Desember";
          break;
      }

      console.log(month);

      try {
        //FETCH BASED ON PARAMS
        const responseInflasi = await this.dataService.fetchDataViewInflasiByDate(formattedDate, month);
        this.dataInflasi = responseInflasi
        this.tableConfig.updateTabelInflasi(this.dataInflasi.data);

        // const date = this.dataInflasi.data[0].tanggal.slice(-4)
        // console.log(date);


        const responsePMI = await this.dataService.fetchDataViewPMIByDate(formattedDate, month);
        this.dataPMI = responsePMI
        this.tableConfig.updateTabelPMI(this.dataPMI.data);

        const responseRetail = await this.dataService.fetchDataViewRetailByDate(formattedDate, month);
        this.dataRetail = responseRetail
        this.tableConfig.updateTabelRetail(this.dataRetail.data);

        const responseMoneySupply = await this.dataService.fetchDataViewnMoneySupplyByDate(formattedDate, month)
        this.dataMoneySupply = responseMoneySupply;
        this.tableConfig.updateTabelMoneySuply(this.dataMoneySupply.data);

        const responseDevisa = await this.dataService.fetchDataViewDevisaByDate(formattedDate, month);
        this.dataDevisa = responseDevisa
        this.tableConfig.updateTabelDevisa(this.dataDevisa.data);

      } catch (error) {
        console.log(error);
      }
  }

  updateColumn(){
    this.tableConfig.editTitle();
  }

  async ngOnInit(): Promise<void> {
    try {
      // const responseCommodities = await this.dataService.fetchDataCommoditiesAll();
      const responsePDB = await this.dataService.fetchDataPDB();
      const responseKurs = await this.dataService.fetchDataKurs();
      const responseCommodities = await this.dataService.fetchDataCommoditiesByDate('05/12/2023');

      const responseInflasi = await this.dataService.fetchDataInflasi();
      // this.dataInflasi = responseInflasi;

      const responsePMI = await this.dataService.fetchDataPMI();
      const responseRetail = await this.dataService.fetchDataRetail();
      const responseMoneySupply = await this.dataService.fetchDataMoneySupply();
      const responseDevisa = await this.dataService.fetchDataDevisa();

      const responseInterestRate = await this.dataService.fetchDataInterestRateRKAP();
      this.dataRKAP = responseInterestRate;

      //Grouping data from one API
      const filteredDataInterestRate = this.dataRKAP.data.content.filter((item: any) => item.grup === 'INTEREST RATE');
      const filteredDataBondYield = this.dataRKAP.data.content.filter((item: any) => item.grup === 'BOND YIELD');
      const filteredDataKurs = this.dataRKAP.data.content.filter((item: any) => item.grup === 'KURS');
      const filteredDataCommodities = this.dataRKAP.data.content.filter((item: any) => item.grup === 'COMMODITIES');

      this.tableConfig.getDataCommodities(responseCommodities);
      this.tableConfig.getDataPDB(responsePDB);
      this.tableConfig.getDataInflasi(responseInflasi);
      this.tableConfig.getDataPMI(responsePMI);
      this.tableConfig.getDataRetail(responseRetail);
      this.tableConfig.getDataMoneySupply(responseMoneySupply);
      this.tableConfig.getDataDevisa(responseDevisa);
      this.tableConfig.getDataInterestRate(filteredDataInterestRate);
      this.tableConfig.getDataBondYield(filteredDataBondYield);
      this.tableConfig.getDataKurs(responseKurs);

    } catch (error) {
      console.log(error);
    }
    this.tableConfig.initializeTableData();
    // console.log(this.tableConfig.initializeTableData());
  }

  ngAfterViewInit(): void {

  }

}
