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
  ApexStroke,
  ApexMarkers,
  ApexFill,
  ApexTooltip,
  ApexResponsive,
  ApexNonAxisChartSeries} from 'ng-apexcharts';

@Injectable({
  providedIn: 'root'
})

export class OverviewChartService {

  constructor() {
    this.initializeCommoditiesLineChart()
   }

  lineChartDetail!: ApexChart;
  lineSeries!:  ApexAxisChartSeries;
  lineYaxis!: ApexYAxis | ApexYAxis[];
  lineXAxis!: ApexXAxis;
  lineStroke!: ApexStroke

  initializeCommoditiesLineChart(){
    this.lineChartDetail = {
      type: 'line',
      // height: 400,
    // width:,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        }
      },
    }

    this.lineSeries = [
      {
        name: 'COAL',
        data: [10,17,13,11,14,16,17]
      }
    ]

    this.lineYaxis = [
      {
        title: {
          text: 'Value'
        }
      }
    ]

    this.lineXAxis = {
      categories: [
        '01/02/2021',
        '01/03/2021',
        '01/04/2021',
        '01/05/2021',
        '01/06/2021',
        '01/07/2021',
        '01/08/2021',
      ]
    }

    this.lineStroke = {
      curve: 'smooth',
      width: 1
    }

  }

}
