import { Injectable, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

@Injectable({
  providedIn: 'root'
})
export class TableServicesService {

  public sharedData: any;
  public testData: any;

  public dataCommodities: any;
  public dataPDB: any;
  public dataInflasi: any;
  public dataPMI: any;

  setData(data: any) {
    this.sharedData = data;
    // console.log('shared data', this.sharedData);
    // let dataRow = this.sharedData.data.content;
    // console.log(dataRow);
  }

  getDataCommodities(data: any){
    this.dataCommodities = data.d.list;
    console.log('data commodities', this.dataCommodities);

  }
  getDataPDB(data: any){
    this.dataPDB = data.d.list;
    console.log('data pdb', this.dataPDB);
  }

  getDataInflasi(data: any){
    this.dataInflasi = data.d.list;
    console.log('data inflasi', this.dataInflasi);
  }

  getDataPMI(data: any){
    this.dataPMI = data.d.list;
    console.log('data PMI', this.dataPMI);
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
    //   data,
    //   value
    // ]);

    return data;
     // only allow the name cell to be edited if the age is over 18
}

  initializeTableData() {
    this.tableDataCurrency = [
      {id:1, name:"USD", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"EUR", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"JPY", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"GBP", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];

    this.tableCurrency = new Tabulator(".table-currency", {
          // height:205,
      data:this.tableDataCurrency,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Exchange Rate",
        columns:[
        {title:"RKAP <br/>23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input", editable: this.editCheck},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input", editable: this.editCheck},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input", editable: this.editCheck},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input", editable: this.editCheck},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input", editable: this.editCheck},
        ],
        headerHozAlign:"center"
    },
    {title:"Change <br/>RKAP", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change <br/>MoM", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change <br/>WoW", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change 1 Day", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
   }
    );

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
      data:this.tableDataInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:false},

        {title:"RKAP <br/>23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},

        {title:"Change <br/>RKAP", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change <br/>MoM", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change <br/>WoW", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change 1 Day", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
   });

    this.tableDataBondYield = [
    {id:1, name:"USD", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
    {id:2, name:"EUR", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
    {id:3, name:"JPY", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
    {id:4, name:"GBP", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
  ];

    this.tableBondYield = new Tabulator(".table-bondYield", {
      // height:205,
      data:this.tableDataBondYield,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Exchange Rate",
        columns:[
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        ],
        headerHozAlign:"center"
    },
    {title:"Yield Change <br/>MoM", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Yield Change <br/>WoW", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Yield Change <br/>1 Day", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],

  });

    this.tableDataCommodities = [
      {id:1, name:"USD", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"EUR", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"JPY", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"GBP", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];

    this.tableCommodities = new Tabulator(".table-commodities", {
    // height:205,
    data:this.dataCommodities,
    layout:"fitColumns",
    columns:[
      {title:"IDR", field:"mata_uang", headerHozAlign:"center", hozAlign:'left', headerSort:false},
  {//create column group
      title:"Exchange Rate",
      columns:[
      {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"24/02/23", field:"beli", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"20/03/23", field:"beli_min1", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"24/02/23", field:"beli_min2", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"20/03/23", field:"beli_min3", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      ],
      headerHozAlign:"center"
  },
  {title:"Change <br/>MoM", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change Dari RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    ],

  });

    this.tableDataPDB = [
        {id:1, name:"Q4 2023F", pdb: "4.90"},
        {id:2, name:"Q4 2023F", pdb: "4.90"},
        {id:3, name:"Q4 2023F", pdb: "4.90"},
        {id:4, name:"Q4 2023F", pdb: "4.90"},
        {id:5, name:"Q4 2023F", pdb: "4.90"},
        {id:6, name:"Q4 2023F", pdb: "4.90"},
        {id:7, name:"Q4 2023F", pdb: "4.90"},
        {id:8, name:"Q4 2023F", pdb: "4.90"},
        {id:9, name:"Q4 2023F", pdb: "4.90"},
        {id:10, name:"Q4 2023F", pdb: "4.90"},
        {id:11, name:"Q4 2023F", pdb: "4.90"},
        {id:12, name:"Q4 2023F", pdb: "4.90", frozen:true},
    ]

    this.tablePDB = new Tabulator(".table-pdb", {
      // height:20,
      data:this.dataPDB,
      layout:"fitDataTable",
      columnMoved:function(column, columns){
        alert("The user has moved column: " + column.getField()); //display the columns field name
    },
      columns:[
        {title:"Periode", field:"kuartal", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input", minWidth: 200},
        {title:"Tahun", field:"tahun", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", minWidth: 100},
        {title:"PDB", field:"nilai", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input", minWidth: 100},
      ],
    });

    this.tableDataInflasi = [
        {id:1, month:"Januari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:2, month:"Februari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:3, month:"Maret", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:4, month:"April", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:5, month:"Mei", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:6, month:"Juni", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:7, month:"Juli", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:8, month:"Agustus", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:9, month:"September", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:10, month:"Oktober", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:11, month:"November", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:12, month:"Desember", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
    ]

    this.tableInflasi = new Tabulator(".table-inflasi", {
      // height:205,
      data:this.dataInflasi,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"bulan", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input"},
        {title:"2020", field:"nilai_year_min0", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2021", field:"nilai_year_min1", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2022", field:"nilai_year_min2", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2023", field:"nilai_year_min3", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
    });

    this.tableDataMoneySupply = [
        {id:1, month:"Januari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:2, month:"Februari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:3, month:"Maret", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:4, month:"April", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:5, month:"Mei", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:6, month:"Juni", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:7, month:"Juli", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:8, month:"Agustus", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:9, month:"September", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:10, month:"Oktober", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:11, month:"November", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:12, month:"Desember", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
    ]

    this.tableMoneySupply = new Tabulator(".table-moneySupply", {
      // height:205,
      data:this.tableDataMoneySupply,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input"},
        {title:"2020", field:"thn2020", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2021", field:"thn2021", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2022", field:"thn2022", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2023", field:"thn2023", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
    });

    this.tableDataForeignExchange = [
        {id:1, month:"Januari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:2, month:"Februari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:3, month:"Maret", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:4, month:"April", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:5, month:"Mei", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:6, month:"Juni", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:7, month:"Juli", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:8, month:"Agustus", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:9, month:"September", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:10, month:"Oktober", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:11, month:"November", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:12, month:"Desember", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
    ]

    this.tableForeignExchange = new Tabulator(".table-foreignExchange", {
      // height:205,
      data:this.tableDataForeignExchange,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input"},
        {title:"2020", field:"thn2020", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2021", field:"thn2021", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2022", field:"thn2022", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2023", field:"thn2023", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
    });

    this.tableDataPMI = [
        {id:1, month:"Januari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:2, month:"Februari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:3, month:"Maret", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:4, month:"April", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:5, month:"Mei", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:6, month:"Juni", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:7, month:"Juli", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:8, month:"Agustus", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:9, month:"September", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:10, month:"Oktober", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:11, month:"November", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:12, month:"Desember", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
    ]

    this.tablePMI = new Tabulator(".table-pmi", {
      // height:205,
      height:"555px",
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

    this.tableDataRetail = [
        {id:1, month:"Januari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:2, month:"Februari", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:3, month:"Maret", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:4, month:"April", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:5, month:"Mei", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:6, month:"Juni", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:7, month:"Juli", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:8, month:"Agustus", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:9, month:"September", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:10, month:"Oktober", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:11, month:"November", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
        {id:12, month:"Desember", thn2020: "4.90", thn2021: "4.90", thn2022: "4.90", thn2023: "4.90"},
    ]

    this.tableRetail = new Tabulator(".table-retail", {
      // height:205,
      data:this.tableDataRetail,
      layout:"fitColumns",
      columns:[
        {title:"Periode", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:true, editor: "input"},
        {title:"2020", field:"thn2020", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2021", field:"thn2021", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2022", field:"thn2022", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"2023", field:"thn2023", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
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
          // height:205,
      data:this.sharedData,
      layout:"fitColumns",
      columns:[
        {title:"IDR", field:"mata_uang", headerHozAlign:"center", hozAlign:'left', headerSort:false},
    {//create column group
        title:"Exchange Rate",
        columns:[
        {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"beli", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"beli_min1", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"beli_min2", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"beli_min3", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        ],
        headerHozAlign:"center"
    },
    {title:"Change <br/>MoM", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    {title:"Change Dari RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
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
      {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
      {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
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
      {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
      {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
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
      {title:"Tanggal", field:"month", headerHozAlign:"left", hozAlign:'left', headerSort:false, editor: "input", minWidth: 130},
      {title:"USD", field:"USD", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"EUR", field:"EUR", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"JPY", field:"JPY", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      {title:"GBP", field:"GBP", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
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
      data:this.tableDataInterestRate,
      layout:"fitColumns",
      columns:[
        {title:"Rates", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:false},

        {title:"RKAP <br/>23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"24/02/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"20/03/23", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},

        {title:"Change <br/>RKAP", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change <br/>MoM", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change <br/>WoW", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
        {title:"Change 1 Day", field:"rate", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
      ],
   });
  }

  initializeTableDataCommodities(){
    this.tableDataCommodities = [
      {id:1, name:"USD", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"EUR", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"JPY", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"GBP", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];

    this.tableCommodities = new Tabulator(".table-commoditiesDetail", {
    // height:205,
    data:this.dataCommodities,
    layout:"fitColumns",
    columns:[
      {title:"IDR", field:"mata_uang", headerHozAlign:"center", hozAlign:'left', headerSort:false},
  {//create column group
      title:"Exchange Rate",
      columns:[
      {title:"RKAP <br/>23", field:"nilai_rkap", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"24/02/23", field:"beli", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"20/03/23", field:"beli_min1", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"24/02/23", field:"beli_min2", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      {title:"20/03/23", field:"beli_min3", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      ],
      headerHozAlign:"center"
  },
  {title:"Change <br/>MoM", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change <br/>WoW", field:"change_wow", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change <br/>1 Day", field:"change_1day", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
  {title:"Change Dari RKAP", field:"change_rkap", headerHozAlign:"center", hozAlign:'center', headerSort:false, editor: "input"},
    ],

  });
  }
  initializeTableDataFindebt(){

    this.tableDataImport = [
      {id:1, name:"BI7DRR", age:"11000", rate:"2,53%", col:"red", dob:"14/05/1982"},
      {id:2, name:"FED RATE", age:"12000", rate:"2,53%", col:"blue", dob:"14/05/1982"},
      {id:3, name:"AVG SOFR", age:"13000", rate:"2,53%", col:"green", dob:"22/05/1982"},
      {id:4, name:"JIBOR", age:"14000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
      {id:5, name:"EURIBOR", age:"15000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
      {id:6, name:"AVERAGE TIME DOPOSITE (3 Mo)", age:"15000", rate:"2,53%", col:"orange", dob:"01/08/1980"},
    ];

    this.tableImport = new Tabulator(".table-import", {
      // height:205,
      data:this.tableDataImport, 
      layout:"fitColumns",
      columns:[
        {title:"File", field:"name", headerHozAlign:"center", hozAlign:'left', headerSort:true},
        {title:"Tgl Dibuat", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Dibuat Oleh", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Approval", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Status", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
        {title:"Action", field:"age", hozAlign:"center", headerHozAlign:"center", editor: "input"},
      ],
    });
  }

}

