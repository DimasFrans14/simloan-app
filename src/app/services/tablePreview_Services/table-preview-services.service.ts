import { Injectable, AfterViewInit } from '@angular/core';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

@Injectable({
  providedIn: 'root'
})
export class TablePreviewServices {

  constructor() { }

  tabelPreview: any;
  dataTabelPreview: any;

  fileExcel!: File;
  objectKeys: any;

  tableName!: string;

  previewData(data: any, file: File){

    console.log('preview data: ', data);
    this.fileExcel = file;
    // this.objectKeys = Object.keys(data[0])
    // console.log(previewName);

    // this.tableName = previewName

    this.dataTabelPreview = data;
    console.log(this.objectKeys);
    // this.tabelPreview(this.objectKeys)
    console.log('file', this.fileExcel);
    console.log('data', this.dataTabelPreview);
  }

  tablePreviewMacroIndicator(object: any){
    let lastIndex = object.length - 1;
    this.tabelPreview = new Tabulator(".table-preview", {
      height:"555px",
      data:this.dataTabelPreview,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left'},
        {title:object[lastIndex - 1], field:object[lastIndex - 1], headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", minWidth: 100},
        {title:object[lastIndex], field:object[lastIndex], headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", minWidth: 100},
      ],
    });
  }

  tablePreviewMacroIndicatorPDB(object: any){
    let lastIndex = object.length - 1;
    this.tabelPreview = new Tabulator(".table-previewPDB", {
      // height:205,
      data:this.dataTabelPreview,
      layout:"fitDataTable",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', minWidth: 200},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', minWidth: 100},
        {title:"PDB", field:"pdb", headerHozAlign:"center", hozAlign:'center', minWidth: 100},
      ],
    });
  }

}
