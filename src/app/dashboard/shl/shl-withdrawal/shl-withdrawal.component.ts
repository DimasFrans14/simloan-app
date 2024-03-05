import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-shl-withdrawal',
  templateUrl: './shl-withdrawal.component.html',
  styleUrls: ['./shl-withdrawal.component.css']
})
export class ShlWithdrawalComponent implements OnInit{

  constructor(
    private tableConfig: TableServicesService,
    private route: Router
  ){

  }

  paramsFindData: string = ''

  createSHL = () => {
    this.route.navigate(['/shl_withdrawal/create']);
  }

  getValueInput = (event: any) => {
    console.log(event.target.value);
    this.paramsFindData = event.target.value;
  }

  ngOnInit(): void {
    this.tableConfig.initializeTableSHLWithdrawal();
  }

}
