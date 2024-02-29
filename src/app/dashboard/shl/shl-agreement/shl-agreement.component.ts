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

  isActiveNonPP: boolean = true;
  isActivePP: boolean = false;

  paramsFindData: string = ''

  getValueInput = (event: any) => {
    console.log(event.target.value);
    this.paramsFindData = event.target.value;
  }

  findData = (params: string) => {
    this.tableConfig.findDataSHLAgreement(this.paramsFindData, params)
  }

  navigateToCreateAgreement = () => {
    this.route.navigate(['shl_agreement/create']);
  }

  nonPenerusanPinjaman = () => {

    this.isActiveNonPP = true;
    this.isActivePP = false;

    const getValuePenerusan = document.getElementById('searchPenerusan');
    if(getValuePenerusan instanceof HTMLInputElement){
      getValuePenerusan.value = "";
    }

    this.tableConfig.initializeTableSHLAgreementNonPenerusanPinjaman();
    const tableNonPenerusan = document.getElementById('table-nonPenerusanPinjaman');

    const tablePenerusan = document.getElementById('table-penerusanPinjaman');

    if(tableNonPenerusan && tablePenerusan){
      tableNonPenerusan.style.display = 'block';
      tablePenerusan.style.display = 'none';
    }

  }

  penerusanPinjaman = () => {

    this.isActiveNonPP = false;
    this.isActivePP = true;

    const getValueNonPenerusan = document.getElementById('searchNonPenerusan');
    if(getValueNonPenerusan instanceof HTMLInputElement){
      getValueNonPenerusan.value = "";
    }

    this.tableConfig.initializeTableSHLAgreementPenerusanPinjaman();
    const tableNonPenerusan = document.getElementById('table-nonPenerusanPinjaman');

    const tablePenerusan = document.getElementById('table-penerusanPinjaman');

    if(tableNonPenerusan && tablePenerusan){
      tableNonPenerusan.style.display = 'none';
      tablePenerusan.style.display = 'block';
    }

  }

  async ngOnInit(): Promise<void> {
    this.tableConfig.initializeTableSHLAgreementNonPenerusanPinjaman();
  }

}
