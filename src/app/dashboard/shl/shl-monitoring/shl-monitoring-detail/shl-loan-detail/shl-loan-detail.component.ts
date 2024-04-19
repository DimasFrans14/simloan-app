import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { table } from 'console';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { log } from 'util';

@Component({
  selector: 'app-shl-loan-detail',
  templateUrl: './shl-loan-detail.component.html',
  styleUrls: ['./shl-loan-detail.component.css']
})
export class ShlLoanDetailComponent implements OnInit{

  constructor(
    private tableConfig: TableServicesService,
    private router: Router
  ){}

  dataDetailLoan: any;
  skedulPembayaranDisplay: boolean = true;
  dokumenPembayaranDisplay: boolean = false;

  skedulPembayaran = () => {
    this.skedulPembayaranDisplay = true;
    this.dokumenPembayaranDisplay = false;
  }

  dokumenPembayaran = () => {
    this.skedulPembayaranDisplay = false;
    this.dokumenPembayaranDisplay = true;
  }

  navigateToInputPembayaran = () => {
    const radioRepayment = document.querySelector('input[name="repayment"]:checked') as HTMLInputElement;
    const valueRadio = radioRepayment.value;

    this.router.navigate(['/shl_monitoring/input_pembayaran'], { queryParams: { 'type': valueRadio } });
  }

  ngOnInit(): void {
    const getDataLoan = localStorage.getItem('detailSHLMonitoring1');

    getDataLoan ? this.dataDetailLoan = JSON.parse(getDataLoan) : this.dataDetailLoan = {}
    console.log(this.dataDetailLoan);

    this.tableConfig.initializeTableLoanDetail();
  }
}
