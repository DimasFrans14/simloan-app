import { Component, AfterViewInit, OnInit ,Input} from '@angular/core';
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

  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.marketUpdateService.fetchDataRealisasiPDB();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data.content;
      if (this.dataDetailRealisasi == null){
        console.log('data kosong')
      } else {
        this.dataDetailRealisasi.sort((a: { tahun: any; quartal: any; }, b: { tahun: any; quartal: any; }) => {
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
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    if (this.dataDetailRealisasi){
      console.log('data kosong')
    } else {
      this.dataDetailRealisasi = this.dataDetailRealisasi.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
    }
    this.tableConfig.setDataRealisasiPdb(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading Outlook');
    try{
      const data = await this.marketUpdateService.fetchDataAllRkap();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data.content;
      this.dataDetailRkap = this.dataDetailRkap.filter((item:any)=>{
      return item.mtu ==="PDB"
    })
      this.dataDetailRkap.sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
        const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
        const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      });
      this.isLoading = false;
      console.log(this.isLoading,'loading 2', this.dataDetailRkap);
    } catch(error) {
      console.log(error)
    }
    if (this.dataDetailRkap != null){
      this.dataDetailRkap = this.dataDetailRkap.map((item: any) =>{
        item.pdb != null ? item.pdb = parseFloat(item.pdb) : item.pdb = 0;
        item.pdb = item.pdb.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
    } else {
      console.log('data kosong')
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
      this.dataDetailOutlook = this.dataDetailOutlook.data.content;
      if (this.dataDetailOutlook == null){
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
      console.log(this.isLoading,'loading 2', this.dataDetailOutlook);
    } catch(error) {
      console.log(error)
    }
    if (this.dataDetailOutlook == null){
      console.log('data kosong')
    } else{
      this.dataDetailOutlook = this.dataDetailOutlook.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
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
}