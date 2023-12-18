import { Component } from '@angular/core';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent {

  constructor(
    private tableConfig: TableServicesService
    ){
      // console.log(tableConfig);
    }

  tableDataImport: any;
  tableImport:any

  ngAfterViewInit(): void {
    this.tableConfig.initializeTableDataFindebt();
  }

}

