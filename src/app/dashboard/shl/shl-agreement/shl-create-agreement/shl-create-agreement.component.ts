import { Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { format } from 'path';
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

  freeTextBerakhirPerjanjian: boolean = true;
  freeTextAvailabilityPeriod: boolean = true;
  freeTextGracePeriod: boolean = true;
  freeTextMasaPengembalian: boolean = true;

  dateBerakhirPerjanjian: boolean = false;
  dateAvailabilityPeriod: boolean = false;
  dateGracePeriod: boolean = false;
  dateMasaPengembalian: boolean = false;

  dataMasterAnakPerusahaan: any;

  dateVal: any = { value: new Date() };

  anakPerusahaan = [
    { id: 1, name: 'PT Indonesia Comnets Plus' },
    { id: 2, name: 'PT Energi Primer Indonesia' },
  ];

  listItemTenor = [
    { id: 1, name: 'Bulan' },
    { id: 2, name: 'Tahun' },
  ];

  repaymentMethod = [
    { id: 1, name: '3 Bulan' },
    { id: 2, name: '4 Bulan' },
    { id: 3, name: '5 Bulan' },
    { id: 4, name: '6 Bulan' },
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
    // berakhirPerjanjian: ['FREE_TEXT', Validators.required],
    // deskripsiBerakhirPerjanjian: ['', Validators.required],
    // availabilityPeriode: ['FREE_TEXT', Validators.required],
    // deskripsiAvailabilityPeriode: ['', Validators.required],
    // gracePeriod: ['FREE_TEXT', Validators.required],
    // deskripsiGracePeriod: ['', Validators.required],
    tenor: ['', Validators.required],
    repaymentMethod: ['', Validators.required],
    dateRepayment: ['', Validators.required],
    deskripsiDenda: ['', Validators.required],
    pembayaranPokokPinjaman: ['PRORATE', Validators.required],
    interestType: ['FIXED', Validators.required],
    bunga: ['', Validators.required],
    jadwalPokokPinjaman: ['', Validators.required],
    jadwalBungaPinjaman: ['', Validators.required],
    syaratPenarikan: ['', Validators.required],
  });

  penerusanPinjamanForm = this._formBuilder.group({
    totalPagu: ['', Validators.required],
    berakhirPerjanjianStart: ['', Validators.required],
    berakhirPerjanjianEnd: ['', Validators.required],
    AvailabilityPeriodeStart: ['', Validators.required],
    AvailabilityPeriodeEnd: ['', Validators.required],
    GracePeriodStart: ['', Validators.required],
    GracePeriodEnd: ['', Validators.required],
    tenor: ['', Validators.required],
    repaymentMethod: ['', Validators.required],
    pembayaranPokokPinjaman: ['PRORATE', Validators.required],
    interestType: ['FIXED', Validators.required],
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

  checkboxEvent = (section: string, params: string) => {
    switch(section){
      case "berakhir_perjanjian":
        if(params === 'free_text'){
          this.freeTextBerakhirPerjanjian = !this.freeTextBerakhirPerjanjian;
        }
        else{
          this.dateBerakhirPerjanjian = !this.dateBerakhirPerjanjian;
        }
      break;

      case "availability_period":
        if(params === 'free_text'){
          this.freeTextAvailabilityPeriod = !this.freeTextAvailabilityPeriod;
        }
        else{
          this.dateAvailabilityPeriod = !this.dateAvailabilityPeriod;
        }
      break;

      case "grace_period":
        if(params === 'free_text'){
          this.freeTextGracePeriod = !this.freeTextGracePeriod;
        }
        else{
          this.dateGracePeriod = !this.dateGracePeriod;
        }
      break;

      case "masa_pengembalian":
        if(params === 'free_text'){
          this.freeTextMasaPengembalian= !this.freeTextMasaPengembalian;
        }
        else{
          this.dateMasaPengembalian= !this.dateMasaPengembalian;
        }
      break;
    }
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
  disablePakta: boolean = false;
  disableDokumenLainnya: boolean = false;
  disableRKAP: boolean = false;
  disableKepdirAP: boolean = false;
  disablePaktaAP: boolean = false;
  disableDekom: boolean = false;
  disableDokumenLainnyaAP: boolean = false;

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

        if(this.documentPaktaIntegritas.length > 0){
          this.disablePakta = true;
        }
        else{
          this.disablePakta = false;
        }

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

        if(this.documentLainnya.length > 0){
          this.disableDokumenLainnya = true;
        }
        else{
          this.disableDokumenLainnya = false;
        }

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

        // if(this.documentLainnya.length > 0){
        //   this.disableDokumenLainnya = true;
        // }
        // else{
        //   this.disableDokumenLainnya = false;
        // }

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

        if(this.documentRKAP.length > 0){
          this.disableRKAP = true;
        }
        else{
          this.disableRKAP = false;
        }

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

        if(this.documentKEPDIR_AP.length > 0){
          this.disableKepdirAP = true;
        }
        else{
          this.disableKepdirAP = false;
        }

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

        if(this.documentPaktaIntegritasAP.length > 0){
          this.disablePaktaAP = true;
        }
        else{
          this.disablePaktaAP = false;
        }

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

        if(this.documentRekomendasiDekom.length > 0){
          this.disableDekom = true;
        }
        else{
          this.disableDekom = false;
        }

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

        if(this.documentLainnyaAP.length > 0){
          this.disableDokumenLainnyaAP = true;
        }
        else{
          this.disableDokumenLainnyaAP = false;
        }

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

  onRemoveFile(event: File, section: string) {
    switch(section){
      case 'KEPDIR':
        console.log(event);
        this.previewKEPDIR.splice(this.previewKEPDIR.indexOf(event), 1);
        console.log(this.previewKEPDIR);

        if(this.documentKEPDIR.length > 0){
          this.disableKepdir = false;
        }
        else{
          this.disableKepdir = true;
        }
      break;

      case 'PAKTA':
        console.log(event);
        this.previewPaktaIntegritas.splice(this.previewPaktaIntegritas.indexOf(event), 1);
        console.log(this.previewPaktaIntegritas);

        if(this.documentPaktaIntegritas.length > 0){
          this.disablePakta = false;
        }
        else{
          this.disablePakta = true;
        }
      break;

      case 'DOKUMEN_LAINNYA':
        console.log(event);
        this.previewDocumentLainnya.splice(this.previewDocumentLainnya.indexOf(event), 1);
        console.log(this.previewDocumentLainnya);

        if(this.documentKEPDIR.length > 0){
          this.disableDokumenLainnya = false;
        }
        else{
          this.disableDokumenLainnya = true;
        }
      break;

      case 'RKAP':
        console.log(event);
        this.previewDocumentRKAP.splice(this.previewDocumentRKAP.indexOf(event), 1);
        console.log(this.previewDocumentRKAP);

        if(this.documentRKAP.length > 0){
          this.disableRKAP = false;
        }
        else{
          this.disableRKAP = true;
        }
      break;

      case 'KEPDIR_AP':
        console.log(event);
        this.previewDocumentKEPDIR_AP.splice(this.previewDocumentKEPDIR_AP.indexOf(event), 1);
        console.log(this.previewDocumentKEPDIR_AP);

        if(this.documentKEPDIR_AP.length > 0){
          this.disableKepdirAP = false;
        }
        else{
          this.disableKepdirAP = true;
        }
      break;

      case 'PAKTA_AP':
        console.log(event);
        this.previewPaktaIntegritasAP.splice(this.previewPaktaIntegritasAP.indexOf(event), 1);
        console.log(this.previewPaktaIntegritasAP);

        if(this.documentPaktaIntegritasAP.length > 0){
          this.disablePaktaAP = false;
        }
        else{
          this.disablePaktaAP = true;
        }
      break;

      case 'REKOMENDASI_DEKOM':
        console.log(event);
        this.previewRekomendasiDekom.splice(this.previewRekomendasiDekom.indexOf(event), 1);
        console.log(this.previewRekomendasiDekom);

        if(this.documentRekomendasiDekom.length > 0){
          this.disableDekom = false;
        }
        else{
          this.disableDekom = true;
        }
      break;

      case 'DOKUMEN_LAINNYA_AP':
        console.log(event);
        this.previewDocumentLainnyaAP.splice(this.previewDocumentLainnyaAP.indexOf(event), 1);
        console.log(this.previewDocumentLainnyaAP);

        if(this.documentLainnyaAP.length > 0){
          this.disableDokumenLainnyaAP = false;
        }
        else{
          this.disableDokumenLainnyaAP = true;
        }
      break;

      default: alert('no section');

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
    console.log(this.secondFormGroup.value);

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
        jadwalPokokPinjaman: this.secondFormGroup.get('jadwalPokokPinjaman')?.value,
        jadwalBungaPinjaman: this.secondFormGroup.get('jadwalBungaPinjaman')?.value,
        syaratPenarikan: this.secondFormGroup.get('syaratPenarikan')?.value,
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
          if(data.namaProyek != '' && data.namaProyek != null){
            this.allDataProject.push(data);
            console.log('hit button project', this.allDataProject);

            localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
          }
          else{

          }
        }
      }
      else{
        // this.allDataProject.push(data)
        // localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
        console.log('no object');

      }

      // this.allDataProject.push(data)
      // localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
    }

    const getProjectData = localStorage.getItem('allDataProjectAgreement');
    if(getProjectData){
      console.log(JSON.parse(getProjectData));
    }

    getProjectData ? this.dataProjectIndex = JSON.parse(getProjectData) : {}

    this.dataProjectIndex = this.dataProjectIndex[param - 1];

    console.log(this.dataProjectIndex);

    if(this.dataProjectIndex != undefined){
      this.secondFormGroup = this._formBuilder.group({
        namaProyek: [this.dataProjectIndex.namaProyek, Validators.required],
        totalPagu: [this.dataProjectIndex.totalPagu, Validators.required],
        // berakhirPerjanjian: [this.dataProjectIndex.berakhirPerjanjian, Validators.required],
        // deskripsiBerakhirPerjanjian: [this.dataProjectIndex.deskripsiBerakhirPerjanjian, Validators.required],
        // availabilityPeriode: [this.dataProjectIndex.availabilityPeriode, Validators.required],
        // deskripsiAvailabilityPeriode: [this.dataProjectIndex.deskripsiAvailabilityPeriode, Validators.required],
        // gracePeriod: [this.dataProjectIndex.gracePeriod, Validators.required],
        // deskripsiGracePeriod: [this.dataProjectIndex.deskripsiGracePeriod, Validators.required],
        tenor: [this.dataProjectIndex.tenor, Validators.required],
        repaymentMethod: [this.dataProjectIndex.repaymentMethod, Validators.required],
        dateRepayment: [this.dataProjectIndex.dateRepayment, Validators.required],
        deskripsiDenda: [this.dataProjectIndex.deskripsiDenda, Validators.required],
        pembayaranPokokPinjaman: [this.dataProjectIndex.pembayaranPokokPinjaman, Validators.required],
        interestType: [this.dataProjectIndex.interestType, Validators.required],
        bunga: [this.dataProjectIndex.bunga, Validators.required],
        jadwalPokokPinjaman: [this.dataProjectIndex.jadwalPokokPinjaman, Validators.required],
        jadwalBungaPinjaman: [this.dataProjectIndex.jadwalBungaPinjaman, Validators.required],
        syaratPenarikan: [this.dataProjectIndex.syaratPenarikan, Validators.required],
      });
    }
    else{
      this.secondFormGroup = this._formBuilder.group({
        namaProyek: ['', Validators.required],
        totalPagu: ['', Validators.required],
        // berakhirPerjanjian: ['FREE_TEXT', Validators.required],
        // deskripsiBerakhirPerjanjian: ['', Validators.required],
        // availabilityPeriode: ['FREE_TEXT', Validators.required],
        // deskripsiAvailabilityPeriode: ['', Validators.required],
        // gracePeriod: ['FREE_TEXT', Validators.required],
        // deskripsiGracePeriod: ['', Validators.required],
        tenor: ['', Validators.required],
        repaymentMethod: ['', Validators.required],
        dateRepayment: ['', Validators.required],
        deskripsiDenda: ['', Validators.required],
        pembayaranPokokPinjaman: ['PRORATE', Validators.required],
        interestType: ['FIXED', Validators.required],
        bunga: ['', Validators.required],
        jadwalPokokPinjaman: ['', Validators.required],
        jadwalBungaPinjaman: ['', Validators.required],
        syaratPenarikan: ['', Validators.required],
      });
    }

  }

  tambahProject = () => {
    this.totalProjectList = this.totalProjectList + 1;
    this.buttonProject.push(this.totalProjectList)
    console.log(this.totalProjectList);

    // this.allDataProject.push(data)
    // localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));

    this.secondFormGroup = this._formBuilder.group({
      namaProyek: ['', Validators.required],
      totalPagu: ['', Validators.required],
      // berakhirPerjanjian: ['FREE_TEXT', Validators.required],
      // deskripsiBerakhirPerjanjian: ['', Validators.required],
      // availabilityPeriode: ['FREE_TEXT', Validators.required],
      // deskripsiAvailabilityPeriode: ['', Validators.required],
      // gracePeriod: ['FREE_TEXT', Validators.required],
      // deskripsiGracePeriod: ['', Validators.required],
      tenor: ['', Validators.required],
      repaymentMethod: ['', Validators.required],
      dateRepayment: ['', Validators.required],
      deskripsiDenda: ['', Validators.required],
      pembayaranPokokPinjaman: ['PRORATE', Validators.required],
      interestType: ['FIXED', Validators.required],
      bunga: ['', Validators.required],
      jadwalPokokPinjaman: ['', Validators.required],
      jadwalBungaPinjaman: ['', Validators.required],
      syaratPenarikan: ['', Validators.required],
    });
  }

  deleteData = (item: number) => {
    alert(`delete data ke: ${item}`);
    console.log(this.buttonProject);
    if(this.totalProjectList > 1){
      this.totalProjectList = this.totalProjectList - 1;
      this.buttonProject.pop();
    }else{
      alert('minimal project 1');
    }
    console.log(this.buttonProject);

    let getDataProject = localStorage.getItem('allDataProjectAgreement');
    if(getDataProject != undefined){
      this.allDataProject = JSON.parse(getDataProject);
      let temporaryData = JSON.parse(getDataProject);
      temporaryData.splice(item - 1, 1);
      localStorage.setItem('allDataProjectAgreement', JSON.stringify(temporaryData))
    }else{
      alert('data not found');
    }

  }

  saveTemporary = (params: number) => {
    // alert(`clicked: ${params}`);
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
      jadwalPokokPinjaman: this.secondFormGroup.get('jadwalPokokPinjaman')?.value,
      jadwalBungaPinjaman: this.secondFormGroup.get('jadwalBungaPinjaman')?.value,
      syaratPenarikan: this.secondFormGroup.get('syaratPenarikan')?.value,
    }

    const getCheckDataFirst = localStorage.getItem('allDataProjectAgreement');

    if(getCheckDataFirst){
      let tempData = JSON.parse(getCheckDataFirst)
      this.allDataProject = JSON.parse(getCheckDataFirst);
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
        if(tempData[tempData.length - 1].namaProyek === null){
          tempData[tempData.length - 1] = data;
          localStorage.setItem('allDataProjectAgreement', JSON.stringify(tempData));
        }
        else{
          this.allDataProject.push(data);
          console.log('nama proyek terakhir tidak null', this.allDataProject);

          localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
        }
      }
    }
    else{
      this.allDataProject.push(data);
      console.log(this.allDataProject);

      localStorage.setItem('allDataProjectAgreement', JSON.stringify(this.allDataProject));
    }
  }

  isPenerusanPinjaman: boolean = false;

  onNextClickFirst() {
    this.submitted = true;

    // if (this.firstFormGroup.invalid) {
    //   console.log('Form submission failed. Please check for errors.');
    // } else {
    //   console.log('Form submitted successfully!', this.firstFormGroup.value);
    //   console.log(
    //     moment(this.firstFormGroup.get('tanggalSHLAgreement')?.value).format(
    //       'DD/MM/YYYY'
    //     )
    //   );

    //   const sourceOfFundingValue = this.firstFormGroup.get('SourceOfFunding')?.value

    //   if(sourceOfFundingValue === 'penerusan_pinjaman'){

    //     this.isPenerusanPinjaman = true;
    //     localStorage.setItem('dataForm1', JSON.stringify(this.firstFormGroup.value));
    //     this.submitted = false;
    //     this.stepper.next();

    //   }else{

    //     this.isPenerusanPinjaman = false;
    //     localStorage.setItem('dataForm1', JSON.stringify(this.firstFormGroup.value));
    //     this.submitted = false;
    //     this.stepper.next();

    //   }
    // }
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

  dataSHL: any;

  onNextClickSecond() {
    this.submitted = true;

    if (this.secondFormGroup.invalid) {
      if(this.penerusanPinjamanForm.invalid){
        console.log('form kosong');
      }
      else{
        console.log('Form submitted successfully!', this.penerusanPinjamanForm.value);
        this.submitted = false;
        this.stepper.next();
        localStorage.setItem('dataForm2', JSON.stringify(this.penerusanPinjamanForm.value))
      }
    } else {
      console.log('Form submitted successfully!', this.secondFormGroup.value);
      this.submitted = false;
      this.stepper.next();
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
    const res = await this.masterAnakPerusahaan.getAnakPerusahaan();

    // let dateString = "04/12/2023"
    // let formattedDate = dateString.split("/");
    // let day = parseInt(formattedDate[0], 10);
    // let month = parseInt(formattedDate[1], 10);
    // let year = parseInt(formattedDate[2], 10);

    // console.log(day, month, year);
    // console.log(new Date(year, month - 1, day));

    this.dataMasterAnakPerusahaan = res;
    this.dataMasterAnakPerusahaan = this.dataMasterAnakPerusahaan.data.content;
    console.log(this.dataMasterAnakPerusahaan);
  }
}
