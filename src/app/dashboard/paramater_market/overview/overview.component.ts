import { Component, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart,  ApexDataLabels,  ApexLegend,  ApexMarkers,  ApexPlotOptions,  ApexStroke,  ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { filter, range } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { OverviewChartService } from 'src/app/services/chart_serivces/overviewChart/overview-chart.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import Swal from 'sweetalert2';
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
    private sanitizer: DomSanitizer
    ){
    // console.log(dataService);
  }


  tempDataKurs: any;
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
  legendCurrencyLineChart!: ApexLegend;

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
  legendICPChart!: ApexLegend;

  dataChartCoal!:ApexAxisChartSeries;
  dataChartCoalBar!: ApexAxisChartSeries;
  xAxisChartCoal!:ApexXAxis;
  legendCOALChart!: ApexLegend;

  dataChartLngLine!: ApexAxisChartSeries;
  dataChartLngBar!: ApexAxisChartSeries;
  xAxisChartLng!: ApexXAxis;
  xAxisChartBarLng!: ApexXAxis;
  legendLNGChart!: ApexLegend;

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

  dataCompareChangeRKAP: any;
  listDataCompareChangeRKAP: any;

  isLoadingAllData: boolean = false;

  isLoadingKursLine: boolean = false;
  isLoadingKursBar: boolean = false;

  isLoadingWTILine: boolean = false;
  isLoadingWTIBar: boolean = false;

  isLoadingICPLine: boolean = false;
  isLoadingICPBar: boolean = false;

  isLoadingCOALLine: boolean = false;
  isLoadingCOALBar: boolean = false;

  isLoadingLNGLine: boolean = false;
  isLoadingLNGBar: boolean = false;

  isLoadingInterestLine: boolean = false;
  isLoadingInterestBar: boolean = false;

  isClickedBarChart: boolean = false;

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
    console.log(event);

    const check = this.dataCompareChangeRKAP.filter(
      (item: any) => item.mata_uang.includes(event)
    )
    if(event != undefined){
      this.hideValueCompare = !this.hideValueCompare
      console.log(check);
      for(let i=0; i<check.length; i++){
        if(this.dataCompareChangeRKAP.length > 2){
          const removeData = this.dataCompareChangeRKAP.filter(
            (item: any) => item.mata_uang != check[i].mata_uang
          )
          console.log(removeData);
          this.dataCompareChangeRKAP = removeData;
          Swal.fire({
            title: "Hapus item berhasil!",
            icon: "info",
            showCloseButton: true,
          });
          return this.dataCompareChangeRKAP
        }
        else{
          Swal.fire({
            title: "Data kurang dari 2!",
            icon: "info",
            showCloseButton: true,
          });
          return this.dataCompareChangeRKAP
        }
      }
    }
    else{
      console.log('else');
    }

  }

  addCompare(event: any){
    console.log(event);

    const getData = this.listDataCompareChangeRKAP.filter(
      (item: any) => item.mata_uang.includes(event)
    )

    const dataFound = this.dataCompareChangeRKAP.some((item: any) => {
      return item.mata_uang === event;
    });

    console.log(getData, dataFound);

    if(event != undefined){
      console.log(getData);
      for(let i=0; i<getData.length; i++){
        if(!dataFound){
          this.dataCompareChangeRKAP.push(getData[0]);
          Swal.fire({
            title: "Data berhasi ditambah!",
            icon: "info",
            showCloseButton: true,
          });
          return this.dataCompareChangeRKAP
        }
        else{
          Swal.fire({
            title: "Data sudah ada!",
            icon: "info",
            showCloseButton: true,
          });
        }
      }
    }
    else{
      console.log('else');
    }
  }

  cancelCompare(){
    this.dataCompareChangeRKAP = this.listDataCompareChangeRKAP;
    return this.dataCompareChangeRKAP;
  }

  activeAllLineChart: boolean = true;
  activeAllBarChart: boolean = false;

  activeButtonLineKurs: string = '1year';
  activeButtonBarKurs: string = '1year';

  activeButtonLineWTIBRENT: string = '1year';
  activeButtonBarWTIBRENT: string = '1year';

  activeButtonLineICP: string = '1year';
  activeButtonBarICP: string = '1year';

  activeButtonLineCOAL: string = '1year';
  activeButtonBarCOAL: string = '1year';

  activeButtonLineLNG: string = '1year';
  activeButtonBarLNG: string = '1year';

  activeButtonLineInterest: string = '1year';
  activeButtonBarInterest: string = '1year';

  filteredDate: string = '';

  stateLoadingTrue = () => {
    this.isLoadingAllData = true;
      this.isLoadingKursLine = true;
      this.isLoadingWTILine = true;
      this.isLoadingICPLine = true;
      this.isLoadingCOALLine = true;
      this.isLoadingLNGLine = true;
      this.isLoadingInterestLine = true;

      this.isLoadingKursBar = true;
      this.isLoadingWTIBar = true;
      this.isLoadingCOALBar = true;
      this.isLoadingICPBar = true;
      this.isLoadingLNGBar = true;
      this.isLoadingInterestBar = true;
  }

  stateLoadingFalse = () => {
    this.isLoadingAllData = false;
    this.isLoadingKursLine = false;
    this.isLoadingWTILine = false;
    this.isLoadingICPLine = false;
    this.isLoadingCOALLine = false;
    this.isLoadingLNGLine = false;
    this.isLoadingInterestLine = false;

    this.isLoadingKursBar = false;
    this.isLoadingWTIBar = false;
    this.isLoadingCOALBar = false;
    this.isLoadingICPBar = false;
    this.isLoadingLNGBar = false;
    this.isLoadingInterestBar = false;
  }

  //Get Date
  onDate(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = moment(event.value).format('DD/MM/YYYY');
    this.filteredDate = selectedDate;
    console.log(selectedDate);
  }

  //Filer Range Kurs Line Chart
  filterRangeDateKursLineChart = async (range: string) => {
    const today = moment(new Date()).format('DD/MM/YYYY');
    const oneWeekAgo = moment(new Date()).subtract(7, 'days').format('DD/MM/YYYY');
    const oneMonthAgo = moment(new Date()).subtract(1, 'months').format('DD/MM/YYYY');
    const oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');
    const threeYearsAgo = moment(new Date()).subtract(3, 'years').format('DD/MM/YYYY');

    let responseData: any;
    let updateValueOFJPY;

    let combinedArray: any = [];
    switch(range){
      case '1week':
        this.activeButtonLineKurs = range;
        this.isLoadingKursLine = true;

        responseData  = await this.marketUpdateService.fetchDataKursTrend(oneWeekAgo, today);

        this.dataKurs = responseData;
        this.trendKursCategories = responseData;

        localStorage.setItem('dataLineKurs', JSON.stringify(this.dataKurs.d.arrayData))

        if(this.dataKurs.s === 200){
          this.isLoadingKursLine = false
        }
        else{
          this.isLoadingKursLine = true;
        }

        // const kursName = this.dataKurs.d.arra
        this.dataKurs = this.dataKurs.d.arrayData.filter((item: any) => ['USD'].includes(item.kurs));

        this.valueJPY = responseData;
        this.valueJPY = this.valueJPY.d.arrayData.filter((item: any) => item.kurs === 'JPY')

        updateValueOFJPY = this.valueJPY.map((item: any) => {
          return item.data.map((value: any) => {
            const val = value / 100;
            const slice = val.toString().slice(0,6)
            const toNumber = parseFloat(slice)
            return toNumber
          });
        });

        this.valueJPY = updateValueOFJPY;

        this.lineChartKursSeries = [];
        console.log(this.dataKurs);

        for(let i=0; i < this.dataKurs.length ; i++){
          const kurs = this.dataKurs[i].kurs;

          if(kurs == 'JPY'){
            const jpyValue = this.dataKurs[i].data
            const kursJPY = this.dataKurs[i].kurs

            this.lineChartKursSeries.push({
              name: kursJPY,
              data: this.valueJPY[0]
            })
          }
          else{
            this.lineChartKursSeries.push(
              {
              name: `${kurs}`,
              data: this.dataKurs[i].data,
              },
            )
          }
        }

        this.lineYAxisKurs = [];
        this.tesXaxis = {
          categories: [],
          labels: {}
        }

        for(let i=0; i< this.dataKurs.length; i++){
          const kurs = this.dataKurs[i].kurs

          var minVal;
          var maxVal;

          let minValJPY;
          let maxValJPY;

          if(kurs != 'JPY' && i < 1){
            // combinedArray = this.dataKurs[i].data.concat(this.dataKurs[2].data, this.dataKurs[3].data)
            combinedArray = combinedArray.concat(this.dataKurs[i].data)

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
            // let combinedArray = this.dataKurs[i].data
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


        if(kurs === 'USD'){

          this.lineYAxisKurs.push({
            showAlways: true,
            seriesName: kurs,
            min: minVal - 50,
            max: maxVal + 50,
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
          console.log(kurs);

          this.lineYAxisKurs.push({

              showAlways: true,
              seriesName: kurs,
              min: minValJPY,
              max: maxValJPY,
              tickAmount: 15,
              opposite: true,

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

        for(let i = 0; i < this.trendKursCategories.d.arrayTanggal.length; i++){
          const currentDate = this.trendKursCategories.d.arrayTanggal[i];

          this.tesXaxis.categories.push(currentDate);
          if(i < 1){
            this.tesXaxis.labels = {
              formatter: function(value, timestamp){
                return moment(new Date(value)).format("DD MMM YYYY")
              }
            }
          }
        }
      break;

      case '1month':
        this.activeButtonLineKurs = range;
        this.isLoadingKursLine = true;
        let tempData;
          responseData  = await this.marketUpdateService.fetchDataKursTrend(oneMonthAgo, today).then(
            data => {
              setTimeout(() => {
                tempData = data
              }, 500);
            }
          );


          this.tempDataKurs = tempData;
          this.dataKurs = tempData;
          this.trendKursCategories = tempData;

          localStorage.setItem('dataLineKurs', JSON.stringify(this.dataKurs.d.arrayData))

          this.dataKurs = this.dataKurs.d.arrayData.filter((item: any) => ['USD'].includes(item.kurs));

          this.valueJPY = responseData;
          this.valueJPY = this.valueJPY.d.arrayData.filter((item: any) => item.kurs === 'JPY')

          updateValueOFJPY = this.valueJPY.map((item: any) => {
            return item.data.map((value: any) => {
              const val = value / 100;
              const slice = val.toString().slice(0,6)
              const toNumber = parseFloat(slice)
              return toNumber
            });
          });

          this.valueJPY = updateValueOFJPY;

          this.lineChartKursSeries = [];

          for(let i=0; i < this.dataKurs.length ; i++){
            const kurs = this.dataKurs[i].kurs;

            if(kurs == 'JPY'){
              const jpyValue = this.dataKurs[i].data
              const kursJPY = this.dataKurs[i].kurs

              this.lineChartKursSeries.push({
                name: kursJPY,
                data: this.valueJPY[0]
              })
            }
            else{
              this.lineChartKursSeries.push(
                {
                name: `${kurs}`,
                data: this.dataKurs[i].data,
                },
              )
            }
          }

          this.lineYAxisKurs = [];
          this.tesXaxis = {
            categories: [],
            labels: {},
            type: 'datetime'
          }

          for(let i=0; i< this.dataKurs.length; i++){
            const kurs = this.dataKurs[i].kurs

            var minVal;
            var maxVal;

            let minValJPY;
            let maxValJPY;

            if(kurs != 'JPY' && i < 1){
              // combinedArray = this.dataKurs[i].data.concat(this.dataKurs[2].data, this.dataKurs[3].data)
              combinedArray = combinedArray.concat(this.dataKurs[i].data)

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
              // let combinedArray = this.dataKurs[i].data
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


          if(kurs === 'USD'){

            this.lineYAxisKurs.push({
              showAlways: true,
              seriesName: kurs,
              min: minVal - 50,
              max: maxVal + 50,
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
            console.log(kurs);

            this.lineYAxisKurs.push({

                showAlways: true,
                seriesName: kurs,
                min: minValJPY,
                max: maxValJPY,
                tickAmount: 15,
                opposite: true,

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

          for(let i = 0; i < this.trendKursCategories.d.arrayTanggal.length; i++){
            const currentDate = this.trendKursCategories.d.arrayTanggal[i];

            this.tesXaxis.categories.push(currentDate);
            if(i < 1){
              this.tesXaxis.labels = {
                formatter: function(value, timestamp){
                  return moment(new Date(value)).format("DD MMM YYYY")
                }
              }
            }
          }

          if(this.dataKurs.s === 200){
            this.isLoadingKursLine = false;
          }
          else{
            this.isLoadingKursLine = true;
          }
      break;


        break;

      case '1year':
        this.activeButtonLineKurs = range;
        this.isLoadingKursLine = true;

          responseData  = await this.marketUpdateService.fetchDataKursTrend(oneYearsAgo, today);

          this.dataKurs = responseData;
          this.trendKursCategories = responseData;

          localStorage.setItem('dataLineKurs', JSON.stringify(this.dataKurs.d.arrayData))

          if(this.dataKurs.s === 200){
            this.isLoadingKursLine = false;
          }
          else{
            this.isLoadingKursLine = true;
          }

          this.dataKurs = this.dataKurs.d.arrayData.filter((item: any) => ['USD'].includes(item.kurs));

          this.valueJPY = responseData;
          this.valueJPY = this.valueJPY.d.arrayData.filter((item: any) => item.kurs === 'JPY')

          updateValueOFJPY = this.valueJPY.map((item: any) => {
            return item.data.map((value: any) => {
              const val = value / 100;
              const slice = val.toString().slice(0,6)
              const toNumber = parseFloat(slice)
              return toNumber
            });
          });

          this.valueJPY = updateValueOFJPY;

          this.lineChartKursSeries = [];

          for(let i=0; i < this.dataKurs.length ; i++){
            const kurs = this.dataKurs[i].kurs;

            if(kurs == 'JPY'){
              const jpyValue = this.dataKurs[i].data
              const kursJPY = this.dataKurs[i].kurs

              this.lineChartKursSeries.push({
                name: kursJPY,
                data: this.valueJPY[0]
              })
            }
            else{
              this.lineChartKursSeries.push(
                {
                name: `${kurs}`,
                data: this.dataKurs[i].data,
                },
              )
            }
          }

          this.lineYAxisKurs = [];
          this.tesXaxis = {
            categories: [],
            labels: {},
            type: 'datetime'
          }

          for(let i=0; i< this.dataKurs.length; i++){
            const kurs = this.dataKurs[i].kurs

            var minVal;
            var maxVal;

            let minValJPY;
            let maxValJPY;

            if(kurs != 'JPY' && i < 1){
              // combinedArray = this.dataKurs[i].data.concat(this.dataKurs[2].data, this.dataKurs[3].data)
              combinedArray = combinedArray.concat(this.dataKurs[i].data)

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
              // let combinedArray = this.dataKurs[i].data
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


          if(kurs === 'USD'){

            this.lineYAxisKurs.push({
              showAlways: true,
              seriesName: kurs,
              min: minVal - 50,
              max: maxVal + 50,
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
            console.log(kurs);

            this.lineYAxisKurs.push({

                showAlways: true,
                seriesName: kurs,
                min: minValJPY,
                max: maxValJPY,
                tickAmount: 15,
                opposite: true,

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

          for(let i = 0; i < this.trendKursCategories.d.arrayTanggal.length; i++){
            const currentDate = this.trendKursCategories.d.arrayTanggal[i];

            this.tesXaxis.categories.push(currentDate);
            if(i < 1){
              this.tesXaxis.labels = {
                formatter: function(value, timestamp){
                  return moment(new Date(value)).format("DD MMM YYYY")
                }
              }
            }
          }
        break;


          break;

      case '3years':
        this.activeButtonLineKurs = range;
        this.isLoadingKursLine = true;

            responseData  = await this.marketUpdateService.fetchDataKursTrend(threeYearsAgo, today);

            this.dataKurs = responseData;
            this.trendKursCategories = responseData;

            localStorage.setItem('dataLineKurs', JSON.stringify(this.dataKurs.d.arrayData))

            if(this.dataKurs.s === 200){
              this.isLoadingKursLine = false;
            }
            else{
              this.isLoadingKursLine = true;
            }

            this.dataKurs = this.dataKurs.d.arrayData.filter((item: any) => ['USD'].includes(item.kurs));

            this.valueJPY = responseData;
            this.valueJPY = this.valueJPY.d.arrayData.filter((item: any) => item.kurs === 'JPY')

            updateValueOFJPY = this.valueJPY.map((item: any) => {
              return item.data.map((value: any) => {
                const val = value / 100;
                const slice = val.toString().slice(0,6)
                const toNumber = parseFloat(slice)
                return toNumber
              });
            });

            this.valueJPY = updateValueOFJPY;

            this.lineChartKursSeries = [];

            for(let i=0; i < this.dataKurs.length ; i++){
              const kurs = this.dataKurs[i].kurs;

              if(kurs == 'JPY'){
                const jpyValue = this.dataKurs[i].data
                const kursJPY = this.dataKurs[i].kurs

                this.lineChartKursSeries.push({
                  name: kursJPY,
                  data: this.valueJPY[0]
                })
              }
              else{
                this.lineChartKursSeries.push(
                  {
                  name: `${kurs}`,
                  data: this.dataKurs[i].data,
                  },
                )
              }
            }

            this.lineYAxisKurs = [];
            this.tesXaxis = {
              categories: [],
              labels: {},
              type: 'datetime'
            }


            for(let i=0; i< this.dataKurs.length; i++){
              const kurs = this.dataKurs[i].kurs

              var minVal;
              var maxVal;

              let minValJPY;
              let maxValJPY;

              if(kurs != 'JPY' && i < 1){
                // combinedArray = this.dataKurs[i].data.concat(this.dataKurs[2].data, this.dataKurs[3].data)
                combinedArray = combinedArray.concat(this.dataKurs[i].data)

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
                // let combinedArray = this.dataKurs[i].data
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


            if(kurs === 'USD'){

              this.lineYAxisKurs.push({
                showAlways: true,
                seriesName: kurs,
                min: minVal - 50,
                max: maxVal + 50,
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
              console.log(kurs);

              this.lineYAxisKurs.push({

                  showAlways: true,
                  seriesName: kurs,
                  min: minValJPY,
                  max: maxValJPY,
                  tickAmount: 15,
                  opposite: true,

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

            for(let i = 0; i < this.trendKursCategories.d.arrayTanggal.length; i++){
              const currentDate = this.trendKursCategories.d.arrayTanggal[i];

              this.tesXaxis.categories.push(currentDate);
              if(i < 1){
                this.tesXaxis.labels = {
                  formatter: function(value, timestamp){
                    return moment(new Date(value)).format("DD MMM YYYY")
                  }
                }
              }
            }
          break;

      default: console.log("range doesn't match");

    }
  }

  //Filter Range Interest Rate Line Chart
  filterRangeDateInterestLineChart = async (range: string) => {

    const today = moment(new Date()).format('DD/MM/YYYY');
    const oneWeekAgo = moment(new Date()).subtract(7, 'days').format('DD/MM/YYYY');
    const oneMonthAgo = moment(new Date()).subtract(1, 'months').format('DD/MM/YYYY');
    const oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');
    const threeYearsAgo = moment(new Date()).subtract(3, 'years').format('DD/MM/YYYY');

    let responseData;
    switch(range){
      case '1week':
        this.activeButtonLineInterest = range;
        this.isLoadingInterestLine = true;

        responseData  = await this.marketUpdateService.fetchDataInterestRateTrending(oneWeekAgo, today)

        this.trendInterestData = responseData;
        this.lineChartInterestRateSeries = this.trendInterestData.d.arrayData;

        this.interestRateXaxis = {
          labels: {
              formatter: function(value, timestamp){
              return moment(new Date(value)).format("DD MMM YYYY")
            }
          }
        }

        localStorage.setItem('dataInterestLine', JSON.stringify(this.trendInterestData.d.arrayData))

        if(this.trendInterestData.s === 200){
          this.isLoadingInterestLine = false;
        }
        else{
          this.isLoadingInterestLine = true;
        }
      break;

      case '1month':
        this.activeButtonLineInterest = range;
        this.isLoadingInterestLine = true;

        responseData  = await this.marketUpdateService.fetchDataInterestRateTrending(oneMonthAgo, today)

        this.trendInterestData = responseData;
        this.lineChartInterestRateSeries = this.trendInterestData.d.arrayData

        this.interestRateXaxis = {
          labels: {
              formatter: function(value, timestamp){
              return moment(new Date(value)).format("DD MMM YYYY")
            }
          }
        }

        localStorage.setItem('dataInterestLine', JSON.stringify(this.trendInterestData.d.arrayData))

        if(this.trendInterestData.s === 200){
          this.isLoadingInterestLine = false;
        }
        else{
          this.isLoadingInterestLine = true;
        }
      break;

      case '1year':
        this.activeButtonLineInterest = range;
        this.isLoadingInterestLine = true;

        responseData  = await this.marketUpdateService.fetchDataInterestRateTrending(oneYearsAgo, today)

        this.trendInterestData = responseData;
        this.lineChartInterestRateSeries = this.trendInterestData.d.arrayData;

        this.interestRateXaxis = {
          labels:{},
          type:'datetime'
        }

        this.interestRateXaxis.labels = {
            formatter: function(value, timestamp){
            return moment(new Date(value)).format("DD MMM YYYY")
          }
        }

        localStorage.setItem('dataInterestLine', JSON.stringify(this.trendInterestData.d.arrayData))

        if(this.trendInterestData.s === 200){
          this.isLoadingInterestLine = false;
        }
        else{
          this.isLoadingInterestLine = true;
        }
      break;

      case '3years':
      this.activeButtonLineInterest = range;
      this.isLoadingInterestLine = true;

      responseData  = await this.marketUpdateService.fetchDataInterestRateTrending(threeYearsAgo, today)

      this.trendInterestData = responseData;
      this.lineChartInterestRateSeries = this.trendInterestData.d.arrayData;

      this.interestRateXaxis = {
        labels:{},
        type:'datetime'
      }

      this.interestRateXaxis.labels = {
          formatter: function(value, timestamp){
          return moment(new Date(value)).format("DD MMM YYYY")
        }
      }

      localStorage.setItem('dataInterestLine', JSON.stringify(this.trendInterestData.d.arrayData))

      if(this.trendInterestData.s === 200){
        this.isLoadingInterestLine = false;
      }
      else{
        this.isLoadingInterestLine = true;
      }

      break;
    }

  }

  //Filter Range Commodities Line Chart
  fetchRangeDataCommoditiesLineChart = async (kategori: string, range_date: string) => {

    const today = moment(new Date()).format('DD/MM/YYYY');;
    const oneWeekAgo = moment(new Date()).subtract(7, 'days').format('DD/MM/YYYY');
    const oneMonthAgo = moment(new Date()).subtract(1, 'months').format('DD/MM/YYYY');
    const oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');
    const threeYearsAgo = moment(new Date()).subtract(3, 'years').format('DD/MM/YYYY');

    switch(kategori) {
      case "['WTI','BRENT']":

        if(range_date === '1week'){
          this.activeButtonLineWTIBRENT = range_date
          this.isLoadingWTILine = true;

          const responseWTIBRENT = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneWeekAgo, today)

          setTimeout(() => {
            this.allTrendWTIBRENT = responseWTIBRENT;
            this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;
          }, 200);

          if(this.allTrendWTIBRENT.s === 200){
            this.isLoadingWTILine = false;
          }
          else{
            this.isLoadingWTILine = true;
          }

          this.dataChartWtibrent = [];
          this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;

          this.xAxisWtiChartBrent = {
            type:'datetime',
            labels: {
              formatter: function(value, timestamp){
                return moment(new Date(value)).format("DD MMM YYYY")
            }
          }
          }

        }
        else if(range_date === '1month'){
          this.activeButtonLineWTIBRENT = range_date
          this.isLoadingWTILine = true;

          const responseWTIBRENT = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneMonthAgo, today)

          this.dataChartWtibrent = [];

          setTimeout(() => {
            this.allTrendWTIBRENT = responseWTIBRENT;
            this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;
          }, 200);

          if(this.allTrendWTIBRENT.s === 200){
            this.isLoadingWTILine = false;
          }
          else{
            this.isLoadingWTILine = true;
          }

          console.log(this.dataChartWtibrent);


          this.xAxisWtiChartBrent = {
            type:'datetime',
            labels: {
              formatter: function(value, timestamp){
                return moment(new Date(value)).format("DD MMM YYYY")
            }
          }
          }

        }
        else if(range_date === '1year'){
          this.activeButtonLineWTIBRENT = range_date
          this.isLoadingWTILine = true;

          const responseWTIBRENT = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneYearsAgo, today)

          this.allTrendWTIBRENT = responseWTIBRENT;

          if(this.allTrendWTIBRENT.s === 200){
            this.isLoadingWTILine = false;
          }
          else{
            this.isLoadingWTILine = true;
          }

          this.dataChartWtibrent = [];
          this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;

          this.xAxisWtiChartBrent = {
            type:'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }

        }
        else if(range_date === '3years'){
          this.activeButtonLineWTIBRENT = range_date
          this.isLoadingWTILine = true;

          const responseWTIBRENT = await this.marketUpdateService.fetchDataLineCommodities(kategori, threeYearsAgo, today)

          this.allTrendWTIBRENT = responseWTIBRENT;

          if(this.allTrendWTIBRENT.s === 200){
            this.isLoadingWTILine = false;
          }
          else{
            this.isLoadingWTILine = true;
          }

          this.dataChartWtibrent = [];
          this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;

          this.xAxisWtiChartBrent = {
              type:'datetime',
              labels: {
                formatter: function(value, timestamp){
                  return moment(new Date(value)).format("DD MMM YYYY")
              }
            }
          }

        }
          break;

      case "['ICP']":
        if(range_date === '1week'){
          this.activeButtonLineICP = range_date
          this.isLoadingICPLine = true;

          const responseICP = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneWeekAgo, today)

          this.allTrendICP = responseICP;

          if(this.allTrendICP.s === 200){
            this.isLoadingICPLine = false;
          }
          else{
            this.isLoadingICPLine = true;
          }

          this.dataIcpChart = [];
          this.dataIcpChart = this.allTrendICP.d.arrayData;

          this.xAxisIcpChart = {
            type: 'datetime'
          }

        }
        else if(range_date === '1month'){
          this.activeButtonLineICP = range_date
          this.isLoadingICPLine = true;

          const responseICP = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneMonthAgo, today)

          this.allTrendICP = responseICP;

          if(this.allTrendICP.s === 200){
            this.isLoadingICPLine = false;
          }
          else{
            this.isLoadingICPLine = true;
          }

          this.dataIcpChart = [];
          this.dataIcpChart = this.allTrendICP.d.arrayData;

          this.xAxisIcpChart = {
            type: 'datetime'
          }

        }
        else if(range_date === '1year'){
          this.activeButtonLineICP = range_date
          this.isLoadingICPLine = true;

          const responseICP = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneYearsAgo, today)

          this.dataIcpChart = [];
          setTimeout(() => {
            this.allTrendICP = responseICP;
            this.dataChartWtibrent = this.allTrendICP.d.arrayData;
          }, 200);

          if(this.allTrendICP.s === 200){
            this.isLoadingICPLine = false;
          }
          else{
            this.isLoadingICPLine = true;
          }

          // this.dataIcpChart = [];
          // this.dataIcpChart = this.allTrendICP.d.arrayData;

          this.xAxisIcpChart = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }

        }
        else if(range_date === '3years'){
          this.activeButtonLineICP = range_date
          this.isLoadingICPLine = true;

          const responseICP = await this.marketUpdateService.fetchDataLineCommodities(kategori, threeYearsAgo, today)
          this.dataIcpChart = [];

          setTimeout(() => {
            this.allTrendICP = responseICP;
            this.dataIcpChart = this.allTrendICP.d.arrayData;
          }, 200);

          if(this.allTrendICP.s === 200){
            this.isLoadingICPLine = false;
          }
          else{
            this.isLoadingICPLine = true;
          }

          // this.dataIcpChart = this.allTrendICP.d.arrayData;

          this.xAxisIcpChart = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }

        }
          break;

      case "['COAL']":
        if(range_date === '1week'){
          this.activeButtonLineCOAL = range_date
          this.isLoadingCOALLine = true;

          const responseCOAL = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneWeekAgo, today)

          this.dataChartCoal = [];

          setTimeout(() => {
            this.allTrendCOAL = responseCOAL;
            this.dataChartCoal = this.allTrendCOAL.d.arrayData;
          }, 200);

          if(this.allTrendCOAL.s === 200){
            this.isLoadingCOALLine = false;
          }
          else{
            this.isLoadingCOALLine = true;
          }

          this.xAxisChartCoal = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }
        }
        else if(range_date === '1month'){
          this.activeButtonLineCOAL = range_date
          this.isLoadingCOALLine = true;

          const responseCOAL = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneMonthAgo, today)

          this.dataChartCoal = [];
          setTimeout(() => {
            this.allTrendCOAL = responseCOAL;
            this.dataChartCoal = this.allTrendCOAL.d.arrayData;
          }, 200);

          if(this.allTrendCOAL.s === 200){
            this.isLoadingCOALLine = false;
          }
          else{
            this.isLoadingCOALLine = true;
          }

          this.xAxisChartCoal = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }
        }
        else if(range_date === '1year'){
          this.activeButtonLineCOAL = range_date
          this.isLoadingCOALLine = true;

          const responseCOAL = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneYearsAgo, today)

          this.dataChartCoal = [];
          setTimeout(() => {
            this.allTrendCOAL = responseCOAL;
            this.dataChartCoal = this.allTrendCOAL.d.arrayData;
          }, 200);

          if(this.allTrendCOAL.s === 200){
            this.isLoadingCOALLine = false;
          }
          else{
            this.isLoadingCOALLine = true;
          }

          this.xAxisChartCoal = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }
        }
        else if(range_date === '3years'){
          this.activeButtonLineCOAL = range_date
          this.isLoadingCOALLine = true;

          const responseCOAL = await this.marketUpdateService.fetchDataLineCommodities(kategori, threeYearsAgo, today)

          this.dataChartCoal = [];
          setTimeout(() => {
            this.allTrendCOAL = responseCOAL;
            this.dataChartCoal = this.allTrendCOAL.d.arrayData;
          }, 200);

          if(this.allTrendCOAL.s === 200){
            this.isLoadingCOALLine = false;
          }
          else{
            this.isLoadingCOALLine = true;
          }

          this.xAxisChartCoal = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }
        }
          break;

      case "['LNG']":
        if(range_date === '1week'){
          this.activeButtonLineLNG = range_date
          this.isLoadingLNGLine = true;

          const responseLNG = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneWeekAgo, today)

          this.dataChartLngLine = [];
          setTimeout(() => {
            this.allTrendLNG = responseLNG;
            this.dataChartLngLine = this.allTrendLNG.d.arrayData;
          }, 200);

          if(this.allTrendLNG.s === 200){
            this.isLoadingLNGLine = false;
          }
          else{
            this.isLoadingLNGLine = true;
          }

          // this.dataChartLngLine = this.allTrendLNG.d.arrayData;

          this.xAxisChartLng = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }

        }
        else if(range_date === '1month'){
          this.activeButtonLineLNG = range_date
          this.isLoadingLNGLine = true;

          const responseLNG = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneMonthAgo, today)

          this.dataChartLngLine = [];
          setTimeout(() => {
            this.allTrendLNG = responseLNG;
            this.dataChartLngLine = this.allTrendLNG.d.arrayData;
          }, 200);

          if(this.allTrendLNG.s === 200){
            this.isLoadingLNGLine = false;
          }
          else{
            this.isLoadingLNGLine = true;
          }

          // this.dataChartLngLine = [];
          // this.dataChartLngLine = this.allTrendLNG.d.arrayData;

          this.xAxisChartLng = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }

        }
        else if(range_date === '1year'){
          this.activeButtonLineLNG = range_date
          this.isLoadingLNGLine = true;

          const responseLNG = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneYearsAgo, today)

          this.dataChartLngLine = [];
          setTimeout(() => {
            this.allTrendLNG = responseLNG;
            this.dataChartLngLine = this.allTrendLNG.d.arrayData;
          }, 200);

          if(this.allTrendLNG.s === 200){
            this.isLoadingLNGLine = false;
          }
          else{
            this.isLoadingLNGLine = true;
          }

          // this.dataChartLngLine = [];
          // this.dataChartLngLine = this.allTrendLNG.d.arrayData;
          console.log(this.allTrendLNG);

          this.xAxisChartLng = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }

        }
        else if(range_date === '3years'){
          this.activeButtonLineLNG = range_date
          this.isLoadingLNGLine = true;

          const responseLNG = await this.marketUpdateService.fetchDataLineCommodities(kategori, threeYearsAgo, today)

          this.dataChartLngLine = [];
          setTimeout(() => {
            this.allTrendLNG = responseLNG;
            this.dataChartLngLine = this.allTrendLNG.d.arrayData;
          }, 200);

          if(this.allTrendLNG.s === 200){
            this.isLoadingLNGLine = false;
          }
          else{
            this.isLoadingLNGLine = true;
          }

          // this.dataChartLngLine = [];
          // this.dataChartLngLine = this.allTrendLNG.d.arrayData;
          console.log(this.allTrendLNG);

          this.xAxisChartLng = {
            type: 'datetime',
            labels: {
              formatter: function(value, timestamp, opts) {
                return moment(new Date(value)).format("DD MMM YYYY")
              },
            }
          }

        }
          break;

      case "['BATUBARA']":
        if(range_date === '1week'){
          const responseWTIBRENT = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneWeekAgo, today)

          this.allTrendWTIBRENT = responseWTIBRENT;
          this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;

          // this.xAxisBatuBaraChart = {
          //   categories: []
          // }

          // for(let i=0; i<this.allTrendWTIBRENT.d.arrayData.data.length; i++){
          //     this.xAxisBatuBaraChart.categories.push(this.allTrendWTIBRENT.d.arrayData[0].data[i].x)
          // }
        }
        else if(range_date === '1month'){
          const responseWTIBRENT = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneMonthAgo, today)

          this.allTrendWTIBRENT = responseWTIBRENT;
          this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;

          // this.xAxisBatuBaraChart = {
          //   categories: []
          // }

          // for(let i=0; i<this.allTrendWTIBRENT.d.arrayData.data.length; i++){
          //     this.xAxisBatuBaraChart.categories.push(this.allTrendWTIBRENT.d.arrayData[0].data[i].x)
          // }
        }
        else if(range_date === '1year'){
          const responseWTIBRENT = await this.marketUpdateService.fetchDataLineCommodities(kategori, oneYearsAgo, today)

          this.allTrendWTIBRENT = responseWTIBRENT;
          this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;

          // this.xAxisBatuBaraChart = {
          //   categories: []
          // }

          // for(let i=0; i<this.allTrendWTIBRENT.d.arrayData.data.length; i++){
          //     this.xAxisBatuBaraChart.categories.push(this.allTrendWTIBRENT.d.arrayData[0].data[i].x)
          // }
        }
        else if(range_date === '3years'){
          const responseWTIBRENT = await this.marketUpdateService.fetchDataLineCommodities(kategori, threeYearsAgo, today)

          this.allTrendWTIBRENT = responseWTIBRENT;
          this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;

          // this.xAxisBatuBaraChart = {
          //   categories: []
          // }

          // for(let i=0; i<this.allTrendWTIBRENT.d.arrayData.data.length; i++){
          //     this.xAxisBatuBaraChart.categories.push(this.allTrendWTIBRENT.d.arrayData[0].data[i].x)
          // }
        }
          break;
      default:
          console.log("kategori doesn't match");
          break;
    }
  }

  //Filter Range Kurs Data Bar Chart
  filterRangeDateKursBarChart = async (params: string, range:string) => {

    const today = moment(new Date()).format('DD/MM/YYYY');
    const oneWeekAgo = moment(new Date()).subtract(7, 'days').format('DD/MM/YYYY');
    const oneMonthAgo = moment(new Date()).subtract(1, 'months').format('DD/MM/YYYY');
    const oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');
    const threeYearsAgo = moment(new Date()).subtract(3, 'years').format('DD/MM/YYYY');

    let responseData;
    switch(range){
      case '1week':
        this.activeButtonBarKurs = range;
        this.isLoadingKursLine = true;

        responseData  = await this.marketUpdateService.fetchDataKursTrendBarChart(today)

        console.log(responseData);

        this.trendKursDataBarChart = responseData;

        if(this.trendKursDataBarChart.s === 200){
          this.isLoadingKursLine = false;
        }
        else{
          this.isLoadingKursLine = true;
        }

        this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
        this.barChartKursSeries = this.trendKursDataBarChart;


      break;

      case '1month':
        this.activeButtonBarKurs = range;
        this.isLoadingKursLine = true;

        responseData  = await this.marketUpdateService.fetchDataKursTrendBarChart(today)

        console.log(responseData);

        this.trendKursDataBarChart = responseData;

        if(this.trendKursDataBarChart.s === 200){
          this.isLoadingKursLine = false;
        }
        else{
          this.isLoadingKursLine = true;
        }

        this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
        this.barChartKursSeries = this.trendKursDataBarChart;


      break;

      case '1year':
        this.activeButtonBarKurs = range;
        this.isLoadingKursLine = true;

        responseData  = await this.marketUpdateService.fetchDataKursTrendBarChart(today)

        console.log(responseData);

        this.trendKursDataBarChart = responseData;

        if(this.trendKursDataBarChart.s === 200){
          this.isLoadingKursLine = false;
        }
        else{
          this.isLoadingKursLine = true;
        }

        this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
        this.barChartKursSeries = this.trendKursDataBarChart;
      break;

      case '3years':
        this.activeButtonBarKurs = range;
        this.isLoadingKursLine = true;

        responseData  = await this.marketUpdateService.fetchDataKursTrendBarChart(today)

        console.log(responseData);

        this.trendKursDataBarChart = responseData;

        if(this.trendKursDataBarChart.s === 200){
          this.isLoadingKursLine = false;
        }
        else{
          this.isLoadingKursLine = true;
        }

        this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
        this.barChartKursSeries = this.trendKursDataBarChart;

      break;
    }

  }

  //Filter Range Interest Data Bar Chart
  filterRangeDateInterestBarChart = async (params: string, range:string) => {

    const today = moment(new Date()).format('DD/MM/YYYY');
    const oneWeekAgo = moment(new Date()).subtract(7, 'days').format('DD/MM/YYYY');
    const oneMonthAgo = moment(new Date()).subtract(1, 'months').format('DD/MM/YYYY');
    const oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');
    const threeYearsAgo = moment(new Date()).subtract(3, 'years').format('DD/MM/YYYY');

    let responseData;
    switch(range){
      case '1week':
        this.activeButtonBarInterest = range;
        this.isLoadingInterestLine = true;

        responseData  = await this.marketUpdateService.fetchInterestRateBarChart(params, oneWeekAgo, today)
        console.log(params, oneWeekAgo, today);

        console.log(responseData);

        this.allTrendDataInterestRate = responseData;

        if(this.allTrendDataInterestRate.s === 200){
          this.isLoadingInterestLine = false;
        }
        else{
          this.isLoadingInterestLine = true;
        }

        this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
        this.barChartInterestRateSeries = this.allTrendDataInterestRate;

      break;

      case '1month':
        this.activeButtonBarInterest = range;
        this.isLoadingInterestLine = true;

        responseData  = await this.marketUpdateService.fetchInterestRateBarChart(params, oneMonthAgo, today)
        console.log(params, oneMonthAgo, today);

        console.log(responseData);

        this.allTrendDataInterestRate = responseData;


        if(this.allTrendDataInterestRate.s === 200){
          this.isLoadingInterestLine = false;
        }
        else{
          this.isLoadingInterestLine = true;
        }

        this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
        this.barChartInterestRateSeries = this.allTrendDataInterestRate;
      break;

      case '1year':
        this.activeButtonBarInterest = range;
        this.isLoadingInterestLine = true;

        responseData  = await this.marketUpdateService.fetchInterestRateBarChart(params, oneYearsAgo, today)
        console.log(params, oneYearsAgo, today);

        console.log(responseData);

        this.allTrendDataInterestRate = responseData;


        if(this.allTrendDataInterestRate.s === 200){
          this.isLoadingInterestLine = false;
        }
        else{
          this.isLoadingInterestLine = true;
        }
        this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
        this.barChartInterestRateSeries = this.allTrendDataInterestRate
      break;

      case '3years':
        this.activeButtonBarInterest = range;
        this.isLoadingInterestLine = true;

        responseData  = await this.marketUpdateService.fetchInterestRateBarChart(params, threeYearsAgo, today)
        console.log(params, threeYearsAgo, today);

        console.log(responseData);

        this.allTrendDataInterestRate = responseData;


        if(this.allTrendDataInterestRate.s === 200){
          this.isLoadingInterestLine = false;
        }
        else{
          this.isLoadingInterestLine = true;
        }
        this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
        this.barChartInterestRateSeries = this.allTrendDataInterestRate
      break;
    }

  }

  fetchRangeDataCommoditiesBarChart = async (kategori: string, group: string, range_date: string) => {

    const today = moment(new Date());
    const oneWeekAgo = moment(new Date()).subtract(7, 'days').format('DD/MM/YYYY');
    const oneMonthAgo = moment(new Date()).subtract(1, 'months').format('DD/MM/YYYY');
    const oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');
    const threeYearsAgo = moment(new Date()).subtract(3, 'years').format('DD/MM/YYYY');

    switch(kategori) {
      case "['WTI','BRENT']":

        if(range_date === '1week'){
          this.activeButtonBarWTIBRENT = range_date
          this.isLoadingWTILine = true;

          const responseWTIBRENT = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneWeekAgo, today.format('DD/MM/YYYY'), group);

          this.dataWTIBRENTBarChart = responseWTIBRENT;

          if(this.dataWTIBRENTBarChart.s === 200){
            this.isLoadingWTILine = false;
          }
          else{
            this.isLoadingWTILine = true;
          }

          this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;

          this.xAxisWtiChartBrent = {
            categories: []
          }

          for(let i=0; i<this.dataWTIBRENTBarChart.d.arrayData.data.length; i++){
              this.xAxisWtiChartBrent.categories.push(this.dataWTIBRENTBarChart.d.arrayData[0].data[i].x)

          }
        }
        else if(range_date === '1month'){
          this.activeButtonBarWTIBRENT = range_date
          this.isLoadingWTILine = true;

          const responseWTIBRENT = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneMonthAgo, today.format('DD/MM/YYYY'), group);

          this.dataWTIBRENTBarChart = responseWTIBRENT;

          if(this.dataWTIBRENTBarChart.s === 200){
            this.isLoadingWTILine = false;
          }
          else{
            this.isLoadingWTILine = true;
          }

          this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;

          this.xAxisWtiChartBrent = {
            categories: []
          }

          for(let i=0; i<this.dataWTIBRENTBarChart.d.arrayData.data.length; i++){
              this.xAxisWtiChartBrent.categories.push(this.dataWTIBRENTBarChart.d.arrayData[0].data[i].x)

          }
        }
        else if(range_date === '1year'){
          this.activeButtonBarWTIBRENT = range_date
          this.isLoadingWTILine = true;

          const responseWTIBRENT = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneYearsAgo, today.format('DD/MM/YYYY'), group);

          this.dataWTIBRENTBarChart = responseWTIBRENT;

          if(this.dataWTIBRENTBarChart.s === 200){
            this.isLoadingWTILine = false;
          }
          else{
            this.isLoadingWTILine = true;
          }

          this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;

          this.xAxisWtiChartBrent = {
            categories: []
          }

          for(let i=0; i<this.dataWTIBRENTBarChart.d.arrayData.data.length; i++){
              this.xAxisWtiChartBrent.categories.push(this.dataWTIBRENTBarChart.d.arrayData[0].data[i].x)

          }
        }
        else if(range_date === '3years'){
          this.activeButtonBarWTIBRENT = range_date
          this.isLoadingWTILine = true;

          const responseWTIBRENT = await this.marketUpdateService.fetchDataBarCommodities(kategori, threeYearsAgo, today.format('DD/MM/YYYY'), group);

          this.dataWTIBRENTBarChart = responseWTIBRENT;

          if(this.dataWTIBRENTBarChart.s === 200){
            this.isLoadingWTILine = false;
          }
          else{
            this.isLoadingWTILine = true;
          }

          this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;

          this.xAxisWtiChartBrent = {
            categories: []
          }

          for(let i=0; i<this.dataWTIBRENTBarChart.d.arrayData.data.length; i++){
              this.xAxisWtiChartBrent.categories.push(this.dataWTIBRENTBarChart.d.arrayData[0].data[i].x)

          }
        }
          break;
      case "['ICP']":
        if(range_date === '1week'){
          this.activeButtonBarICP = range_date
          this.isLoadingICPLine = true;

          const responseICP = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneWeekAgo, today.format('DD/MM/YYYY'), group);

          this.trenddataICPBarChart = responseICP;

          if(this.trenddataICPBarChart.s === 200){
            this.isLoadingICPLine = false;
          }
          else{
            this.isLoadingICPLine = true;
          }

          this.dataIcpBarChart = this.trenddataICPBarChart.d.arrayData;

          // this.xAxisIcpChart = {
          //   categories: []
          // }

          // for(let i=0; i<this.trenddataICPBarChart.d.arrayData.data.length; i++){
          //     this.xAxisIcpChart.categories.push(this.trenddataICPBarChart.d.arrayData[0].data[i].x)

          // }
        }
        else if(range_date === '1month'){
          this.activeButtonBarICP = range_date
          this.isLoadingICPLine = true;

          const responseICP = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneMonthAgo, today.format('DD/MM/YYYY'), group);

          this.trenddataICPBarChart = responseICP;

          if(this.trenddataICPBarChart.s === 200){
            this.isLoadingICPLine = false;
          }
          else{
            this.isLoadingICPLine = true;
          }

          this.dataIcpBarChart = this.trenddataICPBarChart.d.arrayData;

          // this.xAxisIcpChart = {
          //   categories: []
          // }

          // for(let i=0; i<this.trenddataICPBarChart.d.arrayData.data.length; i++){
          //     this.xAxisIcpChart.categories.push(this.trenddataICPBarChart.d.arrayData[0].data[i].x)

          // }
        }
        else if(range_date === '1year'){
          this.activeButtonBarICP = range_date

          const responseICP = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneYearsAgo, today.format('DD/MM/YYYY'), group);

          this.trenddataICPBarChart = responseICP;

          if(this.trenddataICPBarChart.s === 200){
            this.isLoadingICPLine = false;
          }
          else{
            this.isLoadingICPLine = true;
          }

          this.dataIcpBarChart = this.trenddataICPBarChart.d.arrayData;

          // this.xAxisIcpChart = {
          //   categories: []
          // }

          // for(let i=0; i<this.trenddataICPBarChart.d.arrayData.data.length; i++){
          //     this.xAxisIcpChart.categories.push(this.trenddataICPBarChart.d.arrayData[0].data[i].x)

          // }
        }
        else if(range_date === '3years'){
          this.activeButtonBarICP = range_date
          this.isLoadingICPLine = true;

          const responseICP = await this.marketUpdateService.fetchDataBarCommodities(kategori, threeYearsAgo, today.format('DD/MM/YYYY'), group);

          this.trenddataICPBarChart = responseICP;

          if(this.trenddataICPBarChart.s === 200){
            this.isLoadingICPLine = false;
          }
          else{
            this.isLoadingICPLine = true;
          }

          this.dataIcpBarChart = this.trenddataICPBarChart.d.arrayData;

          // this.xAxisIcpChart = {
          //   categories: []
          // }

          // for(let i=0; i<this.trenddataICPBarChart.d.arrayData.data.length; i++){
          //     this.xAxisIcpChart.categories.push(this.trenddataICPBarChart.d.arrayData[0].data[i].x)

          // }
        }
          break;

      case "['COAL']":
        if(range_date === '1week'){
          this.activeButtonBarCOAL = range_date
          this.isLoadingCOALLine = true;

          const responseCOAL = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneWeekAgo, today.format('DD/MM/YYYY'), group);

          this.dataCOALBarChart = responseCOAL;

          if(this.dataCOALBarChart.s === 200){
            this.isLoadingCOALLine = false;
          }
          else{
            this.isLoadingCOALLine = true;
          }

          this.dataChartCoalBar = this.dataCOALBarChart.d.arrayData;

          // this.xAxisChartCoal = {
          //   categories: []
          // }

          // for(let i=0; i<this.dataCOALBarChart.d.arrayData.data.length; i++){
          //     this.xAxisChartCoal.categories.push(this.dataCOALBarChart.d.arrayData[0].data[i].x)
          // }
        }
        else if(range_date === '1month'){
          this.activeButtonBarCOAL = range_date
          this.isLoadingCOALLine = true;

          const responseCOAL = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneMonthAgo, today.format('DD/MM/YYYY'), group);

          this.dataCOALBarChart = responseCOAL;

          if(this.dataCOALBarChart.s === 200){
            this.isLoadingCOALLine = false;
          }
          else{
            this.isLoadingCOALLine = true;
          }

          this.dataChartCoalBar = this.dataCOALBarChart.d.arrayData;

          // this.xAxisChartCoal = {
          //   categories: []
          // }

          // for(let i=0; i<this.dataCOALBarChart.d.arrayData.data.length; i++){
          //     this.xAxisChartCoal.categories.push(this.dataCOALBarChart.d.arrayData[0].data[i].x)
          // }
        }
        else if(range_date === '1year'){
          this.activeButtonBarCOAL = range_date
          this.isLoadingCOALLine = true;

          const responseCOAL = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneYearsAgo, today.format('DD/MM/YYYY'), group);

          this.dataCOALBarChart = responseCOAL;

          if(this.dataCOALBarChart.s === 200){
            this.isLoadingCOALLine = false;
          }
          else{
            this.isLoadingCOALLine = true;
          }

          this.dataChartCoalBar = this.dataCOALBarChart.d.arrayData;

          this.xAxisChartCoal = {
            categories: []
          }

          for(let i=0; i<this.dataCOALBarChart.d.arrayData.data.length; i++){
              this.xAxisChartCoal.categories.push(this.dataCOALBarChart.d.arrayData[0].data[i].x)
              }
        }
        else if(range_date === '3years'){
          this.activeButtonBarCOAL = range_date
          this.isLoadingCOALLine = true;

          const responseCOAL = await this.marketUpdateService.fetchDataBarCommodities(kategori, threeYearsAgo, today.format('DD/MM/YYYY'), group);

          this.dataCOALBarChart = responseCOAL;

          if(this.dataCOALBarChart.s === 200){
            this.isLoadingCOALLine = false;
          }
          else{
            this.isLoadingCOALLine = true;
          }

          this.dataChartCoalBar = this.dataCOALBarChart.d.arrayData;

          // this.xAxisChartCoal = {
          //   categories: []
          // }

          // for(let i=0; i<this.dataCOALBarChart.d.arrayData.data.length; i++){
          //     this.xAxisChartCoal.categories.push(this.dataCOALBarChart.d.arrayData[0].data[i].x)
          // }
        }
          break;

      case "['LNG']":
        if(range_date === '1week'){
          this.activeButtonBarLNG = range_date
          this.isLoadingLNGLine = true;

          const responseLNG = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneWeekAgo, today.format('DD/MM/YYYY'), group);

          this.dataLNGBarChart = responseLNG;

          if(this.dataLNGBarChart.s === 200){
            this.isLoadingLNGLine = false;
          }
          else{
            this.isLoadingLNGLine = true;
          }

          this.dataChartLngBar = this.dataLNGBarChart.d.arrayData;

          // this.xAxisChartLng = {
          //   categories:[]
          // }

          // for(let i=0; i<this.dataLNGBarChart.d.arrayData.data.length; i++){
          //     this.xAxisChartLng.categories.push(this.dataLNGBarChart.d.arrayData[0].data[i].x)
          // }
        }
        else if(range_date === '1month'){
          this.activeButtonBarLNG = range_date
          this.isLoadingLNGLine = true;

          const responseLNG = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneMonthAgo, today.format('DD/MM/YYYY'), group);

          this.dataLNGBarChart = responseLNG;

          if(this.dataLNGBarChart.s === 200){
            this.isLoadingLNGLine = false;
          }
          else{
            this.isLoadingLNGLine = true;
          }

          this.dataChartLngBar = this.dataLNGBarChart.d.arrayData;

          // this.xAxisChartLng = {
          //   categories:[]
          // }

          // for(let i=0; i<this.dataLNGBarChart.d.arrayData.data.length; i++){
          //     this.xAxisChartLng.categories.push(this.dataLNGBarChart.d.arrayData[0].data[i].x)
          // }
        }
        else if(range_date === '1year'){
          this.activeButtonBarLNG = range_date
          this.isLoadingLNGLine = true;

          const responseLNG = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneYearsAgo, today.format('DD/MM/YYYY'), group);

          this.dataLNGBarChart = responseLNG;

          if(this.dataLNGBarChart.s === 200){
            this.isLoadingLNGLine = false;
          }
          else{
            this.isLoadingLNGLine = true;
          }

          this.dataChartLngBar = this.dataLNGBarChart.d.arrayData;

          // this.xAxisChartLng = {
          //   categories:[]
          // }

          // for(let i=0; i<this.dataLNGBarChart.d.arrayData.data.length; i++){
          //     this.xAxisChartLng.categories.push(this.dataLNGBarChart.d.arrayData[0].data[i].x)
          // }
        }
        else if(range_date === '3years'){
          this.activeButtonBarLNG = range_date
          this.isLoadingLNGLine = true;

          const responseLNG = await this.marketUpdateService.fetchDataBarCommodities(kategori, threeYearsAgo, today.format('DD/MM/YYYY'), group);

          this.dataLNGBarChart = responseLNG;

          if(this.dataLNGBarChart.s === 200){
            this.isLoadingLNGLine = false;
          }
          else{
            this.isLoadingLNGLine = true;
          }

          this.dataChartLngBar = this.dataLNGBarChart.d.arrayData;

          // this.xAxisChartLng = {
          //   categories:[]
          // }

          // for(let i=0; i<this.dataLNGBarChart.d.arrayData.data.length; i++){
          //     this.xAxisChartLng.categories.push(this.dataLNGBarChart.d.arrayData[0].data[i].x)
          // }
        }
          break;
      case "['BATUBARA']":
        if(range_date === '1week'){
          const responseBATUBARA = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneWeekAgo, today.format('DD/MM/YYYY'), group);

          this.dataWTIBRENTBarChart = responseBATUBARA;
          this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;
        }
        else if(range_date === '1month'){
          const responseBATUBARA = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneMonthAgo, today.format('DD/MM/YYYY'), group);

          this.dataWTIBRENTBarChart = responseBATUBARA;
          this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;
        }
        else if(range_date === '1year'){
          const responseBATUBARA = await this.marketUpdateService.fetchDataBarCommodities(kategori, oneYearsAgo, today.format('DD/MM/YYYY'), group);

          this.dataWTIBRENTBarChart = responseBATUBARA;
          this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;
        }
        else if(range_date === '3years'){
          const responseBATUBARA = await this.marketUpdateService.fetchDataBarCommodities(kategori, threeYearsAgo, today.format('DD/MM/YYYY'), group);

          this.dataWTIBRENTBarChart = responseBATUBARA;
          this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;
        }
          break;
      default:
          console.log("kategori doesn't match");
          break;
    }
  }

  //Fetch Default Data
  fetchDataLineKurs = async (date: string, oneYearsAgo: string) => {
    this.lineYAxisKurs = [];

      const responseKurs = await this.marketUpdateService.fetchDataKursTrend(oneYearsAgo, date)
      this.dataKurs = responseKurs;
      localStorage.setItem('dataLineKurs', JSON.stringify(this.dataKurs.d.arrayData))

      this.allTrendDataKurs = responseKurs;
      this.allTrendDataKurs = this.allTrendDataKurs.d.arrayData
      this.valueJPY = responseKurs;
      this.trendKursCategories = responseKurs
      this.trendKursData = responseKurs;

      // if(this.trendKursData.d.hasOwnValue('arrayData')){
        this.defaultKurs = this.trendKursData.d.arrayData.map((item: any) => {
          item.kurs = item.kurs.trim();
          return item;
        });
      // }
      // else{
      //   this.defaultKurs = {}
      // }

      console.log(this.defaultKurs);


      this.defaultKurs = this.defaultKurs.filter((item: any) => ['USD'].includes(item.kurs));

      this.valueJPY = this.valueJPY.d.arrayData.filter((item: any) => item.kurs === 'JPY')

      const updateValueJPY = this.valueJPY.map((item: any) => {
        return item.data.map((value: any) => {
          const val = value / 100;
          const slice = val.toString().slice(0,6)
          const toNumber = parseFloat(slice)
          return toNumber
        });
      });

      console.log('filtered', this.defaultKurs);


      this.valueJPY = updateValueJPY;
      console.log(this.defaultKurs);

      this.lineChartKursSeries = [];

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

      let combinedArray: any[] = [];
      for(let i=0; i< this.defaultKurs.length; i++){
        const kurs = this.defaultKurs[i].kurs

        let minVal;
        let maxVal;

        let minValJPY;
        let maxValJPY;

        if(kurs != 'JPY' && i < 1){
          // combinedArray = this.defaultKurs[i].data.concat(this.defaultKurs[2].data, this.defaultKurs[3].data)
          combinedArray = combinedArray.concat(this.defaultKurs[i].data)

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
          console.log(minVal, maxVal);

        }

        if(kurs == 'JPY'){
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
        }


      if(kurs === 'USD'){
        console.log(kurs);

        this.lineYAxisKurs.push({
          showAlways: true,
          seriesName: "USD",
          min: minVal - 100,
          max: maxVal + 100,

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
      }
      // else if(kurs === 'JPY'){
      //   this.lineYAxisKurs.push({

      //       showAlways: true,
      //       seriesName: kurs,
      //       min: minValJPY,
      //       max: maxValJPY,
      //       tickAmount: 15,
      //       opposite: true,
      //       axisTicks: {
      //         show: true
      //       },
      //       axisBorder: {
      //         show: false,
      //         color: "#000"
      //       },
      //       labels: {
      //         style: {
      //           colors: ["##000"]
      //         },
      //         formatter : (value) => {return new Intl.NumberFormat().format(value)}
      //       },
      //       title: {
      //         style: {
      //           color: "##000"
      //         }
      //       },
      //       tooltip: {
      //         enabled: true
      //       }
      //     },
      //   )
      // } else {

      //   this.lineYAxisKurs.push({
      //     show: true,
      //     showAlways: true,
      //     seriesName: "USD",
      //     min:minVal - 200,
      //     max:maxVal,

      //     axisTicks: {
      //       show: false,
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
      //   })
      // }
      }
  }

  fetchDataLineCommodities = async (date: string, oneYearsAgo: string) => {


    const trendWTIBRENTCommodities = await this.marketUpdateService.fetchDataLineCommodities("['WTI', 'BRENT']", oneYearsAgo, date);

    const trendICPCommodities = await this.marketUpdateService.fetchDataLineCommodities("['ICP']", oneYearsAgo, date);

    const trendCOALCommodities = await this.marketUpdateService.fetchDataLineCommodities("['COAL']", oneYearsAgo, date);

    const trendLNGCommodities = await this.marketUpdateService.fetchDataLineCommodities("['LNG']", oneYearsAgo, date);

    this.allTrendWTIBRENT = trendWTIBRENTCommodities;
    this.allTrendICP = trendICPCommodities;
    this.allTrendCOAL= trendCOALCommodities;
    this.allTrendLNG = trendLNGCommodities;

    this.dataChartWtibrent = [];
    this.dataIcpChart = [];
    this.dataChartCoal = [];
    this.dataChartLngLine = [];

    this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;
    this.dataIcpChart = this.allTrendICP.d.arrayData;
    this.dataChartCoal = this.allTrendCOAL.d.arrayData;
    this.dataChartLngLine = this.allTrendLNG.d.arrayData;


    // const group = ["['WTI', 'BRENT']", "['ICP']", "['COAL']", "['LNG']"];

    // for(let i=0; i<group.length; i++){
    //   const trendCommodities = await this.marketUpdateService.fetchDataLineCommodities("['WTI', 'BRENT']", oneYearsAgo, today.format('DD/MM/YYYY'));

    //   switch(i){
    //     case 0:
    //       this.allTrendWTIBRENT = trendWTIBRENTCommodities;
    //     break;

    //     case 1:
    //       this.allTrendICP = trendICPCommodities;
    //     break;

    //     case 2:
    //       this.allTrendCOAL= trendCOALCommodities;
    //     break;

    //     case 3:
    //       this.allTrendLNG = trendLNGCommodities;
    //     break;

    //     default: console.log('params error');
    //   }
    // }

  }

  fetchDataLineInterest = async (date: string, oneYearsAgo: string) => {

    const trendInterestRate = await this.marketUpdateService.fetchDataInterestRateTrending(oneYearsAgo, date);

    this.allTrendDataInterestRate = trendInterestRate;

    localStorage.setItem('dataInterestLine', JSON.stringify(this.allTrendDataInterestRate.d.arrayData))

    this.lineChartInterestRateSeries = [];

    console.log("All Interest Rate : ", this.allTrendDataInterestRate)
    this.allTrendDataInterestRate = this.allTrendDataInterestRate.d.arrayData;
    // console.log("All Interest Rate2 : ", this.allTrendDataInterestRate)
    this.trendInterestRateCategories = trendInterestRate;
    this.trendInterestData = trendInterestRate;
    this.filteredMinMaxInterestRateData = trendInterestRate;

    this.lineChartInterestRateSeries = this.trendInterestData.d.arrayData

  }

  fetchDataBarChartKurs = async () => {

    //Set Default Date
    let today = moment(new Date());
    let oneYearsAgo = moment(new Date()).subtract(1, 'years').format('DD/MM/YYYY');

    const trendBarChartKurs = await this.marketUpdateService.fetchDataKursTrendBarChart('15/03/2024');

    this.barChartKursSeries = [];
    this.barXAxisKurs = {
      categories: []
    }

    this.trendKursDataBarChart = trendBarChartKurs;
    this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;
    this.allTrendDataKursBarChart = trendBarChartKurs;
    this.allTrendDataKursBarChart = this.allTrendDataKursBarChart.d.arrayData;

    this.barChartKursSeries = this.trendKursDataBarChart
    console.log(this.barChartKursSeries, this.trendKursDataBarChart);

    for(let i=0; i<1; i++){
      for(let j=0; j<this.trendKursDataBarChart[i].data.length; j++){
        // console.log(this.trendKursDataBarChart[i].data[j].x);
        this.barXAxisKurs.categories.push(this.trendKursDataBarChart[i].data[j].x)
      }
    }
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

    // if(this.trendInterestDataBarChart.s === 200){
    //   this.isLoadingAllData = false;
    //   this.isLoadingKursLine = false;
    //   this.isLoadingWTILine = false;
    //   this.isLoadingICPLine = false;
    //   this.isLoadingCOALLine = false;
    //   this.isLoadingLNGLine = false;
    //   this.isLoadingInterestLine = false;

    //   this.isLoadingKursBar = false;
    //   this.isLoadingWTIBar = false;
    //   this.isLoadingCOALBar = false;
    //   this.isLoadingICPBar = false;
    //   this.isLoadingLNGBar = false;
    //   this.isLoadingInterestBar = false;
    // }
    // else{
    //   this.isLoadingAllData = false;
    //   this.isLoadingKursLine = true;
    //   this.isLoadingWTILine = true;
    //   this.isLoadingICPLine = true;
    //   this.isLoadingCOALLine = true;
    //   this.isLoadingLNGLine = true;
    //   this.isLoadingInterestLine = true;

    //   this.isLoadingKursBar = true;
    //   this.isLoadingWTIBar = true;
    //   this.isLoadingCOALBar = true;
    //   this.isLoadingICPBar = true;
    //   this.isLoadingLNGBar = true;
    //   this.isLoadingInterestBar = true;
    // }
  }

  fetchDataCompare = async () => {
    const response = await this.marketUpdateService.fetchDataCompareChangeRKAP();

    this.dataCompareChangeRKAP = response;
    this.dataCompareChangeRKAP = this.dataCompareChangeRKAP.d;

    // this.dataCompareChangeRKAP = this.dataCompareChangeRKAP.map((item: any) => {
    //   item.persen_change_rkap = parseFloat(item.persen_change_rkap)
    //   return item
    // })

    // console.log(this.dataCompareChangeRKAP);

    this.listDataCompareChangeRKAP = this.dataCompareChangeRKAP;
  }

  sanitizeInnerHTML(html: string){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  findDataByDate = async () => {
    if(this.filteredDate != '' && this.isVisibleLine){

      alert('line chart page')

      try {
        const getOneYear = moment().subtract(1, 'years').format('DD/MM/YYYY');
        this.stateLoadingTrue();

        this.activeButtonLineKurs = '1year';
        this.activeButtonBarKurs = '1year';

        this.activeButtonLineWTIBRENT = '1year';
        this.activeButtonBarWTIBRENT = '1year';

        this.activeButtonLineICP = '1year';
        this.activeButtonBarICP = '1year';

        this.activeButtonLineCOAL = '1year';
        this.activeButtonBarCOAL = '1year';

        this.activeButtonLineLNG = '1year';
        this.activeButtonBarLNG = '1year';

        this.activeButtonLineInterest = '1year';
        this.activeButtonBarInterest = '1year';

        const reFetchKurs = await this.fetchDataLineKurs(this.filteredDate, getOneYear);
        const reFetchCommodity = await this.fetchDataLineCommodities(this.filteredDate, getOneYear);
        const reFetchInterest = await this.fetchDataLineInterest(this.filteredDate, getOneYear);

        console.log(reFetchKurs, reFetchCommodity, reFetchInterest);

        this.stateLoadingFalse();

      } catch (error) {
        console.log(error);
      }

    }
    else if(this.filteredDate != '' && this.isVisibleBar){
      alert('bar chart page');
      this.stateLoadingTrue();

      const kursBarByDate = await this.marketUpdateService.fetchDataKursTrendBarChart(this.filteredDate);
      this.trendKursDataBarChart = kursBarByDate;

      this.barChartKursSeries = [];
      this.barXAxisKurs = {
        categories: []
      }

      this.trendKursDataBarChart = kursBarByDate;
      this.trendKursDataBarChart = this.trendKursDataBarChart.d.arrayData;

      if(this.trendKursDataBarChart[0]){
        this.barChartKursSeries = this.trendKursDataBarChart;
        console.log(this.barChartKursSeries, this.trendKursDataBarChart);

        for(let i=0; i<1; i++){
          for(let j=0; j<this.trendKursDataBarChart[i].data.length; j++){
            this.barXAxisKurs.categories.push(this.trendKursDataBarChart[i].data[j].x)
          }
        }

        this.stateLoadingFalse()
      }
      else{
        alert('data not found')
      }


      // this.stateLoadingFalse()

    }
    else{
      Swal.fire({
        title: "Pilih Tanggal Dahulu!",
        icon: "info",
        showCloseButton: true,
      });
      console.log(this.filteredDate, this.isVisibleBar);

    }
  }

  isVisibleLine: boolean = true;
  isVisibleBar: boolean = false;

  isCompare: boolean = false;

  compare(){
    this.isCompare = !this.isCompare
  }

  toggleVisibilityLine() {
    if(this.isVisibleBar){
      this.isVisibleBar = !this.isVisibleBar;
    }

    this.activeAllBarChart = !this.activeAllBarChart;
    this.isVisibleLine = true;
    this.activeAllLineChart = true;
  }

  toggleVisibilityBar = async () => {
    this.isVisibleBar = true;
    this.activeAllBarChart = true;
    this.activeAllLineChart = false;

    this.isLoadingKursLine = true;
    this.isLoadingWTILine = true;
    this.isLoadingICPLine = true;
    this.isLoadingCOALLine = true;
    this.isLoadingLNGLine = true;
    this.isLoadingInterestLine = true;

    if(!this.isClickedBarChart){
      await this.fetchDataBarChartKurs();
      await this.fetchAllDataBarChartCommodities();
      await this.fetchAllDataBarChartInterest();

      this.isLoadingKursLine = false;
      this.isLoadingWTILine = false;
      this.isLoadingICPLine = false;
      this.isLoadingCOALLine = false;
      this.isLoadingLNGLine = false;
      this.isLoadingInterestLine = false;
    }


    this.isClickedBarChart = true;
    if(this.isVisibleLine){
      this.isVisibleLine = !this.isVisibleLine;
    }
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
    let getCompareData = localStorage.getItem('dataLineKurs');
    let parsedData;

    if (getCompareData !== null) {
        parsedData = JSON.parse(getCompareData);
        console.log(parsedData);
    } else {
        console.log("No compare data found in localStorage.");
    }

    const filteredData = parsedData.filter(
        (item: any) => targetColumn.includes(item.kurs)
    );

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
            min:minValFiltered,
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
              min: minValFiltered,
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
              min:minValFiltered,
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

    // this.barChartKursSeries = [];


  }

  filterInterestRateLineChart(event: any) {

    // console.log(this.allTrendDataInterestRate);
    let targetColumn: any[] = [];
    for(let i=0; i<event.target.length - 1; i++){
      if(event.target[i].checked){
        targetColumn.push(event.target[i].id);
      }
    }

    let getCompareData = localStorage.getItem('dataInterestLine');
    let parsedData;

    if (getCompareData !== null) {
        parsedData = JSON.parse(getCompareData);
        console.log(parsedData);
    } else {
        console.log("No data found in localStorage.");
    }
    // console.log(targetColumn);

    const filteredData = parsedData.filter(
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
      min: minValInterest,
      max: maxValInterest,
      labels: {
        formatter: function(val, index) {
          return val.toLocaleString('id').slice(0,4)
        }
      }
    }
  }

  async ngOnInit(): Promise<void> {

    const today = moment().format('DD/MM/YYYY');
    const getOneYear = moment().subtract(1, 'years').format('DD/MM/YYYY');

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
        categories:[
          "Change MoM",
          "Change 1 Day",
          "Change RKAP",
          "Change Change WoW",
        ]
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

      this.stateLoadingTrue()

      //Fetch Line Chart
      await this.fetchDataLineKurs(today, getOneYear);
      await this.fetchDataLineCommodities(today, getOneYear);
      await this.fetchDataLineInterest(today, getOneYear);
      await this.fetchDataCompare();

      //Fetch Bar Chart
      // await this.fetchDataBarChartKurs();
      // await this.fetchAllDataBarChartCommodities();
      // await this.fetchAllDataBarChartInterest();
      // await this.fetchDataCompare();

      this.stateLoadingFalse();

      this.barChartKursSeries = [
        {
          name: 'USD',
          data: [
            {
              x: 'Change RKAP',
              y: 10000
            },
            {
              x: 'Change MoM',
              y: 12000
            },
            {
              x: 'Change Wow',
              y: 13000
            }
          ]
        },
        {
          name: 'EUR',
          data: [
            {
              x: 'Change RKAP',
              y: 13000
            },
            {
              x: 'Change WoW',
              y: 10000
            },
            {
              x: 'Change MoM',
              y: 16000
            }
          ]
        },
        {
          name: 'JPY',
          data: [
            {
              x: 'Change RKAP',
              y: 13000
            },
            {
              x: 'Change WoW',
              y: 10000
            },
            {
              x: 'Change MoM',
              y: 16000
            }
          ]
        }
      ]
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

      this.legendCurrencyLineChart = {
        showForSingleSeries: true
      }


      this.dataChartWtibrent = [];
      this.xAxisWtiChartBrent = {
        // categories: [],
        type:'datetime',
        labels: {
          formatter: function(value, timestamp, opts) {
            return moment(new Date(value)).format("DD MMM YYYY")
          },
        }
      }


      this.dataChartWtibrent = this.allTrendWTIBRENT.d.arrayData;
      // this.dataBarChartWtiBrent = this.dataWTIBRENTBarChart.d.arrayData;
      this.xAxisBarWtiBrent = {
        type: 'datetime',
      }


      this.dataIcpChart = [];

      this.legendICPChart = {
        showForSingleSeries: true
      }


        this.dataIcpChart = this.allTrendICP.d.arrayData;
        // this.dataChartCoal = this.allTrendCOAL.d.arrayData;
        // this.dataChartLngLine = this.allTrendLNG.d.arrayData;
        // this.dataIcpBarChart = this.trenddataICPBarChart.d.arrayData;
      console.log(this.dataIcpChart);


        this.xAxisIcpChart = {
          // categories: [],
          type: 'datetime',
          labels: {
            formatter: function(value, timestamp, opts) {
              return moment(new Date(value)).format("DD MMM YYYY")
            },
          }
        }



        this.dataChartCoal = [];
        this.legendCOALChart = {
          showForSingleSeries: true
        }

        this.dataChartCoal = this.allTrendCOAL.d.arrayData;
        // this.dataChartCoalBar = this.dataCOALBarChart.d.arrayData;


        this.xAxisChartCoal = {
          // categories: [],
          type: 'datetime',
          labels: {
            formatter: function(value, timestamp, opts) {
              return moment(new Date(value)).format("DD MMM YYYY")
            },
          }
        }

        this.dataChartLngLine = [];
        this.legendLNGChart = {
          showForSingleSeries: true
        }
        this.dataChartLngLine = this.allTrendLNG.d.arrayData;
        // this.dataChartLngBar = this.dataLNGBarChart.d.arrayData;

        this.xAxisChartLng = {
          type: 'datetime',
          labels: {
            formatter: function(value, timestamp, opts) {
              return moment(new Date(value)).format("DD MMM YYYY")
            },
          }
        }


      let tempArrInterestRate: any[] = []
      this.lineChartInterestRateSeries = [];

      console.log('first', this.lineChartInterestRateSeries);

      this.lineChartInterestRateSeries = this.trendInterestData.d.arrayData;

      console.log('kedua', this.lineChartInterestRateSeries);

      if(this.filteredMinMaxInterestRateData.d.arrayData){

      // console.log(this.filteredMinMaxInterestRateData.d.arrayData.length)
      for(let i=0; i<this.filteredMinMaxInterestRateData.d.arrayData.length; i++){
        for(let j=0; j<this.filteredMinMaxInterestRateData.d.arrayData[i].data.length; j++){
          tempArrInterestRate.push(this.filteredMinMaxInterestRateData.d.arrayData[i].data[j].y)
        }
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
        console.log(this.lineChartInterestRateSeries);

        this.interestRateXaxis = {
          categories: [],
            labels: {
              formatter: function(value, timestamp){
              return moment(new Date(value)).format("MMM YYYY")
            }
          },
          type: 'datetime'
        }

        for(let i = 0; i < this.trendInterestRateCategories.d.arrayData.length; i++){
          // const currentDate = this.trendKursCategories.d.arrayTanggal[i];

          // this.tesXaxis.categories.push(currentDate);
          // if(i < 1){
          //   this.tesXaxis.labels = {
          //     formatter: function(value, timestamp){
          //       return moment(new Date(value)).format("DD MMM YYYY")
          //     }
          //   }
          // }
          for(let j=0; j<this.trendInterestRateCategories.d.arrayData[i].data.length; j++){
            this.interestRateXaxis.categories.push(this.trendInterestRateCategories.d.arrayData[i].data[j].x)
          }
          if(i < 1){
            this.tesXaxis.labels = {
              formatter: function(value, timestamp){
                return moment(new Date(value)).format("DD MMM YYYY")
              }
            }
          }
        }

      // console.log([interestMinVal, interestMaxVal]);

        this.interestRateYAxis = {
          min: parseFloat(interestMinVal),
          max: parseFloat(interestMaxVal),
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

  //Wti Brent
  wtiBrentLineChart:ApexChart={
    type: 'line',
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
  wtiBrentBarChart:ApexChart={
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

  wtiBrentChartColors:any=[
    '#035B71',
    '#00A2B9'
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
    '#035B71',
    '#00A2B9'
  ]
  icplineChart:ApexChart ={
    type: 'line',
    width: 350,
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
      selection: true,
      zoom: true,
      zoomin: true,
      zoomout: true,
      pan: true,
      reset: true,
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
      selection: true,
      zoom: true,
      zoomin: true,
      zoomout: true,
      pan: true,
      reset: true,
    }
  }
}
coalChartColors:any=[
  '#035B71',
  '#00A2B9'
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
    '#035B71',
    '#00A2B9'
  ]
  lngLineChart:ApexChart ={
    type: 'line',
    width: 350,
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
    '#035B71',
    '#00A2B9'
  ]
  batuBaraLineChart:ApexChart ={
    type: 'line',
    width: 350,
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
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true,
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

  interestRateChartColors: any = [
    '#00A2B9',
    '#3E97AA',
    '#65ACBB',
    '#8BC1CC',
    '#B2D5DD',
    '#D8EAEE'
  ]

  changeChart(){
    alert('Change chart');
  }

}
