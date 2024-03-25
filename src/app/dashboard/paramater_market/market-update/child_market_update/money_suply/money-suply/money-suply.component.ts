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

    this.tableConfig.setDataMoneySupply(this.dataDetail);
    console.log('finish get data in func');
  }
  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiMoneySupply();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRealisasiMoneySupply(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRkapMoneySupply();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRkapMoneySupply(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
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
