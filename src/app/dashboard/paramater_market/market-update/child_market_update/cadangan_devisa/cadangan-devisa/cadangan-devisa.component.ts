import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-cadangan-devisa',
  templateUrl: './cadangan-devisa.component.html',
  styleUrls: ['./cadangan-devisa.component.css']
})
export class CadanganDevisaComponent {
  constructor(
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  dataDetail: any;
  dataDetailRealisasi:any;
  dataDetailRkap:any;
  dataDetailOutlook:any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  realisasiPdbItem!: number;

  tanggalEditKurs: any;
  namaEditKurs: any;
  nilaiEditKurs: any;

  async getData(){
    const today = moment().format('DD/MM/YYYY');
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchAllDataMacroIndicator(today,"CADEV");
      this.dataDetail = data;
      this.dataDetail = this.dataDetail.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetail);
    } catch (error) {
      console.log(error);
    }
    this.dataDetail = this.dataDetail.map((item: any) =>{
      item.year_min_0 != null ? item.year_min_0 = parseFloat(item.year_min_0) : item.year_min_0 = 0;
      item.year_min_0 = item.year_min_0.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      item.year_min_1 != null ? item.year_min_1 = parseFloat(item.year_min_1) : item.year_min_1 = 0;
      item.year_min_1 = item.year_min_0.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      item.year_min_2 != null ? item.year_min_2 = parseFloat(item.year_min_2) : item.year_min_0 = 0;
      item.year_min_2 = item.year_min_0.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      item.year_min_3 != null ? item.year_min_3 = parseFloat(item.year_min_3) : item.year_min_0 = 0;
      item.year_min_3 = item.year_min_0.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    this.tableConfig.setDataCadev(this.dataDetail);
    console.log('finish get data in func');

  }
  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiCadev();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data.content;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRealisasi.map((item: any) =>{
      item.miliar_usd != null ? item.miliar_usd = parseFloat(item.miliar_usd) : item.miliar_usd = 0;
      item.miliar_usd = item.miliar_usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    })
    this.tableConfig.setDataRealisasiCadev(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRkapCadev();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data.content;
      this.dataDetailRkap.sort((a: { tahun: number; }, b: { tahun: number; }) => {
        const aYear = a.tahun || 0;
        const bYear = b.tahun || 0;
        return bYear - aYear;
      });
      this.dataDetailRkap.map((item: any) =>{
        item.pdb != null ? item.pdb = parseFloat(item.pdb) : item.pdb = 0;
        item.pdb = item.pdb.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      })
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRkapCadev(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookCadev();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data.content;
      this.dataDetailOutlook.sort((a: { tahun: number; }, b: { tahun: number; }) => {
        const aYear = a.tahun || 0;
        const bYear = b.tahun || 0;
        return bYear - aYear;
      });
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataOutlookCadev(this.dataDetailOutlook)
    console.log('finish get data in func');
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
    await this.getDataRRkap();
    await this.getDataOutlook();

    this.tableConfig.initializeTableDataForeignExchange();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }
  addRow() {
    this.tableConfig.tableRealisasiForeignExchange.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRkapForeignExchange.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookForeignExchange.addRow({});
  }
}
