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

  async getCommoditiesData(){
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
    try {
      const response = await this.dataService.fetchDataCommoditiesAll();
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
