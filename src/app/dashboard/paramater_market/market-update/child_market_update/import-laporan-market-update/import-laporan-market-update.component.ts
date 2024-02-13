import { Component, OnInit } from '@angular/core';
import { MasterCategoryRisetPasarService } from 'src/app/services/master_category_riset_pasar/master-category-riset-pasar.service';
import { TablePreviewServices } from 'src/app/services/tablePreview_Services/table-preview-services.service';
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
export class ImportLaporanMarketUpdateComponent implements OnInit {

  constructor(
    private tableConfig: TableServicesService,
    private tablePrevew: TablePreviewServices,
    private masterCategory: MasterCategoryRisetPasarService
  ){

  }

  parameterCurrency: File[] = [];
  fileMarketUpdate: File[] = [];

  // excelDataJSON: ExcelData[] = [];
  excelDataJSON: any;

  //ngmodel selection
  parameterItems!: number;
  subParameterItems!: number;
  dataParameterItems!: number;

  macroIndicatorItems!: number;
  dataParameterName!: string;
  dataParameterID!: number;

  isDisabled: boolean = true;
  disableIndikator: boolean = true;

  masterCategoryParams: any;
  masterSubCategoryParams: any;
  selectedSubCategoryParams: any;
  filteredATD: any;

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

  macroIndicatorParams = [
    { id: 1, name: 'PDB'},
    { id: 2, name: 'INFLASI' , },
    { id: 3, name: 'PMI' },
    { id: 4, name: 'REATIL' },
    { id: 5, name: 'M2' },
    { id: 6, name: 'CADANGAN_DEVISA' },
  ];

  dataCurrency = [
    {id : 1, name:'USD'},
    {id : 2, name:'JPY'},
    {id : 3, name:'EUR'},
    {id : 4, name:'GBP'},
  ]

  dataInteresRate = [
    {id: 1, name:'AVG_SOFR'},
    {id: 2, name:'EURIBOR'},
    {id: 3, name:'JIBOR'},
    {id: 4, name:'FED_RATE'},
    {id: 5, name:'BI7DRR'},
    {id: 6, name:'AVERAGE_TIME_DEPOSITE_MANDIRI'},
    {id: 7, name:'AVERAGE_TIME_DEPOSITE_BCA'},
    {id: 8, name:'AVERAGE_TIME_DEPOSITE_BNI'},
    {id: 9, name:'AVERAGE_TIME_DEPOSITE_BRI'},
  ]

  dataBondYield = [
    {id : 1, name:'5yr'},
    {id : 2, name:'7yr'},
    {id : 3, name:'10yr'},
    {id : 4, name:'20yr'},
    {id : 5, name:'30yr'},
  ]

  dataCommodities = [
    {id: 1, name:'COAL'},
    {id: 2, name:'Oil (WTI)'},
    {id: 3, name:'Oil (Brent)'},
    {id: 4, name:'LNG (JKM) (USD/MMBtu) 2)'},
    {id: 5, name:'ICP (USD/barrel) 3)'},
    {id: 6, name:'Batubara (USD/ton)'},
  ]

  marketUpdateID !: number;
  indikatorID !: number;
  indikatorName!: string;

  isChange: boolean = false;

  paramsSelect(event: any){
    // console.log(event);
    this.marketUpdateID = event ? event.id_ctg_rs_psr : '';
    // console.log(this.marketUpdateID);
    if(event != undefined){
      this.disableIndikator = false
    }
    else{
      this.disableIndikator = true
    }

    console.log([event, this.marketUpdateID, this.selectedSubCategoryParams]);
    console.log(this.masterSubCategoryParams);

    const filter = this.masterSubCategoryParams.filter((item: any) => item.id_ctg_rs_psr === this.marketUpdateID)
    // console.log(filter);
    this.selectedSubCategoryParams = filter

    console.log(filter);

    localStorage.setItem('category_params', event.kode)
  }

  indikatorSelect(event: any){
    // console.log(event);
    const { id, name } = event;
    this.indikatorID = id;
    this.indikatorName = name;
    localStorage.setItem('indikator_params', this.indikatorName)
    // console.log(this.indikatorID);
  }

  getValueParams = (event: any) => {
    // console.log(event);
    const { id_sub_ctgrspsr, kode } = event;
    this.dataParameterName = kode;
    this.dataParameterID = id_sub_ctgrspsr;
    // console.log(this.dataParameterName);
    localStorage.setItem('subCategory_params', JSON.parse(JSON.stringify(this.dataParameterName)))
  }

  readExcel(event: any){
    let file = event.addedFiles[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    // console.log(event);

    fileReader.onload = (e) => {

      let data;

      var workbook = XLSX.read(fileReader.result, {type:'binary', cellDates: true});
      var sheetNames = workbook.SheetNames;

      for(let i=0; i<sheetNames.length; i++){
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[i]]);
        const sheetNameExcel = workbook.SheetNames[i]
        if(sheetNameExcel === this.dataParameterName){
          this.excelDataJSON = data;
          console.log('data if',  data);
        }
        else{
          // console.log('sheetname doesnt match');
        }
      }

      this.tableConfig.setData(this.excelDataJSON);
      this.tablePrevew.previewData(this.excelDataJSON, file)

      // let objectKeys: string[] = [];

      // if (data && typeof data[0] === 'object') {
      //   objectKeys = Object.keys(data[0] as object);
      // } else {
      //   console.log('kosong');
      // }

      if(this.dataParameterName != undefined){
        for(let i=0; i< this.excelDataJSON.length; i++){
          // this.excelDataJSON[i].TANGGAL = this.excelDataJSON[i].TANGGAL.toISOString();
          // this.excelDataJSON[i].TAHUN = this.excelDataJSON[i].TAHUN.toISOString();
          // this.excelDataJSON[i].TANGGAL = this.excelDataJSON[i].TANGGAL.slice(0,10)
          // this.excelDataJSON[i].TAHUN = this.excelDataJSON[i].TAHUN.slice(0,4)
        }
        // console.log(this.excelDataJSON);
      }
      else{
        console.log('parameter name undefined');
      }

      // console.log('parsing', parsingDataExcel);
      // let filterredInflasi = parsingDataExcel.filter((item:any) => item[0].hasOwnProperty('Inflasi'));
      console.log(this.excelDataJSON, file);

      if(this.excelDataJSON.length < 0){
        this.isDisabled = true;
      }
      else{
        this.isDisabled = false;
      }
  }
}

  onSelect(event: { addedFiles: any; }) {
    // console.log(event);
    this.parameterCurrency.push(...event.addedFiles);
    this.readExcel(event)

    // if(this.excelDataJSON.length < 0){
    //   this.isDisabled = true;
    // }
    // else{
    //   this.isDisabled = false;
    // }
  }

  onRemove(event: File) {
    console.log(event);
    this.parameterCurrency.splice(this.parameterCurrency.indexOf(event), 1);
    this.excelDataJSON = []
    console.log(this.excelDataJSON);
  }

  async ngOnInit(): Promise<void> {
    try {
      const responseMasterCategory = await this.masterCategory.fetchMasterCategory();
      const responseSubCategory = await this.masterCategory.fetchMasterSubCategory();

      this.masterCategoryParams = responseMasterCategory;
      this.masterSubCategoryParams = responseSubCategory;
    } catch (error) {
      console.log(error);
    }

    this.masterCategoryParams = this.masterCategoryParams.data.content;
    this.masterSubCategoryParams = this.masterSubCategoryParams.data.content;

    const filterATD = this.masterSubCategoryParams.filter((item: any) => {
      return item.kode.includes('ATD');
    })

    this.filteredATD = filterATD;
    localStorage.setItem('ATD', JSON.stringify(filterATD))
  }
}
