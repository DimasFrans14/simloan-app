import { Component } from '@angular/core';
import * as moment from 'moment';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-us-treasury',
  templateUrl: './us-treasury.component.html',
  styleUrls: ['./us-treasury.component.css']
})
export class UsTreasuryComponent {
  
  constructor(
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  dataDetail: any;
  dataDetailRealisasi: any;
  dataDetailOutlook: any;
  dataDetailRkap: any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  realisasiKursItem!: number;

  tanggalEditKurs: any;
  namaEditKurs: any;
  nilaiEditKurs: any;

  dataBondYieldSBN: any;
  dataBondYieldUST:any;
  getLabelBondYield: any;
  allLabelDate: any[] = [];

  maxDate = new Date();

  formDataRealisasi = {
    'tanggal': '',
    'nama_kurs':'',
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
      "currency": "Yield UST 10-Yr",
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
    let getYear = moment().format('YYYY');
    try {
      const data = await this.marketUpdateService.fetchDataBondYield(getYear);
      this.dataDetail = data;
      this.dataDetail = this.dataDetail.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetail);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setData(this.dataDetail);
    console.log('finish get data in func');
  }
  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiBondYieldUsTreasury();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRealisasiBondYieldUsTreasury(this.dataDetailRealisasi);
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRkapBondYieldUsTreasury();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRkapBondYieldUsTreasury(this.dataDetailRkap);
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookBondYieldUsTreasury();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataOutlookBondYieldUsTreasury(this.dataDetailOutlook);
  }
  onDate(event: any){
    console.log(event);

    console.log(moment(event.value._d).format("DD/MM/YYYY"));

    this.tanggalEditKurs = moment(event.value._d).format("DD/MM/YYYY");
  }

  realisasiKursSelect = (event: any) => {
    console.log(event);
  }

  nilaiEditRealKurs = (val: any) => {
    console.log(val);
  }

  onSubmitRealisasi() {
    this.formDataRealisasi.tanggal = this.tanggalEditKurs
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
    try {

      this.isLoading = true;

      let today = moment().format('DD/MM/YYYY')
      const responseBondYield = await this.marketUpdateService.fetchDataBondYield(today);

      this.dataBondYieldUST = responseBondYield;
      if(this.dataBondYieldUST.d.length > 0){
        this.getLabelBondYield = this.dataBondYieldUST.d.filter((item: any) => item.tenor === 'Label');

        this.dataBondYieldUST = this.dataBondYieldUST.d.filter((item: any) => item.tipe.includes('UST') && item.tenor != 'Label');

        this.dataBondYieldUST = this.dataBondYieldUST.map((item: any) => {

          item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2);
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 = parseFloat(item.h_min_0).toFixed(2);
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 = parseFloat(item.h_min_1).toFixed(2);
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 = parseFloat(item.h_min_7).toFixed(2);
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 = parseFloat(item.h_min_30).toFixed(2);
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap = parseFloat(item.change_rkap).toFixed(2);
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow = parseFloat(item.change_wow).toFixed(2);
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom = parseFloat(item.change_mom).toFixed(2);
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day = parseFloat(item.change_1day).toFixed(2);
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item
        })

        this.dataBondYieldUST = responseBondYield;
        this.dataBondYieldUST = this.dataBondYieldUST.d.filter((item: any) => item.tipe.includes('US_TREASURY'));

        this.dataBondYieldUST = this.dataBondYieldUST.map((item: any) => {

          item.nilai_rkap = parseFloat(item.nilai_rkap).toFixed(2);
          item.nilai_rkap = item.nilai_rkap.toLocaleString('en-US');

          item.h_min_0 = parseFloat(item.h_min_0).toFixed(2);
          item.h_min_0 = item.h_min_0.toLocaleString('en-US');

          item.h_min_1 = parseFloat(item.h_min_1).toFixed(2);
          item.h_min_1 = item.h_min_1.toLocaleString('en-US');

          item.h_min_7 = parseFloat(item.h_min_7).toFixed(2);
          item.h_min_7 = item.h_min_7.toLocaleString('en-US');

          item.h_min_30 = parseFloat(item.h_min_30).toFixed(2);
          item.h_min_30 = item.h_min_30.toLocaleString('en-US');

          item.change_rkap = parseFloat(item.change_rkap).toFixed(2);
          item.change_rkap = item.change_rkap.toLocaleString('en-US');

          item.change_wow = parseFloat(item.change_wow).toFixed(2);
          item.change_wow = item.change_wow.toLocaleString('en-US');

          item.change_mom = parseFloat(item.change_mom).toFixed(2);
          item.change_mom = item.change_mom.toLocaleString('en-US');

          item.change_1day = parseFloat(item.change_1day).toFixed(2);
          item.change_1day = item.change_1day.toLocaleString('en-US');
          return item
        })

        console.log(this.dataBondYieldUST, this.dataBondYieldUST);
      }
      else{
        this.dataBondYieldUST = [];
        this.dataBondYieldUST = [];
        this.getLabelBondYield = [];
      }

      this.allLabelDate.push(this.getLabelBondYield);
      console.log(this.allLabelDate);


      this.tableConfig.getDataBondYield(this.dataBondYieldUST, this.dataBondYieldUST);

      this.isLoading = false;
      console.log('load after fetch: ' + this.isLoading);
      console.log(responseBondYield);


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

    console.log('load data');

    await this.getData();
    await this.getDataRealisasi();
    // await this.getDataRkap();
    await this.getDataOutlook();
    this.tableConfig.initializeTableDataUsTreasury(this.allLabelDate);
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }
  addRow() {
    this.tableConfig.tableRealisasiUSTreasury.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRKAPUSTreasury.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookUSTreasury.addRow({});
  }
}
