import { Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import * as moment from 'moment';
import { ApexAxisChartSeries, ApexChart,  ApexDataLabels,  ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';

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

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-shl-overview',
  templateUrl: './shl-overview.component.html',
  styleUrls: ['./shl-overview.component.css'],
  providers:[{
    provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
   },]
})

export class ShlOverviewComponent implements OnInit {

  @ViewChild('picker1', { static: false })
  private picker!: MatDatepicker<Date>;
  @ViewChild('picker2', { static: false })
  private picker2!: MatDatepicker<Date>;

  chosenYear!: Date;
  valueYear: any;
  valueYear2: any;

  totalSHLChart!: ApexChart;
  totalSHLChartSeries!: ApexAxisChartSeries;
  xAxisTotalSHLChart!: ApexXAxis;
  totalSHLChartColor!: any[];
  totalSHLDataLabel!: ApexDataLabels;


  constructor(){

  }

  listMonth = [
    {id: 1, month: 'Januari'},
    {id: 2, month: 'Februari'},
    {id: 3, month: 'Maret'},
    {id: 4, month: 'April'},
    {id: 5, month: 'Mei'},
    {id: 6, month: 'Juni'},
    {id: 7, month: 'Juli'},
    {id: 8, month: 'Agustus'},
    {id: 9, month: 'September'},
    {id: 10, month: 'Oktober'},
    {id: 11, month: 'November'},
    {id: 12, month: 'Desember'},
  ]

  data = [
    {
      id:1,
      nama_anak_perusahan: 'PT XYZ',
      nomor_kontrak: '31231/23d1/123',
      total_pagu: 5000000,
      total_penarikan: 5000000,
      total_pembayaran: 5000000,
      saldo: 5000000,
    }
  ]

  getYear(event: any) {
    let { _d } = event;
    console.log(_d);
    this.valueYear = moment(_d).format('YYYY');
    this.picker.close();
  }
  getYear2(event: any) {
    let { _d } = event;
    console.log(_d);
    this.valueYear2 = moment(_d).format('YYYY');
    this.picker2.close();
  }

  getValue(monthParams: string){
   console.log(monthParams);
   const buttonElement = document.getElementById('buttonMonth');
    if (buttonElement) {
    buttonElement.textContent = monthParams;
    }
  }

  async ngOnInit(): Promise<void> {
    try {
      this.totalSHLChart = {
        type: 'bar',
        width: 550,
        height: 400,
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
      this.totalSHLChartSeries = [
        {
          name: 'Non Penerusan Pinjaman',
          data: [280000, 270000, 290000, 260000]
        },
        {
          name: 'Penerusan Pinjaman',
          data: [270000, 290000, 280000, 260000]
        },
      ]
      this.xAxisTotalSHLChart = {
        categories:[
          "Total Pagu",
          "Total Pencarian",
          "Total Repayment",
          "Total Saldo"
        ]
      }
      this.totalSHLChartColor = [
        "#2EB0C2",
        "#256979"
      ]
      this.totalSHLDataLabel = {
        enabled: false
      }
    } catch (error) {

    }
  }

}
