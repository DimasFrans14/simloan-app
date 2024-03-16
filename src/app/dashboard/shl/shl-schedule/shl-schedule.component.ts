import { Component, OnInit } from '@angular/core';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-shl-schedule',
  templateUrl: './shl-schedule.component.html',
  styleUrls: ['./shl-schedule.component.css']
})
export class ShlScheduleComponent implements OnInit {

  constructor(
    private tableConfig: TableServicesService
  ){

  }


  ngOnInit(): void {
      this.tableConfig.initializeTableSHLSchedule();
  }
}
