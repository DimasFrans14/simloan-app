import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-shl-agreement',
  templateUrl: './shl-agreement.component.html',
  styleUrls: ['./shl-agreement.component.css']
})
export class ShlAgreementComponent implements OnInit{

  constructor(
    private tableConfig: TableServicesService,
    private route: Router
  ){

  }

  paramsFindData: string = ''

  getValueInput = (event: any) => {
    console.log(event.target.value);
    this.paramsFindData = event.target.value;
  }

  findData = () => {
    this.tableConfig.findDataSHLAgreement(this.paramsFindData)
  }

  navigateToCreateAgreement = () => {
    this.route.navigate(['shl_agreement/create']);
  }

  async ngOnInit(): Promise<void> {
    this.tableConfig.initializeTableSHLAgreement();
  }

}
