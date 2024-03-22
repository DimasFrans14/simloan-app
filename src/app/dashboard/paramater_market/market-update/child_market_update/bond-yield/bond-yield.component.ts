import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';

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

  selectedItems!: number;


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

  // async getBondYieldData(){
  //   try {
  //     const response = await this.dataService.fetchDataBondYield();
  //     this.kursSelect = response;
  //     this.kursSelect = this.kursSelect.d.list;
  //     console.log(this.kursSelect);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
    this.tableConfig.setDataRealisasiBondYieldSBN(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataRkap(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataRkapBondYieldSBN();
      this.dataDetailRealisasi = data;
      this.dataDetailRealisasi = this.dataDetailRealisasi.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailRealisasi);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataRkapBondYieldSBN(this.dataDetailRealisasi);
    console.log('finish get data in func');
  }
  async getDataOutlook(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');
    try {
      const data = await this.marketUpdateService.fetchDataOutlookBondYieldSBN();
      this.dataDetailOutlook = data;
      this.dataDetailOutlook = this.dataDetailOutlook.data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2', this.dataDetailOutlook);
    } catch (error) {
      console.log(error);
    }
    this.tableConfig.setDataOutlookBondYieldSBN(this.dataDetailOutlook);
    console.log('finish get data in func');
  }

  async ngOnInit(): Promise<void> {
    console.log('load data');

    await this.getData();
    await this.getDataOutlook();
    this.tableConfig.initializeTableDataBondYield();
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
