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

  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRealisasiBondYieldUsTreasury();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data.content;
      this.dataDetailRealisasi = this.dataDetailRealisasi.map((item: any) => {
        const dateParts = item.tanggal.split("/");
        const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
        item.tanggal = dateObject.toISOString().split("T")[0];
        
        return item;
        }).sort((a: any, b: any) => {
          return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
        });
        this.dataDetailRealisasi.map((item:any)=>{
          item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
          return item
        })
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
      const data = await this.marketUpdateService.fetchDataAllRkap();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRkap = this.dataDetailRkap.content.filter((item:any)=>{
      return item.grup ==="BOND_YIELD" && item.mtu ==="US_TREASURY"
    })
    console.log(this.dataDetailRkap)
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

    // await this.getData();
    await this.getDataRealisasi();
    await this.getDataRkap();
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
