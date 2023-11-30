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
    this.initializeChart()
  }

  dataChartSHL: ApexAxisChartSeries = [];
  shlChart!: ApexChart;
  shlChartTitle!: ApexTitleSubtitle;
  colors: any;
  xAxisSHL!: ApexXAxis;

  initializeChart(){

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
      width: 540,
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
}
