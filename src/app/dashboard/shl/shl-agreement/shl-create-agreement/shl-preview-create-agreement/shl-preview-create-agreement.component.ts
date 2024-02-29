import { Component, OnInit } from '@angular/core';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-shl-preview-create-agreement',
  templateUrl: './shl-preview-create-agreement.component.html',
  styleUrls: ['./shl-preview-create-agreement.component.css']
})
export class ShlPreviewCreateAgreementComponent implements OnInit{


  constructor(
    private tabelConfig: TableServicesService
  ){

  }

  async ngOnInit(): Promise<void> {
    this.tabelConfig.initializeTableDetailProyekSHLAgreement()
  }

}
