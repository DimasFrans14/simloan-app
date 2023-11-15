import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart,  ApexTitleSubtitle } from 'ng-apexcharts';

// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexTitleSubtitle
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   title: ApexTitleSubtitle;
// };

@Component({
  selector: 'app-shl-overview',
  templateUrl: './shl-overview.component.html',
  styleUrls: ['./shl-overview.component.css']
})

export class ShlOverviewComponent implements OnInit {

  chartSeries: ApexAxisChartSeries = [
    {
      name: "Net Profit",
      data: [111, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 134]
    }
  ];

  chartDetails: ApexChart = {
    type: 'bar',
    height: 564,
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

  chartTitle: ApexTitleSubtitle =  {
    text: "General",
    style: {
      fontSize:  '18px',
      fontWeight:  500,
      // fontFamily:  undefined,
      color:  '#000000'
    },
  }

  // chartToolbar:

  constructor(){

  }

  ngOnInit(): void {

  }

}
