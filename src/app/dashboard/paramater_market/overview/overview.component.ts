import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart,  ApexPlotOptions,  ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
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
  chartSeries2: ApexAxisChartSeries = [];
  lineChartInterestRateSeries: ApexAxisChartSeries = [];
  lineYAxis!: ApexYAxis;
  tesXaxis!: ApexXAxis;

  selectedItems!: number;

  tesLocalStorageKurs: any;
  tesFilterKurs : any;

  dataCompare = [
    {
      'id_kurs': 1,
      'kurs': 'USD',
      'changeRKAP': '2,53%',
      'changeWoW': '3,53%',
      'changeMoM': '4,53%',
      'change_1Day': '5,53'
    },
    {
      'id_kurs': 2,
      'kurs': 'EUR',
      'changeRKAP': '2,53%',
      'changeWoW': '3,53%',
      'changeMoM': '4,53%',
      'change_1Day': '5,53'
    },
    {
      'id_kurs': 3,
      'kurs': 'JPY',
      'changeRKAP': '2,53%',
      'changeWoW': '3,53%',
      'changeMoM': '4,53%',
      'change_1Day': '5,53'
    },
  ]

  sampleData = {
      'id_kurs': 4,
      'kurs': 'AUD',
      'changeRKAP': '2,53%',
      'changeWoW': '3,53%',
      'changeMoM': '4,53%',
      'change_1Day': '5,53'
  }

  addSample(event: any){
    // console.log(event);
    const check = this.tesLocalStorageKurs.filter(
      (item: any) => item.mata_uang.includes(event)
    )

    const getRow = this.tesFilterKurs.filter(
      (item: any) => item.mata_uang.includes(event)
    )
    console.log(check);

    if(event != undefined){
      const data = this.tesLocalStorageKurs.filter((item: any) => item.mata_uang.includes(event))
      console.log(data);
      if(data.length < 1){
        this.tesLocalStorageKurs.push(getRow[0])
        console.log(this.tesLocalStorageKurs);
        return this.tesLocalStorageKurs
      }
      else{
        return null
      }
    }
    else{
      return null
    }
  }

  getValueCompare(event: any){
    console.log(event);
  }

  hideValueCompare: boolean = false;
  hideCompare(event: any){
    const check = this.tesLocalStorageKurs.filter(
      (item: any) => item.mata_uang.includes(event)
    )
    if(event != undefined){
      this.hideValueCompare = !this.hideValueCompare
      console.log(check);
      for(let i=0; i<check.length; i++){
        if(this.tesLocalStorageKurs.length > 2){
          const tes = this.tesLocalStorageKurs.filter(
            (item: any) => item.mata_uang != check[i].mata_uang
          )
          console.log(tes);
          this.tesLocalStorageKurs = tes
          return this.tesLocalStorageKurs
        }
        else{
          alert('data tidak boleh kurang dari 2');
          return this.tesLocalStorageKurs
        }
      }
    }
    else{
      console.log('else');
    }
    // console.log(this.tesLocalStorageKurs, this.dataKurs.data);
  }

  cancelCompare(){
    const getCompareDate: any = localStorage.getItem('compareData')
    this.tesLocalStorageKurs = JSON.parse(getCompareDate)
  }

  async ngOnInit(): Promise<void> {
    try {
      const responseKurs = await this.marketUpdateService.fetchDataKurs()
      this.dataKurs = responseKurs;
      localStorage.setItem('compareData', JSON.stringify(this.dataKurs.data))

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
      this.chartSeries2 = [];

      for (let i = 0; i < this.dataKurs.data.length ; i++) {

        typeof(this.dataKurs.data[i].kurs) === 'string' ? parseFloat(this.dataKurs.data[i].kurs.replace(/,/g, '')) : parseFloat(this.dataKurs.data[i].kurs)

        typeof(this.dataKurs.data[i].kurs_min1) === 'string' ? parseFloat(this.dataKurs.data[i].kurs_min1.replace(/,/g, '')) : parseFloat(this.dataKurs.data[i].kurs_min1)

        typeof(this.dataKurs.data[i].kurs_min2) === 'string' ? parseFloat(this.dataKurs.data[i].kurs_min2.replace(/,/g, '')) : parseFloat(this.dataKurs.data[i].kurs_min2)

        typeof(this.dataKurs.data[i].kurs_min3) === 'string' ? parseFloat(this.dataKurs.data[i].kurs_min3.replace(/,/g, '')) : parseFloat(this.dataKurs.data[i].kurs_min3)

        const mataUang = this.dataKurs.data[i].mata_uang;
        const dataValues = [this.dataKurs.data[i].kurs_min3, this.dataKurs.data[i].kurs_min2, this.dataKurs.data[i].kurs_min1, this.dataKurs.data[i].kurs];

        this.lineChartKursSeries.push({
          name: `${mataUang}`,
          data: dataValues
        });

        this.chartSeries2.push({
          name: `${mataUang}`,
          data: dataValues
        })
      }
      console.log(typeof(this.dataKurs.data[0].kurs_min2));
      console.log(this.dataKurs.data);



      this.lineYAxis = {
        // tickAmount: 50,
      }

      this.tesXaxis = {
        categories:[
          "A",
          "B",
          "C",
          "D"
        ]
      }

      console.log(this.lineChartKursSeries);



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

      this.tesLocalStorageKurs = localStorage.getItem('compareData');
      this.tesFilterKurs = localStorage.getItem('compareData');

      this.tesLocalStorageKurs = JSON.parse(this.tesLocalStorageKurs)
      this.tesFilterKurs = JSON.parse(this.tesFilterKurs)
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


  // chartSeries2: ApexAxisChartSeries = [
  //   {
  //     name: "Net Profit",
  //     data: [111, -55, -57]
  //   },
  //   {
  //     name: "Revenue",
  //     data: [76, -85, -101]
  //   },
  //   {
  //     name: "Free Cash Flow",
  //     data: [35, -41, -36]
  //   }
  // ];

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
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true,
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
