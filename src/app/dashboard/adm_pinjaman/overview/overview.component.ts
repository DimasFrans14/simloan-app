import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart_serivces/chart.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{

  constructor(
    private chartService: ChartService
  ){

  }

  ngOnInit(): void {
    this.chartService.initializeOutstandingDebtSummaryTahunan()
    this.chartService.initializeAdmBarChart()
    this.chartService.initializeColumnAdmChart()
  }

  annualOutstandingSeries = this.chartService.annualOutstandingSeries;
  chartAdm = this.chartService.chartAdm;
  title = this.chartService.title;
  xAxis = this.chartService.xAxis;
  yAxis = this.chartService.yAxis;
  stroke = this.chartService.stroke;
  dataLabels = this.chartService.dataLabels;
  fill = this.chartService.fill;
  legend = this.chartService.legend;
  tooltip = this.chartService.tooltip;

  seriesBar = this.chartService.seriesBar;
  chartAdmBar = this.chartService.chartAdmBar;
  responsiveBarChart = this.chartService.responsiveBarChart;
  labelsBar = this.chartService.labelsBar;

  columnAdmChartSeries = this.chartService.columnAdmChartSeries;
  columnAdmChart = this.chartService.columnAdmChart;
  columnAdmChartLabel = this.chartService.columnAdmChartLabel;
  columnAdmChartPlot = this.chartService.columnAdmChartPlot;
  columnAdmChartYaxis = this.chartService.columnAdmChartYaxis;
  columnAdmChartXaxis = this.chartService.columnAdmChartXaxis;
  columnAdmChartFill = this.chartService.columnAdmChartFill;
  columnAdmChartTitle = this.chartService.columnAdmChartTitle;



  itemExchangeRate = [
    {
      'kurs': 'IDR/EUR',
      'nilai': '1.111',
      'percentage': '0.26%'
    },
    {
      'kurs': 'IDR/AUD',
      'nilai': '2.222',
      'percentage': '0.26%'
    },
    {
      'kurs': 'IDR/USD',
      'nilai': '3.333',
      'percentage': '0.26%'
    },
    {
      'kurs': 'IDR/JPY',
      'nilai': '4.444',
      'percentage': '0.26%'
    }
  ]

  itemUnusedLoan = [
    {
      'id': 1,
      'bank': 'BANK RAKYAT INDONESIA, TBK',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 2,
      'bank': 'BANK DKI JAKARTA',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 3,
      'bank': 'BANK RAKYAT INDONESIA, TBK',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 4,
      'bank': 'BANK NASIONAL INDONESIA, TBK',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 5,
      'bank': 'BANK CIMB NIAGA, TBK',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 6,
      'bank': 'BANK SYARIAH INDONESIA, TBK',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 7,
      'bank': 'BANK DANAMON',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 8,
      'bank': 'BANK OCBC NISP',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 9,
      'bank': 'BANK PERMATA',
      'value': '62.02',
      'icon': ''
    },
    {
      'id': 10,
      'bank': 'BANK PANIN',
      'value': '62.02',
      'icon': ''
    },
  ]

  itemAdmPinjaman = [
    {
      'titleAdm': 'Disbursement',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    },
    {
      'titleAdm': 'Unused Loan',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    },
    {
      'titleAdm': 'Principal Payment',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    },
    {
      'titleAdm': 'Interest Payment',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    },
    {
      'titleAdm': 'Outstanding',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    }
  ]

}
