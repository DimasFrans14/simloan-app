import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-market-update',
  templateUrl: './market-update.component.html',
  styleUrls: ['./market-update.component.css']
})
export class MarketUpdateComponent implements OnInit, AfterViewInit{

  constructor(
    private sanitizer: DomSanitizer,
    private tableConfig: TableServicesService
    ){
      // console.log(tableConfig);
    }

  // html: SafeHtml = "";
  // @ViewChild('tableau') tableau!: ElementRef<HTMLDivElement>;

  // @ViewChild(TableServicesComponent, {static: false}) table!: TableServicesComponent;

  excelDataJSON: any;
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

  data2: any;
  data3: any;
  data4: any;


  readExcel(event: any){
    let file = event.addedFiles[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {

      var workbook = XLSX.read(fileReader.result, {type:'binary'});
      var sheetNames = workbook.SheetNames;
      this.excelDataJSON =  XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
      this.data2 =  XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[1]]);
      this.data3 =  XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[2]]);
      this.data4 =  XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[3]]);

      // this.excelDataTable = XLSX.utils.sheet_to_html(workbook.Sheets[sheetNames[0]]);

      // this.html = this.sanitizer.bypassSecurityTrustHtml(this.excelDataTable);
      console.log(event);
      console.log([this.excelDataJSON, this.data2, this.data3, this.data4]);
      console.log(sheetNames.length);
      // console.log(workbook.Sheets);


    //   this.tableUpdate = new Tabulator(".example-table-2", {
    //     height:205,
    //     data:this.excelDataJSON,
    //     layout:"fitDataTable",
    //     columns:[
    //       {title:"Name", field:"Name", width:150, editor:"input"},
    //       {title:"Birthday", field:"Birthday", hozAlign:"left"},
    //     ],
    //  });
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

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.tableConfig.initializeTableData();

    //Table Currency
    // this.tableDataCurrency = this.tableConfig.tableDataCurrency;
    // this.tableCurrency = this.tableConfig.tableCurrency;

    //Table Interest Rate
    // this.tableDataInterest = this.tableConfig.tableDataInterestRate;
    // this.tableInterest = this.tableConfig.tableInterestRate;

    //Table Bond Yield
    // this.tableDataBondYield = this.tableConfig.tableDataBondYield;
    // this.tableBondYield = this.tableConfig.tableBondYield;

    //Table Commodities
    // this.tableDataCommodities = this.tableConfig.tableDataCommodities;
    // this.tableCommodities = this.tableConfig.tableCommodities;

    //Table Money Supply
    // this.tableDataMoneySupply = this.tableConfig.tableDataMoneySupply;
    // this.tableMoneySupply = this.tableConfig.tableMoneySupply;

    //Table Foreign Excahnge
    // this.tableDataForeignExchange = this.tableConfig.tableDataForeignExchange;
    // this.tableForeignExchange = this.tableConfig.tableForeignExchange;

    //Table PMI
    // this.tableDataPMI = this.tableConfig.tableDataPMI;
    // this.tablePMI = this.tableConfig.tablePMI;

    //Table Retail
    // this.tableDataRetail = this.tableConfig.tableDataRetail;
    // this.tableRetail = this.tableConfig.tableRetail;
  }

}
