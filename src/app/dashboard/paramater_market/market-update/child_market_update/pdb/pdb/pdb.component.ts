import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pdb',
  templateUrl: './pdb.component.html',
  styleUrls: ['./pdb.component.css']
})
export class PdbComponent {
  newRow: any= {};
  constructor(
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService,
    private formBuil1der:FormBuilder
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  dataDetail: any;
  dataDetailRealisasi: any;
  dataDetailOutlook:any;
  dataDetailRkap:any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  realisasiPdbItem!: number;

  tanggalEditKurs: any;
  namaEditKurs: any;
  nilaiEditKurs: any;

  maxDate = new Date();

  inputDataRealisasi = new FormGroup({  
    quartal : new FormControl(''),
    tahun : new FormControl(''),
    nilai : new FormControl('')
  });

  async BtnSimpan(){
    const data = this.inputDataRealisasi.value;
    console.log(data)
    const response = await this.marketUpdateService.fetchDataInputRealisasiPDB(data)
  }

  async getData(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.marketUpdateService.fetchDataPDB();
      this.dataDetail = data;
      this.dataDetail = this.dataDetail.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetail);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataPdb(this.dataDetail);
    console.log('finish get data in func');
  }
  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.marketUpdateService.fetchDataRealisasiPDB();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRealisasiPdb(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading Outlook');
    try{
      const data = await this.marketUpdateService.fetchDataRkapPDB();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data;
      this.isLoading = false;
      console.log(this.isLoading,'loading 2', this.dataDetailRkap);
    } catch(error) {
      console.log(error)
    }
    this.tableConfig.setDataRkapPdb(this.dataDetailRkap);
    console.log('finish get data by function')
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading Outlook');
    try{
      const data = await this.marketUpdateService.fetchDataOutlookPdb();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data;
      this.isLoading = false;
      console.log(this.isLoading,'loading 2', this.dataDetailOutlook);
    } catch(error) {
      console.log(error)
    }
    this.tableConfig.setDataOutlookPdb(this.dataDetailOutlook);
    console.log('finish get data by function')
  }
  
  async downloadPdf(){
    const dataDownload= this.marketUpdateService.fetchDataPDB();
  }

  onDate(event: any){
    console.log(event);

    console.log(moment(event.value._d).format("DD/MM/YYYY"));

    this.tanggalEditKurs = moment(event.value._d).format("DD/MM/YYYY");
  }

  realisasiPdbSelect = (event: any) => {
    console.log(event);
  }

  nilaiEditRealKurs = (val: any) => {
    console.log(val);
  }
  async ngOnInit(): Promise<void> {
    console.log('load data');

    await this.getData();
    await this.getDataRealisasi();
    await this.getDataOutlook();
    await this.getDataRkap();
    this.tableConfig.initializeTableDataPDB();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }

  addRowRealisasi() {
    this.tableConfig.tableRealisasiPdb.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRkapPdb.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookPdb.addRow({});
  }

  
  // download(){
  //   this.tableConfig.downloadPdf();
  // }
}