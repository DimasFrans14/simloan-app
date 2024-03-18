import { Component, OnInit } from '@angular/core';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-shl-monitoring-detail',
  templateUrl: './shl-monitoring-detail.component.html',
  styleUrls: ['./shl-monitoring-detail.component.css']
})
export class ShlMonitoringDetailComponent implements OnInit {

  constructor(
    private tableConfig: TableServicesService
  ){}

  dataDetailMonitoring: any;

  ngOnInit(): void {
      const getDataDetailMonitoring = localStorage.getItem('detailSHLMonitoring');
      if(getDataDetailMonitoring){
        this.dataDetailMonitoring = JSON.parse(getDataDetailMonitoring);
      }
      this.tableConfig.initializeTableSHLMonitoringDetail();
  }

}
