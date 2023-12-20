import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-bond-yield',
  templateUrl: './bond-yield.component.html',
  styleUrls: ['./bond-yield.component.css']
})
export class BondYieldComponent {

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
    try {
      const response = await this.dataService.fetchDataInterestRateRKAP();
      this.testData = response
      if(this.testData){
        this.isLoading = false;
        const filteredData = this.testData.data.content.filter((item: any) => item.grup === 'BOND YIELD');
        this.tableConfig.getDataBondYield(filteredData)
        console.log(filteredData);
      }
      else{
        console.log('data gagal di load');
      }
    } catch (error) {
      console.log(error)
    }
  }

  async ngOnInit(): Promise<void> {
    console.log('load data');

    await this.getData();
    this.tableConfig.initializeTableDataBondYield();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }

}
