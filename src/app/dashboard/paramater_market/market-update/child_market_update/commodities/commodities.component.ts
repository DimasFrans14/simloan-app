import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit, AfterViewInit {

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

  maxDate = new Date();

  formDataRealisasi = {
    'tahun': '',
    'periode':'',
    'nilai_realisasi':''
  }

  formDataRKAP = {
    'tanggal': '',
    'nama_kurs':'',
    'nilai_rkap':''
  }

  formDataOutlook = {
    'tanggal': '',
    'nama_kurs':'',
    'nilai_outlook':''
  }

  defaultMacroIndicatorItems = [
    {
      "id": "1",
      "currency": "PDB (%)",
      "rate1": "1.23",
      "rate2": "1.25",
      "rate3": "1.27"
    },
    {
      "id": "2",
      "currency": "Inflasi (%)",
      "rate1": "0.98",
      "rate2": "1.01",
      "rate3": "0.95"
    },
    {
      "id": "3",
      "currency": "Fed Funds Rate (%)",
      "rate1": "1.55",
      "rate2": "1.52",
      "rate3": "1.57"
    },
    {
      "id": "4",
      "currency": "BI 7-Day Reverse Repo (%)",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
    {
      "id": "5",
      "currency": "Yield UST 10-Yr",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
    {
      "id": "6",
      "currency": "Yield SBN 10-Yr",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
  ]

  macroIndicatorSelect = [
    { id: 1, name: 'PDB (%)' },
    { id: 2, name: 'Inflasi (%)' },
    { id: 3, name: 'Fed Funds Rate (%)' },
    { id: 4, name: 'BI 7-Day Reverse Repo (%)' },
    { id: 5, name: 'Yield UST 10-Yr' },
    { id: 6, name: 'Yield SBN 10-Yr' },
  ];

  kursSelect: any;

  async getCurrencyRateData(){
    // try {
    //   const response = await this.dataService.fetchDataKurs();
    //   this.kursSelect = response;
    //   this.kursSelect = this.kursSelect.d.list;
    //   console.log(this.kursSelect);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async getData(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.marketUpdateService.fetchDataCommoditiesAll(moment().format('YYYY'));
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
      const data = await this.marketUpdateService.fetchDataRealisasiCommodities();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRealisasiCommodities(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.marketUpdateService.fetchDataRkapCommodities();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRkapCommodities(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.marketUpdateService.fetchDataOutlookCommodities();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataOutlookCommodities(this.dataDetailOutlook)
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

  onSubmitRealisasi() {
    this.formDataRealisasi.tahun = this.tanggalEditKurs
    console.log('Data yang di-submit:', this.formDataRealisasi);
  }

  onSubmitRKAP() {
    this.formDataRKAP.tanggal = this.tanggalEditKurs
    console.log('Data yang di-submit:', this.formDataRKAP);
  }
  onSubmitOutlook() {
    this.formDataOutlook.tanggal = this.tanggalEditKurs
    console.log('Data yang di-submit:', this.formDataOutlook);
  }

  async ngOnInit(): Promise<void> {
    console.log('load data');

    await this.getData();
    await this.getDataRealisasi();
    await this.getDataRkap();
    await this.getDataOutlook();

    this.tableConfig.initializeTableDataCommodities();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }

  addRow() {
    this.tableConfig.tableRealisasiComodities.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRKAPComodities.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookComodities.addRow({});
  }

}
