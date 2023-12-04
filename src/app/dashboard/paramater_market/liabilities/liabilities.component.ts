import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.css']
})
export class LiabilitiesComponent {

  files: File[] = [];
  excelDataJSON: any;
  excelDataTable: any;

  readExcel(event: any){
    let file = event.addedFiles[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {

      var workbook = XLSX.read(fileReader.result, {type:'binary'});
      var sheetNames = workbook.SheetNames;
      this.excelDataJSON =  XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
      this.excelDataTable = XLSX.utils.sheet_to_html(workbook.Sheets[sheetNames[0]]);

      // this.html = this.sanitizer.bypassSecurityTrustHtml(this.excelDataTable);
      console.log(fileReader);
      console.log(this.excelDataJSON);

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

  openModal: boolean = false;

  openModalcard1(){
    this.openModal = !this.openModal;
  }

  openModalinfo(){
    this.openModal = !this.openModal;
  }
  openModalfootnote(){
    this.openModal = !this.openModal;
  }

  constructor(){

  }

  ngOnInit(): void {

  }
}
