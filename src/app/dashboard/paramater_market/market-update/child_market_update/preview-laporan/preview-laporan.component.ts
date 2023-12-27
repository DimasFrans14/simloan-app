import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-preview-laporan',
  templateUrl: './preview-laporan.component.html',
  styleUrls: ['./preview-laporan.component.css']
})
export class PreviewLaporanComponent implements OnInit{

  constructor(
    private tabelConfig: TableServicesService,
    private dataService: DataService
  ){
    console.log(tabelConfig);
  }

  ngOnInit(): void {
    this.tabelConfig.tablePreview();
  }

}
