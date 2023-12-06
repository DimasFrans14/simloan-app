import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart,  ApexPlotOptions,  ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class ParameterMarketOverviewComponent implements AfterViewInit, OnInit{


  ngOnInit(): void {

  }

  isVisibleLine: boolean = true;
  isVisibleBar: boolean = true;

  isCompare: boolean = false;

  compare(){
    this.isCompare = !this.isCompare
  }

  toggleVisibilityLine() {
    if(!this.isVisibleBar){
      this.isVisibleBar = !this.isVisibleBar;
    }
    this.isVisibleLine = true;
  }

  toggleVisibilityBar() {
    if(this.isVisibleLine){
      this.isVisibleLine = !this.isVisibleLine;
    }
    this.isVisibleBar = false;
  }

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


  chartSeries2: ApexAxisChartSeries = [
    {
      name: "Net Profit",
      data: [111, -55, -57]
    },
    {
      name: "Revenue",
      data: [76, -85, -101]
    },
    {
      name: "Free Cash Flow",
      data: [35, -41, -36]
    }
  ];

  currencyChartDetails: ApexChart = {
    type: 'line',
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

  currencyBarChartDetails: ApexChart = {
    type: 'bar',
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

  commodityChartDetails: ApexChart = {
    type: 'line',
    height: 340,
    width: 295,
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
    text: "Kurs Rupiah",
    style: {
      fontSize:  '18px',
      fontWeight:  500,
      // fontFamily:  undefined,
      color:  '#000000'
    },
  }

  commodityChartTitle: ApexTitleSubtitle =  {
    text: "WTI & Brent (USD/Ton)",
    style: {
      fontSize:  '18px',
      fontWeight:  500,
      // fontFamily:  undefined,
      color:  '#000000'
    },
  }

  changeChart(){
    alert('Change chart');
  }

  constructor(){

  }

  ngAfterViewInit(): void {

  }

}
