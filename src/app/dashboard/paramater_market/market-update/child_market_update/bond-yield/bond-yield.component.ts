import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import * as moment from 'moment';

@Component({
  selector: 'app-bond-yield',
  templateUrl: './bond-yield.component.html',
  styleUrls: ['./bond-yield.component.css']
})
export class BondYieldComponent {
  
  constructor(
    private tableConfig: TableServicesService,
    private marketUpdateService: MarketUpdateService,
    private dataService: DataService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  testData: any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  dataDetailRealisasi: any;
  dataDetailRkap: any;
  dataDetailOutlook: any;

  dataBondYieldSBN: any;
  dataBondYieldUST:any;
  getLabelBondYield: any;
  allLabelDate: any[] = [];

  selectedItems!: number;

  async getData(){
    try {
      const response = await this.dataService.fetchDataKurs();
      this.testData = response
      if(this.testData){
        this.isLoading = false;
        const filteredData = this.testData.data.content.filter((item: any) => item.grup === 'BOND YIELD');
        // this.tableConfig.getDataBondYield(filteredData)
        console.log(filteredData);
      }
      else{
        console.log('data gagal di load');
      }
    } catch (error) {
      console.log(error)
    }
  }
  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiBondYieldSBN();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRealisasi = this.dataDetailRealisasi.content.map((item: any) =>{
      item.yr5 != null ? item.yr5 = parseFloat(item.yr5) : item.yr5 = 0;
      item.yr5 = item.yr5.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    this.tableConfig.setDataRealisasiBondYieldSBN(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataAllRkap();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRkap = this.dataDetailRkap.content.filter((item:any)=>{
      return item.grup ==="BOND_YIELD" && item.mtu ==="SBN"
    })
    this.dataDetailRkap = this.dataDetailRkap.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    this.tableConfig.setDataRkapBondYieldSBN(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookBondYieldSBN();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data.content;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailOutlook = this.dataDetailOutlook.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    this.tableConfig.setDataOutlookBondYieldSBN(this.dataDetailOutlook);
    console.log('finish get data in func');
  }

  async ngOnInit(): Promise<void> {
    try {

      this.isLoading = true;

      let today = moment().format('DD/MM/YYYY')
      const responseInterestRate = await this.marketUpdateService.fetchDataInterestRate(today);
      const responseBondYield = await this.marketUpdateService.fetchDataBondYield(today);

      this.dataBondYieldSBN = responseBondYield;
      if(this.dataBondYieldSBN.d.length > 0){
        this.getLabelBondYield = this.dataBondYieldSBN.d.filter((item: any) => item.tenor === 'Label');

        this.dataBondYieldSBN = this.dataBondYieldSBN.d.filter((item: any) => item.tipe.includes('SBN') && item.tenor != 'Label');

        this.dataBondYieldSBN = this.dataBondYieldSBN.map((item: any) => {

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

        console.log(this.dataBondYieldSBN, this.dataBondYieldUST);
      }
      else{
        this.dataBondYieldSBN = [];
        this.dataBondYieldUST = [];
        this.getLabelBondYield = [];
      }

      this.allLabelDate.push(this.getLabelBondYield);
      console.log(this.allLabelDate);


      this.tableConfig.getDataBondYield(this.dataBondYieldSBN, this.dataBondYieldUST);

      this.isLoading = false;
      console.log('load after fetch: ' + this.isLoading);
      console.log( responseInterestRate, responseBondYield);


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
    await this.getDataRkap();
    await this.getDataOutlook();
    this.tableConfig.initializeTableDataBondYield(this.allLabelDate);
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }

  addRow() {
    this.tableConfig.tableRealisasiBondYield.addRow({});
  }
  addRowRKAP() {
    this.tableConfig.tableRKAPBondYield.addRow({});
  }
  addRowOutlook() {
    this.tableConfig.tableOutlookBondYield.addRow({});
  }

}
