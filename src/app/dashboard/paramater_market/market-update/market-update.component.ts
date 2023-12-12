import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

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
    // private router: Router
    ){
      // console.log(tableConfig);
    }

  // html: SafeHtml = "";
  // @ViewChild('tableau') tableau!: ElementRef<HTMLDivElement>;

  // @ViewChild(TableServicesComponent, {static: false}) table!: TableServicesComponent;

  excelDataJSON: ExcelData[] = [];

  dataExcel: any;
  excelDataTable: any;

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
      // console.log(this.excelDataJSON);
    }
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

  async ngOnInit(): Promise<void> {
    try {
      const responseCommodities = await this.dataService.fetchDataCommodities();
      const responsePDB = await this.dataService.fetchDataPDB();
      const responseInflasi = await this.dataService.fetchDataInflasi();
      const responsePMI = await this.dataService.fetchDataPMI()


      this.tableConfig.getDataCommodities(responseCommodities);
      this.tableConfig.getDataPDB(responsePDB);
      this.tableConfig.getDataInflasi(responseInflasi);
      this.tableConfig.getDataPMI(responsePMI);

    } catch (error) {
      console.log(error);
    }
    this.tableConfig.initializeTableData();
  }

  ngAfterViewInit(): void {

  }

}
