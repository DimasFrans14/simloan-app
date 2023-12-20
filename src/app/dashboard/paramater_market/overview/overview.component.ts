import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart,  ApexPlotOptions,  ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class ParameterMarketOverviewComponent implements AfterViewInit, OnInit{

  constructor(private dataService: DataService){
    console.log(dataService);
  }

  dataKurs: any;
  dataRKAP: any;
  lineChartKursSeries: ApexAxisChartSeries = [];
  lineChartInterestRateSeries: ApexAxisChartSeries = [];

  async ngOnInit(): Promise<void> {
    try {
      const response = await this.dataService.fetchDataCommoditiesAll()
      this.dataKurs = response;

      const responseRKAP = await this.dataService.fetchDataInterestRateRKAP()
      this.dataRKAP = responseRKAP;

      console.log(this.dataKurs.d.list);

      let dataUSD;
      let dataInterest;

      dataUSD = this.dataKurs.d.list.filter((item: any) => item.mata_uang === 'USD');

      dataInterest = this.dataRKAP.data.content.filter((item: any) => item.grup === 'INTEREST RATE');

      console.log(dataInterest);

      this.lineChartKursSeries = [
        {
          name: `${this.dataKurs.d.list[0].mata_uang}`,
          data: [dataUSD[0].nilai_rkap, 12000, 13000, 12300, 11000]
        },
        {
          name: `${this.dataKurs.d.list[1].mata_uang}`,
          data: [13000, dataUSD[0].nilai_rkap, 15000, 12300, 11000]
        },
        {
          name: `${this.dataKurs.d.list[2].mata_uang}`,
          data: [12300, 11000, dataUSD[0].nilai_rkap, 12300, 11000]
        }
      ];

      this.lineChartInterestRateSeries = [
        {
          name: `${dataInterest[0].mtu}`,
          data: [dataInterest[0].rate, 10, 12]
        },
        {
          name: `${dataInterest[1].mtu}`,
          data: [13, dataInterest[1].rate, 10]
        },
        {
          name: `${dataInterest[2].mtu}`,
          data: [12, 11, dataInterest[2].rate]
        },
        {
          name: `${dataInterest[3].mtu}`,
          data: [12, 11, dataInterest[3].rate]
        },
        {
          name: `${dataInterest[4].mtu}`,
          data: [12, 11, dataInterest[4].rate]
        },
        {
          name: `${dataInterest[5].mtu}`,
          data: [12, 11, dataInterest[5].rate]
        }
      ];
    } catch (error) {
      console.log(error);
    }
  }

  ngAfterViewInit(): void {

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

}
