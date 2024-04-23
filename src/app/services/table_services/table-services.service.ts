import { Injectable, AfterViewInit } from '@angular/core';
import { CellComponent, TabulatorFull as Tabulator } from 'tabulator-tables';
import { MarketUpdateService } from '../market_update/market-update.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Server } from 'http';

@Injectable({
  providedIn: 'root'
})
export class TableServicesService {
  tableRkapCadev: any;
  tableOutlookCadev: any;

  constructor(
    private marketUpdateService: MarketUpdateService,
    private router: Router,
  ) {
    // Initialize properties in a method like ngOnInit() or a custom method
    // this.initializeTableData();
    // this.initializeTableDataCurrency()
  }
  // [x: string]: any;
  months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  public responseDelete: any;
  public responseUpdate: any;
  public responseCreate: any;

  public sharedData: any;
  public sharedDataPdb:any;
  public sharedDataInflasi:any;
  public sharedDataPMI:any;
  public sharedDataRetail:any;
  public sharedDataMoneySupply:any;
  public sharedDataCadev:any;
  public shareDataRealisasiPdb:any;
  public shareDataOutlookPdb:any;
  public shareDataRkapPdb:any;
  public shareDataRealisasiInflasi:any;
  public shareDataRkapInflasi:any;
  public shareDataOutlookInflasi:any;
  public shareDataRealisasiPMI:any;
  public shareDataRkapPMI:any;
  public shareDataOutlookPMI:any;
  public shareDataRealisasiRetail:any;
  public shareDataRkapRetail:any;
  public shareDataOutlookRetail:any;
  public shareDataRealisasiMoneySupply:any;
  public shareDataRkapMoneySupply:any;
  public shareDataOutlookMoneySupply:any;
  public shareDataRealisasiCadev:any;
  public shareDataRkapCadev:any;
  public shareDataOutlookCadev:any;
  public shareDataRealisasiCommodities:any;
  public shareDataRkapCommodities:any;
  public shareDataOutlookCommodities:any;
  public shareDataRealisasiKursUsd: any;
  public shareDataRealisasiKurs: any;
  public shareDataRkapKursUsd: any;
  public shareDataOutlookKursUsd: any;
  public shareDataRealisasiInterestRate: any;
  public shareDataRkapInterestRate: any;
  public shareDataOutlookInterestRate: any;
  public shareDataRealisasiBondYieldSBN: any;
  public shareDataRkapBondYieldSBN: any;
  public shareDataOutlookBondYieldSBN: any;
  public shareDataRealisasiBondYieldUsTreasury: any;
  public shareDataRkapBondYieldUsTreasury: any;
  public shareDataOutlookBondYieldUsTreasury: any;
  public shareDataGMTN: any;
  public shareDataHitungFincos: any;

  public testData: any;

  public dataCommodities: any;
  public dataPDB: any;

  public dataInflasi: any;
  public dataInflasiByParams: any;

  public dataPMI: any;
  public dataRetail: any;
  public dataMoneySupply: any;
  public dataDevisa: any;
  public dataRealisasiCadev: any;
  public dataInterestRate: any;
  public dataBondYieldSBN: any;
  public dataBondYieldUST: any;
  public dataKurs: any;

  public dataOutlookPdb:any;

  objectKeys: any;


  setData(data: any) {
    this.sharedData = data;
    // console.log('shared data', this.sharedData);
    // let dataRow = this.sharedData.data.content;
    // console.log(dataRow);
  }

  setDataGMTN(data:any){
    this.shareDataGMTN = data;
  }

  setDataPdb(data:any){
    this.sharedDataPdb = data;
  }
  setDataInflasi(data:any){
    this.sharedDataInflasi = data;;
  }
  setDataPMI(data:any){
    this.sharedDataPMI = data;
  }
  setDataRetail(data:any){
    this.sharedDataRetail = data;
  }
  setDataMoneySupply(data:any){
    this.sharedDataMoneySupply = data;
    console.log(data);
  }
  setDataCadev(data:any){
    this.sharedDataCadev = data;
  }
  setDataRealisasiPdb(data:any){
    this.shareDataRealisasiPdb = data;
  }
  setDataOutlookPdb(data:any){
    this.shareDataOutlookPdb = data;
  }
  setDataRkapPdb(data:any){
    this.shareDataRkapPdb = data;
  }
  setDataRealisasiInflasi(data:any){
    this.shareDataRealisasiInflasi = data;
  }
  setDataRkapInflasi(data:any){
    this.shareDataRkapInflasi = data;
  }
  setDataOutlookInflasi(data:any){
    this.shareDataOutlookInflasi = data;
  }
  setDataRealisasiPMI(data:any){
    this.shareDataRealisasiPMI = data;
  }
  setDataRkapPMI(data:any){
    this.shareDataRkapPMI = data;
  }
  setDataOutlookPMI(data:any){
    this.shareDataOutlookPMI = data;
  }
  setDataRealisasiRetail(data:any){
    this.shareDataRealisasiRetail = data;
  }
  setDataRkapRetail(data:any){
    this.shareDataRkapRetail = data;
  }
  setDataOutlookRetail(data:any){
    this.shareDataOutlookRetail = data;
  }
  setDataRealisasiMoneySupply(data:any){
    this.shareDataRealisasiMoneySupply = data;
  }
  setDataRkapMoneySupply(data:any){
    this.shareDataRkapMoneySupply = data;
  }
  setDataOutlookMoneySupply(data:any){
    this.shareDataOutlookMoneySupply = data;
  }
  setDataRealisasiCadev(data:any){
    this.shareDataRealisasiCadev = data;
  }
  setDataRkapCadev(data:any){
    this.shareDataRkapCadev = data;
  }
  setDataOutlookCadev(data:any){
    this.shareDataOutlookCadev = data;
  }
  setDataRealisasiCommodities(data:any){
    this.shareDataRealisasiCommodities = data;
  }
  setDataRkapCommodities(data:any){
    this.shareDataRkapCommodities = data;
  }
  setDataOutlookCommodities(data:any){
    this.shareDataOutlookCommodities = data;
  }
  setDataRealisasiKurs(dataUsd:any){
    this.shareDataRealisasiKurs = dataUsd;
  }
  setDataRkapKursUsd(data:any){
    this.shareDataRkapKursUsd = data;
  }
  setDataOutlookKursUsd(dataUsd:any){
    this.shareDataOutlookKursUsd = dataUsd;
  }
  setDataRealisasiInterestRate(data:any){
    this.shareDataRealisasiInterestRate = data;
  }
  setDataRkapInterestRate(data:any){
    this.shareDataRkapInterestRate = data;
  }
  setDataOutlookInterestRate(data:any){
    this.shareDataOutlookInterestRate = data;
  }
  setDataRealisasiBondYieldSBN(data:any){
    this.shareDataRealisasiBondYieldSBN = data;
  }
  setDataRkapBondYieldSBN(data:any){
    this.shareDataRkapBondYieldSBN = data;
  }
  setDataOutlookBondYieldSBN(data:any){
    this.shareDataOutlookBondYieldSBN = data;
  }
  setDataRealisasiBondYieldUsTreasury(data:any){
    this.shareDataRealisasiBondYieldUsTreasury = data;
  }
  setDataRkapBondYieldUsTreasury(data:any){
    this.shareDataRkapBondYieldUsTreasury = data;
  }
  setDataOutlookBondYieldUsTreasury(data:any){
    this.shareDataOutlookBondYieldUsTreasury = data;
  }

  getDataCommodities(data: any){
    this.dataCommodities = data;
    // console.log('data commodities', this.dataCommodities);
  }
  getDataPDB(data: any){
    this.dataPDB = data;
    // console.log('data pdb', this.dataPDB);
  }
  getDataInflasi(data: any){
    this.dataInflasi = data;
    // console.log('data inflasi', this.dataInflasi);
  }

  getDataPMI(data: any){
    this.dataPMI = data;
    // console.log('data PMI', this.dataPMI);
  }

  getDataRetail(data: any){
    this.dataRetail = data;
    // console.log('data retail', this.dataRetail);

  }

  getDataMoneySupply(data: any){
    this.dataMoneySupply = data;
    // console.log('data money supply', this.dataMoneySupply);
  }

  getDataDevisa(data: any){
    this.dataDevisa = data;
    // console.log('data devisa', this.dataDevisa);
  }
  getDataRealisasiCadev(data: any){
    this.dataRealisasiCadev = data.data;
    // console.log('data devisa', this.dataDevisa);
  }

  getDataInterestRate(data: any){
    this.dataInterestRate = data;
    // console.log('data interest', this.dataInterestRate);
  }

  getDataBondYield(dataSBN: any, dataUST: any){
    this.dataBondYieldSBN = dataSBN;
    this.dataBondYieldUST = dataUST;
    // console.log(key);
    // this.dataBondYieldSBN.push(key)
    // console.log(this.dataBondYieldSBN);

    // for(let i=0; i<10; i++){
    //  this.dataBondYieldSBN.push(data.data.content[i])
    // }

    // this.dataBondYieldSBN.push(key)

    // console.log(this.dataBondYieldSBN.length - 1);
    // let keys = Object.keys(this.dataBondYieldSBN)
    // console.log('data interest', this.dataBondYieldSBN);
  }

  getDataKurs(data: any){
    this.dataKurs = data;
    // console.log('data kurs', this.dataKurs);
  }

  getData() {
    return this.sharedData;
  }

  dataDetail: any;
  dataDetailRealisasi: any;
  dataDetailRKAP: any;
  dataDetailOutlook: any;

  getDetailData(dataDetail: any[], dataRealisasiDetail: any[], _dataRKAPDetail : any[], _dataOutlookDetail: any[]){
    // console.log(dataDetail, dataRealisasiDetail);

    this.dataDetail = dataDetail;
    this.dataDetailRealisasi = dataRealisasiDetail
  }

  customBottomCalc(_values: any, _data: any, _calcParams: any) {
    return "Total";
  }

  //Data Currency
  tableDataCurrency: any;
  tableCurrency: any;
  tableCurrencyDetail: any;
  tableRealisasiCurrencyRate:any;
  tableRkapCurrencyRate:any;
  tableOutlookCurrencyRate:any

  //Data Interest Rate
  tableInterestRate: any;
  tableRealisasiInterestRate: any;
  tableRkapInterestRate: any;
  tableOutlookInterestRate: any;
  //Data Bond Yield
  tableBondYield: any;
  tableBondYieldSBN: any;
  tableBondYieldUST: any;
  tableDataBondYield: any;

  tableRealisasiBondYield:any;
  tableOutlookBondYield:any;
  tableRKAPBondYield:any;

  tableRealisasiUSTreasury:any;
  tableRKAPUSTreasury:any;
  tableOutlookUSTreasury:any;

  //Data Commodities
  tableCommodities: any;
  tableDataCommodities: any;
  tableRealisasiComodities: any;
  tableRKAPComodities:any;
  tableOutlookComodities:any;

  //Table PDB
  tablePDB: any;
  tableDataPDB: any;

  //Table Inflasi
  tableInflasi: any;
  tableDataInflasi: any;

  //Table Money Supply
  tableMoneySupply: any;
  tableDataMoneySupply: any;

  //Table PMI
  tablePMI: any;
  tableDataPMI: any;

  //Table Retail
  tableRetail: any;
  tableDataRetail: any;

  //Table Foreign Exchange
  tableForeignExchange: any;
  tableDataForeignExchange: any;

  //table Realisasi Cadangan Devisa
  tableRealisasiCadev: any;

  //Table Realisasi
  tableRealisasi: any;
  tableDataRealisasi: any;

  //Table RKAP
  tableDataRKAP: any;
  tableRKAP: any;

  //Table Outlook
  tableDataOutlook: any;
  tableOutlook: any;

  tableSHLAgreementNonPenerusanPinjaman: any;
  tableDataSHLAgreementNonPenerusanPinjaman: any;

  tableSHLAgreementPenerusanPinjaman: any;
  tableDataSHLAgreementPenerusanPinjaman: any;

  tableDetailProyekSHLAgreement: any;
  tableDataDetailProyekSHLAgreement: any;

  tableDetailDokumenSHLAgreement: any;
  tableDataDetailDokumenSHLAgreement: any;

  tableDokumenAPSHLAgreement: any;
  tableDataDokumenAPSHLAgreement: any;

  tableSHLWithdrawal: any;
  tableDataSHLWithdrawal: any;

  tableDetailWithdrawal: any;
  tableDataDetailWithdrawal: any;

  tableSHLSchedule: any;
  tableDataSHLSchedule: any;

  tableSHLScheduleDetailPreview: any;
  tableDataSHLScheduleDetailPreview: any;

  tableSHLScheduleCreatePreview: any;
  tableDataSHLScheduleCreatePreview: any;

  tableSHLMonitoring: any;
  tableDataSHLMonitoring: any;

  tableSHLMonitoringDetail: any;
  tableDataSHLMonitoringDetail: any;

  tableSHLMonitoringLoanDetail: any;
  tableDataSHLMonitoringLoanDetail: any;

  //table import findebt
  tableDataImport:any;
  tableImport:any;
  //table data import laporan cashflow
  tableDataImportCashFlow:any;
  tableImportCashFlow:any;
  //table data import laporan laba rugi
  tableDataImportLabaRugi:any;
  tableImportLabaRugi:any;
  //table data import laporan dokumen lain
  tableDataImportDokumenLain:any;
  tableImportDokumenLain:any;
  //table Financial Report
  tableDataFinancialReport:any;
  tableFinancialReport:any;

  tabelPreview: any;
  dataTabelPreview: any;

  fileExcel!: File;

  tableDataCreateLiabiliteis:any;
  tableCreateLiabiilities:any;

  tableDetailPdb:any;
  tableRealisasiPdb:any;
  tableRkapPdb:any;
  tableOutlookPdb:any;

  tableDataDetailInflasi:any;
  tableRealisasiInflasi:any;
  tableRkapInflasi:any;
  tableDataOutlookInflasi:any;
  tableOutlookInflasi:any;

  tableDetailPmi:any;
  tableRealisasiPmi:any;
  tableRkapPmi:any;
  tableOutlookPmi:any;

  tableDetailRetail:any;
  tableRealisasiRetail:any;
  tableRkapRetail:any;
  tableOutlookRetail:any;

  tableDetailMoneySupply:any;
  tableRealisasiMoneySupply:any;
  tableRkapMoneySupply:any;
  tableOutlookMoneySupply:any;

  tableDetailForeignExchange:any;
  tableRealisasiForeignExchange:any;
  tableRkapForeignExchange:any;
  tableOutlookForeignExchange:any;

  tableDataFincost:any;
  tableFincost:any;

  editCheck = function(cell:any){
    //cell - the cell component for the editable cell

    //get row data
    var data = cell.getData();
    var value = cell.getValue();


    // console.log([
    //   data.mata_uang,
    //   value
    // ]);

    return data;
     // only allow the name cell to be edited if the age is over 18
  }

  initializeTableData(arrayDate: any[], arrayYear: any[]) {
    console.log('tanggal', arrayDate);
    console.log('tahun', arrayYear);

    //// console.log(arrayDate[0][0].h_min_30);

    // console.log(today.slice(-2, 10));
    const formattedYear = moment().format('DD/MM/YYYY').slice(-2, 10);

    this.tableCurrency = new Tabulator(".table-currency", {
      height: "100%",
      data:this.dataKurs,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"kode", headerHozAlign:"center", hozAlign:'left', headerSort:false},
          {//create column group
            title:"Exchange Rate",
            columns:[
            {title:`RKAP <br/> ${formattedYear}`, field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
            {title:arrayDate.length > 0 && arrayDate[0].length > 0 ? arrayDate[0][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
            {title:arrayDate.length > 0 && arrayDate[0].length > 0 ? arrayDate[0][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
            {title:arrayDate.length > 0 && arrayDate[0].length > 0 ? arrayDate[0][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
            {title:arrayDate.length > 0 && arrayDate[0].length > 0 ? arrayDate[0][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
          ],
          headerHozAlign:"center"
          },
        {title:"Change <br/>RKAP %", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change 1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });

    this.tableInterestRate = new Tabulator(".table-interest", {
      // height:205,
      data:this.dataInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"keterangan", headerHozAlign:"center", hozAlign:'left', headerSort:false},
        {title:`RKAP <br/> ${formattedYear}`, field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate.length > 0 && arrayDate[1].length > 0  ? arrayDate[1][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate.length > 0 && arrayDate[1].length > 0  ? arrayDate[1][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate.length > 0 && arrayDate[1].length > 0  ? arrayDate[1][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate.length > 0 && arrayDate[1].length > 0  ? arrayDate[1][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
        {title:"Change <br/>RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change 1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });

    this.tableBondYieldSBN = new Tabulator(".table-bondYieldSBN", {
      // height:205,
      data:this.dataBondYieldSBN,
      layout:"fitColumns",
      columns:[
        {title:"Tenor", field:"tenor", headerHozAlign:"center", hozAlign:'left', headerSort:false},
          {//create column group
          title:"Yield",
          columns:[
          {title: arrayDate.length > 0 && arrayDate[2].length > 0 ? arrayDate[2][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
          {title: arrayDate.length > 0 && arrayDate[2].length > 0 ? arrayDate[2][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
          {title: arrayDate.length > 0 && arrayDate[2].length > 0 ? arrayDate[2][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
          {title: arrayDate.length > 0 && arrayDate[2].length > 0 ? arrayDate[2][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
          ],
          headerHozAlign:"center"
        },
        {title:"Yield Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Yield Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Yield Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });

    this.tableBondYieldUST = new Tabulator(".table-bondYieldUST", {
      // height:205,
      data:this.dataBondYieldUST,
      layout:"fitColumns",
      columns:[
        {title:"Tenor", field:"tenor", headerHozAlign:"center", hozAlign:'left', headerSort:false},
        {//create column group
          title:"Yield",
          columns:[
            {title: arrayDate.length > 0 && arrayDate[2].length > 0 ? arrayDate[2][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
            {title: arrayDate.length > 0 && arrayDate[2].length > 0 ? arrayDate[2][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
            {title: arrayDate.length > 0 && arrayDate[2].length > 0 ? arrayDate[2][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
            {title: arrayDate.length > 0 && arrayDate[2].length > 0 ? arrayDate[2][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
          ],
          headerHozAlign:"center"
        },
        {title:"Yield Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Yield Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Yield Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });

    this.tableCommodities = new Tabulator(".table-commodities", {
    // height:205,
    data:this.dataCommodities,
    layout:"fitColumns",
    columns:[
      {title:"Commodities", field:"keterangan", headerHozAlign:"center", hozAlign:'left', headerSort:false},
      {//create column group
        title:"Price",
        columns:[
        {title:`RKAP <br/> ${formattedYear}`, field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate.length > 0 && arrayDate[3].length > 0 ? arrayDate[3][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate.length > 0 && arrayDate[3].length > 0 ? arrayDate[3][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate.length > 0 && arrayDate[3].length > 0 ? arrayDate[3][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate.length > 0 && arrayDate[3].length > 0 ? arrayDate[3][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
        ],
        headerHozAlign:"center"
      },
    {title:"Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change <br/>1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change Dari RKAP %", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    ],
  });

    this.tablePDB = new Tabulator(".table-pdb", {
      // height:20,
      height: "635px",
      data:this.dataPDB,
      layout:"fitColumns",
      columnMoved:function(column, _columns){
        alert("The user has moved column: " + column.getField()); //display the columns field name
    },
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true, minWidth: 200},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, minWidth: 100},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, minWidth: 100},
      ],
    });

    this.tableInflasi = new Tabulator(".table-inflasi", {
      // height:205,
      // height:"555px",
      data:this.dataInflasi,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });

    this.tableMoneySupply = new Tabulator(".table-moneySupply", {
      // height:205,
      // height:"555px",
      data:this.dataMoneySupply,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });

    this.tableForeignExchange = new Tabulator(".table-foreignExchange", {
      // height:205,
      // height:"555px",
      data:this.dataDevisa,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });

    // this.tableRealisasiCadev = new Tabulator(".table-realisasiCadev", {
    //   height:"555px",
    //   data:this.dataRealisasiCadev,
    //   layout:"fitColumns",
    //   columns:[
    //     {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
    //     {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
    //   ],
    // });

    this.tablePMI = new Tabulator(".table-pmi", {
      // height:205,
      // height:"555px",
      data:this.dataPMI,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });

    this.tableRetail = new Tabulator(".table-retail", {
      // height:205,
      // height:"555px",
      data:this.dataRetail,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });
  }

  initializeTableDataUsTreasury(arrayDate:any[]){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    const formattedYear = moment().format('DD/MM/YYYY').slice(-2, 10);

    this.tableBondYieldUST = new Tabulator(".table-bondYieldUST", {
        // height:205,
        data:this.dataBondYieldUST,
      layout:"fitColumns",
      columns:[
        {title:"Tenor", field:"tenor", headerHozAlign:"center", hozAlign:'left', headerSort:false},
        {//create column group
          title:"Yield",
          columns:[
            {title: arrayDate[0].length > 0 ? arrayDate[0][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
            {title: arrayDate[0].length > 0 ? arrayDate[0][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
            {title: arrayDate[0].length > 0 ? arrayDate[0][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
            {title: arrayDate[0].length > 0 ? arrayDate[0][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
          ],
          headerHozAlign:"center"
        },
        {title:"Yield Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Yield Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Yield Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });

    this.tableRealisasiUSTreasury = new Tabulator(".table-realisasi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRealisasiBondYieldUsTreasury,
      layout:"fitColumns",
      columns:[
        {title:"Group", field:"grup", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor: "input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"5Yr", field:"yr5", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"7Yr", field:"yr7", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"10Yr", field:"yr10", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"15Yr", field:"yr15", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"30Yr", field:"yr30", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiUsTreasury, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiUsTreasury, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiUsTreasury, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });

    this.tableRKAPUSTreasury = new Tabulator(".table-rkap", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapBondYieldUsTreasury,
      layout:"fitColumns",
      columns:[
        {title:"Group", field:"mtu", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor: "input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapUsTreasury, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapUsTreasury, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapUsTreasury, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
    ],
    });

    this.tableOutlookUSTreasury = new Tabulator(".table-Outlook", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookBondYieldUsTreasury,
      layout:"fitColumns",
      columns:[
        {title:"Group", field:"grup", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor: "input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"5Yr", field:"yr5", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"7Yr", field:"yr7", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"10Yr", field:"yr10", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"15Yr", field:"yr15", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"20Yr", field:"yr20", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"25Yr", field:"yr25", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"30Yr", field:"yr30", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookUsTreasury, headerSort:false,headerHozAlign:"center", resizable:false},
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookUsTreasury, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookUsTreasury, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    })
  }

  initializeTableDataPDB(){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    //realisasi
    this.tableRealisasiPdb = new Tabulator(".table-realisasiPdb", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRealisasiPdb,
      layout:"fitColumns",
      columnMoved:function(column, _columns){
        alert("The user has moved column: " + column.getField()); //display the columns field name
    },
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left',editable:this.isRowSelected, editor: "input", headerSort:false},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center',editable:this.isRowSelected, editor: "number", headerSort:false},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerSort:false, headerHozAlign:"center", hozAlign:'center', resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:'center',  resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiPdb, headerSort:false, headerHozAlign:"center", hozAlign:'center',  resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonPdb, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiPdb, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    //Rkap
    this.tableRkapPdb = new Tabulator(".table-rkapPdb", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapPdb,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left',editable:this.isRowSelected, editor:"input", headerSort:false},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center',editable:this.isRowSelected, editor:"input", headerSort:false},
        {title:"Nilai", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapPdb, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapPdb, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapPdb, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableOutlookPdb = new Tabulator(".table-outlookPdb", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookPdb,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input", headerSort:false},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor: "number", headerSort:false},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookPdb, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPdb, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
    ],
    });
  }

  initializeTableDataInflasi(arrayYear: any[]){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    const formattedYear = moment().format('DD/MM/YYYY').slice(-2, 10);

    this.tableInflasi = new Tabulator(".table-detailInflasi", {
      // height:205,
      height:"555px",
      data:this.sharedDataInflasi,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });
    this.tableRealisasiInflasi = new Tabulator(".table-ralisasiInflasi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRealisasiInflasi,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableRkapInflasi = new Tabulator(".table-rkapInflasi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapInflasi,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Nilai", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableOutlookInflasi = new Tabulator(".table-otulookInflasi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookInflasi,
      layout:"fitColumns",
      columns:[
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookInflasi, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataPMI(arrayYear: any[]){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    const formattedYear = moment().format('DD/MM/YYYY').slice(-2, 10);
    this.tableDetailPmi = new Tabulator(".table-detailPmi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.sharedDataPMI,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });
    this.tableRealisasiPmi = new Tabulator(".table-ralisasiPmi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRealisasiPMI,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiPMI, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiPMI, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiPMI, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableRkapPmi = new Tabulator(".table-rkapPmi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapPMI,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapPMI, headerSort:false,  headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapPMI, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapPMI, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableOutlookPmi = new Tabulator(".table-outlookPmi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookPMI,
      layout:"fitColumns",
      columns:[
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookPMI, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPMI, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPMI, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataRetail(){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    this.tableDetailRetail = new Tabulator(".table-detailRetail", {
      // height:205,
      height:"555px",
      data:this.sharedDataRetail,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:"2021", field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2022", field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2023", field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2024", field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });
    this.tableRealisasiRetail = new Tabulator(".table-ralisasiRetail", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRealisasiRetail,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', editor: "input", editable:this.isRowSelected},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambha", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ]
    });
    this.tableRkapRetail = new Tabulator(".table-rkapRetail", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapRetail,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', editor: "input", editable:this.isRowSelected},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableOutlookRetail = new Tabulator(".table-outlookRetail", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookRetail,
      layout:"fitColumns",
      columns:[
        {title:"bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookRetail, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataMoneySupply( arrayYear: any[]){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }

    this.tableDetailMoneySupply = new Tabulator(".table-detailMoneySupply", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.sharedDataMoneySupply,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
      });
    this.tableRealisasiMoneySupply = new Tabulator(".table-realisasiMoneySupply", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRealisasiMoneySupply,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', editor: "input",editable:this.isRowSelected,},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Nilai", field:"triliun_beredar", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false}
      ],
    });
    this.tableRkapMoneySupply = new Tabulator(".table-rkapMoneySupply", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapMoneySupply,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', editor: "input", editable:this.isRowSelected,},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false}
      ],
    });
    this.tableOutlookMoneySupply = new Tabulator(".table-outlookMoneySupply", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookMoneySupply,
      layout:"fitColumns",
      columns:[
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', editor: "input", editable:this.isRowSelected,},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Nilai", field:"triliun_beredar", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookMoneySupply, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false}
      ],
    });
  }

  initializeTableDataForeignExchange(arrayYear: any[]){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }

    this.tableDetailForeignExchange = new Tabulator(".table-detailForeignExchange", {
      pagination:true, //enable.
      paginationSize:20,
      height:"555px",
      data:this.sharedDataCadev,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:arrayYear.length > 0 ? arrayYear[3] : '', field:"year_min_3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[2] : '', field:"year_min_2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[1] : '', field:"year_min_1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:arrayYear.length > 0 ? arrayYear[0] : '', field:"year_min_0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });
    this.tableRealisasiForeignExchange = new Tabulator(".table-realisasiForeignExchange", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRealisasiCadev,
      layout:"fitColumns",
      columns:[
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editable:this.isRowSelected, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "number"},
        {title:"Nilai", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton ,headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiCadev, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiCadev, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiCadev, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false}
      ],
    });
    this.tableRkapForeignExchange = new Tabulator(".table-rkapForeignExchange", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapCadev,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input"},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapCadev, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapCadev, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapCadev, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false}
      ],
    });
    this.tableOutlookForeignExchange = new Tabulator(".table-outlookForeignExchange", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookCadev,
      layout:"fitColumns",
      columns:[
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "number"},
        {title:"Nilai", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookCadev, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookCadev, headerSort:false, resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookCadev, headerSort:false, resizable:false,visible:false}
      ],
    });
  }

  initializeTableDataCurrency(arrayDate: any[]){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    const formattedYear = moment().format('DD/MM/YYYY').slice(-2, 10);


    this.tableCurrencyDetail = new Tabulator(".table-currencyDetail", {
      height: "335px",
      data:this.dataKurs,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"kode", headerHozAlign:"center", hozAlign:'left', headerSort:false},
          {//create column group
            title:"Exchange Rate",
            columns:[
            {title:`RKAP <br/> ${formattedYear}`, field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
            {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
            {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
            {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
            {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
          ],
          headerHozAlign:"center"
          },
        {title:"Change <br/>RKAP %", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change 1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });

  this.tableRealisasiCurrencyRate = new Tabulator(".table-realisasi", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.shareDataRealisasiKurs,
    layout:"fitColumns",
    columns: [
      {title:"Mata Uang", field:"mata_uang", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerFilter:"list", headerFilterParams:{valuesLookup:"all", clearable:true}},
      {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor:"input"},
      {title:"Nilai", field:"nilai", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor:"number"},
      {title:"Kurs", field:"kurs", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor:"number"},
      {title:"Action", headerHozAlign:"center", columns:[
        {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
        {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
        {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiCurrency, headerSort:false,headerHozAlign:"center", hozAlign:"center", resizable:false},
      ]},
      {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtoRealisasiCurrency, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiCurrency, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
    ]
  });

  this.tableRkapCurrencyRate = new Tabulator(".table-RKAP", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.shareDataRkapKursUsd,
    layout:"fitColumns",
    columns:[
      {title:"Mata Uang", field:"mtu", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor:"input", headerFilter:"list", headerFilterParams:{valuesLookup:"all", clearable:true}},
      {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
      {title:"tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
      {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
        {title:"Action", headerHozAlign:"center", columns:[
        {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
        {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
        {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapCurrencyRate, headerSort:false,headerHozAlign:"center", hozAlign:"center", resizable:false},
      ]},
      {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapCurrency, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapCurrency, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
    ],
  });

  this.tableOutlookCurrencyRate = new Tabulator(".table-outlook", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.shareDataOutlookKursUsd,
    layout:"fitColumns",
    columns:[
      {title:"Mata Uang", field:"mata_uang", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerFilter:"list", headerFilterParams:{valuesLookup:"all", clearable:true}},
      {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor:"input"},
      {
        title: "Nilai",
        formatter: function(cell) {
          const currency = cell.getRow().getData().mata_uang;
          const fieldValue = currency === 'USD' ? 'nilai' : 'kurs';
          return cell.getRow().getData()[fieldValue];
        },
        headerHozAlign: "center",
        hozAlign: 'center',
        },
      // {title:"Kurs", field:"kurs", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
      {title:"Action", headerHozAlign:"center", columns:[
        {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
        {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
        {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookCurrencyRate, headerSort:false,headerHozAlign:"center", hozAlign:"center", resizable:false},
      ]},
      {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookCurrency, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookCurrency, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
  });

  //tabledataoutlook2 get data from API

  //   this.tableDataOutlook2 = [
  //     {idMataKurs:1, mataUang:"18 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  //     {idMataKurs:2, mataUang:"17 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  //     {idMataKurs:3, mataUang:"16 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  //     {idMataKurs:4, mataUang:"15 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  //     {idMataKurs:5, mataUang:"14 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  //     {idMataKurs:6, mataUang:"13 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  //     {idMataKurs:7, mataUang:"12 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  //     {idMataKurs:8, mataUang:"11 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  //     {idMataKurs:9, mataUang:"10 Oktober 2023", beli: "15.731", jual: "4.90", timeCreated: "4.90"},
  // ]

  // this.tableOutlook2 = new Tabulator(".table-outlook2", {
  //   // height:205,
  //   data:this.sharedData,
  //   layout:"fitColumns",
  //   columns:[
  //     {title:"Mata Uang", field:"mataUang", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
  //     {title:"Jual", field:"beli", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  //     {title:"Beli", field:"jual", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  //     {title:"TimeStamp", field:"timeCreated", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  //   ],
  // });
  }

  initializeTableDataInterestRate(arrayDate: any[]){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    const formattedYear = moment().format('DD/MM/YYYY').slice(-2, 10);

    this.tableInterestRate = new Tabulator(".table-interest", {
      pagination: true,
      paginationSize:20,
      data:this.dataInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"keterangan", headerHozAlign:"center", hozAlign:'left', headerSort:false},
        {title:`RKAP <br/> ${formattedYear}`, field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
        {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
        {title:"Change <br/>RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change 1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });
    this.tableRealisasiInterestRate = new Tabulator(".table-realisasiInterestRate", {
      pagination: true,
      paginationSize:20,
      data:this.shareDataRealisasiInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"kode", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor: "input", headerFilter:"list", headerFilterParams:{valuesLookup:"all", clearable:true}, width:130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
        {title: "Nilai", field:"rate", headerHozAlign: "center", hozAlign: 'center', editable: this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiInterestRate, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonInterestRate, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiInterestRate, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableRkapInterestRate = new Tabulator(".table-rkapInterestRate", {
        pagination: true,
        paginationSize:20,
        data:this.shareDataRkapInterestRate,
        layout:"fitColumns",
        columns:[
        {title:"Rates", field:"mtu", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false, headerFilter:"list", headerFilterParams:{valuesLookup:"all", clearable:true}, width:130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
        {title:"Nilai", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
          {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"tambahButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapInterestRate, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false},
          ]},
          {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
          {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapInterestRate, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
          {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
          {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapInterestRate, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        ],
    });
    this.tableOutlookInterestRate = new Tabulator(".table-outlookInterestRate", {
      pagination: true,
      paginationSize:20,
      data:this.shareDataOutlookInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"kode", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input",headerFilterParams:{valuesLookup:"all", clearable:true}, minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title: "Nilai", field:"rate", headerHozAlign: "center", hozAlign: 'center', editable: this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookInterestRate, headerSort:false,headerHozAlign:"center", hozAlign:"center", resizable:false},
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookInterestRate, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookInterestRate, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataCommodities(arrayDate:any[]){

    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    const formattedYear = moment().format('DD/MM/YYYY').slice(-2, 10);

    this.tableCommodities = new Tabulator(".table-commoditiesDetail", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.dataCommodities,
    layout:"fitColumns",
    columns:[
      {title:"Commodities", field:"kode", headerHozAlign:"center", hozAlign:'left', headerSort:false},
      {//create column group
        title:"Price",
        columns:[
          {title:`RKAP <br/> ${formattedYear}`, field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
          {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
          {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
          {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
          {title:arrayDate[0].length > 0 ? arrayDate[0][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
          ],
        headerHozAlign:"center"
      },
    {title:"Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change <br/>1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change Dari RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    ],
    });

    this.tableRealisasiComodities = new Tabulator(".table-realisasi", {
    data:this.shareDataRealisasiCommodities,
    pagination:true, //enable.
    paginationSize:15,
    layout:"fitColumns",
      columns:[
        {title:"Commodities", field:"kode", headerHozAlign:"left", hozAlign:'left', headerFilter:"list", headerFilterParams:{valuesLookup:"all", clearable:true}, editor: "input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiCommodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton", formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiCommodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton", formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton", formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiCommodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableRKAPComodities = new Tabulator(".table-RKAP", {
      // height: 500,
      pagination:true, //enable.
      paginationSize:15,
      data:this.shareDataRkapCommodities,
      layout:"fitColumns",
        columns:[
          {title:"Commodities", field:"mtu", headerHozAlign:"left", hozAlign:'left', headerFilter:"list", headerFilterParams:{valuesLookup:"all", clearable:true}, editor: "input", minWidth: 130},
          {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
          {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
          {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
          {title:"Action", headerHozAlign:"center", columns:[
            {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
            {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
            {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapmmodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
          ]},
          {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
          {title:"Simpan", field:"SaveButton", formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapCommodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
          {title:"Cancel", field:"CancelAddButton", formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
          {title:"Tambah", field:"SaveAddButton", formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapCommodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableOutlookComodities = new Tabulator(".table-Outlook", {
      // height:500,
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookCommodities,
      layout:"fitColumns",
      columns:[
        {title:"Commodities", field:"kode_item", headerHozAlign:"left", hozAlign:'left', headerFilter:"list", headerFilterParams:{valuesLookup:"all", clearable:true}, editor: "input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Keterangan", field:"keterangan", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookCommodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton", formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookCommodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton", formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton", formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookCommodities, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
  }

 initializeTableDataBondYield(arrayDate:any[]){
    const addBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/plus-square.svg'></span>";
    }
    const editBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/pencil-square.svg'></span>";
    }
    const saveBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const saveAddBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/floppy.svg'></span>";
    }
    const cancelBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/x-square-fill.svg'></span>";
    }
    const deleteBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><img src='assets/icon/trash.svg'</span>";
    }
    moment().format('DD/MM/YYYY').slice(-2, 10);
    this.tableBondYieldUST = new Tabulator(".table-bondYieldDetail", {
      // height:205,
      data:this.dataBondYieldSBN,
      layout:"fitColumns",
      columns:[
        {title:"Tenor", field:"tenor", headerHozAlign:"center", hozAlign:'left', headerSort:false},
          {//create column group
          title:"Yield",
          columns:[
          {title: arrayDate[0].length > 0 ? arrayDate[0][0].h_min_30 : '', field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
          {title: arrayDate[0].length > 0 ? arrayDate[0][0].h_min_7 : '', field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
          {title: arrayDate[0].length > 0 ? arrayDate[0][0].h_min_1 : '', field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
          {title: arrayDate[0].length > 0 ? arrayDate[0][0].h_min_0 : '', field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
          ],
          headerHozAlign:"center"
        },
        {title:"Yield Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Yield Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Yield Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });

    this.tableRealisasiBondYield = new Tabulator(".table-realisasi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRealisasiBondYieldSBN,
      layout:"fitColumns",
      columns:[
        {title:"Group", field:"grup", headerHozAlign:"left", hozAlign:'left', headerSort:false,editable:this.isRowSelected, editor:"input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"5Yr", field:"yr5", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"7Yr", field:"yr7", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"10Yr", field:"yr10", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"15Yr", field:"yr15", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"20Yr", field:"yr20", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"25Yr", field:"yr25", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"30Yr", field:"yr30", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center" ,hozAlign:"center", headerSort:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:"center"},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRealisasiSBN, headerSort:false, headerHozAlign:"center", hozAlign:"center"},
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiSBN, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiSBN, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableRKAPBondYield = new Tabulator(".table-rkap", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapBondYieldSBN,
      layout:"fitColumns",
      columns:[
        {title:"Group", field:"mtu", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor: "input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonRkapSBN, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapSBN, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapSBN, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
    this.tableOutlookBondYield = new Tabulator(".table-Outlook", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookBondYieldSBN,
      layout:"fitColumns",
      columns:[
        {title:"Group", field:"grup", headerHozAlign:"left", hozAlign:'left', headerSort:false, editable:this.isRowSelected, editor: "input", minWidth: 130},
          {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
          {title:"yr5", field:"yr5", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
          {title:"yr7", field:"yr7", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
          {title:"yr10", field:"yr10", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
          {title:"yr15", field:"yr15", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
          {title:"yr20", field:"yr20", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
          {title:"yr25", field:"yr25", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
          {title:"yr30", field:"yr30", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_deleteButtonOutlookSBN, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false}
        ]},
        {title:"Cancel", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Simpan", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookSBN, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Cancel", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
        {title:"Tambah", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookSBN, headerSort:false, headerHozAlign:"center", hozAlign:"center", resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataFindebt(){

    this.tableDataImport = [
      {id:1, name:"20230911-SIMLOAN STREAM 3 FINDEBTCOV-RENKEU.xls", tgl_upload:"22 September 2022", periode:"2018", dibuatOleh:"Staf SHL", Approval:"Manager", status:"Dalam Proses"},
      {id:2, name:"20230911-SIMLOAN STREAM 3 FINDEBTCOV-RENKEU.xls", tgl_upload:"22 September 2022", periode:"2019", dibuatOleh:"Staf SHL", Approval:"Manager", status:"Approved"},
      {id:3, name:"20230911-SIMLOAN STREAM 3 FINDEBTCOV-RENKEU.xls", tgl_upload:"22 September 2022", periode:"2020", dibuatOleh:"Staf SHL", Approval:"Manager", status:"Approved"},
      {id:4, name:"20230911-SIMLOAN STREAM 3 FINDEBTCOV-RENKEU.xls", tgl_upload:"22 September 2022", periode:"2021", dibuatOleh:"Staf SHL", Approval:"Manager", status:"Approved"},
      {id:5, name:"20230911-SIMLOAN STREAM 3 FINDEBTCOV-RENKEU.xls", tgl_upload:"22 September 2022", periode:"2022", dibuatOleh:"Staf SHL", Approval:"Manager", status:"Approved"},
      {id:6, name:"20230911-SIMLOAN STREAM 3 FINDEBTCOV-RENKEU.xls", tgl_upload:"22 September 2022", periode:"2023", dibuatOleh:"Staf SHL", Approval:"Manager", status:"Approved"},
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableImport = new Tabulator(".table-import", {
      // height:205,
      data:this.tableDataImport,
      layout:"fitColumns",
      columns:[
        {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"File", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:true, width:350},
        {title:"Tgl upload", field:"tgl_upload", hozAlign:"center", headerHozAlign:"center", width:200},
        {title:"Periode", field:"periode", hozAlign:"center", headerHozAlign:"center"},
        {title:"Dibuat Oleh", field:"dibuatOleh", hozAlign:"center", headerHozAlign:"center"},
        {title:"Approval", field:"Approval", hozAlign:"center", headerHozAlign:"center"},
        {title:"Status", field:"status", hozAlign:"center", headerHozAlign:"center"},
        {title: "Action", formatter:actionBtn, width:150,hozAlign:"center", headerHozAlign:"center"},
      ],
    });
  }

  initializetableImportCashFlow(){
    this.tableDataImportCashFlow = [
      {id:1, name:"BI7DRR", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"FED RATE", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"AVG SOFR", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"JIBOR", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];
    this.tableImportCashFlow = new Tabulator(".table-importCashFlow", {
      // height:205,
      data:this.tableDataImportCashFlow,
      layout:"fitColumns",
      columns:[
        {title:"File", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:true},
        {title:"Tgl Dibuat", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Dibuat Oleh", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Approval", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      ],
    });
  }

  initializetableImportLabaRugi(){
    this.tableDataImportLabaRugi = [
      {id:1, name:"BI7DRR", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"FED RATE", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"AVG SOFR", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"JIBOR", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];
    this.tableImportLabaRugi = new Tabulator(".table-importLabaRugi", {
      // height:205,
      data:this.tableDataImportLabaRugi,
      layout:"fitColumns",
      columns:[
        {title:"File", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:true},
        {title:"Tgl Dibuat", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Dibuat Oleh", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Approval", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      ],
    });
  }

  initializetableImportDokumenLain(){
    this.tableDataImportDokumenLain = [
      {id:1, name:"BI7DRR", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"FED RATE", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"AVG SOFR", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"JIBOR", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];
    this.tableImportDokumenLain = new Tabulator(".table-importDokumenLain", {
      // height:205,
      data:this.tableDataImportDokumenLain,
      layout:"fitColumns",
      columns:[
        {title:"File", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:true},
        {title:"Tgl Dibuat", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Dibuat Oleh", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Approval", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      ],
    });
  }

  initializeTableFinancialReport(){
    this.tableDataFinancialReport = [
      {id:1, name:"DSCR Basis Laporan Arus Kas", 2018:"1.23", 2019:"48.91", 2020:"48.91", 2021:"48.91", 2022:"48.91", 2023:"48.91"},
      {id:2, name:"DSCR Basis Laporan Laba Rugi", 2018:"1.23", 2019:"48.91", 2020:"48.91", 2021:"48.91", 2022:"48.91", 2023:"48.91"},
      {id:3, name:"CICR", 2018:"1.23", 2019:"48.91", 2020:"48.91", 2021:"48.91", 2022:"48.91", 2023:"1.23"},
      {id:4, name:"DER", 2018:"1.23", 2019:"48.91", 2020:"48.91", 2021:"48.91", 2022:"48.91", 2023:"1.24"},
    ];

    const infoBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-info-circle'></i></i></button>";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableFinancialReport = new Tabulator(".table-financialReport",{
      data:this.tableDataFinancialReport,
      layout:'fitColumns',
      columns:[
        {title:"",formatter:checkBox, width:50, hozAlign:"center", headerHozAlign:"center"},
        {title:"Financial Debt Covenant",field:"name",headerHozAlign:"center", tooltip:'true', hozAlign:'left', width:"300"},
        {title:"Realization",
        columns:[
          {title:"2018", field:"2018", hozAlign:"center", headerHozAlign:"center"},
          {title:"2019", field:"2019", hozAlign:"center", headerHozAlign:"center"},
          {title:"2020", field:"2020", hozAlign:"center", headerHozAlign:"center"},
          {title:"2021", field:"2021", hozAlign:"center", headerHozAlign:"center"},
          {title:"2022", field:"2022", hozAlign:"center", headerHozAlign:"center"},
        ], headerHozAlign:"center"
        },
        {title:"RKAP",
        columns:[
          {title:"2023", field:"2023", hozAlign:"center", headerHozAlign:"center"},
        ],headerHozAlign:"center"
        },
        {title:"Outlook",
        columns:[
          {title:"2023", field:"2023", hozAlign:"center", headerHozAlign:"center"},
        ],headerHozAlign:"center"
        },
      ]
    })
  }

  tablePreview(lastMonth: string, lastWeek: string, yesterday: string, today: string, objectKeys:any){
    this.tabelPreview = new Tabulator(".table-preview", {
      // height:205,
      data:this.dataTabelPreview,
      layout:"fitColumns",
      columns:[
        {title:objectKeys[1], field:objectKeys[1], headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Exchange Rate",
        columns:[
        {title:lastMonth, field:objectKeys[3], hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:lastWeek, field:objectKeys[3], hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:yesterday, field:objectKeys[3], hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:today, field:objectKeys[3], hozAlign:"center", headerHozAlign:"center", editor: "input"},
        ],
        headerHozAlign:"center"
    },
    {title:"Yield Change <br/>MoM %", field:objectKeys[2], headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Yield Change <br/>WoW %", field:objectKeys[2], headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Yield Change <br/>1 Day %", field:objectKeys[2], headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  ],
  });
  }

  initializeTableDataFincost(){
    const detailBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><i class='bi bi-eye'></i></span>";
    }
    const dropdownBtn = function(_cell: any, _formatterParams:any, _onRendered:any){
      return "<span><i class='bi bi-three-dots'></i></i></span>";
    }

    this.tableDataFincost = [
      {id:"01", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"Fincost", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
      {id:"02", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"Fincost", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
      {id:"03", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"GMNT", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
      {id:"04", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"GMNT", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
      {id:"05", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"Fincost", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
      {id:"06", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"GMNT", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
      {id:"07", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"Fincost", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
      {id:"08", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"GMNT", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
      {id:"09", createDate:"26/02/2024", createBy:"Ceptary Tyas", status:"Approved", type:"GMNT", bank:"STANDAR CHARTERED", tgl_indicative:"26/02/2024", approver:"Cecep Gorbachev", modifDate:"26/02/2024", notes:"abcdefhgij", revisionDate:"26/02/2024"},
    ]

    this.tableFincost = new Tabulator ('.tableDataFincost',{
      data:this.tableDataFincost,
      layout:"fitDataStretch",
      resizableRows:true,
      // rowContextMenu: rowMenu, //add context menu to rows
      columns:[
        {title:"ID", field:"id", hozAlign:"center", headerHozAlign:"center"},
        {title:"Creation Date", field:"createDate", hozAlign:"right", sorter:"number", headerHozAlign:"center"},
        {title:"Create By", field:"createBy", hozAlign:"center", headerHozAlign:"center"},
        {title:"Status", field:"status", hozAlign:"center", headerHozAlign:"center"},
        {title:"Type", field:"type", hozAlign:"center", headerHozAlign:"center"},
        {title:"Bank", field:"bank", hozAlign:"center", headerHozAlign:"center"},
        {title:"Tanggal Indicative", field:"tgl_indicative", hozAlign:"center", headerHozAlign:"center"},
        {title:"Approver", field:"approver", hozAlign:"center", headerHozAlign:"center"},
        {title:"Modification Date", field:"modifDate", hozAlign:"center", headerHozAlign:"center"},
        {title:"Notes", field:"notes", hozAlign:"center", headerHozAlign:"center"},
        {title:"RevisionDate", field:"revisionDate", hozAlign:"center", headerHozAlign:"center"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"", field:"", formatter:detailBtn, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"", field:"", formatter:dropdownBtn, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
        ]},
      ],
    })
  }

  initializeTableCreateLiabilities(){

    this.tableDataCreateLiabiliteis = [
      {id:1, create_date:"17/04/2023", create_by:"John smith", status:"Approved", approver:"VP-Elena", mod_date:"-", notes:"-", action:""},
      {id:2, create_date:"17/04/2023", create_by:"John smith", status:"Rejected", approver:"VP-Elena", mod_date:"-", notes:"-", action:""},
      {id:3, create_date:"17/04/2023", create_by:"John smith", status:"Revision needed", approver:"VP-Elena", mod_date:"-", notes:"-", action:""},
      {id:4, create_date:"17/04/2023", create_by:"John smith", status:"Waiting", approver:"VP-Elena", mod_date:"-", notes:"-", action:""},
      {id:5, create_date:"17/04/2023", create_by:"John smith", status:"Draft", approver:"VP-Elena", mod_date:"-", notes:"-", action:""},
      {id:6, create_date:"17/04/2023", create_by:"John smith", status:"Expired", approver:"VP-Elena", mod_date:"-", notes:"-", action:""},
      {id:7, create_date:"17/04/2023", create_by:"John smith", status:"Approved", approver:"VP-Elena", mod_date:"-", notes:"-", action:""},
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn'><i class='bi bi-pencil-square'></i></button> <button type='button' class='btn'><i class='bi bi-three-dots'></i></button>";
    }

    this.tableCreateLiabiilities = new Tabulator(".table-createLiabilities", {
      // height:205,
      data:this.tableDataCreateLiabiliteis,
      layout:"fitColumns",
      columns:[
        {title:"ID", field:"id", width:100, hozAlign:"center", headerHozAlign:"center"},
        {title:"Creation Date", field:"create_date", headerHozAlign:"center", hozAlign:'center', headerSort:true},
        {title:"Created By", field:"create_by", hozAlign:"center", headerHozAlign:"center"},
        {title:"Status", field:"status", hozAlign:"center", headerHozAlign:"center"},
        {title:"Approver", field:"approver", hozAlign:"center", headerHozAlign:"center"},
        {title:"Modification Date", field:"mod_date", hozAlign:"center", headerHozAlign:"center"},
        {title:"Notes", field:"notes",hozAlign:"center", headerHozAlign:"center"},
        {title: "Action", field:"action", formatter:actionBtn, width:200,hozAlign:"center", headerHozAlign:"center", formatterParams:{
          labelField: "action",
          url:"https://icons.getbootstrap.com/",
          target:"_blank"
        }},
      ],
    });
  }

  initializeTableSHLAgreementNonPenerusanPinjaman(){

    this.tableDataSHLAgreementNonPenerusanPinjaman = [
      {
        id:1, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"1", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:2, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:3, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:4, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:5, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:6, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button>";
    }

    const actionBtnAmandement = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-pencil-square'></i></button";
    }

    const actionBtnDelete = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-trash'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    const navigateToAmandement = (e: any, cell: any) => {
      console.log(cell.getRow().getData());
      this.router.navigate(['shl_agreement/create_amandement']);
    }

    const deleteRow = () => {
      alert('icon clicked');
    }

    this.tableSHLAgreementNonPenerusanPinjaman = new Tabulator(".table-shlAgreement", {
      // height:205,
      data:this.tableDataSHLAgreementNonPenerusanPinjaman,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Anak Perusahaan", field:"anak_perusahaan", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:300, frozen: true},
        {title:"SHL Agreement Number", field:"agreement_number", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Agreement Number Anak Perusahaan", field:"agreement_number_anakperusahaan", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Tanggal SHL Agreement", field:"tanggal_dibuat", hozAlign:"left", headerHozAlign:"left", width:200},
        {title:"Deskripsi Proyek", field:"deskripsi", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"SHL Amandement ke-", field:"jumlah_amandement", hozAlign:"left", headerHozAlign:"left", width:150},
        {title:"SHL Amendment Agreement Number", field:"amandement_agreement_number", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Created By", field:"created_by", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Status", field:"status", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Approver", field:"approver", hozAlign:"left", headerHozAlign:"left", width:120},
        // {title: "Action", cellClick:this.getRowData, width:120,hozAlign:"center", headerHozAlign:"center"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"", formatter:actionBtn, width:70, cellClick:this.getRowData, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"", formatter:actionBtnAmandement, width:70, cellClick:navigateToAmandement, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false},
          {title:"", formatter:actionBtnDelete, width:70, cellClick: deleteRow, headerHozAlign:"center", hozAlign:"center", headerSort:false, resizable:false}
        ]},
      ],
    });
  }

  initializeTableSHLAgreementPenerusanPinjaman(){

    this.tableDataSHLAgreementPenerusanPinjaman = [
      {
        id:1, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"1", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:2, anak_perusahaan:"PT. PLN Batam", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:3, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:4, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:5, anak_perusahaan:"PT. Pembangkitan Jawa-Bali", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:6, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableSHLAgreementPenerusanPinjaman = new Tabulator(".table-shlAgreementPenerusanPinjaman", {
      // height:205,
      data:this.tableDataSHLAgreementPenerusanPinjaman,

      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Anak Perusahaan", field:"anak_perusahaan", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:300, frozen: true},
        {title:"SHL Agreement Number", field:"agreement_number", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Agreement Number Anak Perusahaan", field:"agreement_number_anakperusahaan", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Tanggal SHL Agreement", field:"tanggal_dibuat", hozAlign:"left", headerHozAlign:"left", width:200},
        {title:"Deskripsi Proyek", field:"deskripsi", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"SHL Amandement ke-", field:"jumlah_amandement", hozAlign:"left", headerHozAlign:"left", width:150},
        {title:"SHL Amendment Agreement Number", field:"amandement_agreement_number", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Created By", field:"created_by", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Status", field:"status", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Approver", field:"approver", hozAlign:"left", headerHozAlign:"left", width:120},
        {title: "Action", formatter:actionBtn, cellClick:this.getRowData, width:120,hozAlign:"center", headerHozAlign:"center"},
      ],
    });
  }

  initializeTableDetailProyekSHLAgreement(){
    this.tableDataDetailProyekSHLAgreement = [
      {
        id:1, nama_proyek:"Nama Proyek", total_pagu:"0.00", berakhir_perjanjian:"22/02/2024", availability_periode:"22/02/2024", grace_periode: "22/02/2024", tenor:"0", repayment_periode: '22/04/2024', pembayaran_pokok_pinjaman:'0.00', interest_type: 'Floating / Fixed', description: 'Description'
      },
      {
        id:2, nama_proyek:"Nama Proyek", total_pagu:"0.00", berakhir_perjanjian:"22/02/2024", availability_periode:"22/02/2024", grace_periode: "22/02/2024", tenor:"0", repayment_periode: '22/04/2024', pembayaran_pokok_pinjaman:'0.00', interest_type: 'Floating / Fixed', description: 'Description'
      },
    ];

    this.tableDetailProyekSHLAgreement = new Tabulator(".table-namaProyek", {
      // height:205,
      data:this.tableDataDetailProyekSHLAgreement,
      layout:"fitData",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Nama Proyek", field:"nama_proyek", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:220, frozen: true},
        {title:"Total Pagu", field:"total_pagu", hozAlign:"left", headerHozAlign:"left"},
        {title:"Availability Period", field:"availability_periode", hozAlign:"left", headerHozAlign:"left"},
        {title:"Grace Period", field:"grace_periode", hozAlign:"left", headerHozAlign:"left"},
        {title:"Tenor", field:"tenor", hozAlign:"left", headerHozAlign:"left"},
        {title:"Repayment Periode", field:"repayment_periode", hozAlign:"left", headerHozAlign:"left"},
        {title:"Pembayaran Pokok Pinjaman", field:"pembayaran_pokok_pinjaman", hozAlign:"left", headerHozAlign:"left"},
        {title:"Interest Type", field:"interest_type", hozAlign:"left", headerHozAlign:"left"},
        {title:"Description", field:"description", hozAlign:"left", headerHozAlign:"left"},
      ],
    });
  }

  initializeTableDetailDokumenSHLAgreement(){
    this.tableDataDetailDokumenSHLAgreement = [
      {
        id:1, nama_dokumen:"Nama Dokumen", size_dokumen: "0.00 Kb/Mb/Gb", created_by: "User"
      },
      {
        id:2, nama_dokumen:"Nama Dokumen", size_dokumen: "0.00 Kb/Mb/Gb", created_by: "User"
      },
    ];

    this.tableDetailDokumenSHLAgreement = new Tabulator(".table-namaDokumenPLN", {
      // height:205,
      data:this.tableDataDetailDokumenSHLAgreement,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Nama Dokumen", field:"nama_dokumen", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:220, frozen: true},
        {title:"Size Dokumen", field:"size_dokumen", hozAlign:"left", headerHozAlign:"left"},
        {title:"Created By", field:"created_by", hozAlign:"left", headerHozAlign:"left"},
        // {title:"Grace Period", field:"grace_periode", hozAlign:"left", headerHozAlign:"left"},
      ],
    });
  }

  tableDetailDokumenAnakPerusahaanSHL(){
    this.tableDataDokumenAPSHLAgreement = [
      {
        id:1, nama_dokumen:"RKAP", size_dokumen: "0.00 Kb/Mb/Gb", created_by: "User"
      },
      {
        id:2, nama_dokumen:"KEPDIR (Keputusan Direksi)", size_dokumen: "0.00 Kb/Mb/Gb", created_by: "User"
      },
      {
        id:3, nama_dokumen:"Pakta Integritas", size_dokumen: "0.00 Kb/Mb/Gb", created_by: "User"
      },
      {
        id:4, nama_dokumen:"Surat Rekomendasi Dekom", size_dokumen: "0.00 Kb/Mb/Gb", created_by: "User"
      },
    ];

    this.tableDokumenAPSHLAgreement = new Tabulator(".table-namaDokumenAP", {
      // height:205,
      data:this.tableDataDokumenAPSHLAgreement,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Nama Dokumen", field:"nama_dokumen", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:220, frozen: true},
        {title:"Size Dokumen", field:"size_dokumen", hozAlign:"left", headerHozAlign:"left"},
        {title:"Created By", field:"created_by", hozAlign:"left", headerHozAlign:"left"},
        // {title:"Grace Period", field:"grace_periode", hozAlign:"left", headerHozAlign:"left"},
      ],
    });
  }

  initializeTableDetailWithdrawal1(){
    this.tableDataDetailWithdrawal = [
      {
        id:1, withdrawal:1, nominal_withdrawal: 25, tanggal_withdrawal: "DD/MM/YYY", berakhir_availability: "DD/MM/YYY"
      },
      {
        id:2, withdrawal:2, nominal_withdrawal: 25, tanggal_withdrawal: "DD/MM/YYY", berakhir_availability: "DD/MM/YYY"
      },
    ];

    this.tableDetailWithdrawal = new Tabulator(".table-withdrawalDetail", {
      // height:205,
      data:this.tableDataDetailWithdrawal,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Withdrawal", field:"withdrawal", headerHozAlign:"left", hozAlign:'left', headerSort:true, bottomCalc: this.customBottomCalc},
        {title:"Nominal Withdrawal", field:"nominal_withdrawal", hozAlign:"left", headerHozAlign:"left", bottomCalc: "sum" ,bottomCalcParams:{precision:1}},
        {title:"Tanggal Withdrawal", field:"tanggal_withdrawal", hozAlign:"left", headerHozAlign:"left"},
        {title:"Berakhirnya Availablitily Period", field:"berakhir_availability", hozAlign:"left", headerHozAlign:"left"},
      ],
    });
  }

  initializeTableDetailWithdrawal2(){
    this.tableDataDetailWithdrawal = [
      {
        id:1, withdrawal:1, nominal_withdrawal: 25, tanggal_withdrawal: "DD/MM/YYY", berakhir_availability: "DD/MM/YYY"
      },
      {
        id:2, withdrawal:2, nominal_withdrawal: 25, tanggal_withdrawal: "DD/MM/YYY", berakhir_availability: "DD/MM/YYY"
      },
    ];

    this.tableDetailWithdrawal = new Tabulator(".table-withdrawalDetail2", {
      // height:205,
      data:this.tableDataDetailWithdrawal,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Withdrawal", field:"withdrawal", headerHozAlign:"left", hozAlign:'left', headerSort:true, bottomCalc: this.customBottomCalc},
        {title:"Nominal Withdrawal", field:"nominal_withdrawal", hozAlign:"left", headerHozAlign:"left", bottomCalc: "sum" ,bottomCalcParams:{precision:1}},
        {title:"Tanggal Withdrawal", field:"tanggal_withdrawal", hozAlign:"left", headerHozAlign:"left"},
        {title:"Berakhirnya Availablitily Period", field:"berakhir_availability", hozAlign:"left", headerHozAlign:"left"},
      ],
    });
  }

  initializeTableDetailWithdrawalPreview(){
    this.tableDataDetailWithdrawal = [
      {
        id:1, withdrawal:1, nominal_withdrawal: 25, tanggal_withdrawal: "DD/MM/YYY", berakhir_availability: "DD/MM/YYY"
      },
      {
        id:2, withdrawal:2, nominal_withdrawal: 25, tanggal_withdrawal: "DD/MM/YYY", berakhir_availability: "DD/MM/YYY"
      },
      {
        id:3, withdrawal:3, nominal_withdrawal: 25, tanggal_withdrawal: "DD/MM/YYY", berakhir_availability: "DD/MM/YYY"
      },
    ];

    this.tableDetailWithdrawal = new Tabulator(".table-withdrawalDetailPreview", {
      // height:205,
      data:this.tableDataDetailWithdrawal,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Withdrawal", field:"withdrawal", headerHozAlign:"left", hozAlign:'left', headerSort:true, bottomCalc: this.customBottomCalc},
        {title:"Nominal Withdrawal", field:"nominal_withdrawal", hozAlign:"left", headerHozAlign:"left", bottomCalc: "sum" ,bottomCalcParams:{precision:1}},
        {title:"Tanggal Withdrawal", field:"tanggal_withdrawal", hozAlign:"left", headerHozAlign:"left"},
        {title:"Berakhirnya Availablitily Period", field:"berakhir_availability", hozAlign:"left", headerHozAlign:"left"},
      ],
    });
  }

  initializeTableSHLSchedule(){

    this.tableDataSHLSchedule = [
      {
        id:1, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022"
      },
      {
        id:2, anak_perusahaan:"PT. PLN Batam", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022"
      },
      {
        id:3, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022"
      },
      {
        id:4, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023"
      },
      {
        id:5, anak_perusahaan:"PT. Pembangkitan Jawa-Bali", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023"
      },
      {
        id:6, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023"
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableSHLSchedule = new Tabulator(".table-shlSchedule", {
      // height:"500px",
      data:this.tableDataSHLSchedule,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Anak Perusahaan", field:"anak_perusahaan", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:300, frozen: true},
        {title:"SHL Agreement Number", field:"agreement_number", hozAlign:"left", headerHozAlign:"left"},
        {title:"SHL Agreement Number Anak Perusahaan", field:"agreement_number_anakperusahaan", hozAlign:"left", headerHozAlign:"left"},
        {title: "Action", formatter:actionBtn,
        //  cellClick:this.getRowData,
        hozAlign:"center", headerHozAlign:"center"},
      ],
    });
  }

  initializeTableSHLScheduleDetailPreview(){

    this.tableDataSHLScheduleDetailPreview = [
      {
        id:1, "withdrawal": 1, "nominal_penarikan": 500000000, "tanggal_penarikan": "12/12/2023", "end_availability_period": "DD/MM/YYYY"
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableSHLScheduleDetailPreview = new Tabulator(".table-shlScheduleDetailPreview", {
      // height:"500px",
      data:this.tableDataSHLScheduleDetailPreview,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Withdrawal", field:"withdrawal", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:300, frozen: true},
        {title:"Nomial Penarikan", field:"nominal_penarikan", hozAlign:"left", headerHozAlign:"left"},
        {title:"Tanggal Penarikan", field:"tanggal_penarikan", hozAlign:"left", headerHozAlign:"left"},
        {title:"Berakhirnya Availbility Period", field:"end_availability_period", hozAlign:"left", headerHozAlign:"left"},
      ],
    });
  }

  initializeTableSHLScheduleCreatePreview(){

    this.tableDataSHLScheduleCreatePreview = [
      {
        id:1, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
      {
        id:2, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
      {
        id:3, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
      {
        id:4, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
      {
        id:5, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
      {
        id:6, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
      {
        id:7, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
      {
        id:8, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
      {
        id:9, "tanggal_jatuh_tempo": "DD/MM/YYYY", "uraian": "Pokok & Bunga", "hari": 100, "masa": 0.50, "saldo": 100000000, "pokok": 40000000, "biaya_bunga": 0.00, "total_kewajiban": 0.00
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableSHLScheduleCreatePreview = new Tabulator(".table-shlScheduleCreatePreview", {
      // height:"500px",
      data:this.tableDataSHLScheduleCreatePreview,
      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"No", field:"id", width:50, frozen: true, headerSort:false},
        {title:"Tanggal Jatuh Tempo", field:"tanggal_jatuh_tempo", headerSort:false},
        {title:"Uraian", field:"uraian",width:200, headerSort:false},
        {title:"Hari", field:"hari", width:100, headerSort:false},
        {title:"Masa", field:"masa", width:100, headerSort:false},
        {title:"Saldo", field:"saldo", headerSort:false},
        {title:"Pokok", field:"pokok", headerSort:false},
        {title:"Biaya Bunga", field:"biaya_bunga", headerSort:false},
        {title:"Total Kewajiban", field:"total_kewajiban", headerSort:false},
      ],
    });
  }

  initializeTableSHLWithdrawal(){

    this.tableDataSHLWithdrawal = [
      {
        id:1, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jenis_shl: "Non Penerusan Pinjaman", jumlah_amandement:"1", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:2, anak_perusahaan:"PT. PLN Batam", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jenis_shl: "Non Penerusan Pinjaman", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:3, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jenis_shl: "Non Penerusan Pinjaman", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:4, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jenis_shl: "Non Penerusan Pinjaman", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:5, anak_perusahaan:"PT. Pembangkitan Jawa-Bali", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jenis_shl: "Non Penerusan Pinjaman", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
      {
        id:6, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", tanggal_dibuat:"12/02/2024", deskripsi:"deskripsi", jumlah_amandement:"Belum Ada", amandement_agreement_number: '0268.PJ/530/DIR/2014', created_by:'User', status: 'Approved', approver: 'Manager'
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableSHLWithdrawal = new Tabulator(".table-shlWithdrawal", {
      // height:205,
      data:this.tableDataSHLWithdrawal,

      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Anak Perusahaan", field:"anak_perusahaan", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:300, frozen: true},
        {title:"SHL Agreement Number", field:"agreement_number", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"SHL Agreement Number Anak Perusahaan", field:"agreement_number_anakperusahaan", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Tanggal SHL Agreement", field:"tanggal_dibuat", hozAlign:"left", headerHozAlign:"left", width:200},
        {title:"Deskripsi Proyek", field:"deskripsi", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Jenis Shareholder Loan", field:"jenis_shl", hozAlign:"left", headerHozAlign:"left", width:250},
        {title:"SHL Amandement ke-", field:"jumlah_amandement", hozAlign:"left", headerHozAlign:"left", width:150},
        {title:"SHL Amendment Agreement Number", field:"amandement_agreement_number", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Created By", field:"created_by", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Status", field:"status", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Approver", field:"approver", hozAlign:"left", headerHozAlign:"left", width:120},
        {title: "Action", formatter:actionBtn,
        //  cellClick:this.getRowData,
         width:120,hozAlign:"center", headerHozAlign:"center"},
      ],
    });
  }

  initializeTableSHLMonitoring(){

    const getRowDataMonitoring = (e:any, cell: any) => {
      console.log(cell.getRow().getData());
      localStorage.setItem('detailSHLMonitoring', JSON.stringify(cell.getRow().getData()))

      this.router.navigate(['shl_monitoring/details', cell.getRow().getData().id]);
    }

    this.tableDataSHLMonitoring = [
      {
        id:1, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022" , jumlah_proyek:"1", status: "Approved"
      },
      {
        id:2, anak_perusahaan:"PT. PLN Batam", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", jumlah_proyek:"1", status: "Approved"
      },
      {
        id:3, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2022", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2022", jumlah_proyek:"1", status: "Approved"
      },
      {
        id:4, anak_perusahaan:"PT. Pelayaran Bahtera Adhiguna", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", jumlah_proyek:"1", status: "Approved"
      },
      {
        id:5, anak_perusahaan:"PT. Pembangkitan Jawa-Bali", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", jumlah_proyek:"1", status: "Approved"
      },
      {
        id:6, anak_perusahaan:"PT. Indonesia Comnet Plus", agreement_number:"1620.Pj/KEU.01.09/F01070100/2023", agreement_number_anakperusahaan:"12305148/PJ/01/PST/2023", jumlah_proyek:"1", status: "Approved"
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableSHLMonitoring = new Tabulator(".table-shlMonitoring", {
      // height:205,
      data:this.tableDataSHLMonitoring,

      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Anak Perusahaan", field:"anak_perusahaan", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:300, frozen: true},
        {title:"SHL Agreement Number", field:"agreement_number", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"SHL Agreement Number Anak Perusahaan", field:"agreement_number_anakperusahaan", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Jumlah Proyek", field:"jumlah_proyek", hozAlign:"left", headerHozAlign:"left", width:180},
        {title:"Status", field:"status", hozAlign:"left", headerHozAlign:"left", width:180},
        {title: "Action", formatter:actionBtn, cellClick:getRowDataMonitoring,
         width:120,hozAlign:"center", headerHozAlign:"center"},
      ],
    });
  }

  initializeTableSHLMonitoringDetail(){

    const getRowDataMonitoring = (e:any, cell: any) => {
      console.log(cell.getRow().getData());
      const getFirstDetail = localStorage.getItem('detailSHLMonitoring');
      let dataFirstDetail;

      if(getFirstDetail){
        dataFirstDetail = JSON.parse(getFirstDetail)
      }

      if (dataFirstDetail && dataFirstDetail.id && cell.getRow().getData().id) {
        localStorage.setItem('detailSHLMonitoring1', JSON.stringify(cell.getRow().getData()));
        this.router.navigate(['shl_monitoring/details', dataFirstDetail.id, 'loan_monitoring', cell.getRow().getData().id]);
      } else {
        console.error('data tidak ditemukan');
      }
    }

    this.tableDataSHLMonitoringDetail = [
      {
        id:1, nama_proyek:"Nama Proyek", nomor_proyek:"Nomor Proyek",mata_uang: "USD", pagu:0.00, tenor:0.00, terakhir_pembayaran:"DD/MM/YYYY", status: "Lunas"
      },
      {
        id:2, nama_proyek:"Nama Proyek", nomor_proyek:"Nomor Proyek", mata_uang: "USD", pagu:0.00, tenor:0.00, terakhir_pembayaran:"DD/MM/YYYY", status: "Lunas"
      },
      {
        id:3, nama_proyek:"Nama Proyek", nomor_proyek:"Nomor Proyek", mata_uang: "USD", pagu:0.00, tenor:0.00, terakhir_pembayaran:"DD/MM/YYYY", status: "Lunas"
      },
      {
        id:4, nama_proyek:"Nama Proyek", nomor_proyek:"Nomor Proyek", mata_uang: "USD", pagu:0.00, tenor:0.00, terakhir_pembayaran:"DD/MM/YYYY", status: "Lunas"
      },
      {
        id:5, nama_proyek:"Nama Proyek", nomor_proyek:"Nomor Proyek", mata_uang: "USD", pagu:0.00, tenor:0.00, terakhir_pembayaran:"DD/MM/YYYY", status: "Lunas"
      },
      {
        id:6, nama_proyek:"Nama Proyek", nomor_proyek:"Nomor Proyek", mata_uang: "USD", pagu:0.00, tenor:0.00, terakhir_pembayaran:"DD/MM/YYYY", status: "Lunas"
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableSHLMonitoringDetail= new Tabulator(".table-shlMonitoringDetail", {
      // height:205,
      data:this.tableDataSHLMonitoringDetail,

      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Nama Proyek", field:"nama_proyek", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:300, frozen: true},
        {title:"Nomor Proyek", field:"nomor_proyek", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Mata Uang", field:"mata_uang", hozAlign:"left", headerHozAlign:"left", width:300},
        {title:"Pagu", field:"pagu", hozAlign:"left", headerHozAlign:"left", width:180},
        {title:"Tenor", field:"tenor", hozAlign:"left", headerHozAlign:"left", width:180},
        {title:"Terakhir Pembayaran", field:"terakhir_pembayaran", hozAlign:"left", headerHozAlign:"left", width:180},
        {title:"Status", field:"status", hozAlign:"left", headerHozAlign:"left", width:180},
        {title: "Action", formatter:actionBtn, cellClick:getRowDataMonitoring,
         width:120,hozAlign:"center", headerHozAlign:"center"},
      ],
    });
  }

  initializeTableLoanDetail(){
    this.tableDataSHLMonitoringLoanDetail = [
      {
        id:1, tanggal_jatuh_tempo:"20-Dec-24", uraian:"Pokok % Bunga", hari: "447", masa:"1.24", saldo:"700.000.000.000", pokok:"41.200.000.000", biaya_bunga: "0.00", total_kewajiban:'0.00', yang_diterima_pln: '0.00', pot_pph_23: '0.00', skb: "0.00", tanggal_diterima: "DD/MM/YYYY", telat: "0", status:"Belum Dibayar"
      },
      {
        id:2, tanggal_jatuh_tempo:"20-Dec-24", uraian:"Pokok % Bunga", hari: "447", masa:"1.24", saldo:"700.000.000.000", pokok:"41.200.000.000", biaya_bunga: "0.00", total_kewajiban:'0.00', yang_diterima_pln: '0.00', pot_pph_23: '0.00', skb: "0.00", tanggal_diterima: "DD/MM/YYYY", telat: "0", status:"Belum Dibayar"
      },
      {
        id:3, tanggal_jatuh_tempo:"20-Dec-24", uraian:"Pokok % Bunga", hari: "447", masa:"1.24", saldo:"700.000.000.000", pokok:"41.200.000.000", biaya_bunga: "0.00", total_kewajiban:'0.00', yang_diterima_pln: '0.00', pot_pph_23: '0.00', skb: "0.00", tanggal_diterima: "DD/MM/YYYY", telat: "0", status:"Belum Dibayar"
      },
      {
        id:4, tanggal_jatuh_tempo:"20-Dec-24", uraian:"Pokok % Bunga", hari: "447", masa:"1.24", saldo:"700.000.000.000", pokok:"41.200.000.000", biaya_bunga: "0.00", total_kewajiban:'0.00', yang_diterima_pln: '0.00', pot_pph_23: '0.00', skb: "0.00", tanggal_diterima: "DD/MM/YYYY", telat: "0", status:"Belum Dibayar"
      },
      {
        id:5, tanggal_jatuh_tempo:"20-Dec-24", uraian:"Pokok % Bunga", hari: "447", masa:"1.24", saldo:"700.000.000.000", pokok:"41.200.000.000", biaya_bunga: "0.00", total_kewajiban:'0.00', yang_diterima_pln: '0.00', pot_pph_23: '0.00', skb: "0.00", tanggal_diterima: "DD/MM/YYYY", telat: "0", status:"Belum Dibayar"
      },
      {
        id:6, tanggal_jatuh_tempo:"20-Dec-24", uraian:"Pokok % Bunga", hari: "447", masa:"1.24", saldo:"700.000.000.000", pokok:"41.200.000.000", biaya_bunga: "0.00", total_kewajiban:'0.00', yang_diterima_pln: '0.00', pot_pph_23: '0.00', skb: "0.00", tanggal_diterima: "DD/MM/YYYY", telat: "0", status:"Belum Dibayar"
      },
    ];

    const actionBtn = function(_cell: any, _formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
    }

    this.tableSHLMonitoringLoanDetail = new Tabulator(".table-SHLMonitoringLoanDetail", {
      // height:205,
      data:this.tableDataSHLMonitoringLoanDetail,

      layout:"fitColumns",
      columns:[
        // {title:"",formatter:checkBox,width:50,hozAlign:"center", headerHozAlign:"center"},
        {title:"Tanggal Jatuh Tempo", field:"tanggal_jatuh_tempo", headerHozAlign:"left", hozAlign:'left', headerSort:true, width:200, frozen: true},
        {title:"Uraian", field:"uraian", hozAlign:"left", headerHozAlign:"left", width:200},
        {title:"Hari", field:"hari", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Masa", field:"masa", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Saldo", field:"saldo", hozAlign:"left", headerHozAlign:"left", width:250},
        {title:"Pokok", field:"pokok", hozAlign:"left", headerHozAlign:"left", width:250},
        {title:"Biaya Bunga (7.68%)", field:"biaya_bunga", hozAlign:"left", headerHozAlign:"left", width:150},
        {title:"Total Kewajiban", field:"total_kewajiban", hozAlign:"left", headerHozAlign:"left", width:150},
        {title:"Yang Diterima PLN", field:"yang_diterima_pln", hozAlign:"left", headerHozAlign:"left", width:150},
        {title:"Pot. Pph 23", field:"pot_pph_23", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"SKB", field:"skb", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Tanggal Diterima", field:"tanggal_diterima", hozAlign:"left", headerHozAlign:"left", width:150},
        {title:"Telat", field:"telat", hozAlign:"left", headerHozAlign:"left", width:120},
        {title:"Status Pembayaran", field:"status", hozAlign:"left", headerHozAlign:"left", width:200},
        {title: "Action", formatter:actionBtn, width:120,hozAlign:"center", headerHozAlign:"center"},
      ],
    });
  }


  editTitle(){
    const tabel = this.tableCommodities;
    tabel.updateColumnDefinition("mata_uang", {title:`${this.dataCommodities[0].mata_uang}`});
  }

  public updateTabelInflasi(data:any){
    const tabel = this.tableInflasi;
    tabel.replaceData(data.data);
  }

  public updateTabelPMI(data:any){
    const tabel = this.tablePMI;
    tabel.replaceData(data);
  }

  public updateTabelRetail(data:any){
    const tabel = this.tableRetail;
    tabel.replaceData(data);
  }

  public updateTabelMoneySuply(data:any){
    const tabel = this.tableMoneySupply;
    tabel.replaceData(data);
  }

  public updateTabelDevisa(data:any){
    const tabel = this.tableForeignExchange;
    tabel.replaceData(data);
  }

  public updateTableOutlookPDB (data:any){
    const table = this.tableOutlookPdb;
    table.replaceData(data);
  }
  //replace data table detail
  public replaceTableRealisasiPDB (data:any){
    const table = this.tableRealisasiPdb;
    if ( data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortedData = data.data.content.sort((a: { tahun: any; quartal: any; }, b: { tahun: any; quartal: any; }) => {
        const aYear = a.tahun;
        const bYear = b.tahun;
        if (aYear === bYear) {
          const aQuartal = a.quartal;
          const bQuartal = b.quartal;
          if (aQuartal === bQuartal) {
            return 0;
          }
          if (aQuartal === "Q4") {
            return -1;
          }
          if (bQuartal === "Q4") {
            return 1;
          }
          if (aQuartal === "Q3") {
            return -1;
          }
          if (bQuartal === "Q3") {
            return 1;
          }
          if (aQuartal === "Q2") {
            return -1;
          }
          if (bQuartal === "Q2") {
            return 1;
          }
          if (aQuartal === "Q1") {
            return 1;
          }
          return -1;
        }
        if (aYear > bYear) {
          return -1;
        }
        return 1;
      });
      sortedData.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortedData);
    }
  }
  public replaceTableRkapPDB (data:any){
    const table = this.tableRkapPdb;
    if ( data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const filterData = data.data.content.filter((item:any)=>{
        return item.mtu ==="PDB"
      }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
        const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
        const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      });
      filterData.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(filterData);
    }
  }
  public replaceTableOutlookPDB (data:any){
    const table = this.tableOutlookPdb;
    if( data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortedData = data.data.content.sort((a: { tahun: any; quartal: any; }, b: { tahun: any; quartal: any; }) => {
        const aYear = a.tahun;
        const bYear = b.tahun;
        if (aYear === bYear) {
          const aQuartal = a.quartal;
          const bQuartal = b.quartal;
          if (aQuartal === bQuartal) {
            return 0;
          }
          if (aQuartal === "Q4") {
            return -1;
          }
          if (bQuartal === "Q4") {
            return 1;
          }
          if (aQuartal === "Q3") {
            return -1;
          }
          if (bQuartal === "Q3") {
            return 1;
          }
          if (aQuartal === "Q2") {
            return -1;
          }
          if (bQuartal === "Q2") {
            return 1;
          }
          if (aQuartal === "Q1") {
            return 1;
          }
          return -1;
        }
        if (aYear > bYear) {
          return -1;
        }
        return 1;
      });
      sortedData.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortedData);
    }
  }
  public replaceTableRealisasiInflasi (data:any){
    const table = this.tableRealisasiInflasi;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    }else {
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRkapInflasi (data:any){
    const table = this.tableRkapInflasi;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const filterData = data.data.content.filter((item:any)=>{
        return item.mtu ==="INFLASI"
      }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
        const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
        const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      });
      filterData.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(filterData);
    }
  }
  public replaceTableOutlookInflasi (data:any){
    const table = this.tableOutlookInflasi;
    if ( data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRealisasiPMI (data:any){
    const table = this.tableRealisasiPmi;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRkapPMI (data:any){
    const table = this.tableRkapPmi;
    if ( data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.contetn)
    }else{
      const filterData = data.data.content.filter((item:any)=>{
        return item.mtu ==="PMI"
      }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
        const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
        const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      });
      filterData.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(filterData);
    }
  }
  public replaceTableOutlookPMI (data:any){
    const table = this.tableOutlookPmi;
     if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRealisasiRetail (data:any){
    const table = this.tableRealisasiRetail;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRkapRetail (data:any){
    const table = this.tableRkapRetail;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const filterData = data.data.content.filter((item:any)=>{
        return item.mtu ==="RETAIL"
      }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
        const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
        const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      });
      filterData.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(filterData);
    }
  }
  public replaceTableOutlookRetail (data:any){
    const table = this.tableOutlookRetail;
    if (data.data.content == null ){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortedData = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortedData.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortedData);
    }
  }
  public replaceTableRealisasiMoneySupply (data:any){
    const table = this.tableRealisasiMoneySupply;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    }else{
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);

        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.triliun_beredar != null ? item.triliun_beredar = parseFloat(item.triliun_beredar) : item.triliun_beredar = 0;
        item.triliun_beredar = item.triliun_beredar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRkapMoneySupply (data:any){
    const table = this.tableRkapMoneySupply;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const filterData = data.data.content.filter((item:any)=>{
        return item.mtu ==="MONEY_SUPPLY"
      }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
        const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
        const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      });
      filterData.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(filterData);
    }
  }
  public replaceTableOutlookMoneySupply (data:any){
    const table = this.tableOutlookMoneySupply;
    if(data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.triliun_beredar != null ? item.triliun_beredar = parseFloat(item.triliun_beredar) : item.triliun_beredar = 0;
        item.triliun_beredar = item.triliun_beredar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRealisasiCadev (data:any){
    const table = this.tableRealisasiForeignExchange;
    if (data.data.content == null ){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.miliar_usd != null ? item.miliar_usd = parseFloat(item.miliar_usd) : item.miliar_usd = 0;
        item.miliar_usd = item.miliar_usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRkapCadev (data:any){
    const table = this.tableRkapForeignExchange;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const filterData = data.data.content.filter((item:any)=>{
        return item.mtu ==="CADEV"
      }).sort((a: { tahun: number; }, b: { tahun: number; }) => {
        const aYear = a.tahun || 0;
        const bYear = b.tahun || 0;
        return bYear - aYear;
      });
      filterData.map((item: any) =>{
        item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
        item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return item;
      })
      table.replaceData(filterData);
    }
  }
  public replaceTableOutlookCadev (data:any){
    const table = this.tableOutlookForeignExchange;
    if (data.data.content == null){
      console.log('data kosong')
      table.replaceData(data.data.content)
    } else {
      const sortdata = data.data.content.sort((a: { bulan: string; tahun: number; }, b: { bulan: string; tahun: number; }) => {
        const aIndex = this.months.indexOf(a.bulan);
        const bIndex = this.months.indexOf(b.bulan);
        if (a.tahun > b.tahun) {
          return -1;
        }
        if (a.tahun < b.tahun) {
          return 1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      });
      sortdata.map((item: any) =>{
        item.miliar_usd != null ? item.miliar_usd = parseFloat(item.miliar_usd) : item.miliar_usd = 0;
        item.miliar_usd = item.miliar_usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      })
      table.replaceData(sortdata);
    }
  }
  public replaceTableRealisasiCurrency (data:any){
    const table = this.tableRealisasiCurrencyRate;
    const sortData = data.data.map((item: any) => {
      const dateParts = item.tanggal.split("/");
      const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1])-1, Number(dateParts[0])+1);
      item.tanggal = dateObject.toISOString().split("T")[0];
      return item;
      }).sort((a: any, b: any) => {
        return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
      });
      sortData.map((item:any)=>{
        item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
        return item
      });
      sortData.map((item: any) =>{
        item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
        item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),

        item.kurs != null ? item.kurs = parseFloat(item.kurs) : item.kurs = 0;
        item.kurs = item.kurs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2}
        );
        return item;
      });
    table.replaceData(sortData);
  }
  public replaceTableRkapCurrency (data:any){
    const table = this.tableRkapCurrencyRate;
    const filterData = data.data.content.filter((item:any)=>{
      return item.grup ==="KURS"
    }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
      const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
      const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
    filterData.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    table.replaceData(filterData);
  }
  public replaceTableOutlookCurrency (data:any, data2: any){
    const table = this.tableOutlookCurrencyRate;
    table.replaceData(data.data.content.concat(data2.data.content));
  }
  public replaceTableRealisasiInterest (data:any){
    const table = this.tableRealisasiInterestRate;
    const sortedData = data.data.sort((a: { tahun: number; }, b: { tahun: number; }) => {
      const aYear = a.tahun || 0;
      const bYear = b.tahun || 0;
      return bYear - aYear;
    });
    sortedData.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    });
    table.replaceData(sortedData);
  }
  public replaceTableRkapInterest (data:any){
    const table = this.tableRkapPdb;
    const filterData = data.data.content.filter((item:any)=>{
      return item.grup ==="INTEREST_RATE"
    }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
      const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
      const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
    filterData.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    table.replaceData(filterData);
  }
  public replaceTableOutlookInterest (data:any){
    const table = this.tableOutlookInterestRate;
    const sortedData = data.data.sort((a: { tahun: number; }, b: { tahun: number; }) => {
      const aYear = a.tahun || 0;
      const bYear = b.tahun || 0;
      return bYear - aYear;
    });
    sortedData.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    });
    table.replaceData(sortedData);
  }
  public replaceTableRealisasiBondYield (data:any){
    const table = this.tableRealisasiBondYield;
    const sorted = data.data.content.map((item: any) => {
      const dateParts = item.tanggal.split("/");
      const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1])-1, Number(dateParts[0])+1);
      item.tanggal = dateObject.toISOString().split("T")[0];
      return item;
      }).sort((a: any, b: any) => {
        return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
      });
      sorted.map((item:any)=>{
        item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
        return item
      })
    table.replaceData(sorted);
  }
  public replaceTableRkapBondYield (data:any){
    const table = this.tableRKAPBondYield;
    const filterData = data.data.content.filter((item:any)=>{
      return item.mtu ==="SBN"
    }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
      const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
      const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
    filterData.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    table.replaceData(filterData);
  }
  public replaceTableOutlookBondYield (data:any){
    const table = this.tableOutlookBondYield;
    const sorted = data.data.content.map((item: any) => {
      const dateParts = item.tanggal.split("/");
      const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1])-1, Number(dateParts[0])+1);
      item.tanggal = dateObject.toISOString().split("T")[0];

      return item;
      }).sort((a: any, b: any) => {
        return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
      });
      this.dataDetailRealisasi.map((item:any)=>{
        item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
        return item
      })
    table.replaceData(sorted);
  }
  public replaceTableRealisasiUsTreasury (data:any){
    const table = this.tableRealisasiUSTreasury;
    const sorted = data.data.content.map((item: any) => {
      const dateParts = item.tanggal.split("/");
      const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0])+1);
      item.tanggal = dateObject.toISOString().split("T")[0];

      return item;
      }).sort((a: any, b: any) => {
        return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime(); 
      });
      sorted.map((item:any)=>{
        item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
        return item
      })
    table.replaceData(sorted);
  }
  public replaceTableRkapUsTreasury (data:any){
    const table = this.tableRKAPUSTreasury;
    if (table == null){
      
    }
    const filterData = data.data.content.filter((item:any)=>{
      return item.mtu ==="US_TREASURY"
    }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
      const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
      const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
    filterData.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    table.replaceData(filterData);
  }
  public replaceTableOutlookUsTreasury (data:any){
    const table = this.tableOutlookUSTreasury;
    const sorted = data.data.content.map((item: any) => {
      const dateParts = item.tanggal.split("/");
      const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
      item.tanggal = dateObject.toISOString().split("T")[0];
      return item;
      }).sort((a: any, b: any) => {
        return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
      });
      sorted.map((item:any)=>{
        item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
        return item
      })
    table.replaceData(sorted);
  }
  public replaceTableRealisasiCommodities (data:any){
    const table = this.tableRealisasiComodities;
    const sortedData = data.data.map((item: any) => {
    const dateParts = item.tanggal.split("/");
    const dateObject = new Date(Number(dateParts[2]), Number(dateParts[1])-1, Number(dateParts[0])+1);
    item.tanggal = dateObject.toISOString().split("T")[0];
    return item;
    }).sort((a: any, b: any) => {
      return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
    });
    sortedData.map((item:any)=>{
      item.tanggal = moment(item.tanggal).format('DD/MM/YYYY')
      return item
    })
    sortedData.map((item: any) =>{
      item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
      item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item
    });
    table.replaceData(sortedData);
  }
  public replaceTableRkapCommodities (data:any){
    const table = this.tableRKAPComodities;
    const filterData = data.data.content.filter((item:any)=>{
      return item.grup ==="COMMODITIES"
    }).sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
      const dateA = new Date(a.tahun, a.tanggal.split('/')[0], a.tanggal.split('/')[1]);
      const dateB = new Date(b.tahun, b.tanggal.split('/')[0], b.tanggal.split('/')[1]);
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
    filterData.map((item: any) =>{
      item.rate != null ? item.rate = parseFloat(item.rate) : item.rate = 0;
      item.rate = item.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return item;
    })
    table.replaceData(filterData);
  }
  public replaceTableOutlookCommodities (data:any){
    const table = this.tableOutlookComodities;
    const sortedData = data.data.content.sort((a: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }, b: { tahun: number; tanggal: { split: (arg0: string) => number[]; }; }) => {
      const dateA = new Date(a.tahun, a.tanggal.split('/')[0] - 1, a.tanggal.split('/')[1]);
      const dateB = new Date(b.tahun, b.tanggal.split('/')[0] - 1, b.tanggal.split('/')[1]);
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
    sortedData.map((item: any) =>{
      item.nilai != null ? item.nilai = parseFloat(item.nilai) : item.nilai = 0;
      item.nilai = item.nilai.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    });
    table.replaceData(sortedData);
    // table.replaceData(data.data);
  }
  getBackData(){
    const dataInflasi = this.dataInflasi != undefined ? this.dataInflasi : ``;
    const tabelInflasi = this.tableInflasi;

    const dataPMI = this.dataPMI != undefined ? this.dataPMI : ``;
    const tabelPMI = this.tablePMI;

    const dataRetail = this.dataRetail != undefined ? this.dataRetail : ``;
    const tabelRetail = this.tableRetail;

    const dataMoneySupply = this.dataMoneySupply != undefined ? this.dataMoneySupply : ``;
    const tabelMoneySupply = this.tableMoneySupply;

    const dataDevisa = this.dataDevisa != undefined ? this.dataDevisa : ``;
    const tabelForeignExchange = this.tableForeignExchange;

    const dataOutlookPdb = this.dataOutlookPdb != undefined ? this.dataOutlookPdb : ``;
    const tableOutlookPdb = this.tableOutlookPdb;

    tabelInflasi.replaceData(dataInflasi);
    tabelPMI.replaceData(dataPMI);
    tabelRetail.replaceData(dataRetail);
    tabelMoneySupply.replaceData(dataMoneySupply);
    tabelForeignExchange.replaceData(dataDevisa);
    tableOutlookPdb.replaceData(dataOutlookPdb);
    // console.log(data);
  }

  previewData(data: any, file: File){

    console.log('preview data: ', data);
    this.fileExcel = file;
    this.objectKeys = Object.keys(data[0])

    this.dataTabelPreview = data;
    console.log(this.objectKeys);
    // this.tabelPreview(this.objectKeys)
    console.log('file', this.fileExcel);
  }

  customizeTableColumn(columnName: any, checked: any){

    let nameColumn = [
      'mata_uang',
      'nilai_rkap',
      'change_rkap',
      'change_mom',
      'change_wow',
      'change_1day'
    ]

    let hiddenColumns: any[] = [];
    let showColumn = nameColumn.filter((item: any) => !columnName.includes(item));

    for(let i=0; i<checked.length; i++){
      if(checked[i] == true){
        for(let j=0; j<columnName.length; j++){
          this.tableCurrency.hideColumn(columnName[j]);
        }
        console.log('true');
      }
      else{
        console.log('false');
        this.tableCurrency.showColumn(showColumn[i]);
      }
    }
    console.log([columnName, showColumn, hiddenColumns, checked]);
  }

  showColumn(){
    this.tableCurrency.showColumn('mata_uang');
  }

  getOutlookData(_rowData:any){
    return this.tableDataOutlookInflasi('nilai');
  }

  findDataSHLAgreement = (value: string, params: string) => {
    const tableSHLAgreementNonPenerusanPinjaman = this.tableSHLAgreementNonPenerusanPinjaman;
    // const dataTabelSHL = this.tableDataSHLAgreementNonPenerusanPinjaman;

    const tableSHLAgreementPenerusanPinjaman = this.tableSHLAgreementPenerusanPinjaman;

    if(params === 'nonPenerusan'){
      tableSHLAgreementNonPenerusanPinjaman.setFilter(this.customFilterNonPP, { filterValue: value });
    }
    else if(params === 'penerusan'){
      tableSHLAgreementPenerusanPinjaman.setFilter(this.customFilterPP, { filterValue: value });
    }

    // tableSHLAgreementNonPenerusanPinjaman.setFilter('anak_perusahaan', 'like', value);
  }

  getRowData = (e:any, cell: any) => {
    console.log(cell.getRow().getData());
    localStorage.setItem('detailSHLAgreement', JSON.stringify(cell.getRow().getData()))

    this.router.navigate(['shl_agreement/details', cell.getRow().getData().id]);
  }

  // edit all macro
  //PDB
  cellClick_SaveButtonPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      quartal: rowData.quartal.toUpperCase(),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responesDeleteRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiPDB(data);
    this.responseUpdate = responesDeleteRealisasi;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPDB();
      this.replaceTableRealisasiPDB(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPDB();
      this.replaceTableRealisasiPDB(dataReplace)
    }
  }
  cellClick_addButtonRealisasiPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      quartal: rowData.quartal.toUpperCase(),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responesCreate = await this.marketUpdateService.fetchDataInputRealisasiPDB(data);
    this.responseCreate = responesCreate;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPDB();
      this.replaceTableRealisasiPDB(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPDB();
      this.replaceTableRealisasiPDB(dataReplace)
    }
  }
  cellClick_deleteButtonRealisasiPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responesDeleteRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiPDB(data);
    this.responseDelete = responesDeleteRealisasi;
    if (this.responseDelete.status == 200){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPDB();
      this.replaceTableRealisasiPDB(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPDB();
      this.replaceTableRealisasiPDB(dataReplace)
    }
  }
  cellClick_SaveButtonRkapPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "PDB"
    }
    const responesUpdate = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responesUpdate;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPDB(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPDB(dataReplace)
    }
  }
  cellClick_addButtonRkapPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "PDB"
    }
    const responesCreate = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responesCreate;
    if (this.responseCreate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPDB(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPDB(dataReplace)
    }
  }
  cellClick_deleteButtonRkapPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responesDelete = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responesDelete;
    if (this.responseDelete == true){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPDB(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPDB(dataReplace)
    }
  }
  cellClick_SaveButtonOutlookPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      nilai: rowData.nilai,
      quartal: rowData.quartal.toUpperCase(),
      tahun: rowData.tahun,
    }
    console.log(data.id)
    const responesOutlook = await this.marketUpdateService.fetchDataUpdateOutlookPDB(data);
    this.responseUpdate = responesOutlook;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPdb();
      this.replaceTableOutlookPDB(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPdb();
      this.replaceTableOutlookPDB(dataReplace)
    }
  }
  cellClick_addButtonOutlookPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      quartal: rowData.quartal.toUpperCase(),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responesOutlook = await this.marketUpdateService.fetchDataInputOutlookPDB(data);
    this.responseCreate = responesOutlook;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPdb();
      this.replaceTableOutlookPDB(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPdb();
      this.replaceTableOutlookPDB(dataReplace)
    }
  }
  cellClick_deleteButtonOutlookPdb = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responesOutlook = await this.marketUpdateService.fetchDeleteDataOutlookPDB(data);
    this.responseDelete = responesOutlook;
    if (this.responseDelete.status == 200){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPdb();
      this.replaceTableOutlookPDB(dataReplace);
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPdb();
      this.replaceTableOutlookPDB(dataReplace)
    }
  }
  //Inflasi
  cellClick_SaveButtonRealisasiInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responesRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiInflasi(data);
    this.responseUpdate = responesRealisasi;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInflasi();
      this.replaceTableRealisasiInflasi(dataReplace)
    } else {
      console.log('data gagal diubah')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInflasi();
      this.replaceTableRealisasiInflasi(dataReplace)
    }
  }
  cellClick_addButtonRealisasiInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responesRealisasi = await this.marketUpdateService.fetchDataInputRealisasiInflasi(data);
    this.responseCreate = responesRealisasi;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInflasi();
      this.replaceTableRealisasiInflasi(dataReplace)
    } else {
      console.log('tambah data gagal')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInflasi();
      this.replaceTableRealisasiInflasi(dataReplace)
    }
  }
  cellClick_deleteButtonRealisasiInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responesRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiInflasi(data);
    this.responseDelete = responesRealisasi;
    if (this.responseDelete.status == 200){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInflasi();
      this.replaceTableRealisasiInflasi(dataReplace)
    } else {
      console.log('data gagal dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInflasi();
      this.replaceTableRealisasiInflasi(dataReplace)
    }
  }
  cellClick_SaveButtonRkapInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "INFLASI"
    }
    const responesRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responesRkap;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInflasi(dataReplace)
    } else {
      console.log('data gagal diubah')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInflasi(dataReplace)
    }
  }
  cellClick_addButtonRkapInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "INFLASI"
    }
    const responesRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responesRkap;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInflasi(dataReplace)
    } else {
      console.log('tambah data gagal')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInflasi(dataReplace)
    }
  }
  cellClick_deleteButtonRkapInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responesRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responesRkap;
    if (this.responseDelete == true){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInflasi(dataReplace)
    } else {
      console.log('data gagal dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInflasi(dataReplace)
    }
  }
  cellClick_SaveButtonOutlookInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      nilai: rowData.nilai,
    }
    const responesOutlook = await this.marketUpdateService.fetchDataUpdateOutlookInflasi(data);
    this.responseUpdate = responesOutlook;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInflasi();
      this.replaceTableOutlookInflasi(dataReplace)
    } else {
      console.log('data gagal diubah')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInflasi();
      this.replaceTableOutlookInflasi(dataReplace)
    }
  }
  cellClick_addButtonOutlookInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responesOutlook = await this.marketUpdateService.fetchDataInputOutlookInflasi(data);
    this.responseCreate = responesOutlook;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInflasi();
      this.replaceTableOutlookInflasi(dataReplace)
    } else {
      console.log('tambah data gagal')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInflasi();
      this.replaceTableOutlookInflasi(dataReplace)
    }
  }
  cellClick_deleteButtonOutlookInflasi = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responesOutlook = await this.marketUpdateService.fetchDeleteDataOutlookInflasi(data);
    this.responseDelete = responesOutlook;
    if (this.responseDelete.status == 200){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInflasi();
      this.replaceTableOutlookInflasi(dataReplace)
    } else {
      console.log('data gagal dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInflasi();
      this.replaceTableOutlookInflasi(dataReplace)
    }
  }
  //PMI
  cellClick_SaveButtonRealisasiPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      rate: rowData.rate,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
    }
    const responesRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiPMI(data);
    this.responseUpdate = responesRealisasi;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPMI();
      this.replaceTableRealisasiPMI(dataReplace)
    } else {
      console.log('data gagal diubah')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPMI();
      this.replaceTableRealisasiPMI(dataReplace)
    }
  }
  cellClick_addButtonRealisasiPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      rate: rowData.rate
    }
    const responesRealisasi = await this.marketUpdateService.fetchDataInputRealisasiPMI(data);
    this.responseCreate = responesRealisasi;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPMI();
      this.replaceTableRealisasiPMI(dataReplace)
    } else {
      console.log('tambah data gagal')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPMI();
      this.replaceTableRealisasiPMI(dataReplace)
    }
  }
  cellClick_deleteButtonRealisasiPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responesRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiPMI(data);
    this.responseDelete = responesRealisasi;
    if (this.responseDelete.status == 200){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPMI();
      this.replaceTableRealisasiPMI(dataReplace)
    } else {
      console.log('data gagal dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiPMI();
      this.replaceTableRealisasiPMI(dataReplace)
    }
  }
  cellClick_SaveButtonRkapPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "PMI"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPMI(dataReplace)
    } else {
      console.log('gagal data gagal diubah')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPMI(dataReplace)
    }
  }
  cellClick_addButtonRkapPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "PMI"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPMI(dataReplace)
    } else {
      console.log('tambah data gagal')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPMI(dataReplace)
    }
  }
  cellClick_deleteButtonRkapPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPMI(dataReplace)
    } else {
      console.log('data gagal dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapPMI(dataReplace)
    }
  }
  cellClick_SaveButtonOutlookPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      rate: rowData.rate,
      bulan: rowData.bulan,
      tahun: rowData.tahun
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataUpdateOutlookPMI(data);
    this.responseUpdate = responeseOutlook;
    if (this.responseUpdate.status == 200){
      console.log('data berhasil diubah')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPMI();
      this.replaceTableOutlookPMI(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPMI();
      this.replaceTableOutlookPMI(dataReplace)
    }
  }
  cellClick_addButtonOutlookPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      rate: rowData.rate
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookPMI(data);
    this.responseCreate = responeseOutlook;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPMI();
      this.replaceTableOutlookPMI(dataReplace)
    } else {
      console.log('gagal hapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPMI();
      this.replaceTableOutlookPMI(dataReplace)
    }
  }
  cellClick_deleteButtonOutlookPMI = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookPMI(data);
    this.responseDelete = responeseOutlook;
    if (this.responseDelete.status == 200){
      console.log('data berhasil dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPMI();
      this.replaceTableOutlookPMI(dataReplace)
    } else {
      console.log('data gagal dihapus')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookPMI();
      this.replaceTableOutlookPMI(dataReplace)
    }
  }
  //Retail
  cellClick_SaveButtonRealisasiRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiRetail(data);
    this.responseUpdate = responeseRealisasi;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRealisasiRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      nilai: rowData.nilai,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataInputRealisasiRetail(data);
    this.responseCreate = responeseRealisasi;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRealisasiRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiRetail(data);
    this.responseDelete = responeseRealisasi;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonRkapRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "RETAIL"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRkapRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "RETAIL"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRkapRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonOutlookRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataUpdateOutlookRetail(data);
    this.responseUpdate = responeseOutlook;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookRetail();
      this.replaceTableOutlookRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonOutlookRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookRetail(data);
    this.responseCreate = responeseOutlook;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookRetail();
      this.replaceTableOutlookRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableRealisasiRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonOutlookRetail = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookRetail(data);
    this.responseDelete = responeseOutlook;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookRetail();
      this.replaceTableOutlookRetail(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiRetail();
      this.replaceTableOutlookRetail(dataReplace)
      console.log('gagal hapus')
    }
  }
  //moneysupply
  cellClick_SaveButtonRealisasiMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      triliun_beredar: rowData.triliun_beredar
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiMoneySupply(data);
    this.responseUpdate = responeseRealisasi;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiMoneySupply();
      this.replaceTableRealisasiMoneySupply(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiMoneySupply();
      this.replaceTableRealisasiMoneySupply(dataReplace)
      console.log('gagal update data')
    }
  }
  cellClick_addButtonRealisasiMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      triliun_beredar: rowData.triliun_beredar
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataInputRealisasiMoneySupply(data);
    this.responseCreate = responeseRealisasi;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiMoneySupply();
      this.replaceTableRealisasiMoneySupply(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiMoneySupply();
      this.replaceTableRealisasiMoneySupply(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRealisasiMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiMoneySupply(data);
    this.responseDelete = responeseRealisasi;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiMoneySupply();
      this.replaceTableRealisasiMoneySupply(dataReplace)
    } else {
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonRkapMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "MONEY_SUPPLY"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapMoneySupply(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapMoneySupply(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRkapMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "MONEY_SUPPLY"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapMoneySupply(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapMoneySupply(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRkapMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapMoneySupply(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapMoneySupply(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonOutlookMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      triliun_beredar: rowData.triliun_beredar
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataUpdateOutlookMoneySupply(data);
    this.responseUpdate = responeseOutlook;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.replaceTableOutlookMoneySupply(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.replaceTableOutlookMoneySupply(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonOutlookMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      triliun_beredar: rowData.triliun_beredar
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookMoneySupply(data);
    this.responseUpdate = responeseOutlook;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.replaceTableOutlookMoneySupply(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.replaceTableOutlookMoneySupply(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonOutlookMoneySupply = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookMoneySupply(data);
    this.responseDelete = responeseOutlook;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.replaceTableOutlookMoneySupply(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookMoneySupply();
      this.replaceTableOutlookMoneySupply(dataReplace)
      console.log('gagal hapus')
    }
  }
  //cadev
  cellClick_SaveButtonRealisasiCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      miliar_usd: rowData.miliar_usd
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiCadev(data);
    this.responseUpdate = responeseRealisasi;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCadev();
      this.replaceTableRealisasiCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCadev();
      this.replaceTableRealisasiCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRealisasiCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      miliar_usd: rowData.miliar_usd
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataInputRealisasiCadev(data);
    this.responseCreate = responeseRealisasi;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCadev();
      this.replaceTableRealisasiCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCadev();
      this.replaceTableRealisasiCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRealisasiCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiCadev(data);
    this.responseDelete = responeseRealisasi;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCadev();
      this.replaceTableRealisasiCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCadev();
      this.replaceTableRealisasiCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonRkapCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "CADEV"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRkapCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "MACRO_INDICATOR",
      mtu: "CADEV"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data)
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRkapCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonOutlookCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      miliar_usd: rowData.miliar_usd
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataUpdateOutlookCadev(data);
    this.responseUpdate = responeseOutlook;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCadev();
      this.replaceTableOutlookCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCadev();
      this.replaceTableOutlookCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonOutlookCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id,
      bulan: rowData.bulan.charAt(0).toUpperCase() + rowData.bulan.slice(1),
      tahun: rowData.tahun,
      miliar_usd: rowData.miliar_usd
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookCadev(data);
    this.responseCreate = responeseOutlook;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCadev();
      this.replaceTableOutlookCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCadev();
      this.replaceTableOutlookCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonOutlookCadev = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookCadev(data);
    this.responseDelete = responeseOutlook;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCadev();
      this.replaceTableOutlookCadev(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCadev();
      this.replaceTableOutlookCadev(dataReplace)
      console.log('gagal hapus')
    }
  }
  // end save edit all non-macro
  //currency rate
  cellClick_SaveButtoRealisasiCurrency = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const nilai1 = rowData.nilai.replace(',','')
    const kurs1 = rowData.nilai.replace(',','')
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      idJisdor: rowData.id,
      idNonJisdor: rowData.id,
      mataUang: rowData.mata_uang.toUpperCase(),
      nilai : parseFloat(nilai1),
      tanggal: rowData.tanggal,
      kurs: parseFloat(kurs1)
    }
    if (data.mataUang == "USD"){
      const responeseRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiKursUsd(data);
      this.responseUpdate = responeseRealisasi;
      if (this.responseUpdate.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
      }else{
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
        console.log('data kosong');
      }
    }else {
      const responeseRealisasiNonUsd = await this.marketUpdateService.fetchDataUpdateRealisasiKursNonUsd(data);
      this.responseUpdate = responeseRealisasiNonUsd;
      if (this.responseUpdate.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
      }else{
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
        console.log('data kosong');
      }
    }
  }
  cellClick_addButtonRealisasiCurrency = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      idJisdor: rowData.id_mst_jisdor,
      idNonJisdor: rowData.id,
      mataUang: rowData.mata_uang.toUpperCase(),
      nilai: rowData.nilai,
      tanggal: rowData.tanggal,
      kurs: rowData.kurs
    }
    if (data.mataUang == "USD"){
      const responeseRealisasi = await this.marketUpdateService.fetchDataInputRealisasiKursUsd(data);
      this.responseDelete = responeseRealisasi;
      if (this.responseDelete.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
      }else{
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
        console.log('data kosong');
      }
    }else {
      const responeseRealisasiNonUsd = await this.marketUpdateService.fetchDataInputRealisasiKursNonUsd(data);
      this.responseDelete = responeseRealisasiNonUsd;
      if (this.responseDelete.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
      }else{
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
        console.log('data kosong');
      }
    }
  }
  cellClick_deleteButtonRealisasiCurrency = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
      idNonJisdor: rowData.id,
      mataUang: rowData.mata_uang
    }
    if(data.mataUang == "USD"){
      const responeseRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiCurrencyRate(data);
      this.responseDelete = responeseRealisasi;
      if (this.responseDelete == true){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
      }else{
        const dataReplaceUsd = await this.marketUpdateService.fetchDataRealisasiKursUsd();
        this.replaceTableRealisasiCurrency(dataReplaceUsd)
        console.log('data kosong');
      }
    }
  }
  cellClick_SaveButtonRkapCurrency = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const rate = rowData.rate.replace(',','')
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: parseFloat(rate),
      grup: "KURS",
      mtu: rowData.mtu.toUpperCase()
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCurrency(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCurrency(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRkapCurrency = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "KURS",
      mtu: rowData.mtu.toUpperCase()
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCurrency(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCurrency(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRkapCurrencyRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
      mataUang: rowData.mata_uang
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCurrency(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCurrency(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonOutlookCurrency = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const nilai1 = rowData.nilai.replace(',','')
    const kurs1 = rowData.nilai.replace(',','')
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      idJisdor: rowData.id_mst_outjisdor,
      idNonJisdor: rowData.id,
      mataUang: rowData.mata_uang.toUpperCase(),
      nilai: parseFloat(nilai1),
      tanggal: rowData.tanggal,
      kurs: parseFloat(kurs1)
    }
    console.log('data', data)
    if (data.mataUang == "USD"){
      const responeseOutlook = await this.marketUpdateService.fetchDataUpdateOutlookKursUsd(data);
      this.responseUpdate = responeseOutlook;
      if (this.responseUpdate.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataOutlookKurs();
        const dataReplacenonUsd = await  this.marketUpdateService.fetchDataOutlookKursNonUsd();
        this.replaceTableOutlookCurrency(dataReplaceUsd, dataReplacenonUsd)
      }else{
        const dataReplacenonUsd = await  this.marketUpdateService.fetchDataOutlookKursNonUsd();
        this.replaceTableOutlookCurrency(dataReplacenonUsd, dataReplacenonUsd)
        console.log('data kosong');
      }
    }else {
      const responeseOutlookNonUsd = await this.marketUpdateService.fetchDataUpdateOutlookKursUsd(data);
      this.responseUpdate = responeseOutlookNonUsd;
      if (this.responseUpdate.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataOutlookKurs();
        const dataReplacenonUsd = await  this.marketUpdateService.fetchDataOutlookKursNonUsd();
        this.replaceTableOutlookCurrency(dataReplaceUsd, dataReplacenonUsd)
      }else{
        const dataReplaceUsd = await this.marketUpdateService.fetchDataOutlookKurs();
        const dataReplacenonUsd = await  this.marketUpdateService.fetchDataOutlookKursNonUsd();
        console.log('data kosong');
      }
    }
  }
  cellClick_addButtonOutlookCurrency = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    currentTable.setEditCursors([{ row: cell.getRow(), column: cell.getColumn() }]);
    const data = {
      idJisdor: rowData.id_mst_jisdor,
      idNonJisdor: rowData.id,
      mataUang: rowData.mata_uang.toUpperCase(),
      nilai: rowData.nilai,
      tanggal: rowData.tanggal,
      kurs: rowData.kurs
    }
    if (data.mataUang == "USD"){
      const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookKursUsd(data);
      this.responseCreate = responeseOutlook;
      if (this.responseCreate.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataOutlookKursUsd();
        const dataReplacenonUsd = await  this.marketUpdateService.fetchDataOutlookKursNonUsd();
        this.replaceTableOutlookCurrency(dataReplaceUsd, dataReplacenonUsd)
      }else{
        console.log('data kosong');
      }
    }else {
      const responeseOutlookNonUsd = await this.marketUpdateService.fetchDataInputOutlookNonUsd(data);
      this.responseCreate = responeseOutlookNonUsd;
      if (this.responseCreate.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataOutlookKursUsd();
        const dataReplacenonUsd = await  this.marketUpdateService.fetchDataOutlookKursNonUsd();
        this.replaceTableOutlookCurrency(dataReplaceUsd, dataReplacenonUsd)
      }else{
        console.log('data kosong');
      }
    }
  }
  cellClick_deleteButtonOutlookCurrencyRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      idNonJisdor: rowData.id,
      idJisdor: rowData.id_mst_outjisdor,
      mataUang: rowData.mata_uang
    }
    if (data.mataUang == "USD"){
      const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookCurrencyRate(data);
      this.responseDelete = responeseOutlook;
      if (this.responseDelete.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataOutlookKursUsd();
        const dataReplacenonUsd = await  this.marketUpdateService.fetchDataOutlookKursNonUsd();
        this.replaceTableOutlookCurrency(dataReplaceUsd, dataReplacenonUsd)
      }else{
        console.log('data kosong');
      }
    }else {
      const responeseOutlookNonUsd = await this.marketUpdateService.fetchDeleteDataOutlookNonUsd(data);
      this.responseDelete = responeseOutlookNonUsd;
      if (this.responseDelete.status == 200){
        const dataReplaceUsd = await this.marketUpdateService.fetchDataOutlookKursUsd();
        const dataReplaceNonUsd = await  this.marketUpdateService.fetchDataOutlookKursNonUsd();
        this.replaceTableOutlookCurrency(dataReplaceUsd, dataReplaceNonUsd)
      }else{
        console.log('data kosong');
      }
    }
  }
  //Interest Rate
  cellClick_SaveButtonInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      grup: rowData.kode.toUpperCase(),
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      month3: rowData.month3,
      month6: rowData.month6,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiInterestRate(data);
    this.responseUpdate = responeseRealisasi;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInterestRate();
      this.replaceTableRealisasiInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInterestRate();
      this.replaceTableRealisasiInterest(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRealisasiInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id,
      grup: rowData.kode.toUpperCase(),
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      month3: rowData.month3,
      month6: rowData.month6,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataInputRealisasiInterestRate(data);
    this.responseCreate = responeseRealisasi;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInterestRate();
      this.replaceTableRealisasiInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInterestRate();
      this.replaceTableRealisasiInterest(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRealisasiInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiInterestRate(data);
    this.responseDelete = responeseRealisasi;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInterestRate();
      this.replaceTableRealisasiInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiInterestRate();
      this.replaceTableRealisasiInterest(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonRkapInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "INTEREST_RATE",
      mtu: rowData.mtu
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInterest(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRkapInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "INTEREST_RATE",
      mtu: rowData.mtu
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInterest(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRkapInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapInterest(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonOutlookInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    if ( rowData.grup == "JIBOR_3M"){
      rowData.month3 = cell.getRow().getData();
    }else if (rowData.grup == "JIBOR_6M"){
      rowData.month6 = cell.getRow().getData();
    }
    const data = {
      id: rowData.id,
      grup: rowData.kode.toUpperCase(),
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      month3: rowData.rate,
      month6: rowData.rate,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataUpdateOutlookInterestRate(data);
    this.responseUpdate = responeseOutlook;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInterestRate();
      this.replaceTableOutlookInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInterestRate();
      this.replaceTableOutlookInterest(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonOutlookInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      grup: rowData.kode.toUpperCase(),
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      month3: rowData.rate,
      month6: rowData.rate,
    }
    console.log(data)
    const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookInterestRate(data);
    this.responseCreate = responeseOutlook;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInterestRate();
      this.replaceTableOutlookInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInterestRate();
      this.replaceTableOutlookInterest(dataReplace)
      console.log('tambah data gagal')
    }
  }
  cellClick_deleteButtonOutlookInterestRate = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookInterestRate(data);
    this.responseDelete = responeseOutlook;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInterestRate();
      this.replaceTableOutlookInterest(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookInterestRate();
      this.replaceTableOutlookInterest(dataReplace)
      console.log('gagal hapus')
    }
  }
  // commodities
  cellClick_SaveButtonRealisasiCommodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    if (rowData.kode === 'LNG') {
      rowData.kode = 'LNG_JKL';
    }
    const data = {
      id: rowData.id,
      kode: rowData.kode.toUpperCase(),
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
      kategori: rowData.kategori
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiCommodities(data);
    this.responseUpdate = responeseRealisasi;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCommodities();
      this.replaceTableRealisasiCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCommodities();
      this.replaceTableRealisasiCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRealisasiCommodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    if (rowData.kode === 'LNG') {
      rowData.kode = 'LNG_JKL';
    }
    const data = {
      kode: rowData.kode.toUpperCase(),
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataInputRealisasiCommodities(data);
    this.responseCreate = responeseRealisasi;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCommodities();
      this.replaceTableRealisasiCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCommodities();
      this.replaceTableRealisasiCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRealisasiCommodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiCommodities(data);
    this.responseDelete = responeseRealisasi;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCommodities();
      this.replaceTableRealisasiCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiCommodities();
      this.replaceTableRealisasiCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonRkapCommodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "COMMODITIES",
      mtu: rowData.mtu.toUpperCase()
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRkapCommodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "COMMODITIES",
      mtu: rowData.mtu.toUpperCase()
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRkapmmodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonOutlookCommodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id_outlook_com: rowData.id_outlook_com,
      kode_item: rowData.kode_item.toUpperCase(),
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
      keterangan: rowData.keterangan
    }
    console.log(data)
    const responeseOutlook = await this.marketUpdateService.fetchDataUpdateOutlookCommodities(data);
    this.responseUpdate = responeseOutlook;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCommodities();
      this.replaceTableOutlookCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCommodities();
      this.replaceTableOutlookCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonOutlookCommodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }

    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      kode_item: rowData.kode_item.toUpperCase(),
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
      keterangan: rowData.keterangan
    }
    console.log(data)
    const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookCommodities(data);
    this.responseCreate = responeseOutlook;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCommodities();
      this.replaceTableOutlookCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCommodities();
      this.replaceTableOutlookCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonOutlookCommodities = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_outlook_com,
    }
    console.log(data.id)
    const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookCommodities(data);
    this.responseDelete = responeseOutlook;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCommodities();
      this.replaceTableOutlookCommodities(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookCommodities();
      this.replaceTableOutlookCommodities(dataReplace)
      console.log('gagal hapus')
    }
  }
  //bond yield SBN
  cellClick_SaveButtonRealisasiSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      tanggal: rowData.tanggal,
      yr5: parseFloat(rowData.yr5),
      yr7: parseFloat(rowData.yr7),
      yr10: parseFloat(rowData.yr10),
      yr15: parseFloat(rowData.yr15),
      yr20: parseFloat(rowData.yr20),
      yr25: parseFloat(rowData.yr25),
      yr30: parseFloat(rowData.yr30),
      grup: rowData.grup
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiBondYieldSBN(data);
    this.responseUpdate = responeseRealisasi;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldSBN();
      this.replaceTableRealisasiBondYield(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldSBN();
      this.replaceTableRealisasiBondYield(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRealisasiSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id,
      tanggal: rowData.tanggal,
      yr5: rowData.yr5,
      yr7: rowData.yr7,
      yr10: rowData.yr10,
      yr15: rowData.yr15,
      yr20: rowData.yr20,
      yr25: rowData.yr25,
      yr30: rowData.yr30,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataInputRealisasiBondYieldSBN(data);
    this.responseCreate = responeseRealisasi;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldSBN();
      this.replaceTableRealisasiBondYield(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldSBN();
      this.replaceTableRealisasiBondYield(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRealisasiSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasuBondYieldSBN(data);
    this.responseDelete = responeseRealisasi;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldSBN();
      this.replaceTableRealisasiBondYield(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldSBN();
      this.replaceTableRealisasiBondYield(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonRkapSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "BOND_IELD",
      mtu: "SBN"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapBondYield(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapBondYield(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRkapSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "BOND_YIELD",
      mtu: "SBN"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapBondYield(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapBondYield(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRkapSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapBondYield(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapBondYield(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonOutlookSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_outlook_by,
      tanggal: rowData.tanggal,
      yr5: rowData.yr5,
      yr7: rowData.yr7,
      yr10: rowData.yr10,
      yr15: rowData.yr15,
      yr20: rowData.yr20,
      yr25: rowData.yr25,
      yr30: rowData.yr30,
      grup: rowData.grup
    }
    const responesOutlook = await this.marketUpdateService.fetchDataUpdateOutlookBondYieldSBN(data);
    this.responseUpdate = responesOutlook;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldSBN();
      this.replaceTableOutlookBondYield(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldSBN();
      this.replaceTableOutlookBondYield(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonOutlookSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id,
      tanggal: rowData.tanggal,
      yr5: rowData.yr5,
      yr7: rowData.yr7,
      yr10: rowData.yr10,
      yr15: rowData.yr15,
      yr20: rowData.yr20,
      yr25: rowData.yr25,
      yr30: rowData.yr30,
      grup: rowData.grup
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookBondYieldSBN(data);
    this.responseCreate = responeseOutlook;
    if (this.responseCreate.status == 200){
      console.log('tambah data berhasil')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldSBN();
      this.replaceTableOutlookBondYield(dataReplace)
    } else {
      console.log('tambah data gagal')
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldSBN();
      this.replaceTableOutlookBondYield(dataReplace)
    }
  }
  cellClick_deleteButtonOutlookSBN = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_outlook_by
    }
    const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookBondYieldSBN(data);
    this.responseDelete = responeseOutlook;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldSBN();
      this.replaceTableOutlookBondYield(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldSBN();
      this.replaceTableOutlookBondYield(dataReplace)
      console.log('gagal hapus')
    }
  }
  //Us Treasury
  cellClick_SaveButtonRealisasiUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      grup: rowData.grup,
      tanggal: rowData.tanggal,
      yr5: rowData.yr5,
      yr7: rowData.yr7,
      yr10: rowData.yr10,
      yr15: rowData.yr15,
      yr20: rowData.yr20,
      yr25: rowData.yr25,
      yr30: rowData.yr30,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataUpdateRealisasiBondYieldTreasury(data);
    this.responseUpdate = responeseRealisasi;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldUsTreasury();
      this.replaceTableRealisasiUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldUsTreasury();
      this.replaceTableRealisasiUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRealisasiUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id,
      tanggal: rowData.tanggal,
      yr5: rowData.yr5,
      yr7: rowData.yr7,
      yr10: rowData.yr10,
      yr15: rowData.yr15,
      yr20: rowData.yr20,
      yr25: rowData.yr25,
      yr30: rowData.yr30,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDataInputRealisasiBondYieldUsTreasury(data);
    this.responseCreate = responeseRealisasi;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldUsTreasury();
      this.replaceTableRealisasiUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldUsTreasury();
      this.replaceTableRealisasiUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRealisasiUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id,
    }
    const responeseRealisasi = await this.marketUpdateService.fetchDeleteDataRealisasiBondYieldUsTreasury(data);
    this.responseDelete = responeseRealisasi;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldUsTreasury();
      this.replaceTableRealisasiUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataRealisasiBondYieldUsTreasury();
      this.replaceTableRealisasiUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonRkapUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "BOND_YIELD",
      mtu: "US_TREASURY"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataUpdateAllRkap(data);
    this.responseUpdate = responeseRkap;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonRkapUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      id: rowData.id_dash_rkap,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      grup: "BOND_YIELD",
      mtu: "US_TREASURY"
    }
    const responeseRkap = await this.marketUpdateService.fetchDataInputAllRkap(data);
    this.responseCreate = responeseRkap;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonRkapUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_dash_rkap,
    }
    const responeseRkap = await this.marketUpdateService.fetchDeleteDataAllRkap(data);
    this.responseDelete = responeseRkap;
    if (this.responseDelete == true){
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataAllRkap();
      this.replaceTableRkapUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_SaveButtonOutlookUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id_outlook_by,
      tanggal: rowData.tanggal,
      yr5: rowData.yr5,
      yr7: rowData.yr7,
      yr10: rowData.yr10,
      yr15: rowData.yr15,
      yr20: rowData.yr20,
      yr25: rowData.yr25,
      yr30: rowData.yr30,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataUpdateOutlookBondYieldUsTreasury(data);
    this.responseUpdate = responeseOutlook;
    if (this.responseUpdate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldUsTreasury();
      this.replaceTableOutlookUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldUsTreasury();
      this.replaceTableOutlookUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_addButtonOutlookUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      tanggal: rowData.tanggal,
      yr5: rowData.yr5,
      yr7: rowData.yr7,
      yr10: rowData.yr10,
      yr15: rowData.yr15,
      yr20: rowData.yr20,
      yr25: rowData.yr25,
      yr30: rowData.yr30,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDataInputOutlookBondYieldUsTreasury(data);
    this.responseCreate = responeseOutlook;
    if (this.responseCreate.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldUsTreasury();
      this.replaceTableOutlookUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldUsTreasury();
      this.replaceTableOutlookUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  cellClick_deleteButtonOutlookUsTreasury = async (e: any, cell:any) => {
    const rowData = cell.getRow().getData();
    const data = {
      id: rowData.id_outlook_by,
    }
    const responeseOutlook = await this.marketUpdateService.fetchDeleteDataOutlookBondYieldUsTreasury(data);
    this.responseDelete = responeseOutlook;
    if (this.responseDelete.status == 200){
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldUsTreasury();
      this.replaceTableOutlookUsTreasury(dataReplace)
    } else {
      const dataReplace = await this.marketUpdateService.fetchDataOutlookBondYieldUsTreasury();
      this.replaceTableOutlookUsTreasury(dataReplace)
      console.log('gagal hapus')
    }
  }
  // end save edit non macro

  cellClick_EditButton(_e: any, cell: any): void {
    const currentRow = cell.getRow()
    const currentTable = cell.getTable()
    const selectedRows = currentTable.getSelectedRows()
      if (selectedRows.length == 0) {
        for (let i = 0; i < selectedRows.length; i++) {
          selectedRows[i].deselect()
          selectedRows[i].reformat()
        }
        currentTable.deselectRow()
        currentRow.select()
        currentRow.reformat()

        const cells = currentRow.getCells()
        for (let i = 0; i < cells.length; i++) {
          cells[i].setValue(cells[i].getValue())
        }
        currentTable.hideColumn("tambahButton")
        currentTable.hideColumn("EditButton")
        currentTable.hideColumn("deleteButton")
        currentTable.showColumn("CancelButton")
        currentTable.showColumn("SaveButton")
      }
  }
  cellClick_addButton(_e: any, cell: any): void {
    const currentRow = cell.getRow()
    const currentTable = cell.getTable()
    const selectedRows = currentTable.getSelectedRows()
      if (selectedRows.length == 0) {
        for (let i = 0; i < selectedRows.length; i++) {
          selectedRows[i].deselect()
          selectedRows[i].reformat()
        }
        currentTable.deselectRow()
        currentRow.select()
        currentRow.reformat()

        const cells = currentRow.getCells()
        for (let i = 0; i < cells.length; i++) {
          cells[i].setValue(cells[i].getValue())
        }
        currentTable.hideColumn("tambahButton")
        currentTable.hideColumn("EditButton")
        currentTable.hideColumn("deleteButton")
        currentTable.showColumn("CancelAddButton")
        currentTable.showColumn("SaveAddButton")
      }
  }
  cellClick_CancelButton(_e: any, cell:any):void{
    if (!cell.getRow().isSelected()){
      return
    }
    const currentRow = cell.getRow()
    const currentTable = cell.getTable()
    if (cell.getRow().isSelected()){
      //Cancel
      cell = currentRow.getCells()
      for (let i = 0; i < cell.length; i++) {
        cell[i].restoreOldValue();
      }
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    }
  }
  cellClick_cancelAddButton(_e: any, cell:any):void{
    if (!cell.getRow().isSelected()){
      return
    }
    const currentRow = cell.getRow()
    const currentTable = cell.getTable()
    if (cell.getRow().isSelected()){
      //Cancel
      cell = currentRow.getCells()
      for (let i = 0; i < cell.length; i++) {
        cell[i].restoreOldValue();
      }
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    // currentTable.hideColumn("deleteButton")
    }
  }

  stopEditing(cell: any) {
  const currentRow = cell.getRow()
  const currentTable = cell.getTable()
  currentTable.deselectRow()
  currentTable.showColumn("EditButton")
  currentTable.showColumn("tambahButton")
  currentTable.showColumn("addButton")
  currentTable.hideColumn("CancelButton")
  currentTable.hideColumn("SaveButton")
  currentTable.hideColumn("CancelAddButton")
  currentTable.hideColumn("SaveAddButton")
  currentRow.reformat()
  }

  customFilterNonPP(data: any, filterParams: any) {
    const filterValue = filterParams.filterValue.toLowerCase();

    const anakPerusahaan = data.anak_perusahaan.toLowerCase().includes(filterValue)
    const dataAgreementNumber = data.agreement_number.toLowerCase().includes(filterValue)
    const agreementNumberAnakPerusahaan = data.agreement_number_anakperusahaan.toLowerCase().includes(filterValue)

    console.log(data.agreement_number, filterValue);

    return anakPerusahaan || dataAgreementNumber || agreementNumberAnakPerusahaan

  }
  customFilterPP(data: any, filterParams: any) {
    const filterValue = filterParams.filterValue.toLowerCase();

    const anakPerusahaan = data.anak_perusahaan.toLowerCase().includes(filterValue)
    const dataAgreementNumber = data.agreement_number.toLowerCase().includes(filterValue)
    const agreementNumberAnakPerusahaan = data.agreement_number_anakperusahaan.toLowerCase().includes(filterValue)

    console.log(data.agreement_number, filterValue);

    return anakPerusahaan || dataAgreementNumber || agreementNumberAnakPerusahaan
  }

  isRowSelected(cell:any){
    return cell.getRow().isSelected()
  }
}
