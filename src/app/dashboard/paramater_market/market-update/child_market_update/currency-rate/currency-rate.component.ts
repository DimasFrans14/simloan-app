import { Component, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.css']
})
export class CurrencyRateComponent implements AfterViewInit {

  constructor(
    private tableConfig: TableServicesService,
  ){}

  // tableDataCurrency: any;
  // tableCurrency:any;

  // tableDataRealisasi: any;
  // tableReaslisasi: any;

  // tableDataRKAP: any;
  // tableRKAP: any;

  // tableDataOutlook: any;
  // tableOutlook: any;

  ngAfterViewInit(): void {

    this.tableConfig.initializeTableDataCurrency();

  }

}
