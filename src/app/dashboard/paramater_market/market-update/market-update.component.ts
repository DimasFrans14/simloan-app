import { Component, AfterViewInit } from '@angular/core';
import * as XLSX from 'xlsx';
// import * as canvasDatagrid from "canvas-datagrid";

@Component({
  selector: 'app-market-update',
  templateUrl: './market-update.component.html',
  styleUrls: ['./market-update.component.css']
})
export class MarketUpdateComponent{

  excelData: any;

  readExcel(event: any){

    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {
      var workbook = XLSX.read(fileReader.result, {type:'binary'});
      var sheetNames = workbook.SheetNames;
      this.excelData =  XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
      console.log(this.excelData);
    }
  }

  // grid:any;

  // ngAfterViewInit(): void {
  //     const element = document.querySelector('#logContent');
  //     const gridElement = document.createElement('div');

  //     const grid = new canvasDatagrid({
  //       parentNode: gridElement,
  //       data: [{ col1: 'foo', col2: 0, col3: 'a' },
  //       { col1: 'bar', col2: 1, col3: 'b' },
  //       { col1: 'baz', col2: 2, col3: 'c' }]
  //     })

  //     element?.append(gridElement);

  //     grid.data = this.excelData;
  // }

}
