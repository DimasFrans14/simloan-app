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
