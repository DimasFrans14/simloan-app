import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shl-loan-detail',
  templateUrl: './shl-loan-detail.component.html',
  styleUrls: ['./shl-loan-detail.component.css']
})
export class ShlLoanDetailComponent implements OnInit{

  constructor(){}

  dataDetailLoan: any;

  ngOnInit(): void {
    const getDataLoan = localStorage.getItem('detailSHLMonitoring1');

    getDataLoan ? this.dataDetailLoan = JSON.parse(getDataLoan) : {}
    console.log(this.dataDetailLoan);

  }
}
