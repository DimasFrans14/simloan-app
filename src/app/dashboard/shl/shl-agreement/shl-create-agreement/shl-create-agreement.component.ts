import { Component, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { first } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-shl-create-agreement',
  templateUrl: './shl-create-agreement.component.html',
  styleUrls: ['./shl-create-agreement.component.css'],
})
export class ShlCreateAgreementComponent {
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(
    private _formBuilder: FormBuilder,
    private renderer: Renderer2,
    private route: Router
  ) {}

  excelDataJSON: any[] = [];

  //Dokumen PLN
  agreementDocumentPLN: any[] = [];
  parameterCurrency: any[] = [];

  //Kepdir
  documentKEPDIR: any[] = [];
  previewKEPDIR: any[] = [];

  //Pakta Integritas
  documentPaktaIntegritas: any[] = [];
  previewPaktaIntegritas: any[] = [];

  //Dokumen Lainnya
  documentLainnya: any[] = [];
  previewDocumentLainnya: any[] = [];

  //Dokumen Anak Perusahaan
  documentAnakPreusahaan: any[] = [];
  previewDocumentAnakPerusahaan: any[] = [];

  //Dokumen RKAP
  documentRKAP: any[] = [];
  previewDocumentRKAP: any[] = [];

  //Dokumen KEPDIR AP
  documentKEPDIR_AP: any[] = [];
  previewDocumentKEPDIR_AP: any[] = [];

  //Pakta Integritas
  documentPaktaIntegritasAP: any[] = [];
  previewPaktaIntegritasAP: any[] = [];

  //Surat Rekomendasi DEKOM
  documentRekomendasiDekom: any[] = [];
  previewRekomendasiDekom: any[] = [];

  //Dokumen AP Lainnya
  documentLainnyaAP: any[] = [];
  previewDocumentLainnyaAP: any[] = [];

  selectionOptionCreateAgreement!: any;
  berakhirPerjanjian!: any;
  availabilityPeriode!: any;
  gracePeriod!: any;

  selectedAP!: number;
  repayment_method!: number;

  createAgreementForm!: FormGroup;
  submitted: boolean = false;
  isDisable: boolean = true;

  anakPerusahaan = [
    { id: 1, name: 'PT Indonesia Comnets Plus' },
    { id: 2, name: 'PT Energi Primer Indonesia' },
  ];

  listItemTenor = [
    { id: 1, name: 'Bulan' },
    { id: 2, name: 'Tahun' },
  ];

  repaymentMethod = [
    { id: 1, name: '1 Bulan' },
    { id: 2, name: '3 Bulan' },
  ];

  firstFormGroup = this._formBuilder.group({
    selectedAP: [null, Validators.required],
    nomorSHL: ['', Validators.required],
    nomorAPSHL: ['', Validators.required],
    tanggalSHLAgreement: ['', Validators.required],
    textAreaDeskripsiProyek: ['', Validators.required],
    masaPengembalian: ['freeText', Validators.required],
    deskripsiTanggal: ['', Validators.required],
    SourceOfFunding: ['non_penerusan', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    namaProyek: ['', Validators.required],
    totalPagu: ['', Validators.required],
    berakhirPerjanjian: ['freeText', Validators.required],
    deskripsiBerakhirPerjanjian: ['', Validators.required],
    availabilityPeriode: ['freeText', Validators.required],
    deskripsiAvailabilityPeriode: ['', Validators.required],
    gracePeriod: ['freeText', Validators.required],
    deskripsiGracePeriod: ['', Validators.required],
    tenor: ['', Validators.required],
    repaymentMethod: ['', Validators.required],
    dateRepayment: ['', Validators.required],
    deskripsiDenda: ['', Validators.required],
    pembayaranPokokPinjaman: ['PRORATE', Validators.required],
    interestType: ['FIXED', Validators.required],
    bunga: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    // dokumenPLN: ['', Validators.required],
    // kepdirSirkuler: ['', Validators.required],
    // paktaIntegritas: ['', Validators.required],
    // dokumenLainnya: ['', Validators.required],
    // dokumenAnakPerusahaan: ['', Validators.required],
    // RKAP: ['', Validators.required],
    // kepdirAnakPerusahaan: ['', Validators.required],
    // paktaIntegritasAnakPerusahaan: ['', Validators.required],
    // suratRekomendasiRekom: ['', Validators.required],
    // dokumenAnakPerusahaanLainnya: ['', Validators.required],
  });

  isLinear = false;

  readExcel(event: any) {
    let file = event.addedFiles[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    // console.log(event);

    fileReader.onload = (e) => {
      let data;

      var workbook = XLSX.read(fileReader.result, {
        type: 'binary',
        cellDates: true,
      });
      var sheetNames = workbook.SheetNames;

      for (let i = 0; i < sheetNames.length; i++) {
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[i]]);
      }

      console.log(data);
    };
  }

  onChange() {
    this.selectionOptionCreateAgreement =
      this.firstFormGroup.get('masaPengembalian')?.value;
    console.log('Selected option:', this.selectionOptionCreateAgreement);
  }

  berakhirPerjanjianClick() {
    this.berakhirPerjanjian =
      this.secondFormGroup.get('berakhirPerjanjian')?.value;
    console.log(this.berakhirPerjanjian);
  }

  availabilityPeriodeClick() {
    this.availabilityPeriode = this.secondFormGroup.get(
      'availabilityPeriode'
    )?.value;
    console.log(this.availabilityPeriode);
  }

  gracePeriodeClick() {
    this.gracePeriod = this.secondFormGroup.get('gracePeriod')?.value;
    console.log(this.gracePeriod);
  }

  onSelectDokumenPLN(event: { addedFiles: any }) {
    this.parameterCurrency.push(...event.addedFiles);
    console.log(event.addedFiles);

    // this.readExcel(event);
    this.agreementDocumentPLN.push(event.addedFiles);
    if (this.agreementDocumentPLN.length > 0) {
      this.isDisable = false;
    }
  }

  allDocumentsUploaded = [
    this.agreementDocumentPLN,
    this.documentKEPDIR,
    this.documentPaktaIntegritas,
    this.documentLainnya,
    this.documentAnakPreusahaan,
    this.documentRKAP,
    this.documentKEPDIR_AP,
    this.documentPaktaIntegritasAP,
    this.documentRekomendasiDekom,
    this.documentLainnyaAP,
  ];

  onSelectDokumen(event: { addedFiles: any }, section: string) {
    let allDocumentsUploaded;
    switch (section) {
      case 'PLN':
        this.parameterCurrency.push(...event.addedFiles);
        this.agreementDocumentPLN.push(...event.addedFiles);
        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }

        break;
      case 'KEPDIR':
        this.previewKEPDIR.push(...event.addedFiles);
        this.documentKEPDIR.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        console.log(this.documentKEPDIR);
        break;

      case 'PAKTA_INTEGRITAS':
        this.previewPaktaIntegritas.push(...event.addedFiles);
        this.documentPaktaIntegritas.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      case 'DOKUMEN_LAINNYA':
        this.previewDocumentLainnya.push(...event.addedFiles);
        this.documentLainnya.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      case 'DOKUMEN_AP':
        this.previewDocumentAnakPerusahaan.push(...event.addedFiles);
        this.documentAnakPreusahaan.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      case 'RKAP':
        this.previewDocumentRKAP.push(...event.addedFiles);
        this.documentRKAP.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      case 'KEPDIR_AP':
        this.previewDocumentKEPDIR_AP.push(...event.addedFiles);
        this.documentKEPDIR_AP.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      case 'PAKTA_INTEGRITAS_AP':
        this.previewPaktaIntegritasAP.push(...event.addedFiles);
        this.documentPaktaIntegritasAP.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      case 'REKOMENDASI_DEKOM':
        this.previewRekomendasiDekom.push(...event.addedFiles);
        this.documentRekomendasiDekom.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      case 'DOKUMEN_LAINNYA_AP':
        this.previewDocumentLainnyaAP.push(...event.addedFiles);
        this.documentLainnyaAP.push(...event.addedFiles);

        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      default:
        console.error('Unknown Section:', section);
    }
  }

  onSelect(event: { addedFiles: any }) {
    this.parameterCurrency.push(...event.addedFiles);
    console.log(event.addedFiles);

    this.readExcel(event);
  }

  onRemove(event: File) {
    console.log(event);
    this.parameterCurrency.splice(this.parameterCurrency.indexOf(event), 1);
    this.excelDataJSON = [];
    console.log(this.excelDataJSON);
  }

  getDropdownVal = (name: string) => {
    const buttonTenor = document.getElementById('buttonTenor');
    buttonTenor ? (buttonTenor.textContent = name) : '';
  };

  onNextClickFirst() {
    this.submitted = true;

    if (this.firstFormGroup.invalid) {
      console.log('Form submission failed. Please check for errors.');
      // return;
    } else {
      console.log('Form submitted successfully!', this.firstFormGroup.value);
      console.log(
        moment(this.firstFormGroup.get('tanggalSHLAgreement')?.value).format(
          'DD/MM/YYYY'
        )
      );

      // const nomorSHLPLN = this.firstFormGroup.get('nomorSHL')?.value;
      // const nomorSHLAnakPerusahaanPLN = this.firstFormGroup.get('nomorAPSHL')?.value;

      // const dataSHL = {
      //   nomorSHLPLN: this.firstFormGroup.get('nomorSHL')?.value,
      //   nomorSHLAnakPerusahaanPLN: this.firstFormGroup.get('nomorAPSHL')?.value,
      // };

      localStorage.setItem('dataForm1', JSON.stringify(this.firstFormGroup.value));
      this.submitted = false;
      this.stepper.next();
    }
  }

  dataSHL: any;

  onNextClickSecond() {
    this.submitted = true;

    if (this.secondFormGroup.invalid) {
      console.log('Form submission failed. Please check for errors.');
      // return;
    } else {
      console.log('Form submitted successfully!', this.secondFormGroup.value);
      this.submitted = false;
      this.dataSHL = localStorage.getItem('dataForm1');
      this.stepper.next();
      this.dataSHL = JSON.parse(this.dataSHL);
      localStorage.setItem('dataForm2', JSON.stringify(this.secondFormGroup.value))
    }
  }

  submit() {
    this.route.navigate(['/shl_agreement/preview_create']);
  }
}
