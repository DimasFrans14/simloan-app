import { Injectable, AfterViewInit } from '@angular/core';
import { CellComponent, TabulatorFull as Tabulator } from 'tabulator-tables';
import { MarketUpdateService } from '../market_update/market-update.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TableServicesService {

  constructor(
    private marketUpdateService: MarketUpdateService,
    private router: Router,
  ) {
    // Initialize properties in a method like ngOnInit() or a custom method
    // this.initializeTableData();
    // this.initializeTableDataCurrency()
  }
  // [x: string]: any;

  public sharedData: any;
  public sharedDataPdb:any;
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
  public shareDataRkapKursUsd: any;
  public shareDataOutlookKursUsd: any;
  public shareDataRealisasiInterestRate: any;
  public shareDataRkapInterestRate: any;
  public shareDataOutlookInterestRate: any;

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

  setDataPdb(data:any){
    this.sharedDataPdb = data;
  }
  setDataRealisasiPdb(data:any){
    this.shareDataRealisasiPdb = data.content;
    console.log(this.shareDataRealisasiPdb)
  }
  setDataOutlookPdb(data:any){
    this.shareDataOutlookPdb = data.content;
    console.log(this.shareDataOutlookPdb)
  }
  setDataRkapPdb(data:any){
    this.shareDataRkapPdb = data.content;
    console.log(this.shareDataRkapPdb)
  }
  setDataRealisasiInflasi(data:any){
    this.shareDataRealisasiInflasi = data.content;
    console.log(this.shareDataRealisasiInflasi)
  }
  setDataRkapInflasi(data:any){
    this.shareDataRkapInflasi = data.content;
    console.log(this.shareDataRkapInflasi)
  }
  setDataOutlookInflasi(data:any){
    this.shareDataOutlookInflasi = data.content;
    console.log(this.shareDataOutlookInflasi)
  }
  setDataRealisasiPMI(data:any){
    this.shareDataRealisasiPMI = data.content;
    console.log(this.shareDataRealisasiPMI);
  }
  setDataRkapPMI(data:any){
    this.shareDataRkapPMI = data.content;
    console.log(this.shareDataRkapPMI);
  }
  setDataOutlookPMI(data:any){
    this.shareDataOutlookPMI = data.content;
    console.log(this.shareDataOutlookPMI);
  }
  setDataRealisasiRetail(data:any){
    this.shareDataRealisasiRetail = data.content;
    console.log(this.shareDataRealisasiRetail);
  }
  setDataRkapRetail(data:any){
    this.shareDataRkapRetail = data.content;
    console.log(this.shareDataRkapRetail);
  }
  setDataOutlookRetail(data:any){
    this.shareDataOutlookMoneySupply = data.content;
    console.log(this.shareDataOutlookMoneySupply);
  }
  setDataRealisasiMoneySupply(data:any){
    this.shareDataRealisasiMoneySupply = data.content;
    console.log(this.shareDataRealisasiMoneySupply);
  }
  setDataRkapMoneySupply(data:any){
    this.shareDataRkapMoneySupply = data.content;
    console.log(this.shareDataRkapMoneySupply);
  }
  setDataOutlookMoneySupply(data:any){
    this.shareDataOutlookMoneySupply = data.content;
    console.log(this.shareDataOutlookMoneySupply);
  }
  setDataRealisasiCadev(data:any){
    this.shareDataRealisasiCadev = data.content;
    console.log(this.shareDataRealisasiCadev);
  }
  setDataRkapCadev(data:any){
    this.shareDataRkapCadev = data.content;
    console.log(this.shareDataRkapCadev);
  }
  setDataOutlookCadev(data:any){
    this.shareDataOutlookCadev = data.content;
    console.log(this.shareDataOutlookCadev);
  }
  setDataRealisasiCommodities(data:any){
    this.shareDataRealisasiCommodities = data.content;
    console.log(this.shareDataRealisasiCommodities);
  }
  setDataRkapCommodities(data:any){
    this.shareDataRkapCommodities = data.content;
    console.log(this.shareDataRkapCommodities);
  }
  setDataOutlookCommodities(data:any){
    this.shareDataOutlookCommodities = data.content;
    console.log(this.shareDataOutlookCommodities);
  }
  setDataRealisasiKursUsd(data:any){
    this.shareDataRealisasiKursUsd = data.content;
    console.log(this.shareDataRealisasiKursUsd);
  }
  setDataRkapKursUsd(data:any){
    this.shareDataRkapKursUsd = data.content;
    console.log(this.shareDataRkapKursUsd);
  }
  setDataOutlookKursUsd(data:any){
    this.shareDataOutlookKursUsd = data.content;
    console.log(this.shareDataOutlookKursUsd);
  }
  setDataRealisasiInterestRate(data:any){
    this.shareDataRealisasiInterestRate = data;
    console.log(this.shareDataRealisasiInterestRate);
  }
  setDataRkapInterestRate(data:any){
    this.shareDataRkapInterestRate = data;
    console.log(this.shareDataRkapInterestRate);
  }
  setDataOutlookInterestRate(data:any){
    this.shareDataOutlookInterestRate = data.content;
    console.log(this.shareDataOutlookInterestRate);
  }

  getDataCommodities(data: any){
    this.dataCommodities = data;
    // console.log('data commodities', this.dataCommodities);
  }
  getDataPDB(data: any){
    this.dataPDB = data.data.content;
    // console.log('data pdb', this.dataPDB);
  }
  getDataInflasi(data: any){
    this.dataInflasi = data.data;
    // console.log('data inflasi', this.dataInflasi);
  }

  getDataPMI(data: any){
    this.dataPMI = data.data;
    // console.log('data PMI', this.dataPMI);
  }

  getDataRetail(data: any){
    this.dataRetail = data.data;
    // console.log('data retail', this.dataRetail);

  }

  getDataMoneySupply(data: any){
    this.dataMoneySupply = data.data;
    // console.log('data money supply', this.dataMoneySupply);
  }

  getDataDevisa(data: any){
    this.dataDevisa = data.data;
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

  tableDataCurrencyDetail: any;
  tableCurrencyDetail: any;

  //Data Interest Rate
  tableInterestRate: any;
  tableDataInterestRate: any;
  tableRealisasiInterestRate: any;
  tableDataRealisasiInterestRate: any;
  tableRkapInterestRate: any;
  tableDataRkapInterestRate: any;
  tableOutlookInterestRate: any;
  tableDataOutlookInterestRate: any;

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
  tableDataRealisasiCCadev: any;

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

  tableDataDetailPdb:any;
  tableDetailPdb:any;
  tableDataRealisasiPdb:any;
  tableRealisasiPdb:any;
  tableDataRkapPdb:any;
  tableRkapPdb:any;
  tableDataOutlookPdb:any;
  tableOutlookPdb:any;

  tableDataDetailInflasi:any;
  tableDetailInflasi:any;
  tableDataRealisasiInflasi:any;
  tableRealisasiInflasi:any;
  tableDataRkapInflasi:any;
  tableRkapInflasi:any;
  tableDataOutlookInflasi:any;
  tableOutlookInflasi:any;

  tableDataDetailPmi:any;
  tableDetailPmi:any;
  tableDataRealisasiPmi:any;
  tableRealisasiPmi:any;
  tableDataRkapPmi:any;
  tableRkapPmi:any;
  tableDataOutlookPmi:any;
  tableOutlookPmi:any;

  tableDataDetailRetail:any;
  tableDetailRetail:any;
  tableDataRealisasiRetail:any;
  tableRealisasiRetail:any;
  tableDataRkapRetail:any;
  tableRkapRetail:any;
  tableDataOutlookRetail:any;
  tableOutlookRetail:any;

  tableDataDetailMoneySupply:any;
  tableDetailMoneySupply:any;
  tableDataRealisasiMoneySupply:any;
  tableRealisasiMoneySupply:any;
  tableDataRkapMoneySupply:any;
  tableRkapMoneySupply:any;
  tableDataOutlookMoneySupply:any;
  tableOutlookMoneySupply:any;

  tableDataDetailForeignExchange:any;
  tableDetailForeignExchange:any;
  tableDataRealisasiForeignExchange:any;
  tableRealisasiForeignExchange:any;
  tableDataRkapForeignExchange:any;
  tableRkapForeignExchange:any;
  tableDataOutlookForeignExchange:any;
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

  initializeTableData(lastMonth: string, lastWeek: string, yesterday: string, today: string) {

    this.tableCurrency = new Tabulator(".table-currency", {
          // height:205,
      height: "335px",
      data:this.dataKurs,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"kode", headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Exchange Rate",
        columns:[
        {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
        {title:lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
        {title:lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
        {title:yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
        {title:today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
        ],
        headerHozAlign:"center"
    },
    {title:"Change <br/>RKAP %", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Change 1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    }
    );

    this.tableInterestRate = new Tabulator(".table-interest", {
      // height:205,
      data:this.dataInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"keterangan", headerHozAlign:"center", hozAlign:'left', headerSort:false},

        {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
        {title:lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
        {title:lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
        {title:yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
        {title:today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},

        {title:"Change <br/>RKAP %", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change 1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
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
        {title: lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
        {title: lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
        {title: yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
        {title: today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
        ],
        headerHozAlign:"center"
    },
    {title:"Yield Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Yield Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Yield Change <br/>1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
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
        {title: lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
        {title: lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
        {title: yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
        {title: today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
        ],
        headerHozAlign:"center"
    },
    {title:"Yield Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Yield Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    {title:"Yield Change <br/>1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],

  });

    this.tableCommodities = new Tabulator(".table-commodities", {
    // height:205,
    data:this.dataCommodities,
    layout:"fitColumns",
    columns:[
      {title:"Commodities", field:"kode", headerHozAlign:"center", hozAlign:'left', headerSort:false},
  {//create column group
      title:"Price",
      columns:[
      {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center"},
      {title:lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center"},
      {title:lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center"},
      {title:yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center"},
      {title:today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center"},
      ],
      headerHozAlign:"center"
  },
  {title:"Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false},
  {title:"Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false},
  {title:"Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false},
  {title:"Change Dari RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false},
    ],

  });

    this.tablePDB = new Tabulator(".table-pdb", {
      // height:20,
      height: "555px",
      data:this.dataPDB,
      layout:"fitDataTable",
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
      height:"555px",
      data:this.dataInflasi,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:"2020", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2021", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2022", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2023", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });

    this.tableMoneySupply = new Tabulator(".table-moneySupply", {
      // height:205,
      height:"555px",
      data:this.dataMoneySupply,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:"2020", field:"triliun_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2021", field:"triliun_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2022", field:"triliun_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2023", field:"triliun_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });

    this.tableForeignExchange = new Tabulator(".table-foreignExchange", {
      // height:205,
      height:"555px",
      data:this.dataDevisa,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", maxWidth:100},
      ],
    });

    // this.tableRealisasiCadev = new Tabulator(".table-realisasiCadev", {
    //   height:"555px",
    //   data:this.dataRealisasiCadev,
    //   layout:"fitColumns",
    //   columns:[
    //     {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
    //     {title:"2020", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:"2021", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:"2022", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:"2023", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
    //   ],
    // });

    this.tablePMI = new Tabulator(".table-pmi", {
      // height:205,
      height:"555px",
      data:this.dataPMI,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });

    this.tableRetail = new Tabulator(".table-retail", {
      // height:205,
      height:"555px",
      data:this.dataRetail,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, maxWidth:100},
      ],
    });
  }

  initializeTableDataUsTreasury(){
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

    this.tableBondYieldUST = new Tabulator(".table-bondYieldUST", {
        // height:205,
        data:this.dataBondYieldUST,
        layout:"fitColumns",
        columns:[
          {title:"Tenor", field:"tenor", headerHozAlign:"center", hozAlign:'left', headerSort:false},
      {//create column group
          title:"Yield",
          columns:[
          {title: "Last Month", field:"h_min_30", hozAlign:"center", headerHozAlign:"center", editor: "input"},
          {title: "lastWeek", field:"h_min_7", hozAlign:"center", headerHozAlign:"center", editor: "input"},
          {title: "yesterday", field:"h_min_1", hozAlign:"center", headerHozAlign:"center", editor: "input"},
          {title: "today", field:"h_min_0", hozAlign:"center", headerHozAlign:"center", editor: "input"},
          ],
          headerHozAlign:"center"
      },
      {title:"Yield Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"Yield Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"Yield Change <br/>1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    ],
    });
    this.tableDataRealisasi = [
      {id:1, month:"18 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:2, month:"17 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:3, month:"16 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:4, month:"15 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:5, month:"14 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:6, month:"13 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:7, month:"12 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:8, month:"11 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:9, month:"10 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      ];

    this.tableRealisasiUSTreasury = new Tabulator(".table-realisasi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.tableDataRealisasi,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
        {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonPdb, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiPdb, headerSort:false, resizable:false,visible:false},
      ],
    });

    this.tableDataRKAP = [
      {id:1, month:"18 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:2, month:"17 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:3, month:"16 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:4, month:"15 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:5, month:"14 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:6, month:"13 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:7, month:"12 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:8, month:"11 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:9, month:"10 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      ];
      this.tableRKAPUSTreasury = new Tabulator(".table-rkap", {
        pagination:true, //enable.
        paginationSize:20,
        data:this.tableDataRKAP,
        layout:"fitColumns",
        columns:[
          {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
          {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input",},
          {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input",},
          {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input",},
          {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input",},
          {title:"Action", headerHozAlign:"center", columns:[
            {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
            {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          ]},
          {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
          {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonPdb, headerSort:false, resizable:false,visible:false},
          {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
          {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiPdb, headerSort:false, resizable:false,visible:false},
      ],
      });

    this.tableDataOutlook = [
      {id:1, month:"18 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:2, month:"17 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:3, month:"16 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:4, month:"15 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:5, month:"14 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:6, month:"13 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:7, month:"12 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:8, month:"11 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:9, month:"10 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      ];
    this.tableOutlookUSTreasury = new Tabulator(".table-Outlook", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.tableDataOutlook,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
        {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input",},
        {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input",},
        {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input",},
        {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input",},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonPdb, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiPdb, headerSort:false, resizable:false,visible:false},
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
    // detail
    this.tablePDB = new Tabulator(".table-DetailPdb", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.dataPDB,
      layout:"fitColumns",
      columnMoved:function(column, _columns){
        alert("The user has moved column: " + column.getField()); //display the columns field name
    },
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false}
      ],
    });
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
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left',editable:this.isRowSelected, editor: "input",headerSort:false,},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center',editable:this.isRowSelected, editor: "number", headerSort:false},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerSort:false, headerHozAlign:"center", hozAlign:'center', resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:'center',  resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:'center',  resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, hozAlign:'center', resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonPdb, headerSort:false, hozAlign:'center', resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, hozAlign:'center', resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiPdb, headerSort:false, hozAlign:'center', resizable:false,visible:false},
      ],
    });
    //Rkap
    this.tableRkapPdb = new Tabulator(".table-rkapPdb", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapPdb,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left',editable:this.isRowSelected, editor: "input",headerSort:false,},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center',editable:this.isRowSelected, editor: "number", headerSort:false},
        {title:"PDB", field:"pdb", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapPdb, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapPdb, headerSort:false, resizable:false,visible:false},
      ],
    });
    this.tableOutlookPdb = new Tabulator(".table-outlookPdb", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookPdb,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', editable:this.isRowSelected, editor: "input",headerSort:false,},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor: "number", headerSort:false},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"number", headerSort:false},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
    ],
    });
  }

  initializeTableDataInflasi(){
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
    this.tableInflasi = new Tabulator(".table-detailInflasi", {
      // height:205,
      height:"555px",
      data:this.dataDetail,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false, bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
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
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"tambahButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiInflasi, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiInflasi, headerSort:false, resizable:false,visible:false},
      ],
    });
    this.tableRkapInflasi = new Tabulator(".table-rkapInflasi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapInflasi,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true, editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Nilai", field:"pdb", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:'center',  resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapInflasi, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapInflasi, headerSort:false, resizable:false,visible:false},
      ],
    });

    this.tableOutlookInflasi = new Tabulator(".table-otulookInflasi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookInflasi,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", hozAlign:'center',  resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookInflasi, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookInflasi, headerSort:false, resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataPMI(){
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
    this.tableDetailPmi = new Tabulator(".table-detailPmi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.dataPMI,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
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
        {title:"Bulan", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number"},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiPMI, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiPMI, headerSort:false, resizable:false,visible:false},
      ],
    });
    this.tableRkapPmi = new Tabulator(".table-rkapPmi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapPMI,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Rate", field:"pdb", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapPMI, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapPMI, headerSort:false, resizable:false,visible:false},
      ],
    });
    this.tableOutlookPmi = new Tabulator(".table-outlookPmi", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookPMI,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number"},
        {title:"Nilai", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPMI, headerSort:false, resizable:false,visible:false},
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
      data:this.dataRetail,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
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
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiRetail, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiRetail, headerSort:false, resizable:false,visible:false},
      ]
    });
    this.tableRkapRetail = new Tabulator(".table-rkapRetail", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapRetail,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", editable:this.isRowSelected, bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"pdb", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapRetail, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapRetail, headerSort:false, resizable:false,visible:false},
      ],
    });
    this.tableOutlookRetail = new Tabulator(".table-outlookRetail", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookRetail,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"pdb", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookRetail, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookRetail, headerSort:false, resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataMoneySupply(){
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
      data:this.dataMoneySupply,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"2020", field:"triliun_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"triliun_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"triliun_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
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
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input",editable:this.isRowSelected, bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"triliun_beredar", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiMoneySupply, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiMoneySupply, headerSort:false, resizable:false,visible:false}
      ],
    });
    this.tableRkapMoneySupply = new Tabulator(".table-rkapMoneySupply", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapMoneySupply,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", editable:this.isRowSelected, bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"pdb", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapMoneySupply, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapMoneySupply, headerSort:false, resizable:false,visible:false}
      ],
    });
    this.tableOutlookMoneySupply = new Tabulator(".table-outlookMoneySupply", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookMoneySupply,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", editable:this.isRowSelected, bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"triliun_beredar", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", editable:this.isRowSelected, bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookMoneySupply, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookMoneySupply, headerSort:false, resizable:false,visible:false}
      ],
    });
  }

  initializeTableDataForeignExchange(){
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
      data:this.dataDevisa,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableRealisasiForeignExchange = new Tabulator(".table-realisasiForeignExchange", {
      data:this.shareDataRealisasiCadev,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiCadev, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiCadev, headerSort:false, resizable:false,visible:false}
      ],
    });
    this.tableRkapForeignExchange = new Tabulator(".table-rkapForeignExchange", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataRkapCadev,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"pdb", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapCadev, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapCadev, headerSort:false, resizable:false,visible:false}
      ],
    });
    this.tableOutlookForeignExchange = new Tabulator(".table-outlookForeignExchange", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookCadev,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Nilai", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "number", bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton,headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookCadev, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookCadev, headerSort:false, resizable:false,visible:false}
      ],
    });
  }

  initializeTableDataCurrency(){
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

    this.tableCurrencyDetail = new Tabulator(".table-currencyDetail", {
      height: "335px",
      data:this.sharedData,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"mata_uang", headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Exchange Rate",
        columns:[
        {title:"RKAP <br/>23", field:"rate_rkap", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"kurs", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"kurs_min1", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"kurs_min2", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"kurs_min3", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        ],
        headerHozAlign:"center"
    },
    {title:"Change <br/>MoM %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change <br/>1 Day", field:"change1_day", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change Dari RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    ],},
    );

  this.tableRealisasiInterestRate = new Tabulator(".table-realisasi", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.shareDataRealisasiKursUsd,
    layout:"fitColumns",
    columns:[
      {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
      {title:"Mata Uang", field:"mata_uang", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false, },
      {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false, },
      {title:"Action", headerHozAlign:"center", columns:[
        {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
        {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
        {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
      ]},
      {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
      {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
      {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
      {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
    ],
  });

  this.tableRKAP = new Tabulator(".table-RKAP", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.shareDataRkapKursUsd,
    layout:"fitColumns",
    columns:[
      {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
      {title:"Mata Uang", field:"mata_uang", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false, },
      {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false, },
      {title:"Action", headerHozAlign:"center", columns:[
        {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
        {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
        {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
      ]},
      {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
      {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
      {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
      {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
    ],
  });

  this.tableOutlook = new Tabulator(".table-outlook", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.shareDataOutlookKursUsd,
    layout:"fitColumns",
    columns:[
      {title:"Tanggal", field:"tanggal", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
      {title:"Mata Uang", field:"mata_uang", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false, },
      {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false, },
      {title:"Action", headerHozAlign:"center", columns:[
        {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
        {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
        {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
      ]},
      {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
      {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
      {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
      {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
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

  initializeTableDataInterestRate(){
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

    this.tableInterestRate = new Tabulator(".table-interest", {
      pagination: true,
      paginationSize:20,
      data:this.dataInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:false},

        {title:"RKAP <br/>23", field:"rate", hozAlign:"center", headerHozAlign:"center"},
        {title:"24/02/23", field:"rate", hozAlign:"center", headerHozAlign:"center"},
        {title:"20/03/23", field:"rate", hozAlign:"center", headerHozAlign:"center"},
        {title:"24/02/23", field:"rate", hozAlign:"center", headerHozAlign:"center"},
        {title:"20/03/23", field:"rate", hozAlign:"center", headerHozAlign:"center"},

        {title:"Change <br/>RKAP %", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>MoM %", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change <br/>WoW %", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false},
        {title:"Change 1 Day %", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false},
      ],
    });
    this.tableRealisasiInterestRate = new Tabulator(".table-realisasiInterestRate", {
      pagination: true,
      paginationSize:20,
      data:this.shareDataRealisasiInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
        {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
        {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
        {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
        {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, editor:"input", headerSort:false},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"tambahButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_addButtonRealisasiInterestRate, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiInterestRate, headerSort:false, resizable:false,visible:false},
      ],
    });
    this.tableRkapInterestRate = new Tabulator(".table-rkapInterestRate", {
        pagination: true,
        paginationSize:20,
        data:this.shareDataRkapInterestRate,
        layout:"fitColumns",
        columns:[
          {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
          {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
          {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
          {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
          {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
          {title:"Action", headerHozAlign:"center", columns:[
            {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
            {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
            {title:"Hapus", field:"tambahButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
          ]},
          {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
          {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonRkapInterestRate, headerSort:false, resizable:false,visible:false},
          {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
          {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonRkapInterestRate, headerSort:false, resizable:false,visible:false},
        ],
    });

    this.tableOutlookInterestRate = new Tabulator(".table-outlookInterestRate", {
      pagination: true,
      paginationSize:20,
      data:this.shareDataOutlookInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Group", field:"grup", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Rate", field:"rate", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Month 3", field:"month3", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Month 6", field:"month6", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "number"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false,headerHozAlign:"center", resizable:false},
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookInterestRate, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookInterestRate, headerSort:false, resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataCommodities(){

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

    this.tableCommodities = new Tabulator(".table-commoditiesDetail", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.dataCommodities,
    layout:"fitColumns",
    columns:[
      {title:"IDR", field:"keterangan", headerHozAlign:"center", hozAlign:'left', headerSort:false},
  {//create column group
      title:"Exchange Rate",
      columns:[
      {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center", editor: "input", editable: this.editCheck},
      {title:"24/02/23", field:"nilai", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"20/03/23", field:"nilai_min1", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"24/02/23", field:"nilai_min2", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"20/03/23", field:"nilai_min3", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      ],
      headerHozAlign:"center"
  },
  {title:"Change <br/>MoM %", field:"nilai_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change <br/>WoW %", field:"nilai_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change <br/>1 Day", field:"nilai_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change Dari RKAP", field:"nilai_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    ],
  });

  this.tableRealisasiComodities = new Tabulator(".table-realisasi", {
    data:this.shareDataRealisasiCommodities,
    pagination:true, //enable.
    paginationSize:15,
    layout:"fitColumns",
      columns:[
        {title:"Item", field:"kode_item", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"number"},
        {title:"Kategori", field:"kategori", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton", formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiCommodities, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton", formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton", formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiCommodities, headerSort:false, resizable:false,visible:false},
      ],
    });


    this.tableRKAPComodities = new Tabulator(".table-RKAP", {
      // height: 500,
      pagination:true, //enable.
      paginationSize:15,
      data:this.shareDataRkapCommodities,
      layout:"fitColumns",
        columns:[
          {title:"Item", field:"kode_item", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
          {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
          {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
          {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
          {title:"Keteranga", field:"keterangan", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
          {title:"Action", headerHozAlign:"center", columns:[
            {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
            {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
            {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
          ]},
          {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
          {title:"", field:"SaveButton", formatter:saveBtn, cellClick:this.cellClick_SaveButtonRealisasiCommodities, headerSort:false, resizable:false,visible:false},
          {title:"", field:"CancelAddButton", formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
          {title:"", field:"SaveAddButton", formatter:saveAddBtn, cellClick:this.cellClick_addButtonRealisasiCommodities, headerSort:false, resizable:false,visible:false},
      ],
    });

    this.tableOutlookComodities = new Tabulator(".table-Outlook", {
      // height:500,
      pagination:true, //enable.
      paginationSize:20,
      data:this.shareDataOutlookCommodities,
      layout:"fitColumns",
      columns:[
        {title:"Item", field:"kode_item", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
        {title:"Tanggal", field:"tanggal", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Nilai", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Keteranga", field:"keterangan", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor:"input"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Edit", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton", formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookCommodities, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton", formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton", formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookCommodities, headerSort:false, resizable:false,visible:false},
      ],
    });
  }

  initializeTableDataBondYield(){
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
    this.tableBondYieldUST = new Tabulator(".table-bondYieldDetail", {
      // height:205,
      data:this.dataBondYieldUST,
      layout:"fitColumns",
      columns:[
        {title:"Tenor", field:"tenor", headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Yield",
        columns:[
        {title:"LastMonth", field:"h_min_30", hozAlign:"center", headerHozAlign:"center", },
        {title:"Lastweek", field:"h_min_7", hozAlign:"center", headerHozAlign:"center", },
        {title:"yesterday", field:"h_min_1", hozAlign:"center", headerHozAlign:"center", },
        {title:"today", field:"h_min_0", hozAlign:"center", headerHozAlign:"center", },
        ],
        headerHozAlign:"center"
    },
    {title:"Yield Change <br/>MoM %", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Yield Change <br/>WoW %", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Yield Change <br/>1 Day %", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
  });

  this.tableDataRealisasi = [
    {id:1, month:"18 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:2, month:"17 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:3, month:"16 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:4, month:"15 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:5, month:"14 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:6, month:"13 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:7, month:"12 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:8, month:"11 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:9, month:"10 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    ];

  this.tableRealisasiBondYield = new Tabulator(".table-realisasi", {
    pagination:true, //enable.
    paginationSize:20,
    data:this.tableDataRealisasi,
    layout:"fitColumns",
    columns:[
      {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
      {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input"},
      {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input" },
      {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input"},
      {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input"},
      {title:"Action", headerHozAlign:"center", columns:[
        {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
        {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
        {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
      ]},
      {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
      {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
      {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
      {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
    ],
  });

  this.tableDataRKAP = [
    {id:1, month:"18 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:2, month:"17 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:3, month:"16 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:4, month:"15 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:5, month:"14 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:6, month:"13 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:7, month:"12 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:8, month:"11 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    {id:9, month:"10 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
    ];
    this.tableRKAPBondYield = new Tabulator(".table-rkap", {
      pagination:true, //enable.
      paginationSize:20,
      data:this.tableDataRKAP,
      layout:"fitColumns",
      columns:[
        {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
        {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input"},
        {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input"},
        {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input"},
        {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, editable:this.isRowSelected, editor: "input"},
        {title:"Action", headerHozAlign:"center", columns:[
          {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
          {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
        ]},
        {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
        {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
        {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
      ],
    });

    this.tableDataOutlook = [
      {id:1, month:"18 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:2, month:"17 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:3, month:"16 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:4, month:"15 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:5, month:"14 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:6, month:"13 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:7, month:"12 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:8, month:"11 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      {id:9, month:"10 Oktober 2023", USD: "15.731", EUR: "4.90", JPY: "4.90", GBP: "4.90"},
      ];
      this.tableOutlookBondYield = new Tabulator(".table-Outlook", {
        pagination:true, //enable.
        paginationSize:20,
        data:this.tableDataOutlook,
        layout:"fitColumns",
        columns:[
          {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
          {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input" },
          {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
          {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
          {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', editable:this.isRowSelected, headerSort:false, editor: "input"},
          {title:"Action", headerHozAlign:"center", columns:[
            {title:"Edit", field:"EditButton", formatter:editBtn, cellClick: this.cellClick_EditButton, headerHozAlign:"center", headerSort:false, resizable:false},
            {title:"Tambah", field:"tambahButton", formatter:addBtn, cellClick: this.cellClick_addButton, headerHozAlign:"center", headerSort:false, resizable:false},
            {title:"Hapus", field:"deleteButton", formatter:deleteBtn, cellClick: this.cellClick_addButton, headerSort:false, headerHozAlign:"center", resizable:false}
          ]},
          {title:"", field:"CancelButton", formatter:cancelBtn, cellClick:this.cellClick_CancelButton, headerSort:false, resizable:false,visible:false},
          {title:"", field:"SaveButton",formatter:saveBtn, cellClick:this.cellClick_SaveButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
          {title:"", field:"CancelAddButton",formatter:cancelBtn, cellClick:this.cellClick_cancelAddButton, headerSort:false, resizable:false,visible:false},
          {title:"", field:"SaveAddButton",formatter:saveAddBtn, cellClick:this.cellClick_addButtonOutlookPdb, headerSort:false, resizable:false,visible:false},
        ],
      })
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
      layout:"fitData",
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
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn' (click)='alert('clicked')'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(_cell:any, _formatterParams: any){
      return "<input type='checkbox'></input>"
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
        {title: "Action", formatter:actionBtn, cellClick:this.getRowData, width:120,hozAlign:"center", headerHozAlign:"center"},
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

  editTitle(){
    const tabel = this.tableCommodities;
    tabel.updateColumnDefinition("mata_uang", {title:`${this.dataCommodities[0].mata_uang}`});
  }

  public updateTabelInflasi(data: any){
    const tabel = this.tableInflasi;
    tabel.replaceData(data.data);
  }

  public updateTabelPMI(data: any){
    const tabel = this.tablePMI;
    tabel.replaceData(data);
  }

  public updateTabelRetail(data: any){
    const tabel = this.tableRetail;
    tabel.replaceData(data);
  }

  public updateTabelMoneySuply(data: any){
    const tabel = this.tableMoneySupply;
    tabel.replaceData(data);
  }

  public updateTabelDevisa(data: any){
    const tabel = this.tableForeignExchange;
    tabel.replaceData(data);
  }

  public updateTableOutlookPDB (data:any){
    const table = this.tableOutlookPdb;
    table.replaceData(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRealisasiPDB(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiPDB(data);
    const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      id: rowData.id,
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRkapPDB(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRkapPDB(data);
    const getBackData = await this.marketUpdateService.fetchDataRkapPDB();
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookPDB(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputOutlookPDB(data);
    const getBackData = await this.marketUpdateService.fetchDataOutlookPdb();
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiInflasi(data);
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiInflasi(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      id: rowData.id,
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRkapInflasi(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRkapPDB(data);
    const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      nilai: rowData.nilai,
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookInflasi(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputOutlookInflasi(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    const data = {
      id: rowData.id,
      rate: rowData.rate,
      bulan: rowData.bulan,
      tahun: rowData.tahun,
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRealisasiPMI(data);
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      rate: rowData.rate
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiPMI(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      id: rowData.id,
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRkapPMI(data);
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      rate: rowData.rate
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRkapPMI(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookPMI(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputOutlookPMI(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRealisasiRetail(data);
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
      bulan: rowData.bulan,
      tahun: rowData.tahun
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiRetail(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      id: rowData.id,
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRkapRetail(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRkapRetail(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookRetail(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputOutlookRetail(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      triliun_beredar: rowData.triliun_beredar
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRealisasiMoneySupply(data);
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      triliun_beredar: rowData.triliun_beredar
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiMoneySupply(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      id: rowData.id,
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRkapMoneySupply(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRkapMoneySupply(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      triliun_beredar: rowData.triliun_beredar
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookMoneySupply(data);
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      triliun_beredar: rowData.triliun_beredar
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputOutlookMoneySupply(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      miliar_usd: rowData.miliar_usd
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRealisasiCadev(data);
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      miliar_usd: rowData.miliar_usd
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiCadev(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      id: rowData.id,
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRkapCadev(data);
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
      id: rowData.id,
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRkapCadev(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      miliar_usd: rowData.miliar_usd
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookCadev(data);
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
      bulan: rowData.bulan,
      tahun: rowData.tahun,
      miliar_usd: rowData.miliar_usd
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputOutlookCadev(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
  }
  // end save edit all non-macro

  //non macro
  async cellClick_SaveButtonCurrency(e: any, cell:any){
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    // await this.marketUpdateService.fetchDataUpdateRealisasiCurrency(data)
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRealisasiPDB(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiPDB(data);
    const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      id: rowData.id,
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRkapPDB(data);
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      pdb: rowData.pdb
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRkapPDB(data);
    const getBackData = await this.marketUpdateService.fetchDataRkapPDB();
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
    const data = {
      id: rowData.id_outlook_ir,
      grup: rowData.grup,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      month3: rowData.month3,
      month6: rowData.month6,
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookInterestRate(data);
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
    currentTable.hideColumn("deleteButton")
    currentTable.hideColumn("CancelAddButton")
    currentTable.hideColumn("SaveAddButton")
    const data = {
      grup: rowData.grup,
      tanggal: rowData.tanggal,
      tahun: rowData.tahun,
      rate: rowData.rate,
      month3: rowData.month3,
      month6: rowData.month6,
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputOutlookInterestRate(data);
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
    const data = {
      id: rowData.id,
      kode_item: rowData.kode_item,
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
      kategori: rowData.kategori
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRealisasiCommodities(data);
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
    const data = {
      id: rowData.id,
      kode_item: rowData.kode_item,
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
      kategori: rowData.kategori
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataInputRealisasiCommodities(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
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
      id: rowData.id,
      kode_item: rowData.kode_item,
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
      keterangan: rowData.keterangan
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateRkapCommodities(data);
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
      kode_item: rowData.kode_item,
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
      keterangan: rowData.keterangan
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookCommodities(data);
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
      id: rowData.id,
      kode_item: rowData.kode_item,
      tahun: rowData.tahun,
      tanggal: rowData.tanggal,
      nilai: rowData.nilai,
      kategori: rowData.kategori
    }
    console.log(data);
    const response = await this.marketUpdateService.fetchDataUpdateOutlookCommodities(data);
    // const getBackData = await this.marketUpdateService.fetchDataPDB();
  }
  async cellClick_SaveButtonBondYield(e: any, cell:any){
    const rowData = cell.getRow().getData();
    if (!cell.getRow().isSelected()){
      return
    }
    const data = {
      id: rowData.id,
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    const currentTable = cell.getTable()
    currentTable.deselectRow()
    currentTable.showColumn("EditButton")
    currentTable.showColumn("tambahButton")
    currentTable.showColumn("deleteButton")
    currentTable.hideColumn("CancelButton")
    currentTable.hideColumn("SaveButton")
    console.log(data);
     await this.marketUpdateService.fetchDataUpdateRealisasiPDB(data)
  }
  async cellClick_SaveButtonUsTreasury(e: any, cell:any){
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
      quartal: rowData.quartal,
      tahun: rowData.tahun,
      nilai: rowData.nilai
    }
    console.log(data);
     await this.marketUpdateService.fetchDataUpdateRealisasiPDB(data)
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
