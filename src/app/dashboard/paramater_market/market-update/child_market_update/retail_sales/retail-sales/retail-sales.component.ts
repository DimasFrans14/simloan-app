import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-retail-sales',
  templateUrl: './retail-sales.component.html',
  styleUrls: ['./retail-sales.component.css']
})
export class RetailSalesComponent {
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
  dataRetail: any;
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

  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data.content;
      if ( this.dataDetailRealisasi == null){
        console.log('data kosong')
      } else {
        this.dataDetailRealisasi.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
          const aIndex = this.months.indexOf(a.bulan);
          const bIndex = this.months.indexOf(b.bulan);
    
          if (a.tahun > b.tahun) {
            return -1;
          }
          if (a.tahun < b.tahun) {
            return 1;
          }
          if (aIndex > bIndex) {
            return 1;
          }
          if (aIndex < bIndex) {
            return -1;
          }
          return 0;
        });
      }
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    if (this.dataDetailRealisasi == null){
      console.log('data kosong')
    } else {
      this.dataDetailRealisasi = this.dataDetailRealisasi.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
    }
    this.tableConfig.setDataRealisasiRetail(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataAllRkap();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data.content;
      this.dataDetailRkap.sort((a: { tahun: number; }, b: { tahun: number; }) => {
        const aYear = a.tahun || 0;
        const bYear = b.tahun || 0;
        return bYear - aYear;
      });
      this.dataDetailRkap = this.dataDetailRkap.filter((item:any)=>{
        return item.mtu ==="RETAIL"
      })
      this.dataDetailRkap = this.dataDetailRkap.map((item: any) =>{
        item.pdb != null ? item.pdb = parseFloat(item.pdb) : item.pdb = 0;
        item.pdb = item.pdb.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRkapRetail(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookRetail();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data.content;
      if ( this.dataDetailOutlook == null){
          console.log('data kosong')
      } else {
        this.dataDetailOutlook.sort((a: { tahun: any; quartal: any; }, b: { tahun: any; quartal: any; }) => {
          const aYear = a.tahun;
          const bYear = b.tahun;
          if (aYear === bYear) {
            const aQuartal = a.quartal;
            const bQuartal = b.quartal;
            if (aQuartal === bQuartal) {
              return 0;
            }
            if (aQuartal === "Q4") {
              return -1;
            }
            if (bQuartal === "Q4") {
              return 1;
            }
            if (aQuartal === "Q3") {
              return -1;
            }
            if (bQuartal === "Q3") {
              return 1;
            }
            if (aQuartal === "Q2") {
              return -1;
            }
            if (bQuartal === "Q2") {
              return 1;
            }
            if (aQuartal === "Q1") {
              return 1;
            }
            return -1;
          }
          if (aYear > bYear) {
            return -1;
          }
          return 1;
        });
      }
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    if ( this.dataDetailOutlook == null ){
      console.log('data kosong')
    } else {
      this.dataDetailOutlook = this.dataDetailOutlook.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
    }
    this.tableConfig.setDataOutlookRetail(this.dataDetailOutlook);
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
    try {
      this.isLoading = true;

      let today = moment().format('DD/MM/YYYY')

      const responseRetail = await this.marketUpdateService.fetchAllDataMacroIndicator(today, "RETAIL");

      this.dataRetail = responseRetail;

      if(this.dataRetail.data.length > 0){
        this.getLabelYear = this.dataRetail.data.filter((item: any) => {
          return item.bulan === 'Bulan';
        })
        this.dataRetail = this.dataRetail.data.filter((item: any) => {
          return item.bulan !== 'Bulan'
        })
        console.log( this.dataRetail, this.getLabelYear)

        this.dataRetail = this.dataRetail.map((item: any) => {
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
        this.dataRetail = [];
        // this.isLoadingTableInflasi = false;
      }

      this.allLabelYear = [];

      this.allLabelYear.push(this.getLabelYear[0].year_min_0);
      this.allLabelYear.push(this.getLabelYear[0].year_min_1);
      this.allLabelYear.push(this.getLabelYear[0].year_min_2);
      this.allLabelYear.push(this.getLabelYear[0].year_min_3);

      console.log(this.allLabelYear);
      console.log(this.dataRetail)
      this.tableConfig.setDataRetail(this.dataRetail);

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

    // await this.getData();
    await this.getDataRealisasi();
    await this.getDataRkap();
    await this.getDataOutlook();

    this.tableConfig.initializeTableDataRetail();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }
  addRow() {
    this.tableConfig.tableRealisasiRetail.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRkapRetail.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookRetail.addRow({});
  }
}
