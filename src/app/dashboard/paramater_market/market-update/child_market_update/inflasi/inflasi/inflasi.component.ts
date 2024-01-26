import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
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
    private dataService: DataService
  ){
    // console.log(this.tableConfig.initializeTableDataCurrency(), this.tableConfig.initializeTableData());
  }

  testData: any;
  filteredData: String[] = [];
  isLoading: Boolean = true;
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

  async getCurrencyRateData(){
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
      const data = await this.dataService.fetchDataCommoditiesAll();
      this.testData = data;
      this.isLoading = false;
      console.log(this.isLoading, 'loading 2');
    } catch (error) {
      console.log(error);
    }

    // for(let i=0; i<10; i++){
    //   this.filteredData.push(this.testData.data.content[i]);
    // }

    // console.log('updated data', this.filteredData);
    this.tableConfig.setData(this.testData.d.list);
    console.log('finish get data in func');

  }

  async ngOnInit(): Promise<void> {
    console.log('load data');

    await this.getData();
    this.tableConfig.initializeTableDataCurrency();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');

  }
}
