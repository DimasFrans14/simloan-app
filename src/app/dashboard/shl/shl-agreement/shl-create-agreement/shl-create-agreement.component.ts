import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-shl-create-agreement',
  templateUrl: './shl-create-agreement.component.html',
  styleUrls: ['./shl-create-agreement.component.css']
})
export class ShlCreateAgreementComponent {

  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private _formBuilder: FormBuilder) {}

  selectedCar!: number;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

  firstFormGroup = this._formBuilder.group({
    nomorSHL: ['', Validators.required],
    nomorAPSHL: ['', Validators.required],
    textAreaDeskripsiProyek: ['', Validators.required],
    masaPengembalian: ['freeText', Validators.required],
    SourceOfFunding: ['nonPenerusan', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });

  onNextClickFirst() {
    if (this.firstFormGroup.valid) {
      this.stepper.next();
      console.log(this.firstFormGroup.value);
    } else {
      const inputNoSHL = document.getElementById('noSHL');
      const inputNoAPSHL = document.getElementById('noAPSHL');
      const deskripsiProyek = document.getElementById('deskripsiProyek');
      if(inputNoAPSHL && inputNoSHL && deskripsiProyek){
        inputNoSHL.style.setProperty("--c", "red");
        inputNoAPSHL.style.setProperty("--c", "red");
        deskripsiProyek.style.setProperty("--c", "red");
        // inputNoAPSHL.style.border = '1px solid red'
      }
    }
  }
  isLinear = false;



}
