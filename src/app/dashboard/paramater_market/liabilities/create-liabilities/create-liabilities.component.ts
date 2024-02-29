import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import Quill from 'quill';
import { QuillServicesService } from 'src/app/services/textArea_services/quill-services.service';

@Component({
  selector: 'app-create-liabilities',
  templateUrl: './create-liabilities.component.html',
  styleUrls: ['./create-liabilities.component.css']
})
export class CreateLiabilitiesComponent {

  today: number = Date.now();
  // Hide Form Asumsi Castalia //
  public hideInterestRate:boolean = false;
  public buttonHideInterestRate:any = 'hideInterestRate';

  public hideSOFR:boolean = true;
  public buttonHideSOFR:any = 'hideSOFR';

  public hideJibor3MO:boolean = true;
  public buttonHideJibor3MO:any = 'hideJibor6MO';

  public hideJibor6MO:boolean = true;
  public buttonHideJibor6MO:any = 'hideAtd3MO';

  public hideAtd3MO:boolean = true;
  public buttonHideAtd3Mo:any = 'hideAtd3Mo';

  public hideAdditional:boolean = true;
  public buttonHideAdditional:any = 'hideAdditional';

  //kurs
  public buttonHideUsdIdr:any = 'hideUsdIdr';
  public hideUsdIdr:boolean = true;
  public buttonHideEurIdr:any = 'hideEurIdr';
  public hideEurIdr:boolean = false;
  public buttonHideJpyIdr:any = 'hideJpyIdr';
  public hideJpyIdr:boolean = false;
  public buttonHideGbpIdr:any = 'hideGbpIdr';
  public hideGbpIdr:boolean = false;
  public buttonHideChnIdr:any = 'hideChnIdr';
  public hideChnIdr:boolean = false;


  constructor(private _formBuilder:FormBuilder){}

    interestBearingDebt = new FormGroup({
      rkap : new FormControl(''),
      realisasi : new FormControl(''),
      outlook : new FormControl(''),
      description :new FormControl(''),
    });

    asumsiCastalia = new FormGroup({
      sofrReference : new FormControl(''),
      sofrMargin : new FormControl(''),
      interestRateReference : new FormControl(''),
      interestRateMargin : new FormControl(''),
      jibor3MoReference : new FormControl(''),
      jibor3MoMargin : new FormControl(''),
      jibor6MoReference :new FormControl(''),
      jibor6MoMargin :new FormControl(''),
      atd3MoReference : new FormControl(''),
      atd3MoMargin : new FormControl(''),
      usdIdr : new FormControl(''),
      eurIdr : new FormControl(''),
      jpyIdr : new FormControl(''),
      bgpIdr : new FormControl(''),
      chnIdr : new FormControl(''),
      additionalProceedReference : new FormControl(''),
      additionalProceedMargin : new FormControl(''),
    });

    proyeksi = new FormGroup({
      interestPaid1 : new FormControl(''),
      interestPaid2 : new FormControl(''),
      interestAccrual1 : new FormControl(''),
      interestAccrual2 : new FormControl(''),
      rkapDebtService : new FormControl(''),
      realisasiDebtService : new FormControl(''),
      bulanDebtService : new FormControl(''),
      outlookDebtService : new FormControl(''),
      sensitivitasBearingDebt : new FormControl(''),
    })

    onSubmit(){
      const data = {
        InterestBearingDebt: this.interestBearingDebt.value,
        AsumsiCastalia: this.asumsiCastalia.value,
        Proyeksi: this.proyeksi.value
      }
      console.log('Data:', data);
      console.log(this.today)
    }

  interestBearingDebtStep = this._formBuilder.group({
    sofr: ['', Validators.required],
    realisasi: ['', Validators.required],
    outlook: ['', Validators.required],
  });
  asumsiCastaliaStep = this._formBuilder.group({
  });
  proyeksiStep = this._formBuilder.group({
  });

  ngOnInit(){}

  // Hide Form Asumsi Castalia //
  toggleInterestRate() {
    this.hideInterestRate = !this.hideInterestRate;
    if(this.hideInterestRate)  
      this.buttonHideInterestRate = "showInterestRate";
    else
      this.buttonHideInterestRate = "HideInterestRate";
  }

  toggleSOFR() {
    this.hideSOFR = !this.hideSOFR;
    if(this.hideSOFR)  
      this.buttonHideSOFR = "showSOFR";
    else
      this.buttonHideSOFR = "HideSOFR";
  }

  toggleJibor3MO() {
    this.hideJibor3MO = !this.hideJibor3MO;
    if(this.hideJibor3MO)  
      this.buttonHideJibor3MO = "showJibor3MO";
    else
      this.buttonHideJibor3MO = "HideJibor3MO";
  }

  toggleJibor6MO() {
    this.hideJibor6MO = !this.hideJibor6MO;
    if(this.hideJibor6MO)  
      this.buttonHideJibor6MO = "showJibor6MO";
    else
      this.buttonHideJibor6MO = "HideJibor6MO";
  }

  toggleAtd3MO() {
    this.hideAtd3MO = !this.hideAtd3MO;
    if(this.hideAtd3MO)  
      this.buttonHideAtd3Mo = "showAtd3MO";
    else
      this.buttonHideAtd3Mo = "HideAtd3MO";
  }

  toggleUsdIdr() {
    this.hideUsdIdr = !this.hideUsdIdr;
    if(this.hideUsdIdr)  
      this.buttonHideUsdIdr = "showUsdIdr";
    else
      this.buttonHideUsdIdr = "HideUsdIdr";
  }

  toggleEurIdr() {
    this.hideEurIdr = !this.hideEurIdr;
    if(this.hideEurIdr)  
      this.buttonHideEurIdr = "showEurIdr";
    else
      this.buttonHideEurIdr = "HideEurIdr";
  }

  toggleJpyIdr() {
    this.hideJpyIdr = !this.hideJpyIdr;
    if(this.hideJpyIdr)  
      this.buttonHideJpyIdr = "showJpyIdr";
    else
      this.buttonHideJpyIdr = "HideJpyIdr";
  }

  toggleGbpIdr() {
    this.hideGbpIdr = !this.hideGbpIdr;
    if(this.hideGbpIdr)  
      this.buttonHideGbpIdr = "showGbpIdr";
    else
      this.buttonHideGbpIdr = "HideGbpIdr";
  }

  toggleChnIdr() {
    this.hideChnIdr = !this.hideChnIdr;
    if(this.hideChnIdr)  
      this.buttonHideChnIdr = "showChnIdr";
    else
      this.buttonHideChnIdr = "HideChnIdr";
  }

  toggleAdditional() {
    this.hideAdditional = !this.hideAdditional;
    if(this.hideAdditional)  
      this.buttonHideAdditional = "showAdditional";
    else
      this.buttonHideAdditional = "HideAdditional";
  }

}