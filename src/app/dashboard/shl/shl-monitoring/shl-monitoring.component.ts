import { Component, OnInit } from '@angular/core';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-shl-monitoring',
  templateUrl: './shl-monitoring.component.html',
  styleUrls: ['./shl-monitoring.component.css']
})
export class ShlMonitoringComponent implements OnInit {

  constructor(
    private tableConfig: TableServicesService
  ){}

  ngOnInit(): void {
    this.tableConfig.initializeTableSHLMonitoring();
  }

}
