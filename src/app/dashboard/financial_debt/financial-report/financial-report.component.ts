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

  dataDcsrCashFlow = this.chartService.dataDcsrCashFlow;
  dcsrCashFlowChart = this.chartService.dcsrCashFlowChart;
  dcsrCashFlowChartTitle = this.chartService.dcsrCashFlowChartTitle;
  xAxisDcsrCashFlow = this.chartService.xAxisDcsrCashFlow;

  tableDataImport: any;
  tableImport:any

  ngAfterViewInit(): void {
    this.tableConfig.initializeTableFinancialReport();
  }

}
