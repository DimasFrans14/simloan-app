import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { first } from 'rxjs';
import { MasterAnakPerusahaanService } from 'src/app/services/master_anakPerusahaan/master-anak-perusahaan.service';
import { ShlAgreementService } from 'src/app/services/shl_agreement_service/shl-agreement.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-shl-create-agreement',
  templateUrl: './shl-create-agreement.component.html',
  styleUrls: ['./shl-create-agreement.component.css'],
})
export class ShlCreateAgreementComponent implements OnInit{
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(
    private _formBuilder: FormBuilder,
    private renderer: Renderer2,
    private route: Router,
    private masterAnakPerusahaan: MasterAnakPerusahaanService,
    private shlAgreementServices: ShlAgreementService
  ) {}

  excelDataJSON: any[] = [];

  //Dokumen PLN
  agreementDocumentPLN: any[] = [];
  parameterCurrency: any[] = [];
  allFileUpload : any[] = [];

  //For Preview SHL Create Agreement Page
  dokumenPLN: any[] = [];
  dokumenLainnya: any[] = [];
  dokumenAnakPerusahaan: any[] = [];
  dokumenAnakPerusahaanLainnya: any[] = [];

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

  idAnakPerusahaan!: number;
  repayment_method!: number;

  createAgreementForm!: FormGroup;
  submitted: boolean = false;
  isDisable: boolean = true;

  dataMasterAnakPerusahaan: any;

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
    // idAnakPerusahaan: [null, Validators.required],
    nomorSHL: ['', Validators.required],
    nomorAPSHL: ['', Validators.required],
    tanggalSHLAgreement: ['', Validators.required],
    textAreaDeskripsiProyek: ['', Validators.required],
    masaPengembalian: ['FREE_TEXT', Validators.required],
    deskripsiTanggal: ['', Validators.required],
    SourceOfFunding: ['non_penerusan', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    namaProyek: ['', Validators.required],
    totalPagu: ['', Validators.required],
    berakhirPerjanjian: ['FREE_TEXT', Validators.required],
    deskripsiBerakhirPerjanjian: ['', Validators.required],
    availabilityPeriode: ['FREE_TEXT', Validators.required],
    deskripsiAvailabilityPeriode: ['', Validators.required],
    gracePeriod: ['FREE_TEXT', Validators.required],
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

  disableKepdir: boolean = false;

  onSelectDokumen(event: { addedFiles: any }, section: string) {
    let allDocumentsUploaded;
    switch (section) {
      case 'PLN':
        this.parameterCurrency.push(...event.addedFiles);
        this.allFileUpload.push(...event.addedFiles);
        this.agreementDocumentPLN.push(...event.addedFiles);
        this.dokumenPLN.push(...event.addedFiles);
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
        this.dokumenPLN.push(...event.addedFiles);

        this.allFileUpload.push(...event.addedFiles);
        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if(this.documentKEPDIR.length > 0){
          this.disableKepdir = true;
        }
        else{
          this.disableKepdir = false;
        }

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        console.log(this.documentKEPDIR);
        break;

      case 'PAKTA_INTEGRITAS':
        this.previewPaktaIntegritas.push(...event.addedFiles);
        this.documentPaktaIntegritas.push(...event.addedFiles);
        this.dokumenPLN.push(...event.addedFiles);

        this.allFileUpload.push(...event.addedFiles);
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


        this.allFileUpload.push(...event.addedFiles);
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
        this.dokumenAnakPerusahaan.push(...event.addedFiles);

        this.allFileUpload.push(...event.addedFiles);
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
        this.dokumenAnakPerusahaan.push(...event.addedFiles);


        this.allFileUpload.push(...event.addedFiles);
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
        this.dokumenAnakPerusahaan.push(...event.addedFiles);


        this.allFileUpload.push(...event.addedFiles);
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
        this.dokumenAnakPerusahaan.push(...event.addedFiles);


        this.allFileUpload.push(...event.addedFiles);
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
        this.dokumenAnakPerusahaan.push(...event.addedFiles);


        this.allFileUpload.push(...event.addedFiles);
        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        console.log(this.allFileUpload);

        break;

      case 'DOKUMEN_LAINNYA_AP':
        this.previewDocumentLainnyaAP.push(...event.addedFiles);
        this.documentLainnyaAP.push(...event.addedFiles);


        this.allFileUpload.push(...event.addedFiles);
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

  onRemoveKepdirPLN(event: File) {
    console.log(event);
    this.previewKEPDIR.splice(this.previewKEPDIR.indexOf(event), 1);
    console.log(this.previewKEPDIR);

    if(this.documentKEPDIR.length > 0){
      this.disableKepdir = false;
    }
    else{
      this.disableKepdir = true;
    }
  }

  onRemove(event: File) {
    console.log(event);
    this.previewKEPDIR.splice(this.previewKEPDIR.indexOf(event), 1);
    console.log(this.previewKEPDIR);

  }

  getDropdownVal = (name: string) => {
    const buttonTenor = document.getElementById('buttonTenor');
    buttonTenor ? (buttonTenor.textContent = name) : '';
  };

  totalProjectList: number = 1;
  buttonProject: number[] = [1];
  allDataProject: any[] = [];

  dataProjectIndex: any;

  getDataProject = (param: number) => {
    // console.log(param);

    if(this.secondFormGroup.value != null){

      const data = {
        namaProyek: this.secondFormGroup.get('namaProyek')?.value,
        totalPagu: this.secondFormGroup.get('totalPagu')?.value,
        berakhirPerjanjian: this.secondFormGroup.get('berakhirPerjanjian')?.value,
        deskripsiBerakhirPerjanjian: this.secondFormGroup.get('deskripsiBerakhirPerjanjian')?.value,
        availabilityPeriode: this.secondFormGroup.get('availabilityPeriode')?.value,
        deskripsiAvailabilityPeriode: this.secondFormGroup.get('deskripsiAvailabilityPeriode')?.value,
        gracePeriod: this.secondFormGroup.get('gracePeriod')?.value,
        deskripsiGracePeriod: this.secondFormGroup.get('deskripsiGracePeriod')?.value,
        tenor: this.secondFormGroup.get('tenor')?.value,
        repaymentMethod: this.secondFormGroup.get('repaymentMethod')?.value,
        dateRepayment: this.secondFormGroup.get('dateRepayment')?.value,
        deskripsiDenda: this.secondFormGroup.get('deskripsiDenda')?.value,
        pembayaranPokokPinjaman: this.secondFormGroup.get('pembayaranPokokPinjaman')?.value,
        interestType: this.secondFormGroup.get('interestType')?.value,
        bunga: this.secondFormGroup.get('bunga')?.value,
      }

      const getCheckDataFirst = localStorage.getItem('allDataProjectAgreement');

      if(getCheckDataFirst){
        let tempData = JSON.parse(getCheckDataFirst)
        console.log(tempData);

        console.log(tempData[0].namaProyek, data.namaProyek);


        let checkData = tempData.some((item: any) => {
          return item.namaProyek === data.namaProyek
        })

        console.log(checkData);

        if(checkData){
          console.log('data dobel');
        }
        else{
          this.allDataProject.push(data)
          localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
        }
      }
      else{
        this.allDataProject.push(data)
        localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
      }

      this.allDataProject.push(data)
      localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
    }

    const getProjectData = localStorage.getItem('allDataProjectAgreement');
    getProjectData ? this.dataProjectIndex = JSON.parse(getProjectData) : {}

    this.dataProjectIndex = this.dataProjectIndex[param - 1];

    console.log(this.dataProjectIndex);

    this.secondFormGroup = this._formBuilder.group({
      namaProyek: [this.dataProjectIndex.namaProyek, Validators.required],
      totalPagu: [this.dataProjectIndex.totalPagu, Validators.required],
      berakhirPerjanjian: [this.dataProjectIndex.berakhirPerjanjian, Validators.required],
      deskripsiBerakhirPerjanjian: [this.dataProjectIndex.deskripsiBerakhirPerjanjian, Validators.required],
      availabilityPeriode: [this.dataProjectIndex.availabilityPeriode, Validators.required],
      deskripsiAvailabilityPeriode: [this.dataProjectIndex.deskripsiAvailabilityPeriode, Validators.required],
      gracePeriod: [this.dataProjectIndex.gracePeriod, Validators.required],
      deskripsiGracePeriod: [this.dataProjectIndex.deskripsiGracePeriod, Validators.required],
      tenor: [this.dataProjectIndex.tenor, Validators.required],
      repaymentMethod: [this.dataProjectIndex.repaymentMethod, Validators.required],
      dateRepayment: [this.dataProjectIndex.dateRepayment, Validators.required],
      deskripsiDenda: [this.dataProjectIndex.deskripsiDenda, Validators.required],
      pembayaranPokokPinjaman: [this.dataProjectIndex.pembayaranPokokPinjaman, Validators.required],
      interestType: [this.dataProjectIndex.interestType, Validators.required],
      bunga: [this.dataProjectIndex.bunga, Validators.required],
    });
  }

  tambahProject = () => {
    this.totalProjectList = this.totalProjectList + 1;
    this.buttonProject.push(this.totalProjectList)
    console.log(this.totalProjectList);

    const data = {
      namaProyek: this.secondFormGroup.get('namaProyek')?.value,
      totalPagu: this.secondFormGroup.get('totalPagu')?.value,
      berakhirPerjanjian: this.secondFormGroup.get('berakhirPerjanjian')?.value,
      deskripsiBerakhirPerjanjian: this.secondFormGroup.get('deskripsiBerakhirPerjanjian')?.value,
      availabilityPeriode: this.secondFormGroup.get('availabilityPeriode')?.value,
      deskripsiAvailabilityPeriode: this.secondFormGroup.get('deskripsiAvailabilityPeriode')?.value,
      gracePeriod: this.secondFormGroup.get('gracePeriod')?.value,
      deskripsiGracePeriod: this.secondFormGroup.get('deskripsiGracePeriod')?.value,
      tenor: this.secondFormGroup.get('tenor')?.value,
      repaymentMethod: this.secondFormGroup.get('repaymentMethod')?.value,
      dateRepayment: this.secondFormGroup.get('dateRepayment')?.value,
      deskripsiDenda: this.secondFormGroup.get('deskripsiDenda')?.value,
      pembayaranPokokPinjaman: this.secondFormGroup.get('pembayaranPokokPinjaman')?.value,
      interestType: this.secondFormGroup.get('interestType')?.value,
      bunga: this.secondFormGroup.get('bunga')?.value,
    }

    const getCheckDataFirst = localStorage.getItem('allDataProjectAgreement');

    if(getCheckDataFirst){
      let tempData = JSON.parse(getCheckDataFirst)
      console.log(tempData);

      console.log(tempData[0].namaProyek, data.namaProyek);


      let checkData = tempData.some((item: any) => {
        return item.namaProyek === data.namaProyek
      })

      console.log(checkData);

      if(checkData){
        console.log('data dobel');
      }
      else{
        this.allDataProject.push(data)
        localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
      }
    }
    else{
      this.allDataProject.push(data)
      localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
    }

    // this.allDataProject.push(data)
    // localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));

    this.secondFormGroup.reset();
  }

  isPenerusanPinjaman: boolean = false;

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

      const sourceOfFundingValue = this.firstFormGroup.get('SourceOfFunding')?.value

      if(sourceOfFundingValue === 'penerusan_pinjaman'){

        this.isPenerusanPinjaman = true;
        localStorage.setItem('dataForm1', JSON.stringify(this.firstFormGroup.value));
        this.submitted = false;
        this.stepper.next();

      }else{

        this.isPenerusanPinjaman = false;
        localStorage.setItem('dataForm1', JSON.stringify(this.firstFormGroup.value));
        this.submitted = false;
        this.stepper.next();

      }
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

  submit = async () => {
    // const res = await this.shlAgreementServices.uploadDocSHL(this.allFileUpload)

    const filesDataPLN = this.dokumenPLN.map(file => ({
      name: file.name,
      lastModified: file.lastModified,
      size: file.size,
      type: file.type
    }));

    const filesDataAnakPerusahaanPLN = this.dokumenAnakPerusahaan.map(file => ({
      name: file.name,
      lastModified: file.lastModified,
      size: file.size,
      type: file.type
    }));

    console.log([filesDataPLN, filesDataAnakPerusahaanPLN]);

    localStorage.setItem('dokumenPLN', JSON.stringify(filesDataPLN));
    localStorage.setItem('dokumenAnakPerusahaanPLN', JSON.stringify(filesDataAnakPerusahaanPLN));

    this.route.navigate(['/shl_agreement/preview_create']);
  }

  async ngOnInit(): Promise<void> {
    const res = await this.masterAnakPerusahaan.getAnakPerusahaan()

    this.dataMasterAnakPerusahaan = res;
    this.dataMasterAnakPerusahaan = this.dataMasterAnakPerusahaan.data.content;
    console.log(this.dataMasterAnakPerusahaan);
  }
}
