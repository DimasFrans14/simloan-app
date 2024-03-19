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

    const hasKurs = this.dataTabelPreview[0].hasOwnProperty('KURS');
    const hasNilai = this.dataTabelPreview[0].hasOwnProperty('NILAI');
    const hasMiliarUSD = this.dataTabelPreview[0].hasOwnProperty('miliar_usd');
    const hasTriliunUSD = this.dataTabelPreview[0].hasOwnProperty('triliun_beredar');
    const hasRate = this.dataTabelPreview[0].hasOwnProperty('RATE');
    console.log(hasKurs, hasNilai, hasMiliarUSD, hasTriliunUSD, hasRate);

    if(hasKurs){
      this.dataTabelPreview = this.dataTabelPreview.map((item: any) => {
        item.KURS = item.KURS.toLocaleString('en-US');
        console.log('masuk kurs');

        return item
      })
    }
    else if(hasNilai){
      this.dataTabelPreview = this.dataTabelPreview.map((item: any) => {
        item.NILAI = item.NILAI.toLocaleString('en-US');
        console.log('masuk nilai');

        return item
      })
    }
    else if(hasMiliarUSD){
      this.dataTabelPreview = this.dataTabelPreview.map((item: any) => {
        item.miliar_usd = parseFloat(item.miliar_usd);
        item.miliar_usd = item.miliar_usd.toLocaleString('en-US');
        console.log('masuk miliar');

        return item
      })
    }
    else if(hasTriliunUSD){
      this.dataTabelPreview = this.dataTabelPreview.map((item: any) => {
        item.triliun_beredar = parseFloat(item.triliun_beredar);;
        item.triliun_beredar = item.triliun_beredar.toLocaleString('en-US');;
        console.log('masuk triliun');

        return item
      })
    }
    else if(hasRate){
      this.dataTabelPreview = this.dataTabelPreview.map((item: any) => {
        item.RATE = parseFloat(item.RATE);
        item.RATE = item.RATE.toLocaleString('en-US');;
        console.log('rate');

        return item
      })
    }

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
