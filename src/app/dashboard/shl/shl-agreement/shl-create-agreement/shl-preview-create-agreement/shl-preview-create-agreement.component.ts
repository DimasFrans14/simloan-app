import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ShlAgreementService } from 'src/app/services/shl_agreement_service/shl-agreement.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-shl-preview-create-agreement',
  templateUrl: './shl-preview-create-agreement.component.html',
  styleUrls: ['./shl-preview-create-agreement.component.css']
})
export class ShlPreviewCreateAgreementComponent implements OnInit{


  constructor(
    private tabelConfig: TableServicesService,
    private shlAgreementService: ShlAgreementService
  ){

  }

  dataForm1: any;
  dataForm2: any;

  dokumenPLN: any;
  dokumenAPPLN: any;

  dataAgreement = {
    "id_anak_prhsan": 0,
    "nomor_shl_agreement_pln": "string",
    "nomor_shl_agree_anak_prshan": "string",
    "tanggal_shl_agreement": "string",
    "shl_masa_pengembalian_enum": "NOT_SET",
    "masa_pngmbalian_deskripsi": "string",
    "deskripsi_proyek": "string",
    "project_list": [
      {
        "project_name": "string"
      }
    ],
    "proyek_non_pnerusan": "string",
    "total_pagu": 0,
    "berakhir_perjanjian": "NOT_SET",
    "berakhir_perjanjian_desk": "string",
    "avail_period_non": "NOT_SET",
    "avail_period_deskripsi": "string",
    "grace_period_enum_non": "NOT_SET",
    "grace_period_deskripsi": "string",
    "tenor": 0,
    "repayment_period": "string",
    "date_repayment_period": "string",
    "date_repayment_desk": "string",
    "deskripsi_denda": "string",
    "shl_pembyran_pokok_pnjaman_enum": "NOT_SET",
    "shl_interest_type_enum": "NOT_SET",
    "bunga_percent": "string"
  }

  submitAgreement = async () => {

    this.dataAgreement.id_anak_prhsan = this.dataForm1.idAnakPerusahaan;
    this.dataAgreement.nomor_shl_agreement_pln = this.dataForm1.nomorSHL;
    this.dataAgreement.nomor_shl_agree_anak_prshan = this.dataForm1.nomorAPSHL;
    this.dataAgreement.tanggal_shl_agreement = this.dataForm1.tanggalSHLAgreement;
    this.dataAgreement.shl_masa_pengembalian_enum = this.dataForm1.masaPengembalian;
    this.dataAgreement.masa_pngmbalian_deskripsi = this.dataForm1.deskripsiTanggal;
    this.dataAgreement.deskripsi_proyek = this.dataForm1.textAreaDeskripsiProyek;
    this.dataAgreement.project_list = [{
      project_name: this.dataForm2.namaProyek
    }]
    this.dataAgreement.total_pagu = parseInt(this.dataForm2.totalPagu);
    this.dataAgreement.berakhir_perjanjian = this.dataForm2.berakhirPerjanjian;
    this.dataAgreement.berakhir_perjanjian_desk = this.dataForm2.deskripsiBerakhirPerjanjian;
    this.dataAgreement.avail_period_non = this.dataForm2.availabilityPeriode;
    this.dataAgreement.avail_period_deskripsi = this.dataForm2.deskripsiAvailabilityPeriode;
    this.dataAgreement.grace_period_enum_non = this.dataForm2.gracePeriod;
    this.dataAgreement.grace_period_deskripsi = this.dataForm2.deskripsiGracePeriod;
    this.dataAgreement.id_anak_prhsan = this.dataForm1.idAnakPerusahaan;
    this.dataAgreement.tenor = parseInt(this.dataForm2.tenor);
    this.dataAgreement.repayment_period = this.dataForm2.repaymentMethod;
    this.dataAgreement.date_repayment_period = moment(this.dataForm1.dateRepayment).format('DD/MM/YYYY');
    this.dataAgreement.date_repayment_desk = 'string';
    this.dataAgreement.deskripsi_denda = this.dataForm2.deskripsiDenda;
    this.dataAgreement.shl_pembyran_pokok_pnjaman_enum = this.dataForm2.pembayaranPokokPinjaman;
    this.dataAgreement.shl_interest_type_enum = this.dataForm2.interestType;
    this.dataAgreement.bunga_percent = this.dataForm2.bunga;

    console.log(this.dataAgreement);

    // const response = await this.shlAgreementService.createAgreementData(this.dataAgreement);

    // console.log(response);
  }

  async ngOnInit(): Promise<void> {
    this.tabelConfig.initializeTableDetailProyekSHLAgreement();

    let getDataForm1 = localStorage.getItem('dataForm1');
    let getDataForm2 = localStorage.getItem('dataForm2');

    let getDokumenPLN = localStorage.getItem('dokumenPLN');
    let getDokumenAPPLN = localStorage.getItem('dokumenAnakPerusahaanPLN');

    if(getDataForm1 && getDataForm2 && getDokumenPLN && getDokumenAPPLN){
      this.dataForm1 = JSON.parse(getDataForm1);

      this.dataForm1.tanggalSHLAgreement = moment(this.dataForm1.tanggalSHLAgreement).format('DD/MM/YYYY');

      this.dataForm2 = JSON.parse(getDataForm2);

      this.dokumenPLN = JSON.parse(getDokumenPLN);
      this.dokumenAPPLN = JSON.parse(getDokumenAPPLN);
    }else{

    }

    console.log([this.dataForm1, this.dataForm2]);

  }

}
