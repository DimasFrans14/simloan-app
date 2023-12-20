import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';


@Component({
  selector: 'app-import-laporan',
  templateUrl: './import-laporan.component.html',
  styleUrls: ['./import-laporan.component.css'],
})
export class ImportLaporanComponent {
  
  fileLabaRugi: File[] = [];
  fileCashFlow: File[] = [];
  fileDokLain: File[] = [];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.fileLabaRugi.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.fileLabaRugi.splice(this.fileLabaRugi.indexOf(event), 1);
  }

  onSelectCashFLow(event: { addedFiles: any; }) {
    console.log(event);
    this.fileCashFlow.push(...event.addedFiles);
  }
  onRemoveCashFlow(event: File) {
    console.log(event);
    this.fileCashFlow.splice(this.fileCashFlow.indexOf(event), 1);
  }

  onSelectDokLain(event: { addedFiles: any; }) {
    console.log(event);
    this.fileDokLain.push(...event.addedFiles);
  }
  onRemoveDokLain(event: File) {
    console.log(event);
    this.fileDokLain.splice(this.fileDokLain.indexOf(event), 1);
  }

  constructor(
    private _formBuilder: FormBuilder, 
    private tableConfig:TableServicesService
    ) {}

  tableDataImportCashFlow: any;
  tableImportCashFlow:any;

  tableDataImportLabaRugi: any;
  tableImportLabaRugi:any;

  tableDataImportDokumenLain: any;
  tableImportDokumenLain:any;

  ngAfterViewInit(): void {
    this.tableConfig.initializetableImportCashFlow();
    this.tableConfig.initializetableImportLabaRugi();
    this.tableConfig.initializetableImportDokumenLain();
  }

  ngOnInit(): void {}

}
