import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import * as moment from 'moment';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
@Component({
  selector: 'app-inflasi',
  templateUrl: './inflasi.component.html',
  styleUrls: ['./inflasi.component.css']
})
export class InflasiComponent {
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
  rowData:any

  dataInflasi: any;
  allLabelDate: any[] = [];
  getLabelYear: any;
  allLabelYear: any[] = [];
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

  async getDataInflasi(){
    const today = moment().format('DD/MM/YYYY');
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "INFLASI");
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
    this.tableConfig.setDataInflasi(this.dataDetail);
    console.log('finish get data in func');
  }
  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading Outlook');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiInflasi();
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
        console.log(this.isLoading,'loading 2', this.dataDetailRealisasi);
    } catch(error) {
      console.log(error)
    }
      this.dataDetailRealisasi = this.dataDetailRealisasi.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
    this.tableConfig.setDataRealisasiInflasi(this.dataDetailRealisasi);
    console.log('finish get data by function')
  }

  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading Outlook');
    try{
      const data = await this.marketUpdateService.fetchDataRkapInflasi();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data.content;
      this.dataDetailRkap.sort((a: { tahun: number; }, b: { tahun: number; }) => {
        const aYear = a.tahun || 0;
        const bYear = b.tahun || 0;
        return bYear - aYear;
      });
      this.isLoading = false;
      console.log(this.isLoading,'loading 2', this.dataDetailRkap);
    } catch(error) {
      console.log(error)
    }
      this.dataDetailRkap = this.dataDetailRkap.map((item: any) =>{
        item.pdb != null ? item.pdb = parseFloat(item.pdb) : item.pdb = 0;
        item.pdb = item.pdb.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
    this.tableConfig.setDataRkapInflasi(this.dataDetailRkap);
    console.log('finish get data by function')
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading Outlook');
    try{
      const data = await this.marketUpdateService.fetchDataOutlookInflasi();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data.content;
      this.dataDetailOutlook.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
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
      console.log(this.isLoading,'loading 2', this.dataDetailOutlook);
    } catch(error) {
      console.log(error)
    }
      this.dataDetailOutlook = this.dataDetailOutlook.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
    this.tableConfig.setDataOutlookInflasi(this.dataDetailOutlook);
    console.log('finish get data by function')
  }

  async ngOnInit(): Promise<void> {
    console.log('load data');
    try {
      this.isLoading = true;

      let today = moment().format('DD/MM/YYYY')

      const responseInflasi = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "INFLASI");

      this.dataInflasi = responseInflasi;

      if(this.dataInflasi.data.length > 0){
        this.getLabelYear = this.dataInflasi.data.filter((item: any) => {
          return item.bulan === 'Bulan';
        })
        this.dataInflasi = this.dataInflasi.data.filter((item: any) => {
          return item.bulan != 'Bulan'
        })

        this.dataInflasi = this.dataInflasi.map((item: any) => {
          item.year_min_0 != null ? item.year_min_0 = item.year_min_0.toFixed(2) : item.year_min_0 = 0;
          item.year_min_0 = item.year_min_0.toLocaleString('en-US');

          item.year_min_1 != null ? item.year_min_1 = item.year_min_1.toFixed(2) : item.year_min_1 = 0;
          item.year_min_1 = item.year_min_1.toLocaleString('en-US');

          item.year_min_2 != null ? item.year_min_2 = item.year_min_2.toFixed(2) : item.year_min_2 = 0;
          item.year_min_2 = item.year_min_2.toLocaleString('en-US');

          item.year_min_3 != null ? item.year_min_3 = item.year_min_3.toFixed(2) : item.year_min_3 = 0;
          item.year_min_3 = item.year_min_3.toLocaleString('en-US');

          return item
        })
        // this.isLoadingTableInflasi = false;
      }
      else{
        this.dataInflasi = [];
        // this.isLoadingTableInflasi = false;
      }

      this.allLabelYear = [];

      this.allLabelYear.push(this.getLabelYear[0].year_min_0);
      this.allLabelYear.push(this.getLabelYear[0].year_min_1);
      this.allLabelYear.push(this.getLabelYear[0].year_min_2);
      this.allLabelYear.push(this.getLabelYear[0].year_min_3);

      console.log(this.allLabelYear);

      this.tableConfig.setDataInflasi(this.dataInflasi);

      this.isLoading = false;

    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }

    let today = new Date();
    let formatToday = moment(today).format("DD/MM/YYYY").toString();

    let getYesterday = new Date();
    let yesterday = getYesterday.setDate(getYesterday.getDate() - 1);
    let formatYesterday = moment(yesterday).format("DD/MM/YYYY").toString();

    let getTwoDaysBefore = new Date();
    let twoDaysBefore = getTwoDaysBefore.setDate(getTwoDaysBefore.getDate() - 2);
    let formatTwoDaysBefore = moment(twoDaysBefore).format("DD/MM/YYYY").toString();

    let getThreeDaysBefore = new Date();
    let threeDaysBefore = getThreeDaysBefore.setDate(getThreeDaysBefore.getDate() - 3);
    let formatThreeDaysBefore = moment(threeDaysBefore).format("DD/MM/YYYY").toString();

    await this.getDataRealisasi();
    await this.getDataInflasi();
    await this.getDataRkap();
    await this.getDataOutlook();

    this.tableConfig.initializeTableDataInflasi(this.allLabelYear);
  }

  ngAfterViewInit(): void {
    console.log('finish load data');

  }
  addRow() {
    this.tableConfig.tableRealisasiInflasi.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRkapInflasi.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookInflasi.addRow({});
  }
}
