import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.css']
})
export class LiabilitiesComponent {

  constructor (private tableConfig: TableServicesService){

  }

  tableDataCreateLiabilities: any;
  tableCreateLiabilities:any

  ngAfterViewInit(): void {
    this.tableConfig.initializeTableCreateLiabilities();
  }
}
