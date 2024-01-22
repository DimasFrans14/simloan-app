import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart,  ApexPlotOptions,  ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class ParameterMarketOverviewComponent implements AfterViewInit, OnInit{

  constructor(
    private dataService: DataService,
    private marketUpdateService: MarketUpdateService
    ){
    // console.log(dataService);
  }

  dataKurs: any;
  dataRKAP: any;
  lineChartKursSeries: ApexAxisChartSeries = [];
  lineChartInterestRateSeries: ApexAxisChartSeries = [];

  compareValue: string = 'Compare'

  async ngOnInit(): Promise<void> {
    try {
      const responseKurs = await this.marketUpdateService.fetchDataKurs()
      this.dataKurs = responseKurs;

      const responseRKAP = await this.dataService.fetchDataInterestRateRKAP()
      this.dataRKAP = responseRKAP;

      console.log(this.dataKurs);

      let dataUSD;
      let dataInterest;

      // dataUSD = this.dataKurs.d.list.filter((item: any) => item.mata_uang === 'USD');

      dataInterest = this.dataRKAP.data.content.filter((item: any) => item.grup === 'INTEREST RATE');

      console.log(dataInterest);

      // this.lineChartKursSeries = [
      //   {
      //     name: `${this.dataKurs.data[0].mata_uang}`,
      //     data: [12300, 12000, 13000, 12300, 11000]
      //   },
      //   {
      //     name: `${this.dataKurs.data[1].mata_uang}`,
      //     data: [13000, 11000, 15000, 12300, 11000]
      //   },
      //   {
      //     name: `${this.dataKurs.data[2].mata_uang}`,
      //     data: [12300, 11000, 15000, 12300, 11000]
      //   }
      // ];

      this.lineChartKursSeries = [];

      for (let i = 0; i < this.dataKurs.data.length ; i++) {
        const mataUang = this.dataKurs.data[i].mata_uang;
        const dataValues = [this.dataKurs.data[i].kurs_min3, this.dataKurs.data[i].kurs_min4, this.dataKurs.data[i].kurs_min5, this.dataKurs.data[i].kurs_min6];

        this.lineChartKursSeries.push({
          name: `${mataUang}`,
          data: dataValues
        });
      }


      this.lineChartInterestRateSeries = [
        {
          name: `${dataInterest[0].mtu}`,
          data: [dataInterest[0].rate, 10, 12, 16, 11]
        },
        {
          name: `${dataInterest[1].mtu}`,
          data: [13, dataInterest[1].rate, 10, 12, 15]
        },
        {
          name: `${dataInterest[2].mtu}`,
          data: [12, 11, dataInterest[2].rate, 15, 11]
        },
        {
          name: `${dataInterest[3].mtu}`,
          data: [12, 11, dataInterest[3].rate, 15, 11]
        },
        {
          name: `${dataInterest[4].mtu}`,
          data: [12, 11, dataInterest[4].rate, 15, 11]
        },
        {
          name: `${dataInterest[5].mtu}`,
          data: [12, 11, dataInterest[5].rate, 15, 11]
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
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true,
      }
    },
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
