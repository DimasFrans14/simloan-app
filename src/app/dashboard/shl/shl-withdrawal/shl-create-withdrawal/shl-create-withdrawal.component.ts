import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shl-create-withdrawal',
  templateUrl: './shl-create-withdrawal.component.html',
  styleUrls: ['./shl-create-withdrawal.component.css']
})
export class ShlCreateWithdrawalComponent implements OnInit{
  @ViewChild('stepper') stepper!: MatStepper;

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

  firstFormGroup = this._formBuilder.group({
    selectedAP: ['', Validators.required],
    noSHLAgreementList: ['', Validators.required],
    selectedProyek: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = false;
  submitted: boolean = false;
  namaProyekDisplay: boolean = false;

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
    const tabelDetailWithdrawal = document.getElementById('tes');

    this.namaProyekDisplay = event !== undefined && event !== null;

    console.log(event, this.namaProyekDisplay);

    console.log(this.firstFormGroup.value);
    this.tableConfig.initializeTableDetailWithdrawal();

    setTimeout(() => {
      if (tabelDetailWithdrawal) {
        tabelDetailWithdrawal.style.display = this.namaProyekDisplay ? 'block' : 'none';
      }
    }, 50);
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
      Swal.fire({
        icon: "success",
        title: "Form submitted successfully!",
        text: "Form is valid!",
      });
      console.log('Form submitted successfully!', this.firstFormGroup.value);

      localStorage.setItem('dataForm1', JSON.stringify(this.firstFormGroup.value));
      this.submitted = false;
      this.stepper.next();
    }
  }

  ngOnInit(): void {

  }
}
