import { Component } from '@angular/core';
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


@Component({
  selector: 'app-report-shl',
  templateUrl: './report-shl.component.html',
  styleUrls: ['./report-shl.component.css']
})
export class ReportShlComponent {

  chartSeries2: ApexAxisChartSeries = [
    {
      name: "distibuted",
      data: [21, 22, 10, 28]
    },
    {
      name: "distibuted2",
      data: [28, 10, 22, 21]
    },
    // {
    //   name: "Free Cash Flow",
    //   data: [35, -41, -36]
    // }
  ];

  currencyBarChartDetails: ApexChart = {
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

  currencyChartTitle: ApexTitleSubtitle =  {
    text: "Total SHL",
    style: {
      fontSize:  '18px',
      fontWeight:  500,
      // fontFamily:  undefined,
      color:  '#000000'
    },
  }

  // yAxis: ApexYAxis = {

  // }

  xAxis: ApexXAxis = {
    categories: [
          ["Total Pagu"],
          ["Total Pencarian"],
          ["Total Repayment"],
          ["Total Saldo"],
    ]
  }

}
