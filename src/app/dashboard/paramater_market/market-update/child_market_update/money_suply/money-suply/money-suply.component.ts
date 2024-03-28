import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-money-suply',
  templateUrl: './money-suply.component.html',
  styleUrls: ['./money-suply.component.css']
})
export class MoneySuplyComponent {
  constructor(
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  dataDetail: any;
  dataDetailRealisasi: any;
  dataDetailRkap: any;
  dataDetailOutlook: any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  realisasiPdbItem!: number;

  tanggalEditKurs: any;
  namaEditKurs: any;
  nilaiEditKurs: any;

  months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  async getData(){
    const today = moment().format('DD/MM/YYYY');
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchAllDataMacroIndicator(today,"MONEY");
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
    this.tableConfig.setDataMoneySupply(this.dataDetail);
    console.log('finish get data in func');
  }
  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiMoneySupply();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data.content;
      this.dataDetailRealisasi.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
  
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex < bIndex) {
          return 1;
        }
        if (aIndex > bIndex) {
          return -1;
        }
        return 0;
      });
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRealisasi.map((item: any) =>{
      item.triliun_beredar != null ? item.triliun_beredar = parseFloat(item.triliun_beredar) : item.triliun_beredar = 0;
      item.triliun_beredar = item.triliun_beredar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    })
    
    this.tableConfig.setDataRealisasiMoneySupply(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRkapMoneySupply();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data.content;
      this.dataDetailRkap.sort((a: { tahun: number; }, b: { tahun: number; }) => {
        const aYear = a.tahun || 0;
        const bYear = b.tahun || 0;
        return bYear - aYear;
      });
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRkap.map((item: any) =>{
      item.pdb != null ? item.pdb = parseFloat(item.pdb) : item.pdb = 0;
      item.pdb = item.pdb.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    })
    this.tableConfig.setDataRkapMoneySupply(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data.content;
      if (this.dataDetailOutlook == !null){
        this.dataDetailOutlook.sort((a: { tahun: number; }, b: { tahun: number; }) => {
          const aYear = a.tahun || 0;
          const bYear = b.tahun || 0;
          return bYear - aYear;
        });
      }else {
        console.log('data kosong')
      }
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRealisasi.map((item: any) =>{
      item.triliun_beredar != null ? item.triliun_beredar = parseFloat(item.triliun_beredar) : item.triliun_beredar = 0;
      item.triliun_beredar = item.triliun_beredar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    })
    this.tableConfig.setDataOutlookMoneySupply(this.dataDetailOutlook);
    console.log('finish get data in func');
  }

  nilaiEditRealKurs = (val: any) => {
    console.log(val);
  }

  async ngOnInit(): Promise<void> {
    console.log('load data');

    await this.getData();
    await this.getDataRealisasi();
    await this.getDataRkap();
    await this.getDataOutlook();

    this.tableConfig.initializeTableDataMoneySupply();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }
  addRow() {
    this.tableConfig.tableRealisasiMoneySupply.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRkapMoneySupply.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookMoneySupply.addRow({});
  }
}
