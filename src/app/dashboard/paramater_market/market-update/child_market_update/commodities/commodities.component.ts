import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit, AfterViewInit {

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
      const response = await this.dataService.fetchDataCommodities();
      this.testData = response
      if(this.testData){
        this.isLoading = false;
        this.tableConfig.getDataCommodities(this.testData)
        console.log('berhasil load data');
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
    this.tableConfig.initializeTableDataCommodities();
  }

  ngAfterViewInit(): void {
    console.log('finish load data');
  }

}
