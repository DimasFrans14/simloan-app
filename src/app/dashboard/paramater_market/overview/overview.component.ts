import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart,  ApexLegend,  ApexPlotOptions,  ApexStroke,  ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { filter } from 'rxjs';
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
    private marketUpdateService: MarketUpdateService,
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
  chartSeries2: ApexAxisChartSeries = [];
  lineYAxis!: ApexYAxis | ApexYAxis[];
  tesXaxis!: ApexXAxis;
  stroke!: ApexStroke;


  lineChartInterestRateSeries: ApexAxisChartSeries = [];
  interestRateXaxis!: ApexXAxis;
  interestRateLegend!: ApexLegend;

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

  defaultKurs: any;

  //Line Chart Kurs
  allTrendDataKurs: any;
  trendKursCategories: any;
  trendKursData: any;
  valueJPY: any;
  kursJPY: any;

  //Line Chart Interest Rate
  allTrendDataInterestRate: any;
  trendInterestRateCategories: any;
  trendInterestData: any;


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

      const trendInterestRate = await this.marketUpdateService.fetchDataInterestRateTrending();

      this.allTrendDataInterestRate = trendInterestRate;
      this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
      this.trendInterestRateCategories = trendInterestRate;
      this.trendInterestData = trendInterestRate;

      this.allTrendDataKurs = trendKurs;
      this.allTrendDataKurs = this.allTrendDataKurs.d.arrayData
      this.valueJPY = trendKurs;
      this.valueJPY = this.valueJPY.d.arrayData.filter((item: any) => item.kurs === 'JPY')

      const updateValueJPY = this.valueJPY.map((item: any) => {
        return item.data.map((value: any) => {
          const val = value / 100;
          const slice = val.toString().slice(0,6)
          const toNumber = parseFloat(slice)
          return toNumber
        });
      });

      console.log(updateValueJPY);
      this.valueJPY = updateValueJPY;

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

      this.interestRateLegend = {
        position: 'right'
      }

      this.defaultKurs = this.trendKursData.d.arrayData.filter((item: any) => ['USD', 'EUR', 'GBP' ,'JPY'].includes(item.kurs));


      const getJPY = this.dataKurs.data.filter((item: any) => ['JPY'].includes(item.mata_uang));

      console.log(this.defaultKurs);

      for(let i=0; i < this.defaultKurs.length ; i++){
        const kurs = this.defaultKurs[i].kurs;

        if(kurs == 'JPY'){
          const jpyValue = this.defaultKurs[i].data
          const kursJPY = this.defaultKurs[i].kurs
          // this.valueJPY = this.defaultKurs[i].kurs
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
            data: this.defaultKurs[i].data,
            },
          )
        }
      }

      for(let i=0; i< this.defaultKurs.length; i++){

      const kurs = this.defaultKurs[i].kurs

      if(kurs === 'USD'){
        // console.log(kurs);

        this.lineYAxis.push({
          showAlways: true,
          seriesName: kurs,
          // tickAmount: 20,
          // min:15000,
          // max:19000,
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
            text: "Thousand",
            style: {
              color: "#000"
            }
          },
          tooltip: {
            enabled: true
          }
            },)
      }
      else if(kurs === 'JPY'){
        // console.log(kurs);

        this.lineYAxis.push({

            showAlways: true,
            seriesName: kurs,
            min: 105,
            max: 108,
            tickAmount: 15,
            opposite: true,
            // min: 0,
            // max: 1,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#000"
            },
            labels: {
              style: {
                colors: ["##000"]
              }
            },
            title: {
              text: "Hundred",
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
      else{
        console.log(kurs);

        this.lineYAxis.push({
          // show: true,
          // showAlways: true,
          seriesName: "USD",
          // min: 0,
          // max: 200,

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

      console.log(this.lineChartKursSeries);

      for(let i = 0; i < this.trendKursCategories.d.arrayTanggal.length; i++){
        const currentDate = this.trendKursCategories.d.arrayTanggal[i];
        // console.log('Current Date:', currentDate);

        this.tesXaxis.categories.push(currentDate);
      }

      // console.log('Updated Categories:', this.tesXaxis.categories);
        // console.log(defaultKurs);
        // console.log(this.trendKursCategories.d.arrayTanggal);
        // console.log(this.trendKursCategories.d.arrayData);

      this.stroke = {
        curve: 'smooth',
        width: 1.5
      }

      // console.log(this.lineChartKursSeries);
      this.lineChartInterestRateSeries = [];
      for(let i=0; i< this.trendInterestData.d.arrayData.length; i++){

        const nameInterest = this.trendInterestData.d.arrayData[i].kode;
        const dataInterest = this.trendInterestData.d.arrayData[i].data;

        this.lineChartInterestRateSeries.push({
          name: nameInterest,
          data: dataInterest
        })
      }

    this.interestRateXaxis = {
      categories: [],
      type:'datetime',
    }
    for(let i=0; i<this.trendInterestRateCategories.d.arrayTanggal.length; i++){
      const currentDate = this.trendInterestRateCategories.d.arrayTanggal[i];
      this.interestRateXaxis.categories.push(currentDate)
    }

      this.tesLocalStorageKurs = localStorage.getItem('compareData');
      this.tesFilterKurs = localStorage.getItem('compareData');

      this.tesLocalStorageKurs = JSON.parse(this.tesLocalStorageKurs)
      this.tesFilterKurs = JSON.parse(this.tesFilterKurs)
    } catch (error) {
      console.log(error);
    }

    // this.lineYAxis = [
    //   {
    //     showAlways: true,
    //     seriesName: "USD",
    //     axisTicks: {
    //       show: true
    //     },
    //     axisBorder: {
    //       show: true,
    //       color: "#008FFB"
    //     },
    //     labels: {
    //       style: {
    //         colors: ["#008FFB"]
    //       }
    //     },
    //     title: {
    //       text: "Axe 1",
    //       style: {
    //         color: "#008FFB"
    //       }
    //     },
    //     tooltip: {
    //       enabled: true
    //     }
    //   },
    //   {
    //     showAlways: true,
    //     seriesName: "THB",
    //     opposite: true,
    //     axisTicks: {
    //       show: true
    //     },
    //     axisBorder: {
    //       show: true,
    //       color: "#FEB019"
    //     },
    //     labels: {
    //       style: {
    //         colors: ["#FEB019"]
    //       }
    //     },
    //     title: {
    //       text: "Axe 2",
    //       style: {
    //         color: "#FEB019"
    //       }
    //     },
    //     tooltip: {
    //       enabled: true
    //     }
    //   },
    //   {
    //     show: true,
    //     seriesName: "USD",
    //     axisTicks: {
    //       show: true,
    //     },
    //     axisBorder: {
    //       show: false,
    //     },
    //     labels: {
    //       show:false,
    //     },
    //     title: {
    //       text: "",
    //     },
    //     tooltip: {
    //       enabled: false
    //     }
    //   }
    // ]
    // this.lineYAxis = [];

    console.log(this.lineYAxis);
    console.log(this.currencyChartDetails);

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

    console.log(this.allTrendDataKurs);
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

    console.log(filteredData);

    this.lineChartKursSeries = [];
    this.lineYAxis = [];

    for(let i=0; i<filteredData.length; i++){
      const kursName = filteredData[i].kurs

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
        console.log(kursName);
        // const valJPY = this.valueJPY[0]
        // const lastIndex = this.valueJPY[0].length

        // console.log(valJPY, lastIndex);

        this.lineYAxis.push({

          showAlways: true,
          seriesName: kursName,
          min: 105,
          max: 108,
          tickAmount: 20,
          opposite: true,
          // min: 0,
          // max: 1,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#000"
          },
          labels: {
            style: {
              colors: ["##000"]
            }
          },
          title: {
            text: "Hundred",
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
        console.log(kursName);

        this.lineYAxis.push(
          {
            showAlways: true,
            seriesName: kursName,
            // tickAmount: 20,
            // min:15000,
            // max:16000,
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
              text: "Thousand",
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
        console.log(filteredData[0].kurs);

        if(filteredData[0].kurs === 'JPY'){
          if(i >= 2){
            this.lineYAxis.push({
              // show: true,
              showAlways: true,
              seriesName: filteredData[1].kurs,
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
            this.lineYAxis.push({
              showAlways: true,
              seriesName: filteredData[1].kurs,
              // tickAmount: 20,
              // min:15000,
              // max:16000,
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
                text: "Thousand",
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
          this.lineYAxis.push({
            // show: true,
            showAlways: true,
            seriesName: filteredData[0].kurs,
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
    }
  }
  //Wti Brent
  dataChartWtibrent:ApexAxisChartSeries=[
    {
      name: "Oil (WTI)",
      data: [67, 85, 110, 120]
    },
    {
      name: "OIL (BRENT)",
      data: [70, 90, 100, 122]
    }
  ]
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
    '#2EB0C2',
    '#256979'
  ]
  xAxisWtiChartBrent:ApexXAxis={
    categories: [
      ["2021"],
      ["2022"],
      ["2023"],
      ["2024"],
    ]
  }
  yAxisWtiBrentChart:ApexYAxis={
    show: true,
      tickAmount: 4,
      min: 45.00,
      max: 125.00,
  }
  wtiBrentStroke:ApexStroke ={
    curve:'smooth',
    width:1
  }
  // End Wti Brent
  // ICP //
  icpStroke:ApexStroke ={
    curve:'smooth',
    width:1
  }
  yAxisIcp:ApexYAxis={
    show: true,
      tickAmount: 6,
      min: 20,
      max: 140.00,
  }
  xAxisIcpChart:ApexXAxis ={
    categories: [
      ["2021"],
      ["2022"],
      ["2023"],
      ["2024"],
    ]
  }
  dataIcpChart:ApexAxisChartSeries =[
    {
      data: [56, 30, 130, 120]
    }
  ]
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
dataChartCoal:ApexAxisChartSeries=[
  {
    name: "Oil (WTI)",
    data: [67, 85, 110, 120]
  },
  {
    name: "OIL (BRENT)",
    data: [70, 90, 100, 122]
  }
]
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
xAxisChartCoal:ApexXAxis={
  categories: [
    ["2021"],
    ["2022"],
    ["2023"],
    ["2024"],
  ]
}
yAxisCoalChart:ApexYAxis={
  show: true,
    tickAmount: 4,
    min: 45.00,
    max: 125.00,
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
      tickAmount: 6,
      min: 20,
      max: 140.00,
  }
  xAxisLngChart:ApexXAxis ={
    categories: [
      ["2021"],
      ["2022"],
      ["2023"],
      ["2024"],
    ]
  }
  dataLngChart:ApexAxisChartSeries =[
    {
      data: [56, 30, 130, 120]
    }
  ]
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
