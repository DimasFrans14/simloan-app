import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-pembayaran',
  templateUrl: './input-pembayaran.component.html',
  styleUrls: ['./input-pembayaran.component.css']
})

export class InputPembayaranComponent implements OnInit{
  files: any;
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ){
    // this.firstFormGroup = this._formBuilder.group({
    //   angsuran: ['', Validators.required],
    //   tanggalJatuhTempo: ['', Validators.required],
    //   tanggalTerima: ['', Validators.required],
    //   pembayaran_pokok: [true, Validators.required],
    //   pembayaran_bunga: [false, Validators.required],
    //   pembayaran_pph: [true, Validators.required],
    //   pembayaran_skb: [false, Validators.required],
    //   denda: ['isFalse', Validators.required],
    //   diterimaPLN: ['', Validators.required],
    // }, { validators: this.atLeastOneCheckboxSelectedValidator });
  }

  paymentType: string = ''

  previewbuktiTF: any;
  documentbuktiTF: any;
  dokumenPLN: any;
  allFileUpload: any;
  allDocumentsUploaded: any;
  previewdokPotongPajak: any;
  documentdokPotongPajak: any;
  previewDocumentLainnya: any;
  documentLainnya: any;

  disablebuktiTF: boolean = false;
  isDisable: boolean = false;
  submitted: boolean = false;

  firstFormGroup = this._formBuilder.group({
    angsuran: ['', Validators.required],
    tanggalJatuhTempo: ['', Validators.required],
    tanggalTerima: ['', Validators.required],
    // pembayaran_pokok: [true, Validators.required],
    // pembayaran_bunga: [false, Validators.required],
    // pembayaran_pph: [true, Validators.required],
    // pembayaran_skb: [false, Validators.required],
    denda: ['isFalse', Validators.required],
    diterimaPLN: ['', Validators.required],
  });

  pembayaranPokok: boolean = true;
  pembayaranBunga: boolean = false;
  pembayaranPPH23: boolean = true;
  pembayaranSKB: boolean = false;
  pembayaranDenda: string = '';

  changePembayaranPokok = (event: any) => {
    // this.firstFormGroup.get('pembayaran_bunga')?.setValue(false);
    // const pokokChecked = this.firstFormGroup.get('pembayaran_pokok')?.value;
    // const bungaChecked = this.firstFormGroup.get('pembayaran_bunga')?.value;

    // pokokChecked ? this.pembayaranPokok = pokokChecked : this.pembayaranPokok = false;

    // if (pokokChecked && bungaChecked) {
    //   this.firstFormGroup.get('pembayaran_bunga')?.setValue(false);
    // }
    // console.log('pokok:'+ pokokChecked, 'bunga:' + bungaChecked);

    if (event.target.checked) {
      this.pembayaranPokok = event.target.checked
    }else{
      this.pembayaranPokok = false;
    }
  }

  changePembayaranBunga = (event: any) => {
    console.log(event);
    // this.firstFormGroup.get('pembayaran_pokok')?.setValue(false);
    // const pokokChecked = this.firstFormGroup.get('pembayaran_pokok')?.value;
    // const bungaChecked = this.firstFormGroup.get('pembayaran_bunga')?.value;
    // console.log('pokok 1:'+ pokokChecked, 'bunga 1:' + bungaChecked);

    if (event.target.checked) {
      this.pembayaranBunga = event.target.checked
    }else{
      this.pembayaranBunga = false;
    }

    // bungaChecked ? this.pembayaranBunga = bungaChecked : this.pembayaranBunga = false;
    // console.log('pokok 2:'+ pokokChecked, 'bunga 2:' + bungaChecked);
  }

  changePembayaranPPH23 = (event: any) => {
    // const valuePPH = this.firstFormGroup.get('pembayaran_pph')?.value;

    // valuePPH ? this.pembayaranPPH23 = valuePPH : this.pembayaranPPH23 = false;
    // console.log(valuePPH);

    if (event.target.checked) {
      this.pembayaranPPH23 = event.target.checked
    }else{
      this.pembayaranPPH23 = false;
    }
  }

  changePembayaranSKB = (event: any) => {
    // const valueSKB = this.firstFormGroup.get('pembayaran_skb')?.value;

    // valueSKB ? this.pembayaranSKB = valueSKB : this.pembayaranSKB = false;
    // console.log(valueSKB);

    if (event.target.checked) {
      this.pembayaranSKB = event.target.checked
    }else{
      this.pembayaranSKB = false;
    }
  }

  changePembayaranDenda = () => {
    const valueDenda = this.firstFormGroup.get('denda')?.value;

    if(valueDenda){
      this.pembayaranDenda = valueDenda;
    }
    else{

    }

    console.log(valueDenda);
  }

  submitFirstForm = () => {
    if(this.firstFormGroup.invalid){
      this.submitted = true;
    }
    else{
      this.submitted = false;
    }

    console.log(this.firstFormGroup.value);
  }

  onSelectDokumen(event: { addedFiles: any }, section: string) {
    let allDocumentsUploaded;
    switch (section) {
      case 'buktiTF':
        this.previewbuktiTF.push(...event.addedFiles);
        this.documentbuktiTF.push(...event.addedFiles);
        this.dokumenPLN.push(...event.addedFiles);

        this.allFileUpload.push(...event.addedFiles);
        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray: any) => docArray.length > 0
        );

        if(this.documentbuktiTF.length > 0){
          this.disablebuktiTF = true;
        }
        else{
          this.disablebuktiTF = false;
        }

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        console.log(this.documentbuktiTF);
        break;

      case 'dokPotongPajak':
        this.previewdokPotongPajak.push(...event.addedFiles);
        this.documentdokPotongPajak.push(...event.addedFiles);
        this.dokumenPLN.push(...event.addedFiles);

        this.allFileUpload.push(...event.addedFiles);
        allDocumentsUploaded = this.allDocumentsUploaded.every(
          (docArray: any) => docArray.length > 0
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
          (docArray: any) => docArray.length > 0
        );

        if (allDocumentsUploaded) {
          this.isDisable = false;
        }
        break;

      default:
        console.error('Unknown Section:', section);
    }
  }

  onRemoveKepdirPLN(event: File) {
    console.log(event);
    this.previewbuktiTF.splice(this.previewbuktiTF.indexOf(event), 1);
    console.log(this.previewbuktiTF);

    if(this.documentbuktiTF.length > 0){
      this.disablebuktiTF = false;
    }
    else{
      this.disablebuktiTF = true;
    }
  }

  onRemove(event: File) {
    console.log(event);
    this.previewbuktiTF.splice(this.previewbuktiTF.indexOf(event), 1);
    console.log(this.previewbuktiTF);

  }

  ngOnInit(): void {
    const backdropElement = document.querySelector('.modal-backdrop') as HTMLElement;

    if(backdropElement){
      backdropElement.remove()
    }

    this.route.queryParams.subscribe(params => {
      const valueRadio = params['type'];
      console.log(valueRadio);

      this.paymentType = valueRadio
    });

  }

}
