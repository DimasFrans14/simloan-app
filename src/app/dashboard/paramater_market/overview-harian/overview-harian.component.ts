import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Quill from 'quill';
import { QuillServicesService } from 'src/app/services/textArea_services/quill-services.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import PptxGenJS from 'pptxgenjs';
import { DataService } from 'src/app/data.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'overview-harian',
  templateUrl: './overview-harian.component.html',
  styleUrls: ['./overview-harian.component.css']
})
export class OverviewHarian implements OnInit, AfterViewInit{

  @ViewChild('keyTakeways') keyTakeways!: ElementRef;
  @ViewChild('footnote') footnote!: ElementRef;
  @ViewChild('screen', { static: true }) screen!: ElementRef;

  constructor(private quillConfig: QuillServicesService,
     private tableConfig: TableServicesService,
     private captureService: NgxCaptureService,
     private dataService: DataService){
    // console.log(this.tableConfig.getData());
    // console.log(this.dataService.setData());
  }

  public quillTakeways!: Quill;
  public quillFootnote!: Quill;

  openModal: boolean = false;

  selectedItems!: number;

  PPTFile = new PptxGenJS()
  img = '';

  dateVal: string= '';
  valueFilterTanggal: string[] = [];

  macroIndicatorSelect = [
    { id: 1, name: 'PDB (%)' },
    { id: 2, name: 'Inflasi (%)' },
    { id: 3, name: 'Fed Funds Rate (%)' },
    { id: 4, name: 'BI 7-Day Reverse Repo (%)' },
    { id: 5, name: 'Yield UST 10-Yr' },
    { id: 6, name: 'Yield SBN 10-Yr' },
  ];

  defaultMacroIndicatorItems = [
    {
      "id": "1",
      "currency": "PDB (%)",
      "rate1": "1.23",
      "rate2": "1.25",
      "rate3": "1.27"
    },
    {
      "id": "2",
      "currency": "Inflasi (%)",
      "rate1": "0.98",
      "rate2": "1.01",
      "rate3": "0.95"
    },
    {
      "id": "3",
      "currency": "Fed Funds Rate (%)",
      "rate1": "1.55",
      "rate2": "1.52",
      "rate3": "1.57"
    },
    {
      "id": "4",
      "currency": "BI 7-Day Reverse Repo (%)",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
    {
      "id": "5",
      "currency": "Yield UST 10-Yr",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
    {
      "id": "6",
      "currency": "Yield SBN 10-Yr",
      "rate1": "0.009",
      "rate2": "0.008",
      "rate3": "0.0095"
    },
  ]

  excelMacroIndicator = this.tableConfig.getData();

  interestRateItems = [
    {
      "id": "1",
      "currency": "Avg SOFR USD 90-D (%)",
      "price1": "1.23",
      "price2": "1.25",
      "price3": "1.27"
    },
    {
      "id": "2",
      "currency": "Avg SOFR USD 180-D (%)",
      "price1": "0.98",
      "price2": "1.01",
      "price3": "0.95"
    },
    {
      "id": "3",
      "currency": "EURIBOR 6-Mo (%)",
      "price1": "1.55",
      "price2": "1.52",
      "price3": "1.57"
    },
    {
      "id": "4",
      "currency": "JIBOR 3-Mo (%)",
      "price1": "0.009",
      "price2": "0.008",
      "price3": "0.0095"
    },
    {
      "id": "5",
      "currency": "JIBOR 6-Mo (%)",
      "price1": "0.009",
      "price2": "0.008",
      "price3": "0.0095"
    },
    {
      "id": "6",
      "currency": "ATD 3-Mo1 (%)",
      "price1": "0.009",
      "price2": "0.008",
      "price3": "0.0095"
    },
  ]

  filteredMonth = [
    {id: 1, month: 'Januari'},
    {id: 2, month: 'Februati'},
    {id: 3, month: 'Maret'},
    {id: 4, month: 'April'},
    {id: 5, month: 'Mei'},
    {id: 6, month: 'Juni'},
    {id: 7, month: 'Juli'},
    {id: 8, month: 'Agustus'},
    {id: 9, month: 'September'},
    {id: 10, month: 'Oktober'},
    {id: 11, month: 'November'},
    {id: 12, month: 'Desember'},
  ]

  dataFilterTanggal = {
    hari: '',
    bulan: '',
    triwulan: ''
  };

  fullCaptureWithDownload() {
    let slide;
    this.captureService
      .getImage(this.screen.nativeElement, false, {
        x: -10,
        y: -10,
        width: 1150,
        height: 900,
      })
      .pipe(
        tap((img: string) => {
          this.img = img;

          // Once the image is captured, create a slide and add the image
          slide = this.PPTFile.addSlide();
          slide.addImage({
            data: this.img,
            x: 0, y: 0,
            w: 10, h: 10
          });
          this.PPTFile.defineLayout({ name:'layout', width:10, height:10});
          this.PPTFile.layout = 'layout'
          this.PPTFile.writeFile({ fileName:'Overview-Report.pptx' })
        }),
        // tap((img) => this.captureService.downloadImage(img)),
      )
      .subscribe();
  }

  getPPT(){
    this.fullCaptureWithDownload()
  }

  getDate(val: any){
    this.dateVal = val
    console.log(this.dateVal);

  }
  onSubmit(event: any) {
    console.log(event);

    console.log(event.target[0].id);

    for(let i=0; i<10; i++){
      if(event.target[i].checked){
        this.valueFilterTanggal.push(event.target[i].id);
      }
    }

    console.log(this.valueFilterTanggal);
  }

  openModalTakeways(){
    this.openModal = !this.openModal;
  }

  getValueForm(event: any) {
    console.log(this.dataFilterTanggal)
    console.log(event);
  }

  dataRKAP: any;
  dataInterestRate: any;
  dataCommodities: any;
  dataCurrency: any;
  formatTanggal: any;

  async onDate(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    console.log(selectedDate);

    const formattedDate = moment(event.value).format("DD/MM/YYYY");
    console.log(formattedDate);

    let month;
    switch (formattedDate.slice(3, 5)) {
      case '01':
        month = "Januari";
        break;
      case '02':
        month = "Februari";
        break;
      case '03':
        month = "Maret";
        break;
      case '04':
        month = "April";
        break;
      case '05':
        month = "Mei";
        break;
      case '06':
        month = "Juni";
        break;
      case '07':
        month = "Juli";
        break;
      case '08':
        month = "Agustus";
        break;
      case '09':
        month = "September";
        break;
      case '10':
        month = "Oktober";
        break;
      case '11':
        month = "November";
        break;
      case '12':
        month = "Desember";
        break;
    }

    console.log(month);

    try {
      //TES FETCH BASED ON PARAMS
      const response = await this.dataService.fetchDataViewInflasiByDate(formattedDate, month);
      this.formatTanggal = response
      console.log(this.formatTanggal.data[0].tanggal);

      console.log();
    } catch (error) {
      console.log(error);
    }
}

  async ngOnInit(): Promise<void> {
    try {
      const responseData = await this.dataService.fetchDataInterestRateRKAP();
      console.log(responseData);

      this.dataRKAP = responseData;
      const filteredDataInterestRate = this.dataRKAP.data.content.filter((item: any) => item.grup === 'INTEREST RATE');
      this.dataInterestRate = filteredDataInterestRate
      console.log(this.dataInterestRate);

      const filteredDataCommodities = this.dataRKAP.data.content.filter((item: any) => item.grup === 'COMMODITIES');
      this.dataCommodities = filteredDataCommodities
      console.log(this.dataCommodities);

      const filteredDataCurrency = this.dataRKAP.data.content.filter((item: any) => item.grup === 'KURS');
      this.dataCurrency = filteredDataCurrency
      console.log(this.dataCurrency);
    }
    catch(err){
      console.log(err);
    }
  }

  ngAfterViewInit() {
      const elementKeyTakeways = this.keyTakeways.nativeElement;
      const elementFootnote = this.footnote.nativeElement;
      this.quillTakeways = this.quillConfig.initializeQuillKeyTakeways(elementKeyTakeways);

      this.quillFootnote = this.quillConfig.initializeQuillFootnote(elementFootnote);

      if(this.excelMacroIndicator != undefined){
        for(let i=0;i<this.excelMacroIndicator.length; i++){
          for(let j=0; j<this.excelMacroIndicator[i].length; j++){
            console.log(this.excelMacroIndicator[i][j]);
          }
        }
      }
      else{
        console.log('no excel data');
      }
  }

  getValue(){

    let value = this.quillTakeways.getContents();

    console.log(JSON.stringify(value));
  }

  getValue2(){
    let value = this.quillFootnote.getText();

    console.log(value);
  }

  onChange(){
    const _this = this;
    this.quillTakeways.on('text-change', function(delta, oldDelta, source) {
      if (source === 'user') {
        _this.getValue()
        console.log('dari onchange');
      }
    })
  }

  onChange2(){
    const _this = this;
    this.quillFootnote.on('text-change', function(delta, oldDelta, source) {
      if (source === 'user') {
        _this.getValue2()
      }
    })
  }

}
