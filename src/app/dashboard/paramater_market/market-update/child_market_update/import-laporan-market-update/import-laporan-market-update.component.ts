import { Component } from '@angular/core';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import * as XLSX from 'xlsx';

interface ExcelData {
  [key: string]: any;
}

@Component({
  selector: 'app-import-laporan-market-update',
  templateUrl: './import-laporan-market-update.component.html',
  styleUrls: ['./import-laporan-market-update.component.css']
})
export class ImportLaporanMarketUpdateComponent {

  constructor(
    private tableConfig: TableServicesService,
  ){

  }

  parameterCurrency: File[] = [];
  fileMarketUpdate: File[] = [];

  excelDataJSON: ExcelData[] = [];

  parameterItems!: number;
  subParameterItems!: number;

  parameterSelect = [
    { id: 1, name: 'Currency Rate' },
    { id: 2, name: 'Interest Rate' },
    { id: 3, name: 'Bond Yield' },
    { id: 4, name: 'Commodities' },
    { id: 5, name: 'Macro Indicator' },
  ];

  subParameterSelect = [
    { id: 1, name: 'RKAP' },
    { id: 2, name: 'Realisasi' },
    { id: 3, name: 'Outlook' },
  ];

  currencyRateID !: number;

  valueSelect(event: any){
    console.log(event);
    this.currencyRateID = event.id;
    console.log(this.currencyRateID);
  }

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
        this.tableConfig.previewData(data);
      }

      this.tableConfig.setData(this.excelDataJSON);
      // this.excelDataTable = XLSX.utils.sheet_to_html(workbook.Sheets[sheetNames[0]]);

      // this.html = this.sanitizer.bypassSecurityTrustHtml(this.excelDataTable);
      // console.log(event);
      // console.log(sheetNames.length);
      // console.log(workbook.Sheets);
      console.log(data);
  }
}

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.parameterCurrency.push(...event.addedFiles);
    this.readExcel(event)
  }

  onRemove(event: File) {
    console.log(event);
    this.parameterCurrency.splice(this.parameterCurrency.indexOf(event), 1);
  }

}
