import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shl-create-simulation',
  templateUrl: './shl-create-simulation.component.html',
  styleUrls: ['./shl-create-simulation.component.css']
})
export class ShlCreateSimulationComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  parameterCurrency: any;
  agreementDocumentPLN: any;
  isDisable: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private tableConfig: TableServicesService
    ) {}

  selectedNoSHLAnakPerusahaan: any;

  anakPerusahaan = [
    { id: 1, name: 'PT Indonesia Comnets Plus'},
    { id: 2, name: 'PT Energi Primer Indonesia'},
    { id: 3, name: 'PT Pembangkit Jawa Bali'},
    { id: 4, name: 'PT Mandau Cipta Tenaga Nusantara'},
  ];

  shlAgreementList = [
    { id_shl: 1, no_shl_agreement: '12305148/PJ/01/PST/2022' },
    { id_shl: 2, no_shl_agreement: '12305148/PJ/01/PST/2023'},
    { id_shl: 3, no_shl_agreement: '12305148/PJ/01/PST/2024'},
  ];

  noSHLAnakPerusahaan = [
    { id_shl: 1, id_shl_ap: 4, no_shl_agreement_ap: 'AP1/12305148/PJ/01/PST/2022' },
    { id_shl: 2, id_shl_ap: 5, no_shl_agreement_ap: 'AP2/212305148/PJ/01/PST/2023'},
    { id_shl: 3, id_shl_ap: 6, no_shl_agreement_ap: 'AP3/12305148/PJ/01/PST/2024'},
  ];

  proyekList = [
    { id: 1, name: 'Pekerjaan Pembangunan TL 150 kV Punagaya - Tanjung Bunga'},
    { id: 2, name: 'Proyek 1'},
    { id: 3, name: 'Proyek 2'},
    { id: 4, name: 'Proyek 3'},
  ];

  agreementKe = [
    { id: 1, idx_withdrawal: '1'},
    { id: 2, idx_withdrawal: '2'},
    { id: 3, idx_withdrawal: '3'},
  ];

  listItemTenor = [
    { id: 1, name: 'USD' },
    { id: 2, name: 'EUR' },
  ];

  firstFormGroup = this._formBuilder.group({
    selectedAP: ['', Validators.required],
    noSHLAgreementList: ['', Validators.required],
    selectedProyek: ['', Validators.required],
    selectedWithdrawal: ['', Validators.required],
    startDateGracePeriode: ['', Validators.required],
    endDateGracePeriode: ['', Validators.required],
    pokok_dibayarkan: ['', Validators.required],
    bunga_dibayarkan: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    angsuran: ['', Validators.required],
    tanggalJatuhTempo: ['', Validators.required],
    tanggalTerima: ['', Validators.required],
    denda: ['isFalse', Validators.required],
    diterimaPLN: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({

  });

  isLinear = false;
  submitted: boolean = false;
  namaProyekDisplay: boolean = false;
  detailProyekDisplay: boolean = false;
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

  onChange(event: any) {
    console.log("Nilai yang dipilih:", event);

    let getFilter = this.noSHLAnakPerusahaan.filter((item: any) => {
      return item.id_shl === event.id_shl
    })
    this.selectedNoSHLAnakPerusahaan = getFilter[0].no_shl_agreement_ap
    console.log(this.selectedNoSHLAnakPerusahaan);

    // this.selectedNoSHLAnakPerusahaan
  }

  namaProyekChange = (event: any) => {
    const tabelDetailWithdrawal = document.getElementById('previewTabelProyek');

    if (tabelDetailWithdrawal !== null) {
      this.namaProyekDisplay = event !== undefined && event !== null;

      console.log(event, this.namaProyekDisplay);

      console.log(this.firstFormGroup.value);
      this.tableConfig.initializeTableDetailWithdrawal1();

      if (this.namaProyekDisplay) {
          tabelDetailWithdrawal.classList.remove('hidden');
      } else {
          tabelDetailWithdrawal.classList.add('hidden');
      }

          console.log(tabelDetailWithdrawal.classList.contains('hidden') ? 'hidden' : 'not hidden');
      } else {
          console.error('Element not found: previewTabelProyek');
      }

    // setTimeout(() => {
    //   if (tabelDetailWithdrawal) {
    //     tabelDetailWithdrawal.style.display = this.namaProyekDisplay ? 'block' : 'none';
    //     console.log(this.tableConfig.initializeTableDetailWithdrawal());
    //     console.log(tabelDetailWithdrawal.style.display);
    //   }
    // }, 10);
  }

  chooseWithdrawal = (event: any) => {
    console.log(event.target.value);
  }

  getDropdownVal = (name: string) => {
    const buttonTenor = document.getElementById('buttonTenor');
    buttonTenor ? (buttonTenor.textContent = name) : '';
  };

  onRemove(event: File) {
    console.log(event);
    this.parameterCurrency.splice(this.parameterCurrency.indexOf(event), 1);
    console.log(this.parameterCurrency);

  }

  firstWithdrawalForm = () => {
    this.submitted = true;

    if (this.firstFormGroup.invalid) {
      Swal.fire({
        icon: "error",
        title: "Form is not Valid!",
        text: "Check your Form!",
      });
    } else {
      // Swal.fire({
      //   icon: "success",
      //   title: "Form submitted successfully!",
      //   text: "Form is valid!",
      // });
      // console.log('Form submitted successfully!', this.firstFormGroup.value);

      // localStorage.setItem('dataForm1', JSON.stringify(this.firstFormGroup.value));
      this.tableConfig.initializeTableDetailWithdrawal2();
      this.submitted = false;
      this.stepper.next();
    }
  }

  submitFirstForm = () => {
    console.log(this.secondFormGroup);

  }

  ngOnInit(): void {

  }
}
