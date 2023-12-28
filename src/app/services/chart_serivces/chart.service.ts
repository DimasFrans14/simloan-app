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
  ApexXAxis} from 'ng-apexcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() {
    this.initializeSHLChart()
    this.initializeAPChart()
    this.initializeDcsrCashFlowChart()
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
  dataDcsrCashFlow: ApexAxisChartSeries = [];
  dcsrCashFlowChart!: ApexChart;
  dcsrCashFlowChartTitle!: ApexTitleSubtitle;
  xAxisDcsrCashFlow!: ApexXAxis;


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
        data: [28, 10, 21, 22, 28, 10, 21, 22]
      },
      {
        name: "DCSR Basis Arus Kas",
        type: "line",
        data: [28, 10, 21, 22, 28, 10, 21, 22]
      },
      {name: "Batasan Minimum",
        type: "line",
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
    }

    this.dcsrCashFlowChartTitle =  {
      text: "Total SHL",
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

}
