import { Component } from '@angular/core';
import { ChartService } from 'src/app/services/chart_serivces/chart.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.css']
})
export class FinancialReportComponent {
  constructor(private chartService: ChartService, private tableConfig: TableServicesService){
    console.log(chartService);
  }

  //chart dcsr basis laporan arus kas
  dataDcsrCashFlow = this.chartService.dataDcsrCashFlow;
  dcsrCashFlowChart = this.chartService.dcsrCashFlowChart;
  dcsrCashFlowChartTitle = this.chartService.dcsrCashFlowChartTitle;
  xAxisDcsrCashFlow = this.chartService.xAxisDcsrCashFlow;
  dcsrCashFlowstroke = this.chartService.dcsrLabaRugistroke;

  //chart dcsr basis laporan laba rugi
  dataDcsrLabaRugi = this.chartService.dataDcsrLabaRugi;
  dcsrLabaRugiChart = this.chartService.dcsrLabaRugiChart;
  dcsrLabaRugiChartTitle = this.chartService.dcsrLabaRugiChart;
  xAxisDcsrLabaRugi = this.chartService.xAxisDcsrLabaRugi;
  dcsrLabaRugistroke = this.chartService.dcsrLabaRugistroke;

  //chart DER
  dataDER = this.chartService.dataDER;
  DERChart = this.chartService.DERChart;
  DERChartTitle = this.chartService.DERChart;
  xAxisDER = this.chartService.xAxisDER;
  DERstroke = this.chartService.DERstroke;

  //chart CICR
  dataCICR = this.chartService.dataCICR;
  CICRChart = this.chartService.CICRChart;
  CICRChartTitle = this.chartService.CICRChart;
  xAxisCICR = this.chartService.xAxisCICR;
  CICRstroke = this.chartService.CICRstroke;

  tableDataImport: any;
  tableImport:any

  ngAfterViewInit(): void {
    this.tableConfig.initializeTableFinancialReport();
  }

}
