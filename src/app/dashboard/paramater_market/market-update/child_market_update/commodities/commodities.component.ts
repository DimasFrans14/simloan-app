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

  dataCommodtities: any;
  allLabelDate: any[] = [];
  getLabelCommodities: any;

  tanggalEditKurs: any;
  namaEditKurs: any;
  nilaiEditKurs: any;

  maxDate = new Date();

  kursSelect: any;

  async getDataRealisasi(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.marketUpdateService.fetchDataRealisasiCommodities();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      if (this.dataDetailRealisasi == null){
        console.log('data kosong')
      } else{
        this.dataDetailRealisasi = this.dataDetailRealisasi.map((item: any) => {
          const dateParts = item.tanggal.split("/");
          const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1])-1, Number(dateParts[0])+1);
          item.tanggal = dateObject.toISOString().split("T")[0];
          return item;
          }).sort((a: any, b: any) => {
            return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
          });
          this.dataDetailRealisasi.map((item:any)=>{
            item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
            return item
        })
      }
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
      const data = await this.marketUpdateService.fetchDataAllRkap();
      this.dataDetailRkap = data;
      this.dataDetailRkap = this.dataDetailRkap.data.content;
      if (this.dataDetailRkap == null){
        console.log('data kosong')
      } else{
        this.dataDetailRkap = this.dataDetailRkap.map((item: any) => {
        const dateParts = item.tanggal.split("/");
        const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1])-1, Number(dateParts[0])+1);
        item.tanggal = dateObject.toISOString().split("T")[0];
        return item;}).sort((a: any, b: any) => {
          return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
        })
        this.dataDetailRkap.map((item:any)=>{
          item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
          return item
        })
      }
      this.dataDetailRkap.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      });
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRkap);
    } catch (error) {
      console.log(error);
    }
    this.dataDetailRkap = this.dataDetailRkap.content.filter((item:any)=>{
      return item.grup ==="COMMODITIES"
    })
    this.tableConfig.setDataRkapCommodities(this.dataDetailRkap);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookCommodities();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data.content;
      this.dataDetailOutlook.sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
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
      this.dataDetailOutlook.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      });
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

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;
      let today = moment().format('DD/MM/YYYY')
      const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesAll(today);

      this.dataCommodtities = responseCommodities;
      if(this.dataCommodtities.d.length > 0){
        this.getLabelCommodities = this.dataCommodtities.d.filter((item: any) => item.kode.includes('Label'));

        this.dataCommodtities = this.dataCommodtities.d.filter((item: any) => !item.kode.includes('Label'));

        this.dataCommodtities = this.dataCommodtities.map((item: any) => {

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
      }
      else{
        this.dataCommodtities = [];
        this.getLabelCommodities = [];
      }
      this.allLabelDate.push(this.getLabelCommodities);
      this.tableConfig.getDataCommodities(this.dataCommodtities);
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
    console.log('load data');

    await this.getDataRealisasi();
    await this.getDataRkap();
    await this.getDataOutlook();

    this.tableConfig.initializeTableDataCommodities(this.allLabelDate);
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
