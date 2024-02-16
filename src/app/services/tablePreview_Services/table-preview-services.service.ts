import { Injectable, AfterViewInit } from '@angular/core';
import { ColumnDefinition, ColumnDefinitionAlign, TabulatorFull as Tabulator } from 'tabulator-tables';

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
    this.objectKeys = Object.keys(data[0])
    // console.log(previewName);

    // this.tableName = previewName

    this.dataTabelPreview = data;
    console.log(this.objectKeys);
    // this.tabelPreview(this.objectKeys)
    console.log('file', this.fileExcel);
    console.log('data', this.dataTabelPreview);
  }

tablePreview(){
    let columns: ColumnDefinition[] = [];

    for(let i=0; i<this.objectKeys.length; i++){
      columns.push(
        {
          title: this.objectKeys[i],
          field: this.objectKeys[i],
          headerHozAlign: "center",
          hozAlign: "center" as ColumnDefinitionAlign,
        }
      )
    }

    this.tabelPreview = new Tabulator(".table-preview", {
      height:"555px",
      data:this.dataTabelPreview,
      layout:"fitColumns",
      columns: columns,
    });
}



  // tablePreviewMacroIndicatorPDB(){
  //   this.tabelPreview = new Tabulator(".table-previewPDB", {
  //     // height:205,
  //     data:this.dataTabelPreview,
  //     layout:"fitDataTable",
  //     columns:[
  //       {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', minWidth: 200},
  //       {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', minWidth: 100},
  //       {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', minWidth: 100},
  //     ],
  //   });
  // }

}
