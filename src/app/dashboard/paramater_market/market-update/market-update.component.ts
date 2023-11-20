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

  html: SafeHtml = "";
  @ViewChild('tableau') tableau!: ElementRef<HTMLDivElement>;

  excelDataJSON: any;
  excelDataTable: any;

  grid:any;

  tabledata: any;
  table:any;
  //define some sample data

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

      this.table = new Tabulator(".example-table", {
        height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        data:this.excelDataJSON, //assign data to table
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[ //Define Table Columns
          {title:"Name", field:"Name", width:150, sorter:"string", editor:"input"},
          {title:"Birthday", field:"Birthday", hozAlign:"left"},
          // {title:"Favourite Color", field:"col"},
          // {title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center"},
        ],
     });

      // if (!this.grid) {
      //   this.grid = new canvasDatagrid({ parentNode: this.tableau.nativeElement, data: this.excelDataJSON });
      // } else {
      //   this.grid.data = this.excelDataJSON;
      // }
    }
  }



  ngOnInit(): void {
    // this.tabledata = [
    //   {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
    //   {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
    //   {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
    //   {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
    //   {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
    // ];


  }
}
