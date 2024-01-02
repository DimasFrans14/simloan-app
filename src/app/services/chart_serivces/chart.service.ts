import { Injectable } from '@angular/core';
import { ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexStroke} from 'ng-apexcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() {
    this.initializeSHLChart()
    this.initializeAPChart()
    this.initializeDcsrCashFlowChart()
    this.initializeDcsrLabaRugiChart()
    this.initializeDERChart()
    this.initializeCICRChart()
  }

  //SHL
  dataChartSHL: ApexAxisChartSeries = [];
  shlChart!: ApexChart;
  shlChartTitle!: ApexTitleSubtitle;
  colors: any;
  xAxisSHL!: ApexXAxis;

  //Availability Period
  dataChartAP: ApexAxisChartSeries = [];
  APChart!: ApexChart;
  apChartTitle!: ApexTitleSubtitle;
  xAxisAP!: ApexXAxis;

  //Financial Report Chart
    //chart DCSR basis laporan arus kas
  dataDcsrCashFlow: ApexAxisChartSeries = [];
  dcsrCashFlowChart!: ApexChart;
  dcsrCashFlowChartTitle!: ApexTitleSubtitle;
  dcsrstroke!:ApexStroke;
  xAxisDcsrCashFlow!: ApexXAxis;
    //chart DCSR basis laporan laba rugi
  dataDcsrLabaRugi: ApexAxisChartSeries = [];
  dcsrLabaRugiChart!: ApexChart;
  dcsrLabaRugiChartTitle!: ApexTitleSubtitle;
  dcsrLabaRugistroke!:ApexStroke;
  xAxisDcsrLabaRugi!: ApexXAxis;
    //chart DER
  dataDER: ApexAxisChartSeries = [];
  DERChart!: ApexChart;
  DERChartTitle!: ApexTitleSubtitle;
  DERstroke!:ApexStroke;
  xAxisDER!: ApexXAxis;

  //chart DER
  dataCICR: ApexAxisChartSeries = [];
  CICRChart!: ApexChart;
  CICRChartTitle!: ApexTitleSubtitle;
  CICRstroke!:ApexStroke;
  xAxisCICR!: ApexXAxis;
  initializeSHLChart(){

    this.dataChartSHL = [
      {
        name: "Non Penerusan Pinjaman",
        data: [21, 22, 10, 28]
      },
      {
        name: "Non Penerusan Pinjaman",
        data: [28, 10, 21, 22]
      }
    ];

    this.shlChart = {
      type: 'bar',
      width: 470,
      height: 400,
      // width:,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        }
      }
    }

    this.shlChartTitle =  {
      text: "Total SHL",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.colors = [
      '#2EB0C2',
      '#256979',
    ]

    this.xAxisSHL = {
      categories: [
        ["Total Pagu"],
        ["Total Pencarian"],
        ["Total Repayment"],
        ["Total Saldo"],
      ]
    }
  }

  initializeAPChart(){

    this.dataChartAP = [
      {
        name: "Non Penerusan Pinjaman",
        data: [21, 22, 10]
      },
      {
        name: "Non Penerusan Pinjaman",
        data: [28, 10, 21]
      }
    ];

    this.APChart = {
      type: 'bar',
      width: 470,
      height: 400,
      // width:,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        }
      }
    }

    this.apChartTitle =  {
      text: "Availability Period",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.colors = [
      '#2EB0C2',
      '#256979',
    ]

    this.xAxisAP = {
      categories: [
        ["Fasilitas Total Pagu"],
        ["Pencarian Total"],
        ["Fasilitas Saldo"],
      ]
    }
  }
// chart grafikfinancial report

  // chart DCSR basis laporan arus arus kas
  initializeDcsrCashFlowChart(){
    this.dataDcsrCashFlow = [
      {
        name: "Net Reveneue basis Arus Kas",
        type: "column",
        data: [21, 22, 20, 28, 21, 22, 23, 28]
      },
      {
        name: "Total Debt Service",
        type: "column",
        data: [28, 12, 21, 22, 28, 16, 21, 22]
      },
      {
        name: "DCSR Basis Arus Kas",
        data: [28, 4, 21, 22, 28, 17, 21, 22]
      },
      {name: "Batasan Minimum",
        data: [15, 15, 15, 15, 15, 15, 15, 15]
      }
    ];

    this.dcsrCashFlowChart = {
      type: 'line',
      width: 470,
      height: 400,
      // width:,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        }
      }
    },

    this.dcsrstroke = {
      width: 5,
      curve: "straight",
      dashArray: [0, 0, 0, 8]
    }

    this.dcsrCashFlowChartTitle =  {
      text: "DCSR Basis Laporan Arus Kas",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.xAxisDcsrCashFlow = {
      categories: [
        ["2018"],
        ["2019"],
        ["2020"],
        ["2021"],
        ["2022"],
        ["2023"],
        ["RKAP"],
        ["Outlook"],
      ]
    }
  }

  //chart dcsr basis laporan laba rugi
  initializeDcsrLabaRugiChart(){
    this.dataDcsrLabaRugi = [
      {
        name: "Net Reveneue basis Arus Kas",
        type: "column",
        data: [20, 15, 18, 23, 12, 14, 12, 25]
      },
      {
        name: "Total Debt Service",
        type: "column",
        data: [20, 15, 18, 23, 12, 14, 12, 25]
      },
      {
        name: "DCSR Basis Arus Kas",
        data: [20, 15, 18, 23, 12, 14, 12, 25]
      },
      {name: "Batasan Minimum",
        data: [15, 15, 15, 15, 15, 15, 15, 15]
      }
    ];

    this.dcsrLabaRugiChart = {
      type: 'line',
      width: 470,
      height: 400,
      // width:,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        }
      }
    },

    this.dcsrLabaRugistroke = {
      width: 5,
      curve: "straight",
      dashArray: [0, 0, 0, 8]
    }

    this.dcsrLabaRugiChartTitle =  {
      text: "DCSR Basis Laporan Laba Rugi",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.xAxisDcsrLabaRugi = {
      categories: [
        ["2018"],
        ["2019"],
        ["2020"],
        ["2021"],
        ["2022"],
        ["2023"],
        ["RKAP"],
        ["Outlook"],
      ]
    }
  }

  //chart DER
  initializeDERChart(){
    this.dataDER = [
      {
        name: "Net Reveneue basis Arus Kas",
        type: "column",
        data: [18, 12, 10, 14, 18, 22, 18, 20]
      },
      {
        name: "Total Debt Service",
        type: "column",
        data: [19, 23, 15, 18, 17, 14, 16, 22]
      },
      {
        name: "DCSR Basis Arus Kas",
        data: [21, 19, 14, 15, 17, 11, 16, 19]
      },
      {name: "Batasan Minimum",
        data: [15, 15, 15, 15, 15, 15, 15, 15]
      }
    ];

    this.DERChart = {
      type: 'line',
      width: 470,
      height: 400,
      // width:,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        }
      }
    },

    this.DERstroke = {
      width: 5,
      curve: "straight",
      dashArray: [0, 0, 0, 8]
    }

    this.DERChartTitle =  {
      text: "DCSR Basis Laporan Laba Rugi",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.xAxisDER = {
      categories: [
        ["2018"],
        ["2019"],
        ["2020"],
        ["2021"],
        ["2022"],
        ["2023"],
        ["RKAP"],
        ["Outlook"],
      ]
    }
  }

  //chart CICR
  initializeCICRChart(){
    this.dataCICR = [
      {
        name: "Net Reveneue basis Arus Kas",
        type: "column",
        data: [15, 17, 20, 14, 16, 21, 18, 14]
      },
      {
        name: "Total Debt Service",
        type: "column",
        data: [22, 18, 16, 18, 14, 16, 19, 21]
      },
      {
        name: "DCSR Basis Arus Kas",
        data: [21, 19, 14, 15, 17, 11, 16, 19]
      },
      {name: "Batasan Minimum",
        data: [10, 10, 10, 10, 10, 10, 10, 10]
      }
    ];

    this.CICRChart = {
      type: 'line',
      width: 470,
      height: 400,
      // width:,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        }
      }
    },

    this.CICRstroke = {
      width: 5,
      curve: "straight",
      dashArray: [0, 0, 0, 8]
    }

    this.CICRChartTitle =  {
      text: "DCSR Basis Laporan Laba Rugi",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.xAxisCICR = {
      categories: [
        ["2018"],
        ["2019"],
        ["2020"],
        ["2021"],
        ["2022"],
        ["2023"],
        ["RKAP"],
        ["Outlook"],
      ]
    }
  }

}
