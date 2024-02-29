import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-shl-agreement-detail',
  templateUrl: './shl-agreement-detail.component.html',
  styleUrls: ['./shl-agreement-detail.component.css']
})
export class ShlAgreementDetailComponent implements OnInit{

  constructor(
    private route: Router,
    private tableConfig: TableServicesService
  ){

  }

  // detailDataSHLAgreement: any[] = [];
  detailDataSHLAgreement: any;
  amandementItems!: string;

  detailAgreementDisplay: boolean = true;
  daftarProyekDisplay: boolean = false;
  dokumenDisplay: boolean = false;

  dokumenPLNDisplay: boolean = true;
  dokumenAnakPerusahaanDisplay: boolean = false;

  amandementList = [
    {id:1, name: '0132-1.PJ/KEU.01.09/B01060100/2020'},
    {id:2, name: '0132-1.PJ/KEU.01.09/B01060100/2021'},
    {id:3, name: '0132-1.PJ/KEU.01.09/B01060100/2022'},
  ]

  backToSHLAgreement = () => {
    this.route.navigate(['/shl_agreement'])
  }

  detailAgreement = () => {
    this.detailAgreementDisplay = true;
    this.daftarProyekDisplay = false;
    this.dokumenDisplay = false;

    const tabelProyek = document.getElementById('table-namaProyek');
    const tabelDokumenPLN = document.getElementById('table-namaDokumenPLN');
    const tabelDokumenAP = document.getElementById('table-namaDokumenAP');

    if (tabelProyek && tabelDokumenPLN && tabelDokumenAP) {
      tabelProyek.style.display = 'none';
      tabelDokumenPLN.style.display = 'none';
      tabelDokumenAP.style.display = 'none';
    }
  }

  daftarProyek = () => {

    console.log(this.tableConfig);

    this.detailAgreementDisplay = false;
    this.daftarProyekDisplay = true;
    this.dokumenDisplay = false;

    this.tableConfig.initializeTableDetailProyekSHLAgreement();
    const tabelProyek = document.getElementById('table-namaProyek');
    const tabelDokumenPLN = document.getElementById('table-namaDokumenPLN');
    const tabelDokumenAP = document.getElementById('table-namaDokumenAP');

    if (tabelProyek && tabelDokumenPLN && tabelDokumenAP) {
      tabelProyek.style.display = 'block';
      tabelDokumenPLN.style.display = 'none';
      tabelDokumenAP.style.display = 'none';
    }
  }

  dokumen = () => {
    this.detailAgreementDisplay = false;
    this.daftarProyekDisplay = false;
    this.dokumenDisplay = true;


    this.tableConfig.initializeTableDetailDokumenSHLAgreement();
    const tabelProyek = document.getElementById('table-namaProyek');
    const tabelDokumenPLN = document.getElementById('table-namaDokumenPLN');
    const tabelDokumenAP = document.getElementById('table-namaDokumenAP');

    if (tabelProyek && tabelDokumenPLN && tabelDokumenAP) {
      tabelProyek.style.display = 'none';
      tabelDokumenPLN.style.display = 'block';
      tabelDokumenAP.style.display = 'none';
    }
  }

  dokumenPLN = () => {
    this.dokumenPLNDisplay = true;
    this.dokumenAnakPerusahaanDisplay = false;

    const dokumenTag = document.getElementById('dokumen-tag');
    const tabelDokumenPLN = document.getElementById('table-namaDokumenPLN');
    const tabelDokumenAP = document.getElementById('table-namaDokumenAP');

    if(dokumenTag){
      dokumenTag.focus();
    }

    if(tabelDokumenPLN && tabelDokumenAP){
      tabelDokumenPLN.style.display = 'block';
      tabelDokumenAP.style.display = 'none';
    }
  }

  dokumenAnakPerusahaan = () => {
    this.dokumenPLNDisplay = false;
    this.dokumenAnakPerusahaanDisplay = true;

    this.tableConfig.tableDetailDokumenAnakPerusahaanSHL();

    const dokumenTag = document.getElementById('dokumen-tag');
    const tabelDokumenPLN = document.getElementById('table-namaDokumenPLN');
    const tabelDokumenAP = document.getElementById('table-namaDokumenAP');

    // const tagDokumenAP = document.getElementById('dokumen-AP');

    if(dokumenTag){
      dokumenTag.focus();
    }

    if(tabelDokumenPLN && tabelDokumenAP){
      tabelDokumenPLN.style.display = 'none';
      tabelDokumenAP.style.display = 'block';
    }
  }

  amandementSelect = (event: any) => {
    console.log(event);
  }

  async ngOnInit(): Promise<void> {

    const item = localStorage.getItem('detailSHLAgreement');
    this.detailDataSHLAgreement = (JSON.parse(item ?? '{}'));

    console.log(this.detailDataSHLAgreement);
  }

}
