import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-interest-rate',
  templateUrl: './interest-rate.component.html',
  styleUrls: ['./interest-rate.component.css']
})
export class InterestRateComponent implements OnInit, AfterViewInit {

  constructor(
    private tableConfig: TableServicesService,
    private dataService: DataService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  testData: any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
  kursSelect: any;
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


  async getInterestRateData(){
    try {
      const response = await this.dataService.fetchDataKurs();
      this.kursSelect = response;
      this.kursSelect = this.kursSelect.d.list;
      console.log(this.kursSelect);
    } catch (error) {
      console.log(error);
    }
  }

  async getData(){
    this.isLoading = true;
    console.log(this.isLoading, 'loading 1');

    try {
      const data = await this.dataService.fetchDataKurs();
      this.testData = data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2');
    } catch (error) {
      console.log(error);
    }

    for(let i=0; i<10; i++){
      this.filteredData.push(this.testData.data.content[i]);
    }

    // console.log('updated data', this.filteredData);
    this.tableConfig.setData(this.filteredData);
    console.log('finish get data in func');

  }

  dataRKAP: any;
  dataInterestRate: any;

  async ngOnInit(): Promise<void> {
    console.log('load data');

    try {
      const responseInterestRate = await this.dataService.fetchDataInterestRateRKAP();
      this.dataRKAP = responseInterestRate;
      const filteredDataInterestRate = this.dataRKAP.data.content.filter((item: any) => item.grup === 'INTEREST RATE');
      this.dataInterestRate = filteredDataInterestRate;
      this.tableConfig.getDataInterestRate(filteredDataInterestRate);
      this.isLoading = false
    } catch (error) {
      console.error(error);
    }
    this.tableConfig.initializeTableDataInterestRate();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');

  }

}
