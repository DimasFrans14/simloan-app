import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart,  ApexLegend,  ApexPlotOptions,  ApexStroke,  ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import { ChartService } from 'src/app/services/chart_serivces/chart.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class ParameterMarketOverviewComponent implements AfterViewInit, OnInit{

  constructor(
    private dataService: DataService,
    private marketUpdateService: MarketUpdateService,
    private chartService: ChartService,
    ){
    // console.log(dataService);
  }

  // chart WTI & Brent
  dataChartWtiBrent = this.chartService.dataChartWtiBrent;
  wtiBrentChart = this.chartService.wtiBrentChart;
  wtiBrentChartTitle = this.chartService.wtiBrentChartTitle;
  wtiBrentColors = this.chartService.wtiBrentChartColors;
  xAxisWtiBrent = this.chartService.xAxisWtiBrentChart;
  yAxisWtiBrent = this.chartService.yAxisWtiBrent;
  wtiBrentStroke = this.chartService.wtiBrentStroke;
  // end chart WTI brent

  // chart ICP
  dataChartIcp = this.chartService.dataChartIcp;
  icpChart = this.chartService.icpChart;
  icpChartTitle = this.chartService.icpChartTitle;
  icpColors = this.chartService.icpChartColors;
  xAxisIcpChart = this.chartService.xAxixIcpChart;
  yAxisIcp = this.chartService.yAxisIcp;
  icpStroke = this.chartService.icpStroke;
  // end ICP
  // chart ICP
  dataChartCoal = this.chartService.dataChartCoal;
  coalChart = this.chartService.coalChart;
  coalChartTitle = this.chartService.coalChartTitle;
  coalColors = this.chartService.coalChartColors;
  xAxisCoalChart = this.chartService.xAxixCoalChart;
  yAxisCoal = this.chartService.yAxisCoal;
  coalStroke = this.chartService.coalStroke;
  // end ICP
  // chart LNG
  dataChartLng = this.chartService.dataChartLng;
  lngChart = this.chartService.lngChart;
  lngChartTitle = this.chartService.lngChartTitle;
  lngColors = this.chartService.lngChartColors;
  xAxisLngChart = this.chartService.xAxixLngChart;
  yAxisLng = this.chartService.yAxisLng;
  lngStroke = this.chartService.lngStroke;
  // end LNG

// chart Batu Bara
dataChartBatuBara = this.chartService.dataChartBatuBara;
batuBaraChart = this.chartService.batuBaraChart;
batuBaraChartTitle = this.chartService.batuBaraChartTitle;
batuBaraColors = this.chartService.batuBaraChartColors;
xAxisBatuBaraChart = this.chartService.xAxixBatuBaraChart;
yAxisBatuBara = this.chartService.yAxisLng;
batuBaraStroke = this.chartService.batuBaraStroke;
// end Batu Bara

  dataKurs: any;
  dataRKAP: any;
  lineChartKursSeries: ApexAxisChartSeries = [];
  chartSeries2: ApexAxisChartSeries = [];
  lineChartInterestRateSeries: ApexAxisChartSeries = [];
  lineYAxis!: ApexYAxis | ApexYAxis[];
  tesXaxis!: ApexXAxis;
  stroke!: ApexStroke;
  kursLegends!: ApexLegend;

  selectedItems!: number;

  tesLocalStorageKurs: any;
  tesFilterKurs : any;

  chartCommodities = [
    {
      'id': 1,
      'name': 'WTI & BRENT (USD/Ton)'
    },
    {
      'id': 2,
      'name': 'ICP (USD/Barel)'
    },
    {
      'id': 3,
      'name': 'Coal (Newcastle) (USD/Ton)'
    },
    {
      'id': 4,
      'name': 'LNG (JKM) (USD/MMBtu)'
    },
    {
      'id': 5,
      'name': 'Batubara (USD/Ton)'
    },
  ]

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

  trendKursCategories: any;
  trendKursData: any;
  valueJPY: any;
  kursJPY: any;

  USDDataChart: any;

  async ngOnInit(): Promise<void> {
    try {
      const responseKurs = await this.marketUpdateService.fetchDataKurs()
      this.dataKurs = responseKurs;
      localStorage.setItem('compareData', JSON.stringify(this.dataKurs.data))

      const responseRKAP = await this.dataService.fetchDataInterestRateRKAP()
      this.dataRKAP = responseRKAP;

      const responseCommodities = await this.marketUpdateService.fetchDataCommoditiesAll()

      const trendKurs = await this.marketUpdateService.fetchDataKursTrend();
      console.log(trendKurs);

      this.valueJPY = trendKurs;
      this.valueJPY = this.valueJPY.d.arrayData.filter((item: any) => item.kurs === 'JPY')

      const map = this.valueJPY.map((item: any) => {
        return item.data.map((value: any) => {
          const val = value / 100;
          const slice = val.toString().slice(0,6)
          const toNumber = parseFloat(slice)
          return toNumber
        });
      });

      console.log(map);
      this.valueJPY = map;

      this.trendKursCategories = trendKurs
      this.trendKursData = trendKurs;
      // console.log(responseCommodities);
      // console.log(this.dataKurs);

      let dataUSD;
      let dataInterest;

      // dataUSD = this.dataKurs.d.list.filter((item: any) => item.mata_uang === 'USD');

      dataInterest = this.dataRKAP.data.content.filter((item: any) => item.grup === 'INTEREST RATE');

      // console.log(dataInterest);

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
      this.lineYAxis = [];
      this.tesXaxis = {
        categories: [
        ],
        type:'datetime',
      }

      this.kursLegends = {
        markers:{
          onClick() {
              alert('clicked')
          },
        },
        onItemClick:{
          toggleDataSeries: true
        },
        onItemHover:{
          highlightDataSeries: false
        }
      }

      const defaultKurs = this.dataKurs.data.filter((item: any) => ['SGD', 'EUR', 'JPY'].includes(item.mata_uang));

      const getJPY = this.dataKurs.data.filter((item: any) => ['JPY'].includes(item.mata_uang));

      let tes: any;
      // this.dataKurs.data = this.dataKurs.data.slice(4,6);

      // console.log(getJPY);

      // for (let i = 0; i < defaultKurs.length ; i++) {

      //   typeof(defaultKurs[i].kurs) === 'string' ? parseFloat(defaultKurs[i].kurs.replace(/,/g, '')) : parseFloat(defaultKurs[i].kurs)

      //   typeof(defaultKurs[i].kurs_min1) === 'string' ? parseFloat(defaultKurs[i].kurs_min1.replace(/,/g, '')) : parseFloat(defaultKurs[i].kurs_min1)

      //   typeof(defaultKurs[i].kurs_min2) === 'string' ? parseFloat(defaultKurs[i].kurs_min2.replace(/,/g, '')) : parseFloat(defaultKurs[i].kurs_min2)

      //   typeof(defaultKurs[i].kurs_min3) === 'string' ? parseFloat(defaultKurs[i].kurs_min3.replace(/,/g, '')) : parseFloat(defaultKurs[i].kurs_min3)

      //   const mataUang = defaultKurs[i].mata_uang;

      //   const dataValues = [parseFloat(defaultKurs[i].kurs_min3.replace(/,/g, '')), defaultKurs[i].kurs_min2, defaultKurs[i].kurs_min1, defaultKurs[i].kurs];

      //   tes = dataValues
      //   const dataValues = [10000,11000,14000,15000,12000,15000,10000,11000,14000,15000,11000,10000];
      //   const dataValues2 = [20,10,30,40,20,50,40,20,40,20,30,10];

      //   console.log([dataValues, mataUang]);

      //   if(['EUR','SGD'].includes(mataUang)){
      //     this.lineChartKursSeries.push(
      //       {
      //         name: `${mataUang}`,
      //         data: dataValues
      //       }
      //       );
      //   }
      //   else{
      //     this.lineChartKursSeries.push(
      //       {
      //         name: `${mataUang}`,
      //         data: [10,15,12,11]
      //       },
      //       );
      //   }


      //     this.chartSeries2.push({
      //       name: `${mataUang}`,
      //       data: dataValues
      //     })
      //   }

      // console.log(tes);

      console.log(this.kursLegends);

      for(let i=0; i < 3 ; i++){
        const kurs = this.trendKursData.d.arrayData[i].kurs;

        if(kurs == 'USD'){
          this.USDDataChart = this.trendKursData.d.arrayData[i].data
        }

        if(kurs == 'JPY'){
          const jpyValue = this.trendKursData.d.arrayData[i].data
          const kursJPY = this.trendKursData.d.arrayData[i].kurs
          // this.valueJPY = this.trendKursData.d.arrayData[i].kurs
          console.log(this.valueJPY);

          console.log('JPY', jpyValue, kursJPY);

          this.lineChartKursSeries.push({
            name: kursJPY,
            data: this.valueJPY[0]
          })
        }
        else{
          this.lineChartKursSeries.push(
            {
            name: `${kurs}`,
            data: this.trendKursData.d.arrayData[i].data
            },
          )
        }
      }

      console.log(this.lineChartKursSeries);

      for(let i = 0; i < this.trendKursCategories.d.arrayTanggal.length; i++){
        const currentDate = this.trendKursCategories.d.arrayTanggal[i];
        console.log('Current Date:', currentDate);

        this.tesXaxis.categories.push(currentDate);
      }

      console.log('Updated Categories:', this.tesXaxis.categories);



        console.log(defaultKurs);
        console.log(this.trendKursCategories.d.arrayTanggal);
        console.log(this.trendKursCategories.d.arrayData);

        let tempArr: Date[] = [];
        for(let i = 0; i < this.trendKursCategories.d.arrayTanggal.length; i++) {
          let formatDate = 'YYYY-MM-DD';
          tempArr.push(moment(this.trendKursCategories.d.arrayTanggal[i], formatDate).toDate());
        }
        // console.log(tempArr);

      this.stroke = {
        curve: 'smooth',
        width: 1
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

    this.lineYAxis = [
      {
        showAlways: true,
        seriesName: "USD",
        // min:11000,
        // max:16000,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#008FFB"
        },
        labels: {
          style: {
            colors: ["#008FFB"]
          }
        },
        title: {
          text: "Axe 1",
          style: {
            color: "#008FFB"
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: "THB",
        opposite: true,
        // min: 0,
        // max: 1,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FEB019"
        },
        labels: {
          style: {
            colors: ["#FEB019"]
          }
        },
        title: {
          text: "Axe 2",
          style: {
            color: "#FEB019"
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        show: true,
        seriesName: "USD",
        // min: 0,
        // max: 200,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show:false,
        },
        title: {
          text: "",
        },
        tooltip: {
          enabled: false
        }
      }
    ]
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

  onSubmit(event: any) {
    console.log(event.target[0].id);

    // if(){

    // }
    // let targetColumn = [];
    // let targetBool = [];
    // for(let i=0; i<event.target.length - 1; i++){
    //   if(event.target[i].checked){
    //     targetColumn.push(event.target[i].id);
    //   }
    // }
    // for(let i=0; i<event.target.length - 1; i++){
    //   if(event.target[i]){
    //     targetBool.push(event.target[i].checked);
    //   }
    // }
    // this.tableConfig.customizeTableColumn(targetColumn, targetBool)
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
    events:{
      legendClick(chart, seriesIndex, options) {
          const firstData = options.config.series[0].data;
          console.log(options.config);
          options.config.series[0].data = firstData
          // console.log(firstData);
      },
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
    // height: 340,
    width: 350,
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
  // this.stroke:{
  //   curve: "smooth",
  //   width:1
  // }

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
