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
import { ChartService } from 'src/app/services/chart_serivces/chart.service';


@Component({
  selector: 'app-report-shl',
  templateUrl: './report-shl.component.html',
  styleUrls: ['./report-shl.component.css']
})
export class ReportShlComponent {

  constructor(
    private chartService: ChartService
  ){
    console.log(chartService);
  }


  //Total SHL Grafik
  dataChartSHL = this.chartService.dataChartSHL;
  shlChart = this.chartService.shlChart;
  shlChartTitle = this.chartService.shlChartTitle;
  colors = this.chartService.colors;
  xAxisSHL = this.chartService.xAxisSHL;
  shlStroke = this.chartService.shlStroke;

  //Availibility Period Grafik
  dataChartAP = this.chartService.dataChartAP
  APChart = this.chartService.APChart
  apChartTitle = this.chartService.apChartTitle
  xAxisAP = this.chartService.xAxisAP
}
