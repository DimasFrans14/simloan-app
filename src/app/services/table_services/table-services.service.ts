import { Injectable, AfterViewInit } from '@angular/core';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

@Injectable({
  providedIn: 'root'
})
export class TableServicesService {

  public sharedData: any;
  public sharedDataPdb:any;
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

  getDataCommodities(data: any){
    this.dataCommodities = data.data;
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

  customBottomCalc(values: any, data: any, calcParams: any) {
    // Mengembalikan string "Total" untuk ditampilkan di baris bawah tabel
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

  //Data Bond Yield
  tableBondYield: any;

  tableBondYieldSBN: any;
  tableBondYieldUST: any;
  tableDataBondYield: any;

  //Data Commodities
  tableCommodities: any;
  tableDataCommodities: any;

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


  constructor() {
    // Initialize properties in a method like ngOnInit() or a custom method
    // this.initializeTableData();
    // this.initializeTableDataCurrency()
  }

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
        {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center",  editable: this.editCheck},
        {title:lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center",  editable: this.editCheck},
        {title:lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center",  editable: this.editCheck},
        {title:yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center",  editable: this.editCheck},
        {title:today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center",  editable: this.editCheck},
        ],
        headerHozAlign:"center"
    },
    {title:"Change <br/>RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change 1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
   }
    );

    this.tableInterestRate = new Tabulator(".table-interest", {
      // height:205,
      data:this.dataInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"kode", headerHozAlign:"center", hozAlign:'left', headerSort:false, minWidth: 150},

        {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center", },
        {title:lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center", },
        {title:lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center", },
        {title:yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center", },
        {title:today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center", },

        {title:"Change <br/>RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"Change 1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
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
        {title: lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center", },
        {title: lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center", },
        {title: yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center", },
        {title: today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center", },
        ],
        headerHozAlign:"center"
    },
    {title:"Yield Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Yield Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Yield Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
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
        {title: lastMonth, field:"h_min_30", hozAlign:"center", headerHozAlign:"center", },
        {title: lastWeek, field:"h_min_7", hozAlign:"center", headerHozAlign:"center", },
        {title: yesterday, field:"h_min_1", hozAlign:"center", headerHozAlign:"center", },
        {title: today, field:"h_min_0", hozAlign:"center", headerHozAlign:"center", },
        ],
        headerHozAlign:"center"
    },
    {title:"Yield Change <br/>MoM", field:"change_mom", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Yield Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Yield Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],

  });

    this.tableCommodities = new Tabulator(".table-commodities", {
    // height:205,
    data:this.dataCommodities,
    layout:"fitColumns",
    columns:[
      {title:"Commodities", field:"kode_item", headerHozAlign:"center", hozAlign:'left', headerSort:false},
  {//create column group
      title:"Price",
      columns:[
      {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center", },
      {title:lastMonth, field:"nilai_min3", hozAlign:"center", headerHozAlign:"center", },
      {title:lastWeek, field:"nilai_min2", hozAlign:"center", headerHozAlign:"center", },
      {title:yesterday, field:"nilai_min1", hozAlign:"center", headerHozAlign:"center", },
      {title:today, field:"nilai_min0", hozAlign:"center", headerHozAlign:"center", },
      ],
      headerHozAlign:"center"
  },
  {title:"Change <br/>MoM", field:"persen_change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  {title:"Change <br/>WoW", field:"persen_change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  {title:"Change <br/>1 Day", field:"persen_change1_day", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  {title:"Change Dari RKAP", field:"persen_change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    ],

  });

    this.tablePDB = new Tabulator(".table-pdb", {
      // height:20,
      height: "555px",
      data:this.dataPDB,
      layout:"fitDataTable",
      columnMoved:function(column, columns){
        alert("The user has moved column: " + column.getField()); //display the columns field name
    },
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true,  minWidth: 200, bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false,  minWidth: 100},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false,  minWidth: 100, bottomCalc:"sum", bottomCalcParams:{precision:1}},
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
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
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
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"triliun_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"triliun_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"triliun_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"triliun_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
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
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });

    // this.tableRealisasiCadev = new Tabulator(".table-realisasiCadev", {
    //   height:"555px",
    //   data:this.dataRealisasiCadev,
    //   layout:"fitColumns",
    //   columns:[
    //     {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
    //     {title:"2020", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:"2021", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:"2022", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
    //     {title:"2023", field:"miliar_usd", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
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
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
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
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
  }

  initializeTableDataPDB(){
    // detail
    this.tablePDB = new Tabulator(".table-DetailPdb", {
      height: "350px",
      data:this.dataPDB,
      layout:"fitDataTable",
      columnMoved:function(column, columns){
        alert("The user has moved column: " + column.getField()); //display the columns field name
    },
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true,  minWidth: 200, bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false,  minWidth: 100},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false,  minWidth: 100, bottomCalc:"sum", bottomCalcParams:{precision:1}},
      ],
    });
    //realisasi
    this.tableRealisasiPdb = new Tabulator(".table-realisasiPdb", {
      height:"350px",
      data:this.dataPDB,
      layout:"fitDataTable",
      columnMoved:function(column, columns){
        alert("The user has moved column: " + column.getField()); //display the columns field name
    },
      columns:[
        {title:"Periode", field:"quartal", headerHozAlign:"left", hozAlign:'left', headerSort:true,  minWidth: 200, bottomCalc: this.customBottomCalc},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false,  minWidth: 100},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false,  minWidth: 100, bottomCalc:"sum", bottomCalcParams:{precision:1}},
      ],
    });
    //Rkap
    this.tableDataRkapPdb = [
      {periode:"Q1", tahun:"2022", pdb:"5.06"},
      {periode:"Q2", tahun:"2022", pdb:"5.06"},
      {periode:"Q3", tahun:"2022", pdb:"5.06"},
      {periode:"Q4", tahun:"2022", pdb:"5.06"},
    ]
    this.tableRkapPdb = new Tabulator(".table-rkapPdb", {
      // height:205,
      data:this.tableDataRkapPdb,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"periode", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"PDB", field:"pdb", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
    this.tableDataOutlookPdb = [
      {periode:"Q1", tahun:"2022", pdb:"4.06"},
      {periode:"Q2", tahun:"2022", pdb:"4.06"},
      {periode:"Q3", tahun:"2022", pdb:"4.06"},
      {periode:"Q4", tahun:"2022", pdb:"4.06"},
    ]
    this.tableOutlookPdb = new Tabulator(".table-outlookPdb", {
      // height:205,
      data:this.tableDataOutlookPdb,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"periode", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"PDB", field:"pdb", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
  }

  initializeTableDataInflasi(){
    this.tableInflasi = new Tabulator(".table-detailInflasi", {
      // height:205,
      height:"555px",
      data:this.dataInflasi,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableRealisasiInflasi = new Tabulator(".table-ralisasiInflasi", {
      // height:205,
      height:"555px",
      data:this.dataInflasi,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableDataRkapInflasi = [
      {bulan:"Januari", nilai:"1.59"},
      {bulan:"Februari", nilai:"1.59"},
      {bulan:"Maret", nilai:"1.59"},
      {bulan:"April", nilai:"1.59"},
      {bulan:"Mei", nilai:"1.59"},
      {bulan:"Juni", nilai:"1.59"},
      {bulan:"Juli", nilai:"1.59"},
    ]
    this.tableRkapInflasi = new Tabulator(".table-rkapInflasi", {
      // height:205,
      data:this.tableDataRkapInflasi,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
    this.tableDataOutlookInflasi = [
      {bulan:"Januari", nilai:"2.59"},
      {bulan:"Februari", nilai:"2.59"},
      {bulan:"Maret", nilai:"2.59"},
      {bulan:"April", nilai:"2.59"},
      {bulan:"Mei", nilai:"2.59"},
      {bulan:"Juni", nilai:"2.59"},
      {bulan:"Juli", nilai:"2.59"},
    ]
    this.tableOutlookInflasi = new Tabulator(".table-otulookInflasi", {
      // height:205,
      data:this.tableDataOutlookInflasi,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
  }

  initializeTableDataPMI(){
    this.tableDetailPmi = new Tabulator(".table-detailPmi", {
      // height:205,
      height:"555px",
      data:this.dataPMI,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableRealisasiPmi = new Tabulator(".table-ralisasiPmi", {
      // height:205,
      height:"555px",
      data:this.dataPMI,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableDataRkapPmi = [
      {bulan:"Januari", nilai:"1.59"},
      {bulan:"Februari", nilai:"1.59"},
      {bulan:"Maret", nilai:"1.59"},
      {bulan:"April", nilai:"1.59"},
      {bulan:"Mei", nilai:"1.59"},
      {bulan:"Juni", nilai:"1.59"},
      {bulan:"Juli", nilai:"1.59"},
    ]
    this.tableRkapPmi = new Tabulator(".table-rkapPmi", {
      // height:205,
      data:this.tableDataRkapPmi,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
    this.tableDataOutlookPmi = [
      {bulan:"Januari", nilai:"2.59"},
      {bulan:"Februari", nilai:"2.59"},
      {bulan:"Maret", nilai:"2.59"},
      {bulan:"April", nilai:"2.59"},
      {bulan:"Mei", nilai:"2.59"},
      {bulan:"Juni", nilai:"2.59"},
      {bulan:"Juli", nilai:"2.59"},
    ]
    this.tableOutlookPmi = new Tabulator(".table-outlookPmi", {
      // height:205,
      data:this.tableDataOutlookPmi,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
  }

  initializeTableDataRetail(){
    this.tableDetailRetail = new Tabulator(".table-detailRetail", {
      // height:205,
      height:"555px",
      data:this.dataRetail,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableRealisasiRetail = new Tabulator(".table-ralisasiRetail", {
      // height:205,
      height:"555px",
      data:this.dataRetail,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableDataRkapRetail = [
      {bulan:"Januari", nilai:"1.59"},
      {bulan:"Februari", nilai:"1.59"},
      {bulan:"Maret", nilai:"1.59"},
      {bulan:"April", nilai:"1.59"},
      {bulan:"Mei", nilai:"1.59"},
      {bulan:"Juni", nilai:"1.59"},
      {bulan:"Juli", nilai:"1.59"},
    ]
    this.tableRkapRetail = new Tabulator(".table-rkapRetail", {
      // height:205,
      data:this.tableDataRkapRetail,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
    this.tableDataOutlookRetail = [
      {bulan:"Januari", nilai:"2.59"},
      {bulan:"Februari", nilai:"2.59"},
      {bulan:"Maret", nilai:"2.59"},
      {bulan:"April", nilai:"2.59"},
      {bulan:"Mei", nilai:"2.59"},
      {bulan:"Juni", nilai:"2.59"},
      {bulan:"Juli", nilai:"2.59"},
    ]
    this.tableOutlookRetail = new Tabulator(".table-outlookRetail", {
      // height:205,
      data:this.tableDataOutlookRetail,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
  }

  initializeTableDataMoneySupply(){
    this.tableDetailMoneySupply = new Tabulator(".table-detailMoneySupply", {
      // height:205,
      height:"555px",
      data:this.dataMoneySupply,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"triliun_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"triliun_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"triliun_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"triliun_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableRealisasiMoneySupply = new Tabulator(".table-realisasiMoneySupply", {
      // height:205,
      height:"555px",
      data:this.dataMoneySupply,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"triliun_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"triliun_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"triliun_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"triliun_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableDataRkapMoneySupply = [
      {bulan:"Januari", nilai:"1.59"},
      {bulan:"Februari", nilai:"1.59"},
      {bulan:"Maret", nilai:"1.59"},
      {bulan:"April", nilai:"1.59"},
      {bulan:"Mei", nilai:"1.59"},
      {bulan:"Juni", nilai:"1.59"},
      {bulan:"Juli", nilai:"1.59"},
    ]
    this.tableRkapMoneySupply = new Tabulator(".table-rkapMoneySupply", {
      // height:205,
      data:this.tableDataRkapMoneySupply,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
    this.tableDataOutlookMoneySupply = [
      {bulan:"Januari", nilai:"2.59"},
      {bulan:"Februari", nilai:"2.59"},
      {bulan:"Maret", nilai:"2.59"},
      {bulan:"April", nilai:"2.59"},
      {bulan:"Mei", nilai:"2.59"},
      {bulan:"Juni", nilai:"2.59"},
      {bulan:"Juli", nilai:"2.59"},
    ]
    this.tableOutlookMoneySupply = new Tabulator(".table-outlookMoneySupply", {
      // height:205,
      data:this.tableDataOutlookMoneySupply,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
  }

  initializeTableDataForeignExchange(){
    this.tableDetailForeignExchange = new Tabulator(".table-detailForeignExchange", {
      // height:205,
      height:"555px",
      data:this.dataDevisa,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableRealisasiForeignExchange = new Tabulator(".table-realisasiForeignExchange", {
      // height:205,
      height:"555px",
      data:this.dataDevisa,
      layout:"fitColumns",
      // frozenRows: 4,
      // movableRows: true,
      // movableColumns: true,
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true,  bottomCalc: this.customBottomCalc},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false,  bottomCalc:"sum", bottomCalcParams:{precision:1}, maxWidth:100},
      ],
    });
    this.tableDataRkapForeignExchange = [
      {bulan:"Januari", nilai:"1.59"},
      {bulan:"Februari", nilai:"1.59"},
      {bulan:"Maret", nilai:"1.59"},
      {bulan:"April", nilai:"1.59"},
      {bulan:"Mei", nilai:"1.59"},
      {bulan:"Juni", nilai:"1.59"},
      {bulan:"Juli", nilai:"1.59"},
    ]
    this.tableRkapForeignExchange = new Tabulator(".table-rkapForeignExchange", {
      // height:205,
      data:this.tableDataRkapForeignExchange,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
    this.tableDataOutlookForeignExchange = [
      {bulan:"Januari", nilai:"1.59"},
      {bulan:"Februari", nilai:"1.59"},
      {bulan:"Maret", nilai:"1.59"},
      {bulan:"April", nilai:"1.59"},
      {bulan:"Mei", nilai:"1.59"},
      {bulan:"Juni", nilai:"1.59"},
      {bulan:"Juli", nilai:"1.59"},
    ]
    this.tableOutlookForeignExchange = new Tabulator(".table-outlookForeignExchange", {
      // height:205,
      data:this.tableDataOutlookForeignExchange,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
        {title:"2020", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2021", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2022", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"2023", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
    });
  }

  initializeTableDataCurrency(){

    this.tableDataCurrencyDetail = [
      {id:1, name:"USD", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"EUR", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"JPY", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"GBP", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];

    this.tableCurrencyDetail = new Tabulator(".table-currencyDetail", {
      height: "335px",
      data:this.sharedData,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"mata_uang", headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Exchange Rate",
        columns:[
        {title:"RKAP <br/>23", field:"rate_rkap", hozAlign:"center", headerHozAlign:"center", },
        {title:"24/02/23", field:"kurs", hozAlign:"center", headerHozAlign:"center", },
        {title:"20/03/23", field:"kurs_min1", hozAlign:"center", headerHozAlign:"center", },
        {title:"24/02/23", field:"kurs_min2", hozAlign:"center", headerHozAlign:"center", },
        {title:"20/03/23", field:"kurs_min3", hozAlign:"center", headerHozAlign:"center", },
        ],
        headerHozAlign:"center"
    },
    {title:"Change <br/>MoM", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change <br/>1 Day", field:"change1_day", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Change Dari RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
   }
    );

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
  ]

  this.tableRealisasi = new Tabulator(".table-realisasi", {
    // height:205,
    data:this.tableDataRealisasi,
    layout:"fitColumns",
    columns:[
      {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
      {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
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
  ]

  this.tableRKAP = new Tabulator(".table-RKAP", {
    // height:205,
    data:this.tableDataRealisasi,
    layout:"fitColumns",
    columns:[
      {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
      {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
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
  ]

  this.tableOutlook = new Tabulator(".table-outlook", {
    // height:205,
    data:this.tableDataOutlook,
    layout:"fitColumns",
    columns:[
      {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
      {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
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
  //     {title:"Mata Uang", field:"mataUang", headerHozAlign:"left", hozAlign:'left', headerSort:false,  minWidth: 130},
  //     {title:"Jual", field:"beli", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  //     {title:"Beli", field:"jual", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  //     {title:"TimeStamp", field:"timeCreated", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  //   ],
  // });
  }

  initializeTableDataInterestRate(){
    this.tableDataInterestRate = [
      {id:1, name:"BI7DRR", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"FED RATE", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"AVG SOFR", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"JIBOR", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
      {id:5, name:"EURIBOR", age:"15000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
      {id:6, name:"AVERAGE TIME DOPOSITE (3 Mo)", age:"15000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];

    this.tableInterestRate = new Tabulator(".table-interest", {
      // height:205,
      data:this.dataInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"mtu", headerHozAlign:"center", hozAlign:'left', headerSort:false},

        {title:"RKAP <br/>23", field:"rate", hozAlign:"center", headerHozAlign:"center", },
        {title:"24/02/23", field:"rate", hozAlign:"center", headerHozAlign:"center", },
        {title:"20/03/23", field:"rate", hozAlign:"center", headerHozAlign:"center", },
        {title:"24/02/23", field:"rate", hozAlign:"center", headerHozAlign:"center", },
        {title:"20/03/23", field:"rate", hozAlign:"center", headerHozAlign:"center", },

        {title:"Change <br/>RKAP", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"Change <br/>MoM", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"Change <br/>WoW", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
        {title:"Change 1 Day", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],
   });
  }

  initializeTableDataCommodities(){

    this.tableCommodities = new Tabulator(".table-commoditiesDetail", {
    // height:205,
    data:this.dataCommodities,
    layout:"fitColumns",
    columns:[
      {title:"IDR", field:"keterangan", headerHozAlign:"center", hozAlign:'left', headerSort:false},
  {//create column group
      title:"Exchange Rate",
      columns:[
      {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center",  editable: this.editCheck},
      {title:"24/02/23", field:"nilai", hozAlign:"center", headerHozAlign:"center", },
      {title:"20/03/23", field:"nilai_min1", hozAlign:"center", headerHozAlign:"center", },
      {title:"24/02/23", field:"nilai_min2", hozAlign:"center", headerHozAlign:"center", },
      {title:"20/03/23", field:"nilai_min3", hozAlign:"center", headerHozAlign:"center", },
      ],
      headerHozAlign:"center"
  },
  {title:"Change <br/>MoM", field:"nilai_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  {title:"Change <br/>WoW", field:"nilai_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  {title:"Change <br/>1 Day", field:"nilai_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
  {title:"Change Dari RKAP", field:"nilai_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    ],

  });
  }

  initializeTableDataBondYield(){

      this.tableBondYield = new Tabulator(".table-bondYieldDetail", {
        // height:205,
        data:this.dataBondYieldSBN,
        layout:"fitColumns",
        columns:[
          {title:"IDR", field:"mtu", headerHozAlign:"center", hozAlign:'left', headerSort:false},
      {//create column group
          title:"Exchange Rate",
          columns:[
          {title:"24/02/23", field:"rate", hozAlign:"center", headerHozAlign:"center", },
          {title:"20/03/23", field:"rate", hozAlign:"center", headerHozAlign:"center", },
          {title:"24/02/23", field:"rate", hozAlign:"center", headerHozAlign:"center", },
          {title:"20/03/23", field:"rate", hozAlign:"center", headerHozAlign:"center", },
          ],
          headerHozAlign:"center"
      },
      {title:"Yield Change <br/>MoM", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"Yield Change <br/>WoW", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      {title:"Yield Change <br/>1 Day", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, },
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

    const actionBtn = function(cell: any, formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-eye'></i></button> <button type='button' class='btn'><i class='bi bi-pencil-square'></i></button";
    }

    const checkBox = function(cell:any, formatterParams: any){
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
        {title:"Tgl Dibuat", field:"age", hozAlign:"center", headerHozAlign:"center", },
        {title:"Dibuat Oleh", field:"age", hozAlign:"center", headerHozAlign:"center", },
        {title:"Approval", field:"age", hozAlign:"center", headerHozAlign:"center", },
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
        {title:"Tgl Dibuat", field:"age", hozAlign:"center", headerHozAlign:"center", },
        {title:"Dibuat Oleh", field:"age", hozAlign:"center", headerHozAlign:"center", },
        {title:"Approval", field:"age", hozAlign:"center", headerHozAlign:"center", },
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
        {title:"Tgl Dibuat", field:"age", hozAlign:"center", headerHozAlign:"center", },
        {title:"Dibuat Oleh", field:"age", hozAlign:"center", headerHozAlign:"center", },
        {title:"Approval", field:"age", hozAlign:"center", headerHozAlign:"center", },
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

    const infoBtn = function(cell: any, formatterParams: any){
      return "<button type='button' class='btn'><i class='bi bi-info-circle'></i></i></button>";
    }

    const checkBox = function(cell:any, formatterParams: any){
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
        {title:lastMonth, field:objectKeys[3], hozAlign:"center", headerHozAlign:"center", },
        {title:lastWeek, field:objectKeys[3], hozAlign:"center", headerHozAlign:"center", },
        {title:yesterday, field:objectKeys[3], hozAlign:"center", headerHozAlign:"center", },
        {title:today, field:objectKeys[3], hozAlign:"center", headerHozAlign:"center", },
        ],
        headerHozAlign:"center"
    },
    {title:"Yield Change <br/>MoM", field:objectKeys[2], headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Yield Change <br/>WoW", field:objectKeys[2], headerHozAlign:"center", hozAlign:'center', headerSort:false, },
    {title:"Yield Change <br/>1 Day", field:objectKeys[2], headerHozAlign:"center", hozAlign:'center', headerSort:false, },
      ],

  });


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

    const actionBtn = function(cell: any, formatterParams: any){
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

    tabelInflasi.replaceData(dataInflasi);
    tabelPMI.replaceData(dataPMI);
    tabelRetail.replaceData(dataRetail);
    tabelMoneySupply.replaceData(dataMoneySupply);
    tabelForeignExchange.replaceData(dataDevisa);
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
}

