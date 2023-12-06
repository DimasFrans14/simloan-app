import { Component, AfterViewInit, OnInit ,Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
// import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.css']
})
export class CurrencyRateComponent implements OnInit, AfterViewInit {

  constructor(
    private tableConfig: TableServicesService,
    private dataService: DataService
  ){
    // console.log(tableConfig);
    // console.log(tableConfig.getData());
  }

  testData: any;

  async getData(){
    let data = await this.dataService.fetchDataKurs();
    this.testData = data;
    this.tableConfig.setData(this.testData);
    // console.log(this.testData);
  }

  ngOnInit(): void {
    this.getData()
  }

  ngAfterViewInit(): void {
    this.tableConfig.initializeTableDataCurrency();
  }

}
