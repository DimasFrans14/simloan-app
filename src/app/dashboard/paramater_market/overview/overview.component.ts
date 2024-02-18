import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart,  ApexDataLabels,  ApexLegend,  ApexMarkers,  ApexPlotOptions,  ApexStroke,  ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { filter } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { OverviewChartService } from 'src/app/services/chart_serivces/overviewChart/overview-chart.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class ParameterMarketOverviewComponent implements AfterViewInit, OnInit{

  constructor(
    private dataService: DataService,
    private marketUpdateService: MarketUpdateService,
    private overviewChart: OverviewChartService
    ){
    // console.log(dataService);
  }

// chart Batu Bara
  // dataChartBatuBara = this.chartService.dataChartBatuBara;
  // batuBaraChart = this.chartService.batuBaraChart;
  // batuBaraChartTitle = this.chartService.batuBaraChartTitle;
  // batuBaraColors = this.chartService.batuBaraChartColors;
  // xAxisBatuBaraChart = this.chartService.xAxixBatuBaraChart;
  // yAxisBatuBara = this.chartService.yAxisLng;
  // batuBaraStroke = this.chartService.batuBaraStroke;
  // end Batu Bara

  dataKurs: any;
  dataRKAP: any;
  lineChartKursSeries: ApexAxisChartSeries = [];
  currencyChartDetails!: ApexChart;
  chartSeries2: ApexAxisChartSeries = [];
  lineYAxisKurs!: ApexYAxis | ApexYAxis[];
  tesXaxis!: ApexXAxis;
  stroke!: ApexStroke;
  lineChartKursTooltip!: ApexTooltip;
  lineChartKursMarkers!: ApexMarkers;

  barChartKursSeries: ApexAxisChartSeries = [];
  barChartDataLabel!: ApexDataLabels;
  barYAxisKurs!: ApexYAxis | ApexYAxis[];
  barXAxisKurs!: ApexXAxis;
  barPlotOptions!: ApexPlotOptions;
  barDataLabels!: ApexDataLabels;

  lineChartInterestRateSeries: ApexAxisChartSeries = [];
  barChartInterestRateSeries: ApexAxisChartSeries = [];
  interestRateXaxis!: ApexXAxis;
  interestRateLegend!: ApexLegend;
  interestRateYAxis!: ApexYAxis;

  dataChartWtibrent!:ApexAxisChartSeries;
  xAxisWtiChartBrent!:ApexXAxis;

  dataBarChartWtiBrent!: ApexAxisChartSeries;
  xAxisBarWtiBrent!: ApexXAxis;

  dataIcpChart!:ApexAxisChartSeries;
  dataIcpBarChart!:ApexAxisChartSeries;
  xAxisIcpChart!:ApexXAxis;

  dataChartCoal!:ApexAxisChartSeries;
  dataChartCoalBar!: ApexAxisChartSeries;
  xAxisChartCoal!:ApexXAxis;

  dataChartLngLine!: ApexAxisChartSeries;
  dataChartLngBar!: ApexAxisChartSeries;
  xAxisChartLng!: ApexXAxis;
  xAxisChartBarLng!: ApexXAxis;

  selectedItems!: number;

  tesLocalStorageKurs: any;
  tesFilterKurs : any;

  defaultKurs: any;

  //Line Chart Kurs
  allTrendDataKurs: any;
  trendKursCategories: any;
  trendKursData: any;
  trendKursDataBarChart: any;
  allTrendDataKursBarChart: any;
  valueJPY: any;
  kursJPY: any;

  //Line Chart Interest Rate
  allTrendDataInterestRate: any;
  trendInterestRateCategories: any;
  trendInterestData: any;
  trendInterestDataBarChart: any;
  filteredMinMaxInterestRateData: any;

  //Line Chart Commodities
  allTrendWTIBRENT: any;
  allTrendICP: any;
  allTrendCOAL: any;
  allTrendLNG : any;

  dataWTIBRENTBarChart: any;
  trenddataICPBarChart: any;
  dataCOALBarChart: any;
  dataLNGBarChart: any;

  USDDataChart: any;

  dataWTIBRENT: any;


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

  //Filter Range Kurs Data Bar Chart
  oneWeekKursBarChart = async (params: any) => {
    let getToday = moment(new Date());

    let today = moment(new Date());
    let oneWeekAgo = getToday.subtract(7, 'days').format('DD/MM/YYYY');
    const response  = await this.marketUpdateService.fetchDataKursTrendBarChart(params, oneWeekAgo, today.format('DD/MM/YYYY'))
    console.log(params, oneWeekAgo, today.format('DD/MM/YYYY'));

    console.log(response);

    this.trendKursDataBarChart = response;
    this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
    this.barChartKursSeries = this.trendKursDataBarChart
  }

  oneMonthKursBarChart = async (params: any) => {
    let getToday = moment(new Date());

    let today = moment(new Date());
    let oneMonthAgo = getToday.subtract(1, 'months').format('DD/MM/YYYY');
    const response  = await this.marketUpdateService.fetchDataKursTrendBarChart(params, oneMonthAgo, today.format('DD/MM/YYYY'))
    console.log(params, oneMonthAgo, today.format('DD/MM/YYYY'));

    console.log(response);

    this.trendKursDataBarChart = response;
    this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
    this.barChartKursSeries = this.trendKursDataBarChart
  }

  oneYearKursBarChart = async (params: string) => {
    let getToday = moment(new Date());

    let today = moment(new Date());
    let oneYearsAgo = getToday.subtract(1, 'years').format('DD/MM/YYYY');
    const response  = await this.marketUpdateService.fetchDataKursTrendBarChart(params, oneYearsAgo, today.format('DD/MM/YYYY'))
    console.log(params, oneYearsAgo, today.format('DD/MM/YYYY'));

    console.log(response);

    this.trendKursDataBarChart = response;
    this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
    this.barChartKursSeries = this.trendKursDataBarChart
  }

  threeYearsAgoKursBarChart = async (params: string) => {
    let getToday = moment(new Date());

    let today = moment(new Date());
    let threeYearsAgo = getToday.subtract(3, 'years').format('DD/MM/YYYY');
    const response  = await this.marketUpdateService.fetchDataKursTrendBarChart(params, threeYearsAgo, today.format('DD/MM/YYYY'))
    console.log(params, threeYearsAgo, today.format('DD/MM/YYYY'));

    console.log(response);

    this.trendKursDataBarChart = response;
    this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
    this.barChartKursSeries = this.trendKursDataBarChart
  }

  //Filter Range Interest Data Bar Chart
  oneWeekInterestBarChart = async (params: any) => {
    let getToday = moment(new Date());

    let today = moment(new Date());
    let oneWeekAgo = getToday.subtract(7, 'days').format('DD/MM/YYYY');
    const response  = await this.marketUpdateService.fetchInterestRateBarChart(params, oneWeekAgo, today.format('DD/MM/YYYY'))
    console.log(params, oneWeekAgo, today.format('DD/MM/YYYY'));

    console.log(response);

    this.allTrendDataInterestRate = response;
    this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
    this.barChartInterestRateSeries = this.allTrendDataInterestRate
  }

  oneMonthInterestBarChart = async (params: any) => {
    let getToday = moment(new Date());

    let today = moment(new Date());
    let oneMonthAgo = getToday.subtract(1, 'months').format('DD/MM/YYYY');
    const response  = await this.marketUpdateService.fetchInterestRateBarChart(params, oneMonthAgo, today.format('DD/MM/YYYY'))
    console.log(params, oneMonthAgo, today.format('DD/MM/YYYY'));

    console.log(response);

    this.allTrendDataInterestRate = response;
    this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
    this.barChartInterestRateSeries = this.allTrendDataInterestRate
  }

  oneYearInterestBarChart = async (params: string) => {
    let getToday = moment(new Date());

    let today = moment(new Date());
    let oneYearAgo = getToday.subtract(1, 'years').format('DD/MM/YYYY');
    const response  = await this.marketUpdateService.fetchInterestRateBarChart(params, oneYearAgo, today.format('DD/MM/YYYY'))
    console.log(params, oneYearAgo, today.format('DD/MM/YYYY'));

    console.log(response);

    this.allTrendDataInterestRate = response;
    this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
    this.barChartInterestRateSeries = this.allTrendDataInterestRate
  }

  threeYearsAgoInterestBarChart = async (params: string) => {
    let getToday = moment(new Date());

    let today = moment(new Date());
    let threeYearsAgo = getToday.subtract(3, 'years').format('DD/MM/YYYY');
    const response  = await this.marketUpdateService.fetchInterestRateBarChart(params, threeYearsAgo, today.format('DD/MM/YYYY'))
    console.log(params, threeYearsAgo, today.format('DD/MM/YYYY'));

    console.log(response);

    this.allTrendDataInterestRate = response;
    this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
    this.barChartInterestRateSeries = this.allTrendDataInterestRate
  }

  //Fetch Default Data
  fetchDataLineKurs = async () => {
    this.lineYAxisKurs = [];

    //Set Default Date
    let today = moment(new Date());
    let oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');

    const responseKurs = await this.marketUpdateService.fetchDataKursTrend()
      this.dataKurs = responseKurs;
      localStorage.setItem('compareData', JSON.stringify(this.dataKurs.d.arrayData))

      const trendKurs = await this.marketUpdateService.fetchDataKursTrend();
      this.allTrendDataKurs = trendKurs;
      this.allTrendDataKurs = this.allTrendDataKurs.d.arrayData
      this.valueJPY = trendKurs;
      this.trendKursCategories = trendKurs
      this.trendKursData = trendKurs;

      this.defaultKurs = this.trendKursData.d.arrayData.filter((item: any) => ['USD', 'EUR', 'GBP' ,'JPY'].includes(item.kurs));

      this.valueJPY = this.valueJPY.d.arrayData.filter((item: any) => item.kurs === 'JPY')

      const updateValueJPY = this.valueJPY.map((item: any) => {
        return item.data.map((value: any) => {
          const val = value / 100;
          const slice = val.toString().slice(0,6)
          const toNumber = parseFloat(slice)
          return toNumber
        });
      });

      this.valueJPY = updateValueJPY;
      console.log(this.defaultKurs);


      for(let i=0; i < this.defaultKurs.length ; i++){
        const kurs = this.defaultKurs[i].kurs;

        if(kurs == 'JPY'){
          const jpyValue = this.defaultKurs[i].data
          const kursJPY = this.defaultKurs[i].kurs

          this.lineChartKursSeries.push({
            name: kursJPY,
            data: this.valueJPY[0]
          })
        }
        else{
          this.lineChartKursSeries.push(
            {
            name: `${kurs}`,
            data: this.defaultKurs[i].data,
            },
          )
        }
      }

      for(let i=0; i< this.defaultKurs.length; i++){
        const kurs = this.defaultKurs[i].kurs

        var minVal;
        var maxVal;

        let minValJPY;
        let maxValJPY;

        if(kurs != 'JPY' && i < 1){
          let combinedArray = this.defaultKurs[i].data.concat(this.defaultKurs[2].data, this.defaultKurs[3].data)
          // console.log(combinedArray);

          minVal = combinedArray[0];
          maxVal = combinedArray[0];

          for(let j=0; j<combinedArray.length; j++){
            if (combinedArray[j] < minVal) {
              minVal = combinedArray[j];
            }
            else if(combinedArray[j] > maxVal){
              maxVal = combinedArray[j]
            }
          }
          // console.log(minVal, maxVal);
        }

        if(kurs == 'JPY'){
          // let combinedArray = this.defaultKurs[i].data
          // console.log(combinedArray);

          minValJPY = this.valueJPY[0][0];
          maxValJPY = this.valueJPY[0][0];

          for(let j=0; j<this.valueJPY[0].length; j++){
            if (this.valueJPY[0][j] < minValJPY) {
              minValJPY = this.valueJPY[0][j];
            }
            else if(this.valueJPY[0][j] > maxValJPY){
              maxValJPY = this.valueJPY[0][j]
            }
          }
          // console.log(minValJPY, maxValJPY);
        }


      if(kurs === 'USD'){
        console.log(kurs);
        // console.log(this.defaultKurs[i].data);
        // console.log(minVal, maxVal);

        this.lineYAxisKurs.push({
          showAlways: true,
          seriesName: kurs,
          min: minVal - 200,
          max: maxVal,
          // forceNiceScale: true,
          // tickAmount: 15,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: false,
            color: "#000"
          },
          labels: {
            style: {
              colors: ["#000"]
            },
            formatter : (value) => {return new Intl.NumberFormat().format(value)}
          },
          title: {
            style: {
              color: "#000"
            }
          },
          tooltip: {
            enabled: true
          }
            },)
      }else if(kurs === 'JPY'){
        // console.log(kurs);

        this.lineYAxisKurs.push({

            showAlways: true,
            seriesName: kurs,
            min: minValJPY,
            max: maxValJPY,
            tickAmount: 15,
            opposite: true,
            // min: 0,
            // max: 1,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: false,
              color: "#000"
            },
            labels: {
              style: {
                colors: ["##000"]
              },
              formatter : (value) => {return new Intl.NumberFormat().format(value)}
            },
            title: {
              style: {
                color: "##000"
              }
            },
            tooltip: {
              enabled: true
            }
          },
        )
      } else {
        // console.log(kurs);
        // console.log(minVal, maxVal);

        this.lineYAxisKurs.push({
          show: true,
          showAlways: true,
          seriesName: "USD",
          min:minVal - 200,
          max:maxVal,

          axisTicks: {
            show: false,
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
        })
      }
      }
  }

  fetchDataLineCommodities = async () => {

    //Set Default Date
    let today = moment(new Date());
    let oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');

    const trendWTIBRENTCommodities = await this.marketUpdateService.fetchDataLineCommodities("['WTI', 'BRENT']", oneYearsAgo, today.format('DD/MM/YYYY'));

    const trendICPCommodities = await this.marketUpdateService.fetchDataLineCommodities("['ICP']", oneYearsAgo, today.format('DD/MM/YYYY'));

    const trendCOALCommodities = await this.marketUpdateService.fetchDataLineCommodities("['COAL']", oneYearsAgo, today.format('DD/MM/YYYY'));

    const trendLNGCommodities = await this.marketUpdateService.fetchDataLineCommodities("['LNG']", oneYearsAgo, today.format('DD/MM/YYYY'));

    this.allTrendWTIBRENT = trendWTIBRENTCommodities;
    this.allTrendICP = trendICPCommodities;
    this.allTrendCOAL= trendCOALCommodities;
    this.allTrendLNG = trendLNGCommodities;
  }

  fetchDataLineInterest = async () => {

     //Set Default Date
     let today = moment(new Date());
     let oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');

    const trendInterestRate = await this.marketUpdateService.fetchDataInterestRateTrending(oneYearsAgo, today.format('DD/MM/YYYY'));

    this.allTrendDataInterestRate = trendInterestRate;
    console.log("All Interest Rate : ", this.allTrendDataInterestRate)
    this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
    // console.log("All Interest Rate2 : ", this.allTrendDataInterestRate)
    this.trendInterestRateCategories = trendInterestRate;
    this.trendInterestData = trendInterestRate;
    this.filteredMinMaxInterestRateData = trendInterestRate;
  }

  fetchDataBarChartKurs = async () => {

    //Set Default Date
    let today = moment(new Date());
    let oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');

    const trendBarChartKurs = await this.marketUpdateService.fetchDataKursTrendBarChart('1year', oneYearsAgo, today.format('DD/MM/YYYY'));

    this.trendKursDataBarChart = trendBarChartKurs;
    this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
    this.allTrendDataKursBarChart = trendBarChartKurs;
    this.allTrendDataKursBarChart = this.allTrendDataKursBarChart.d.arrayData;

  }

  fetchAllDataBarChartCommodities = async () => {

    //Set Default Date
    let today = moment(new Date());
    let oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');

    const trendBarChartWtiBrent:any = await this.marketUpdateService.fetchDataBarCommodities("['WTI', 'BRENT']", oneYearsAgo, today.format('DD/MM/YYYY'), '1year');

    const trendBarChartICP:any = await this.marketUpdateService.fetchDataBarCommodities("['ICP']", oneYearsAgo, today.format('DD/MM/YYYY'), '1year');

    const trendBarChartCOAL:any = await this.marketUpdateService.fetchDataBarCommodities("['COAL']", oneYearsAgo, today.format('DD/MM/YYYY'), '1year');

    const trendBarChartLNG:any = await this.marketUpdateService.fetchDataBarCommodities("['LNG']", oneYearsAgo, today.format('DD/MM/YYYY'), '1year');

    const trendBarChartBATUBARA:any = await this.marketUpdateService.fetchDataBarCommodities("['BATUBARA']", oneYearsAgo, today.format('DD/MM/YYYY'), '1year');

    this.dataWTIBRENTBarChart = trendBarChartWtiBrent;
    this.trenddataICPBarChart = trendBarChartICP;
    this.dataCOALBarChart = trendBarChartCOAL;
    this.dataLNGBarChart = trendBarChartLNG;

  }

  fetchAllDataBarChartInterest = async () => {

    //Set Default Date
    let today = moment(new Date());
    let oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');

    const trendInterestBarChart = await this.marketUpdateService.fetchInterestRateBarChart('1year',oneYearsAgo, today.format('DD/MM/YYYY'));

    this.trendInterestDataBarChart = trendInterestBarChart
    this.barChartInterestRateSeries = this.trendInterestDataBarChart.d.arrayData
  }

  async ngOnInit(): Promise<void> {
    try {
      this.currencyChartDetails = {
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
              console.log(options.config);
              // console.log(options.series.length);
              // console.log(firstData);

              // for(let i=0; i<options.config.series.length; i++){
              //   if(seriesIndex === i){
              //     const change = options.config.yaxis[i].showAlways === true
              //     console.log('same', change, options.config.series[i].name, seriesIndex);
              //   }
              //   else{
              //     options.config.yaxis[i].showAlways === false
              //     console.log('not same', options.config.yaxis[i].showAlways, options.config.series[i].name, seriesIndex);
              //   }
              // }

          },
          dataPointSelection(e, chart, config){
            console.log(config.w.config.series[config.seriesIndex].data[config.dataPointIndex], config.w.config.series[config.seriesIndex].name);
            console.log(chart);
          }
        }
      }
      this.lineChartKursSeries = [];
      this.barChartKursSeries = [];
      this.chartSeries2 = [];
      this.barYAxisKurs = [];
      this.barXAxisKurs = {
        type: 'datetime',
        tickAmount: 100
      }

      this.barDataLabels = {
        enabled: false
      }

      this.tesXaxis = {
        categories: [
        ],
        type:'datetime',
      }

      this.interestRateLegend = {
        position: 'right'
      }

      this.stroke = {
        curve: 'smooth',
        width: 0.95,
        lineCap : 'round'
      }

      await this.fetchDataLineKurs();
      await this.fetchDataLineCommodities();
      await this.fetchDataLineInterest()

      await this.fetchDataBarChartKurs();
      await this.fetchAllDataBarChartCommodities();
      await this.fetchAllDataBarChartInterest();

      this.barChartKursSeries = this.trendKursDataBarChart;

      this.barYAxisKurs = {
        showAlways: true,
        forceNiceScale: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: false,
          color: "#000"
        },
        labels: {
          style: {
            colors: ["#000"]
          },
          align: 'center'
        },
        title: {
          style: {
            color: "#000",
            fontFamily:"satoshi-regular"
          },
          text: "% Change RKAP"
        },
        tooltip: {
          enabled: true
        }
      }

      this.barChartDataLabel = {
        enabled: true,
      }

      for(let i = 0; i < this.trendKursCategories.d.arrayTanggal.length; i++){
        const currentDate = this.trendKursCategories.d.arrayTanggal[i];
        // console.log('Current Date:', currentDate);

        this.tesXaxis.categories.push(currentDate);
        if(i < 1){
          this.tesXaxis.labels = {
            formatter: function(value, timestamp){
              // console.log(moment(new Date(value)).format("DD/MM/YYYY"));
              return moment(new Date(value)).format("DD MMM YYYY")
            }
          }
        }
      }

      this.lineChartKursMarkers = {
        // size: 2
      }


      this.dataChartWtibrent = [];
      this.xAxisWtiChartBrent = {
        // categories: [],
        type:'datetime',
      }


      this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;
      this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;
      this.xAxisBarWtiBrent = {
        type: 'datetime'
      }


      this.dataIcpChart = [];

      console.log(this.trenddataICPBarChart);

        this.dataIcpChart = this.allTrendICP.d.arrayData;
        this.dataIcpBarChart = this.trenddataICPBarChart.d.arrayData;

        this.xAxisIcpChart = {
          // categories: [],
          type: 'datetime',
          // labels : {
          //   format : 'MMM \'yy'
          // }
        }



        this.dataChartCoal = [];

        this.dataChartCoal = this.allTrendCOAL.d.arrayData;
        this.dataChartCoalBar = this.dataCOALBarChart.d.arrayData;


        this.xAxisChartCoal = {
          // categories: [],
          type: 'datetime'
        }

        this.dataChartLngLine = this.allTrendLNG.d.arrayData;
        this.dataChartLngBar = this.dataLNGBarChart.d.arrayData;

        this.xAxisChartLng = {
          type: 'datetime'
        }


      let tempArrInterestRate: any[] = []
      this.lineChartInterestRateSeries = [];

      // console.log(this.filteredMinMaxInterestRateData.d.arrayData.length)
      for(let i=0; i<this.filteredMinMaxInterestRateData.d.arrayData.length; i++){
        for(let j=0; j<this.filteredMinMaxInterestRateData.d.arrayData[i].data.length; j++){
          tempArrInterestRate.push(this.filteredMinMaxInterestRateData.d.arrayData[i].data[j].y)
        }
      }

      const formattedTempArr = tempArrInterestRate.map((item: any) => {
        let toNumber = parseFloat(item)
        return toNumber
      })

      tempArrInterestRate = formattedTempArr;
      // console.log(tempArrInterestRate);

      let interestMinVal = tempArrInterestRate[0]
      let interestMaxVal = tempArrInterestRate[0]
      for(let i=0; i<tempArrInterestRate.length; i++){
        if(tempArrInterestRate[i] < interestMinVal){
          interestMinVal = tempArrInterestRate[i]
        }
        else if(tempArrInterestRate[i] > interestMaxVal){
          interestMaxVal = tempArrInterestRate[i]
        }
      }


      if(this.trendInterestData.d){
        for(let i=0; i<this.trendInterestData.d.arrayData.length; i++){
          const nameInterest = this.trendInterestData.d.arrayData[i].kode;
          for(let j=0; j< this.trendInterestData.d.arrayData[i].data.length; j++){
            this.trendInterestData.d.arrayData[i].data[j].y = parseFloat(this.trendInterestData.d.arrayData[i].data[j].y.slice(0,5))
          }
        }

        // console.log(this.trendInterestData);
        this.lineChartInterestRateSeries = this.trendInterestData.d.arrayData;
        this.interestRateXaxis = {
          type:'datetime',
        }

      // console.log([interestMinVal, interestMaxVal]);

        this.interestRateYAxis = {
          min: parseFloat(interestMinVal) - 0.05,
          max: parseFloat(interestMaxVal) + 0.05,
          labels: {
            formatter: function(val, index) {
              return val.toLocaleString('id').slice(0,4)
            }
          }
        }
      }
      else{
        console.log('masuk else');

      }

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

  filterCurrencyLineChart(event: any) {

    // console.log(this.allTrendDataKurs);
    let targetColumn: any[] = [];
    for(let i=0; i<event.target.length - 1; i++){
      if(event.target[i].checked){
        targetColumn.push(event.target[i].id);
      }
    }

    console.log(targetColumn);

    const filteredData = this.allTrendDataKurs.filter(
      (item: any) => targetColumn.includes(item.kurs)
    )

    // console.log(filteredData);

    this.lineChartKursSeries = [];
    this.lineYAxisKurs = [];

    let combinedArray: any[] = [];
    for(let i=0; i < filteredData.length; i++){
      if(filteredData[i].kurs != 'JPY'){
        combinedArray = combinedArray.concat(filteredData[i].data)
      }
    }
    // console.log(combinedArray);


    for(let i=0; i<filteredData.length; i++){
      const kursName = filteredData[i].kurs

      var minValFiltered;
      var maxValFiltered;

      let minValJPY;
      let maxValJPY;

      if(kursName != 'JPY'){
        // let combinedArray = filteredData[i].data.concat(filteredData[1].data, filteredData[2].data)
        // console.log(combinedArray);

        minValFiltered = combinedArray[0];
        maxValFiltered = combinedArray[0];

        for(let j=0; j<combinedArray.length; j++){
          if (combinedArray[j] < minValFiltered) {
            minValFiltered = combinedArray[j];
          }
          else if(combinedArray[j] > maxValFiltered){
            maxValFiltered = combinedArray[j]
          }
        }
        console.log(minValFiltered, maxValFiltered);
      }
      else if(kursName == 'JPY'){
        // let combinedArray = this.defaultKurs[i].data
        // console.log(combinedArray);

        minValJPY = this.valueJPY[0][0];
        maxValJPY = this.valueJPY[0][0];

        for(let j=0; j<this.valueJPY[0].length; j++){
          if (this.valueJPY[0][j] < minValJPY) {
            minValJPY = this.valueJPY[0][j];
          }
          else if(this.valueJPY[0][j] > maxValJPY){
            maxValJPY = this.valueJPY[0][j]
          }
        }
        console.log(minValJPY, maxValJPY);
      }

      if(kursName != 'JPY'){
        this.lineChartKursSeries.push({
          name: kursName,
          data: filteredData[i].data
        })
      }
      else{
        this.lineChartKursSeries.push({
          name: kursName,
          data: this.valueJPY[0]
        })
      }



      if(kursName === 'JPY'){
        // console.log(kursName);
        // const valJPY = this.valueJPY[0]
        // const lastIndex = this.valueJPY[0].length

        // console.log(valJPY, lastIndex);

        this.lineYAxisKurs.push({

          showAlways: true,
          seriesName: kursName,
          min: minValJPY,
          max: maxValJPY,
          tickAmount: 15,
          opposite: true,
          // min: 0,
          // max: 1,
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false,
            color: "#000"
          },
          labels: {
            style: {
              colors: ["##000"]
            },
            formatter : (value) => {return new Intl.NumberFormat().format(value)}
          },
          title: {
            style: {
              color: "##000"
            }
          },
          tooltip: {
            enabled: true
          }
        },
        )
      }
      else if(kursName != 'JPY' && i < 1){
        // console.log(kursName);

        this.lineYAxisKurs.push(
          {
            showAlways: true,
            seriesName: kursName,
            // tickAmount: 15,
            min:minValFiltered - 200,
            max:maxValFiltered,
            axisTicks: {
              show: false
            },
            axisBorder: {
              show: false,
              color: "#000"
            },
            labels: {
              style: {
                colors: ["#000"]
              },
              formatter : (value) => {return new Intl.NumberFormat().format(value)}
            },
            title: {
              style: {
                color: "#000"
              }
            },
            tooltip: {
              enabled: true
            }
              },
        )
      }
      else{
        console.log(kursName);

        if(filteredData[0].kurs === 'JPY'){
          // console.log(filteredData[i].kurs);
          if(i >= 2){
            this.lineYAxisKurs.push({
              // show: true,
              showAlways: true,
              seriesName: filteredData[1].kurs,
              min: minValFiltered - 200,
              max: maxValFiltered,
              axisTicks: {
                show: false,
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
            })
          }
          else{
            this.lineYAxisKurs.push({
              showAlways: true,
              seriesName: filteredData[1].kurs,
              // tickAmount: 20,
              min:minValFiltered - 200,
              max:maxValFiltered,
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
                color: "#000"
              },
              labels: {
                style: {
                  colors: ["#000"]
                },
                formatter : (value) => {return new Intl.NumberFormat().format(value)}
              },
              title: {
                style: {
                  color: "#000"
                }
              },
              tooltip: {
                enabled: true
              }
                })
          }
        }
        else{
          // console.log(filteredData[i].kurs);
          // console.log(minValFiltered, maxValFiltered);


          this.lineYAxisKurs.push({
            // show: true,
            showAlways: true,
            seriesName: filteredData[0].kurs,
            min: minValFiltered - 200,
            max: maxValFiltered,
            axisTicks: {
              show: false,
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
          })
        }
      }
    }
  }

  filterCurrencyBarChart(event: any) {

    // console.log(this.allTrendDataKurs);
    let targetColumn: any[] = [];
    for(let i=0; i<event.target.length - 1; i++){
      if(event.target[i].checked){
        targetColumn.push(event.target[i].id);
      }
    }

    console.log(targetColumn);

    const filteredData = this.allTrendDataKursBarChart.filter(
      (item: any) => targetColumn.includes(item.kode)
    )

    console.log(filteredData);

    this.barChartKursSeries = [];
    this.barYAxisKurs = [];

    for(let i=0; i<filteredData.length; i++){
      const kursName = filteredData[i].kode

      this.barChartKursSeries.push({
        name: kursName,
        data: filteredData[i].data
      })

      if(i < 1){

        this.barYAxisKurs.push({
          showAlways: true,
          seriesName: kursName,
          // min:-1,
          // max:1,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#000"
          },
          labels: {
            style: {
              colors: ["#000"]
            }
          },
          title: {
            text: "Bar Chart",
            style: {
              color: "#000"
            }
          },
          tooltip: {
            enabled: true
          }
            },)
      }
      else{

        this.barYAxisKurs.push({
          seriesName: "USD",
          axisTicks: {
            show: false,
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
        })
      }
    }
  }

  filterInterestRateLineChart(event: any) {

    // console.log(this.allTrendDataInterestRate);
    let targetColumn: any[] = [];
    for(let i=0; i<event.target.length - 1; i++){
      if(event.target[i].checked){
        targetColumn.push(event.target[i].id);
      }
    }

    // console.log(targetColumn);

    const filteredData = this.allTrendDataInterestRate.filter(
      (item: any) => targetColumn.includes(item.name)
    )

    // console.log(filteredData);

    let combinedArray: any[] = [];
    for(let i=0; i < filteredData.length; i++){
      for(let j=0; j<filteredData[i].data.length; j++){
        combinedArray.push(parseFloat(filteredData[i].data[j].y))
      }
    }

    // console.log(combinedArray);

    let minValInterest = combinedArray[0];
    let maxValInterest = combinedArray[0];

    for(let i=0; i<combinedArray.length; i++){
      if(combinedArray[i] < minValInterest){
        minValInterest = combinedArray[i]
      }
      else if(combinedArray[i] > maxValInterest){
        maxValInterest = combinedArray[i]
      }
      // console.log([minValInterest, maxValInterest]);
    }
    // console.log([minValInterest, maxValInterest]);

    this.lineChartInterestRateSeries = filteredData
    this.interestRateYAxis = {
      min: minValInterest - 0.05,
      max: maxValInterest + 0.05
    }
  }

  // currencyChartDetails: ApexChart = {
  //   type: 'line',
  //   height: 400,

  //   toolbar: {
  //     show: true,
  //     tools: {
  //       download: true,
  //       selection: true,
  //       zoom: true,
  //       zoomin: true,
  //       zoomout: true,
  //       pan: true,
  //       reset: true,
  //     }
  //   },
  //   events:{
  //     legendClick(chart, seriesIndex, options) {
  //         console.log(options.config);


  //     },
  //     dataPointSelection(e, chart, config){
  //       console.log(config.w.config.series[config.seriesIndex].data[config.dataPointIndex], config.w.config.series[config.seriesIndex].name);
  //       console.log(chart);
  //     }
  //   }
  // }

  //Wti Brent
  wtiBrentLineChart:ApexChart={
    type: 'line',
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
  wtiBrentBarChart:ApexChart={
    type: 'bar',
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
  wtiBrentChartColors:any=[
    '#2E75F0',
    '#5304FC'
  ]

  yAxisWtiBrentChart:ApexYAxis={
    show: true,
      tickAmount: 7,
      // min: 45.00,
      // max: 125.00,
  }

  yAxisWtiBrentBarChart:ApexYAxis={
    show: true,
      tickAmount: 7,
      // min: 45.00,
      // max: 125.00,
  }
  wtiBrentStroke:ApexStroke ={
    curve:'smooth',
    width:1
  }
  // End Wti Brent
  // ICP //
  icpStroke:ApexStroke ={
    curve:'smooth',
    width:0.95
  }

  intersetRateLineStroke : ApexStroke ={
    curve:'smooth',
    width : 0.95,
    lineCap : 'round'
  }
  yAxisIcp:ApexYAxis={
    show: true,
      tickAmount: 6,
      // min: 20,
      // max: 140.00,
  }
  icpChartColors:any=[
    '#2EB0C2',
    '#256979'
  ]
  icplineChart:ApexChart ={
    type: 'line',
    width: 350,
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
  icpBarChart:ApexChart = {
    type: 'bar',
    width: 350,
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
// end ICP //
// Coal //

coalLineChart:ApexChart={
  type: 'line',
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
coalBarChart:ApexChart={
  type: 'bar',
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
coalChartColors:any=[
  '#2EB0C2',
  '#256979'
]

yAxisCoalChart:ApexYAxis={
  show: true,
    tickAmount: 4,
    // min: 45.00,
    // max: 125.00,
}
coalStroke:ApexStroke ={
  curve:'smooth',
  width:1
}
// end Coal //
// chart LNG
  lngStroke:ApexStroke ={
    curve:'smooth',
    width:1
  }
  yAxisLng:ApexYAxis={
    show: true,
      tickAmount: 6
  }
  lngChartColors:any=[
    '#2EB0C2',
    '#256979'
  ]
  lngLineChart:ApexChart ={
    type: 'line',
    width: 350,
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
  lngBarChart:ApexChart = {
    type: 'bar',
    width: 350,
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
  // end LNG
  // chart LNG
  batuBaraStroke:ApexStroke ={
    curve:'smooth',
    width:1
  }
  yAxisBatuBara:ApexYAxis={
    show: true,
      tickAmount: 6,
      min: 20,
      max: 140.00,
  }
  xAxisBatuBaraChart:ApexXAxis ={
    categories: [
      ["2021"],
      ["2022"],
      ["2023"],
      ["2024"],
    ]
  }
  dataBatuBaraChart:ApexAxisChartSeries =[
    {
      data: [56, 30, 130, 120]
    }
  ]
  batuBaraChartColors:any=[
    '#2EB0C2',
    '#256979'
  ]
  batuBaraLineChart:ApexChart ={
    type: 'line',
    width: 350,
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
  batuBaraBarChart:ApexChart = {
    type: 'bar',
    width: 350,
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
  // end LNG
  currencyBarChartDetails: ApexChart = {
    type: 'bar',
    height: 360,
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
