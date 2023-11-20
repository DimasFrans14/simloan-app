import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
// import * as canvasDatagrid from "canvas-datagrid";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {TabulatorFull as Tabulator} from 'tabulator-tables';

@Component({
  selector: 'app-market-update',
  templateUrl: './market-update.component.html',
  styleUrls: ['./market-update.component.css']
})
export class MarketUpdateComponent implements OnInit{

  constructor(private sanitizer: DomSanitizer){}

  // html: SafeHtml = "";
  // @ViewChild('tableau') tableau!: ElementRef<HTMLDivElement>;

  excelDataJSON: any;
  excelDataTable: any;

  tableDataCurrency: any;
  tableCurrency:any;

  tableDataInterest: any;
  tableInterest:any;

  tableUpdate:any;

  readExcel(event: any){
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {

      var workbook = XLSX.read(fileReader.result, {type:'binary'});
      var sheetNames = workbook.SheetNames;
      this.excelDataJSON =  XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
      this.excelDataTable = XLSX.utils.sheet_to_html(workbook.Sheets[sheetNames[0]]);

      // this.html = this.sanitizer.bypassSecurityTrustHtml(this.excelDataTable);

      console.log(this.excelDataJSON);

      this.tableUpdate = new Tabulator(".example-table-2", {
        height:205,
        data:this.excelDataJSON,
        layout:"fitColumns",
        columns:[
          {title:"Name", field:"Name", width:150, editor:"input"},
          {title:"Birthday", field:"Birthday", hozAlign:"left"},
        ],
     });
    }
  }

  ngOnInit(): void {
    this.tableDataCurrency = [
      {id:1, name:"USD", age:"15000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"EUR", age:"15000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"JPY", age:"15000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"GBP", age:"15000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];

    this.tableCurrency = new Tabulator(".table-currency", {
      // height:205,
      data:this.tableDataCurrency,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Exchange Rate",
        columns:[
        {title:"RKAP 23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        ],
        headerHozAlign:"center"
    },
    {title:"Change <br/>RKAP", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change MoM", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change <br/>WoW", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change 1 Day", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
   });

    this.tableDataInterest = [
      {id:1, name:"BI7DRR", age:"15000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"FED RATE", age:"15000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"AVG SOFR", age:"15000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"JIBOR", age:"15000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
      {id:5, name:"EURIBOR", age:"15000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
      {id:6, name:"AVERAGE TIME DOPOSITE (3 Mo)", age:"15000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];

    this.tableInterest = new Tabulator(".table-interest", {
      // height:205,
      data:this.tableDataInterest,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:false},

        {title:"RKAP 23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},

        {title:"Change <br/>RKAP", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change MoM", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change <br/>WoW", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change 1 Day", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
   });
  }
}
