import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import Quill from 'quill';
import { QuillServicesService } from 'src/app/services/textArea_services/quill-services.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import PptxGenJS from 'pptxgenjs';
import { DataService } from 'src/app/data.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'overview-harian',
  templateUrl: './overview-harian.component.html',
  styleUrls: ['./overview-harian.component.css'],
  // encapsulation: ViewEncapsulation.
})
export class OverviewHarian implements OnInit, AfterViewInit{

  @ViewChild('keyTakeways') keyTakeways!: ElementRef;
  @ViewChild('footnote') footnote!: ElementRef;
  @ViewChild('Mention') Mention!: ElementRef;
  @ViewChild('screen', { static: true }) screen!: ElementRef;

  constructor(private quillConfig: QuillServicesService,
     private tableConfig: TableServicesService,
     private captureService: NgxCaptureService,
     private marketUpdateService: MarketUpdateService,
     private sanitizer: DomSanitizer){
    // console.log(this.tableConfig.getData());
    // console.log(this.marketUpdateService.setData());
  }

  public quillTakeways!: Quill;
  public quillFootnote!: Quill;
  public mentionQuill!: Quill;

  openModal: boolean = false;
  openModalFootnote1: boolean = false;
  openModalTag: boolean = false;

  selectedItems!: string;
  selectedKurs!: string;
  selectedItemsMacro!: string;

  sanitize = this.sanitizer;

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
  openModalFootnote(stateFootnote: string){
    this.openModalFootnote1 = !this.openModalFootnote1;
    if(stateFootnote === ''){
      this.footNoteState = 'add';
    }
  }

  openModalTagFootnote(){
    this.openModalTag = !this.openModalTag;
  }

  getValueForm(event: any) {
    console.log(this.dataFilterTanggal)
    console.log(event);
  }

  dataRKAP: any;
  dataInterestRate: any;
  dataCommodities: any;
  listEditCommodities: any;
  dataDefaultCommodities: any;

  dataMacroIndicator: any;
  listEditMacroIndicator: any;

  dataCurrency: any;
  listEditCurrency: any;
  dataDefaultCurrency: any;

  formatTanggal: any;
  changeIcon: boolean = false;

  getKeyTakeways!: any;

  getValueMacroIndicator(event: any){
    console.log(event);
    console.log(this.listEditMacroIndicator);

    // const listedDataCommodities = this.dataCommodities.includes(event)

    const updatedData = this.dataMacroIndicator.filter((item: any) => item.kode !== event)

    const getRow = this.listEditMacroIndicator.filter((item: any) => item.kode == event)

    const checkData = this.dataMacroIndicator.includes(getRow[0])

    // this.dataMacroIndicator = updatedData;

    console.log(checkData);

    if(checkData){
      this.dataMacroIndicator = updatedData;
      this.changeIcon = true;
      Swal.fire({
        title: "Hapus item berhasil!",
        icon: "info",
        showCloseButton: true,
      });
    }
    else{
      this.dataMacroIndicator.push(getRow[0]);
      Swal.fire({
        title: "Tambah item berhasil!",
        icon: "info",
        showCloseButton: true,
      });
    }

    console.log(this.dataMacroIndicator, updatedData, getRow);
  }

  getValueRowCommodities(event: any){
    console.log(event);

    // const listedDataCommodities = this.dataCommodities.includes(event)

    const updatedData = this.dataDefaultCommodities.filter((item: any) => item.kode_item !== event)

    const getRow = this.listEditCommodities.filter((item: any) => item.kode_item == event)
    const checkData = this.dataDefaultCommodities.includes(getRow[0])

    console.log(checkData);

    if(checkData){
      this.dataDefaultCommodities = updatedData;
      this.changeIcon = true;
      Swal.fire({
        title: "Hapus item berhasil!",
        icon: "info",
        showCloseButton: true,
      });
    }
    else{
      if(this.dataDefaultCommodities.length < 3){
        this.dataDefaultCommodities.push(getRow[0]);
        this.changeIcon = false;
        Swal.fire({
          title: "Tambah item berhasil!",
          icon: "info",
          showCloseButton: true,
        });
      }
      else{
        Swal.fire({
          title: "Item lebih dari 3!",
          icon: "error",
          showCloseButton: true,
        });
      }
      console.log('add data');
    }

    console.log(this.dataDefaultCommodities, updatedData, getRow);
  }

  getValueRowKurs(event: any){
    console.log(event);

    const updatedData = this.dataDefaultCurrency.filter((item: any) => item.kode !== event)

    const getRow = this.listEditCurrency.filter((item: any) => item.kode == event)

    const checkData = this.dataDefaultCurrency.includes(getRow[0])


    console.log(checkData);

    if(checkData){
      this.dataDefaultCurrency = updatedData;
      this.changeIcon = true;
      Swal.fire({
        title: "Hapus item berhasil!",
        icon: "info",
        showCloseButton: true,
      });
    }
    else{
      if(this.dataDefaultCurrency.length < 3){
        this.dataDefaultCurrency.push(getRow[0]);
        this.changeIcon = false;
        Swal.fire({
          title: "Tambah item berhasil!",
          icon: "info",
          showCloseButton: true,
        });
      }
      else{
        Swal.fire({
          title: "Item lebih dari 3!",
          icon: "error",
          showCloseButton: true,
        });
      }
      // console.log('add data');
    }

    console.log(this.dataDefaultCurrency, updatedData, getRow);

  }

  filteredDate:string = "";

  reFetchAllOverviewHarian = async (date: string) => {

      const responseMacroIndicator = await this.marketUpdateService.fetchDataMacroIndicatorOverview(date);

      this.dataMacroIndicator = responseMacroIndicator;
      this.dataMacroIndicator = this.dataMacroIndicator.d;
      this.listEditMacroIndicator = this.dataMacroIndicator;

      const commoditiesOverview = await this.marketUpdateService.fetchDataCommoditiesOverview(date);

      this.dataCommodities = commoditiesOverview;
      this.dataCommodities = this.dataCommodities.d;
      this.listEditCommodities = this.dataCommodities;

      for(let i=0; i<this.dataCommodities.length; i++){
        this.dataCommodities[i].nilai_rkap = parseFloat(this.dataCommodities[i].nilai_rkap).toLocaleString('en');
        this.dataCommodities[i].nilai_real = parseFloat(this.dataCommodities[i].nilai_real).toLocaleString('en');
        // console.log(parseFloat(this.dataCommodities[i].nilai_rkap).toLocaleString('en'));

      }
      this.dataDefaultCommodities = this.dataCommodities.slice(0,3);

      const currenciesOverview = await this.marketUpdateService.fetchDataKursOverview(date);

      this.dataCurrency = currenciesOverview;
      this.dataCurrency = this.dataCurrency.d;
      for(let i=0; i<this.dataCurrency.length; i++){
        this.dataCurrency[i].nilai_rkap = parseFloat(this.dataCurrency[i].nilai_rkap).toLocaleString('en');
        this.dataCurrency[i].nilai_real = parseFloat(this.dataCurrency[i].nilai_real).toLocaleString('en');
        this.dataCurrency[i].nilai_outlook = parseFloat(this.dataCurrency[i].nilai_outlook).toLocaleString('en');
        // console.log(parseFloat(this.dataCommodities[i].nilai_rkap).toLocaleString('en'));

      }
      this.listEditCurrency = currenciesOverview;
      this.listEditCurrency = this.listEditCurrency.d;
      this.dataDefaultCurrency = this.dataCurrency.slice(0,3);

      const interestRateOverview = await this.marketUpdateService.fetchDataInterestOverview(date);
      this.dataInterestRate = interestRateOverview;
      this.dataInterestRate = this.dataInterestRate.d;
      for(let i=0; i<this.dataInterestRate.length; i++){
        this.dataInterestRate[i].nilai_realisasi = this.dataInterestRate[i].nilai_realisasi.slice(0,4);
      }

      const getKeyTakewaysRes = await this.quillConfig.getKeyTakeways(date)
      console.log(getKeyTakewaysRes);
      this.getKeyTakeways = getKeyTakewaysRes;

      const checkLabel = this.getKeyTakeways.d.hasOwnProperty('label');
      checkLabel ? this.getKeyTakeways = this.getKeyTakeways.d.label : this.getKeyTakeways = "";

      this.fetchFootnotes(date)

  }

  getQuartal: any;
  getYear: any;

  setDefaultQuartalAndYear = () => {
    const formattedDate = moment().format("DD/MM/YYYY");
    this.getYear = formattedDate.slice(8,10)
    const quarter = Math.ceil(parseInt(formattedDate.slice(3, 5)) / 3);
    switch (quarter) {
      case 1:
        this.getQuartal = "1Q";
        break;
      case 2:
        this.getQuartal = "2Q";
        break;
      case 3:
        this.getQuartal = "3Q";
        break;
      case 4:
        this.getQuartal = "4Q";
        break;
    }
  }

  async onDate(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    console.log(selectedDate);

    const formattedDate = moment(event.value).format("DD/MM/YYYY");
    this.filteredDate = formattedDate;
    this.getYear = formattedDate.slice(8,10)
    const quarter = Math.ceil(parseInt(formattedDate.slice(3, 5)) / 3);
    switch (quarter) {
      case 1:
        this.getQuartal = "1Q";
        break;
      case 2:
        this.getQuartal = "2Q";
        break;
      case 3:
        this.getQuartal = "3Q";
        break;
      case 4:
        this.getQuartal = "4Q";
        break;
    }

    console.log(formattedDate.slice(3, 5), this.getQuartal);


    // console.log(month);

    try {

      this.reFetchAllOverviewHarian(formattedDate)

    } catch (error) {
      console.log(error);
    }
  }


  quillInnerHTMLFootnote: any[] = [];
  resObject:any;
  fetchFootnotes = async (date:string) => {
    const res = await this.quillConfig.getFootnotes(date);
    this.resObject = res;
    this.quillInnerHTMLFootnote = this.resObject.d;
  }

  fetchMacroIndicator = async () => {
    const responseMacroIndicator = await this.marketUpdateService.fetchDataMacroIndicatorOverview(moment().format('DD/MM/YYYY'));

    this.dataMacroIndicator = responseMacroIndicator;
    this.dataMacroIndicator = this.dataMacroIndicator.d;
    this.listEditMacroIndicator = this.dataMacroIndicator;
  }

  fetchCommodities = async () => {
    const commoditiesOverview = await this.marketUpdateService.fetchDataCommoditiesOverview(moment().format('DD/MM/YYYY'));

    this.dataCommodities = commoditiesOverview;
    this.dataCommodities = this.dataCommodities.d;
    this.listEditCommodities = this.dataCommodities;

    this.dataDefaultCommodities = this.dataCommodities.slice(0,3);
    console.log('cmd', this.dataDefaultCommodities);
  }

  fetchCurrency = async () => {
    const currenciesOverview = await this.marketUpdateService.fetchDataKursOverview(moment().format('DD/MM/YYYY'))

    this.dataCurrency = currenciesOverview;
    this.dataCurrency = this.dataCurrency.d.slice(0,3);
    this.listEditCurrency = currenciesOverview;
    this.listEditCurrency = this.listEditCurrency.d;
  }

  fetchInterestRate = async () => {
    const interestRateOverview = await this.marketUpdateService.fetchDataInterestOverview(moment().format('DD/MM/YYYY'));

    this.dataInterestRate = interestRateOverview;
    this.dataInterestRate = this.dataInterestRate.d;
  }

  fetchKeyTakeWays = async () => {
    const getKeyTakewaysRes = await this.quillConfig.getKeyTakeways(moment().format('DD/MM/YYYY'))
    console.log(getKeyTakewaysRes);

    this.getKeyTakeways = getKeyTakewaysRes;

    const checkLabel = this.getKeyTakeways.d.hasOwnProperty('label');
    checkLabel ? this.getKeyTakeways = this.getKeyTakeways.d.label : this.getKeyTakeways = ""
  }

  date:string = moment().format('DD/MM/YYYY');
  async ngOnInit(): Promise<void> {
    try {

      this.fetchMacroIndicator();
      this.fetchCommodities();
      this.fetchCurrency();
      this.fetchInterestRate();
      this.fetchKeyTakeWays();
      this.fetchFootnotes(this.date);

      this.setDefaultQuartalAndYear();
    }
    catch(err){
      console.log(err);
    }
  }

  ngAfterViewInit() {
      const elementKeyTakeways = this.keyTakeways.nativeElement;
      const elementFootnote = this.footnote.nativeElement;
      // const elementMention = this.Mention.nativeElement;

      this.quillTakeways = this.quillConfig.initializeQuillKeyTakeways(elementKeyTakeways);
      this.quillFootnote = this.quillConfig.initializeQuillFootnote(elementFootnote);
      // this.mentionQuill = this.quillConfig.initializeQuillMention(elementMention)

      // if(this.excelMacroIndicator != undefined){
      //   for(let i=0;i<this.excelMacroIndicator.length; i++){
      //     for(let j=0; j<this.excelMacroIndicator[i].length; j++){
      //       console.log(this.excelMacroIndicator[i][j]);
      //     }
      //   }
      // }
      // else{
      //   console.log('no excel data');
      // }

  }

  quillContent!: any;
  quillInnerHTML: any;

  statusKeytakeways: any;
  async transformYourHtmlKeyTakeways(htmlTextWithStyle: any) {
    const innerHTML = this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
    this.quillInnerHTML = innerHTML;
    const data = {
      label: this.quillInnerHTML.changingThisBreaksApplicationSecurity,
      user_created: 'user',
      dashboard_date: moment(new Date()).format('DD/MM/YYYY'),
    }

    try {
      const response = await this.quillConfig.sendKeyTakeways(data)
      this.statusKeytakeways = response

      if(this.statusKeytakeways.s === 200){
        const getKeyTakewaysRes = await this.quillConfig.getKeyTakeways(moment(new Date()).format('DD/MM/YYYY'));
        this.getKeyTakeways = getKeyTakewaysRes;

        const checkLabel = this.getKeyTakeways.d.hasOwnProperty('label');
        checkLabel ? this.getKeyTakeways = this.getKeyTakeways.d.label : this.getKeyTakeways = ""

    }
    } catch (error) {
      console.log(error);
    }
  }

  getValueKeyTakeaways() {
    let value = this.quillTakeways.root.innerHTML;
    this.quillContent = value;
    console.log(value);
    this.transformYourHtmlKeyTakeways(this.quillContent)
  }

  quillContentFootnote!: any;
  transformYourHtmlFootnote(htmlTextWithStyle: any) {
    const innerHTML = this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
    console.log(innerHTML);

    this.quillInnerHTMLFootnote.push({
      val : this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle)
    })
    console.log(this.quillInnerHTMLFootnote);
  }

  footNoteState = 'add';
  footNoteData = {
    note: '',
    id:'',
    dashboard_date:'',
    ori_content: ""
  }

  getValueFootnote = async () => {
    let value = this.quillFootnote.root.innerHTML;
    this.quillContentFootnote = value;
    this.transformYourHtmlFootnote(this.quillContentFootnote)
    // this.quillFootnote.deleteText(0,this.quillFootnote.getLength())

    let content = this.quillFootnote.getContents();
    console.log("Konten : ",content);
    this.footNoteData.ori_content = JSON.stringify(content);
    this.footNoteData.note = value;
    this.footNoteData.dashboard_date = (this.filteredDate == '') ? moment().format('DD/MM/YYYY'): this.filteredDate;

    console.log(this.footNoteData, this.footNoteState, moment().format('DD/MM/YYYY'));

    let dateParams = this.filteredDate === '' ? moment().format('DD/MM/YYYY') : this.filteredDate;

    const sendFootnote = await this.quillConfig.sendFootnote(this.footNoteData,this.footNoteState);
    const getFootNoteData = await this.quillConfig.getFootnotes(dateParams);
    this.resObject = getFootNoteData;
    this.quillInnerHTMLFootnote = this.resObject.d


  }

  editFootnote(item:any){
    this.footNoteState = 'edit';
    this.footNoteData.id = item.id
    this.footNoteData.ori_content = JSON.stringify(item.ori_content);
    this.footNoteData.note = item.note;
    this.footNoteData.dashboard_date = (this.filteredDate == '') ? moment().format('DD/MM/YYYY'): this.filteredDate;
    console.log("Footnote : ", item);

    this.openModalFootnote(this.footNoteState)
    this.quillFootnote.setContents(JSON.parse(item.ori_content));
  }

  deleteFootnote = async (item: any) => {
    this.footNoteState= 'delete';

    this.footNoteData.id = item.id
    this.footNoteData.ori_content = JSON.stringify(item.ori_content);
    this.footNoteData.note = item.note;
    this.footNoteData.dashboard_date = (this.filteredDate == '') ? moment().format('DD/MM/YYYY'): this.filteredDate;
    console.log("Footnote : ", item);

    let dateParams = this.filteredDate === '' ? moment().format('DD/MM/YYYY') : this.filteredDate;

    const sendFootnote = await this.quillConfig.sendFootnote(this.footNoteData,this.footNoteState);

    const getFootNoteData = await this.quillConfig.getFootnotes(dateParams);
    this.resObject = getFootNoteData;
    this.quillInnerHTMLFootnote = this.resObject.d
    // this.openModalFootnote()
    // this.quillFootnote.setContents(JSON.parse(item.ori_content));
  }

  linkFootnote = (position:string, tag:string) => {
    alert("Position : "+position+" || Tag : "+tag)
  }

  mentionInnerHTML: any = '';

  getValueMention(){
    const arrData = this.mentionQuill.getContents();
    const value2 = this.mentionQuill.getText();
    const innerHTML = this.mentionQuill.root.innerHTML;
    this.mentionInnerHTML = innerHTML
    console.log(innerHTML);



  }

  onChangeKeyTakeaways(){
    // const _this = this;
    // this.quillTakeways.on('text-change', function(delta, oldDelta, source) {
    //   if (source === 'user') {
    //     _this.getValue()
    //     console.log('dari onchange');
    //   }
    // })
  }

  onChangeFootnote(){
    // const _this = this;
    // this.quillFootnote.on('text-change', function(delta, oldDelta, source) {
    //   if (source === 'user') {
    //     _this.getValueFootnote()
    //   }
    // })
  }

}
