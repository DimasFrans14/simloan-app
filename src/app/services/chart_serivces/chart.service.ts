import { Injectable } from '@angular/core';
import { ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexStroke,
  ApexMarkers,
  ApexFill,
  ApexTooltip,
  ApexResponsive,
  ApexNonAxisChartSeries} from 'ng-apexcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {


  constructor() {
    this.initializeSHLChart()
    this.initializeAPChart()
    this.initializeDcsrCashFlowChart()
    this.initializeDcsrLabaRugiChart()
    this.initializeDERChart()
    this.initializeCICRChart()
    this.initializeOutstandingDebtSummaryTahunan()
    this.initializeAdmBarChart()
    this.initializeColumnAdmChart()
    this.initializedWtiBrent()
    this.initializedIcp()
    this.initializedCoal()
    this.initializedLng()
    this.initializedBatuBara()
  }
  //Commodities Market Update //
    // WTI & BRENT //
    dataChartWtiBrent: ApexAxisChartSeries = [];
    wtiBrentChart!: ApexChart;
    wtiBrentChartTitle!: ApexTitleSubtitle;
    wtiBrentChartColors: any;
    xAxisWtiBrentChart!: ApexXAxis;
    yAxisWtiBrent!:ApexYAxis;
    wtiBrentStroke!:  ApexStroke;

  initializedWtiBrent() {

    this.dataChartWtiBrent = [
      {
        name: "Oil (WTI)",
        data: [67, 85, 110, 120]
      },
      {
        name: "OIL (BRENT)",
        data: [70, 90, 100, 122]
      }
    ];

    this.wtiBrentChart = {
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
    this.wtiBrentStroke ={
      curve: "smooth",
      width: 1,
    }

    this.wtiBrentChartTitle =  {
      text: "WTI & Brent (USD/Ton)",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.wtiBrentChartColors = [
      '#2EB0C2',
      '#256979',
    ]

    this.xAxisWtiBrentChart = {
      categories: [
        ["2021"],
        ["2022"],
        ["2023"],
        ["2024"],
      ]
    }
    this.yAxisWtiBrent = {
      show: true,
      tickAmount: 4,
      min: 45.00,
      max: 125.00,
      
    }
  }
    // End WTI & BRENT //
    // ICP //
    dataChartIcp: ApexAxisChartSeries=[];
    icpChart!: ApexChart;
    icpChartTitle!: ApexTitleSubtitle;
    icpChartColors!: any;
    xAxixIcpChart!: ApexXAxis;
    yAxisIcp!:ApexYAxis;
    icpStroke!:ApexStroke;

    initializedIcp() {

      this.dataChartIcp = [
        {
          data: [56, 30, 130, 120]
        }
      ];
  
      this.icpChart = {
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
      this.icpStroke ={
        curve: "smooth",
        width: 1,
      }
  
      this.icpChartTitle =  {
        text: "ICP (USD/Barel)",
        style: {
          fontSize:  '18px',
          fontWeight:  500,
          // fontFamily:  undefined,
          color:  '#000000'
        },
      }
  
      this.icpChartColors = [
        '#2EB0C2',
        '#256979',
      ]
  
      this.xAxixIcpChart = {
        categories: [
          ["2021"],
          ["2022"],
          ["2023"],
          ["2024"],
        ]
      }
      this.yAxisIcp = {
        show: true,
        tickAmount: 6,
        min: 20,
        max: 140.00,
        
      }
    }
    // end ICP //
    // COAL NEWCASTLE //
    dataChartCoal: ApexAxisChartSeries=[];
    coalChart!: ApexChart;
    coalChartTitle!: ApexTitleSubtitle;
    coalChartColors!: any;
    xAxixCoalChart!: ApexXAxis;
    yAxisCoal!:ApexYAxis;
    coalStroke!:ApexStroke;

    initializedCoal() {

      this.dataChartCoal = [
        {
          data: [400, 200, 350, 420]
        }
      ];
  
      this.coalChart = {
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
      this.coalStroke ={
        curve: "smooth",
        width: 1,
      }
  
      this.coalChartTitle =  {
        text: "ICP (USD/Barel)",
        style: {
          fontSize:  '18px',
          fontWeight:  500,
          // fontFamily:  undefined,
          color:  '#000000'
        },
      }
  
      this.coalChartColors = [
        '#2EB0C2',
        '#256979',
      ]
  
      this.xAxixCoalChart = {
        categories: [
          ["2021"],
          ["2022"],
          ["2023"],
          ["2024"],
        ]
      }

      this.yAxisCoal = {
        show: true,
        tickAmount: 9,
        min: 50,
        max: 500,
        
      }
    }
    // End COAL NEWCASTLE //

    // LNG //
    dataChartLng: ApexAxisChartSeries=[];
    lngChart!: ApexChart;
    lngChartTitle!: ApexTitleSubtitle;
    lngChartColors!: any;
    xAxixLngChart!: ApexXAxis;
    yAxisLng!:ApexYAxis;
    lngStroke!:ApexStroke;

    initializedLng() {

      this.dataChartLng = [
        {
          data: [400, 200, 350, 420]
        }
      ];
  
      this.lngChart = {
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
      this.lngStroke ={
        curve: "smooth",
        width: 1,
      }
  
      this.lngChartTitle =  {
        text: "ICP (USD/Barel)",
        style: {
          fontSize:  '18px',
          fontWeight:  500,
          // fontFamily:  undefined,
          color:  '#000000'
        },
      }
  
      this.lngChartColors = [
        '#2EB0C2',
        '#256979',
      ]
  
      this.xAxixLngChart = {
        categories: [
          ["2021"],
          ["2022"],
          ["2023"],
          ["2024"],
        ]
      }

      this.yAxisLng = {
        show: true,
        tickAmount: 9,
        min: 50,
        max: 500,
        
      }
    }
    // End LNG //

    // Batu Bara //
    dataChartBatuBara: ApexAxisChartSeries=[];
    batuBaraChart!: ApexChart;
    batuBaraChartTitle!: ApexTitleSubtitle;
    batuBaraChartColors!: any;
    xAxixBatuBaraChart!: ApexXAxis;
    yAxisBatuBara!:ApexYAxis;
    batuBaraStroke!:ApexStroke

    initializedBatuBara() {

      this.dataChartBatuBara = [
        {
          data: [400, 200, 350, 420]
        }
      ];
  
      this.batuBaraChart = {
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
      this.batuBaraStroke ={
        curve: "smooth",
        width: 1,
      }
  
      this.batuBaraChartTitle =  {
        text: "ICP (USD/Barel)",
        style: {
          fontSize:  '18px',
          fontWeight:  500,
          // fontFamily:  undefined,
          color:  '#000000'
        },
      }
  
      this.batuBaraChartColors = [
        '#2EB0C2',
        '#256979',
      ]
  
      this.xAxixBatuBaraChart = {
        categories: [
          ["2021"],
          ["2022"],
          ["2023"],
          ["2024"],
        ]
      }

      this.yAxisBatuBara= {
        show: true,
        tickAmount: 9,
        min: 50,
        max: 500,
        
      }
    }
    // end Batu Bara //

  //SHL
  dataChartSHL: ApexAxisChartSeries = [];
  shlChart!: ApexChart;
  shlChartTitle!: ApexTitleSubtitle;
  colors: any;
  xAxisSHL!: ApexXAxis;
  shlStroke!:  ApexStroke;

  //Availability Period
  dataChartAP: ApexAxisChartSeries = [];
  APChart!: ApexChart;
  apChartTitle!: ApexTitleSubtitle;
  xAxisAP!: ApexXAxis;

  //Financial Report Chart
    //chart DCSR basis laporan arus kas
  dataDcsrCashFlow: ApexAxisChartSeries = [];
  dcsrCashFlowChart!: ApexChart;
  dcsrCashFlowChartTitle!: ApexTitleSubtitle;
  dcsrstroke!:ApexStroke;
  xAxisDcsrCashFlow!: ApexXAxis;
    //chart DCSR basis laporan laba rugi
  dataDcsrLabaRugi: ApexAxisChartSeries = [];
  dcsrLabaRugiChart!: ApexChart;
  dcsrLabaRugiChartTitle!: ApexTitleSubtitle;
  dcsrLabaRugistroke!:ApexStroke;
  xAxisDcsrLabaRugi!: ApexXAxis;
    //chart DER
  dataDER: ApexAxisChartSeries = [];
  DERChart!: ApexChart;
  DERChartTitle!: ApexTitleSubtitle;
  DERstroke!:ApexStroke;
  xAxisDER!: ApexXAxis;
  //chart CICR
  dataCICR: ApexAxisChartSeries = [];
  CICRChart!: ApexChart;
  CICRChartTitle!: ApexTitleSubtitle;
  CICRstroke!:ApexStroke;
  xAxisCICR!: ApexXAxis;

  annualOutstandingSeries: ApexAxisChartSeries = [];
  chartAdm!: ApexChart;
  xAxis!: ApexXAxis;
  markers!: ApexMarkers;
  stroke!: ApexStroke;
  yAxis!: ApexYAxis | ApexYAxis[];
  dataLabels!: ApexDataLabels;
  title!:ApexTitleSubtitle;
  legend!: ApexLegend;
  fill!: ApexFill
  tooltip!: ApexTooltip;

  seriesBar!: ApexNonAxisChartSeries;
  chartAdmBar!: ApexChart;
  responsiveBarChart!: ApexResponsive[];
  labelsBar!: any;

  columnAdmChartSeries!: ApexAxisChartSeries;
  columnAdmChart!: ApexChart;
  columnAdmChartLabel!: ApexDataLabels;
  columnAdmChartPlot!: ApexPlotOptions;
  columnAdmChartYaxis!: ApexYAxis;
  columnAdmChartXaxis!: ApexXAxis;
  columnAdmChartFill!: ApexFill;
  columnAdmChartTitle!: ApexTitleSubtitle;

  initializeSHLChart(){

    this.dataChartSHL = [
      {
        name: "Non Penerusan Pinjaman",
        data: [21, 22, 10, 28]
      },
      {
        name: "Non Penerusan Pinjaman",
        data: [28, 10, 21, 22]
      }
    ];

    this.shlChart = {
      type: 'line',
      width: 470,
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
    this.shlStroke ={
      curve: "smooth",
      width: 1,
    }

    this.shlChartTitle =  {
      text: "Total SHL",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.colors = [
      '#2EB0C2',
      '#256979',
    ]

    this.xAxisSHL = {
      categories: [
        ["Total Pagu"],
        ["Total Pencarian"],
        ["Total Repayment"],
        ["Total Saldo"],
      ]
    }
  }

  initializeAPChart(){

    this.dataChartAP = [
      {
        name: "Non Penerusan Pinjaman",
        data: [21, 22, 10]
      },
      {
        name: "Non Penerusan Pinjaman",
        data: [28, 10, 21]
      }
    ];

    this.APChart = {
      type: 'bar',
      width: 470,
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

    this.apChartTitle =  {
      text: "Availability Period",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.colors = [
      '#2EB0C2',
      '#256979',
    ]

    this.xAxisAP = {
      categories: [
        ["Fasilitas Total Pagu"],
        ["Pencarian Total"],
        ["Fasilitas Saldo"],
      ]
    }
  }
// chart grafikfinancial report

  // chart DCSR basis laporan arus arus kas
  initializeDcsrCashFlowChart(){
    this.dataDcsrCashFlow = [
      {
        name: "Net Reveneue basis Arus Kas",
        type: "column",
        data: [21, 22, 20, 28, 21, 22, 23, 28]
      },
      {
        name: "Total Debt Service",
        type: "column",
        data: [28, 12, 21, 22, 28, 16, 21, 22]
      },
      {
        name: "DCSR Basis Arus Kas",
        data: [28, 4, 21, 22, 28, 17, 21, 22]
      },
      {name: "Batasan Minimum",
        data: [15, 15, 15, 15, 15, 15, 15, 15]
      }
    ];

    this.dcsrCashFlowChart = {
      type: 'line',
      width: 470,
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
    },

    this.dcsrstroke = {
      curve: "smooth",
      width: 1,
      dashArray: [0, 0, 0, 10]
    }

    this.dcsrCashFlowChartTitle =  {
      text: "DCSR Basis Laporan Arus Kas",
      style: {
        fontSize:  '12px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.xAxisDcsrCashFlow = {
      categories: [
        ["2018"],
        ["2019"],
        ["2020"],
        ["2021"],
        ["2022"],
        ["2023"],
        ["RKAP"],
        ["Outlook"],
      ]
    }
  }

  //chart dcsr basis laporan laba rugi
  initializeDcsrLabaRugiChart(){
    this.dataDcsrLabaRugi = [
      {
        name: "Net Reveneue basis Arus Kas",
        type: "column",
        data: [20, 15, 18, 23, 12, 14, 12, 25]
      },
      {
        name: "Total Debt Service",
        type: "column",
        data: [20, 15, 18, 23, 12, 14, 12, 25]
      },
      {
        name: "DCSR Basis Arus Kas",
        data: [20, 15, 18, 23, 12, 14, 12, 25]
      },
      {name: "Batasan Minimum",
        data: [15, 15, 15, 15, 15, 15, 15, 15]
      }
    ];

    this.dcsrLabaRugiChart = {
      type: 'line',
      width: 470,
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
    },

    this.dcsrLabaRugistroke = {
      width: 1,
      curve: "smooth",
      dashArray: [0, 0, 0, 8]
    }

    this.dcsrLabaRugiChartTitle =  {
      text: "DCSR Basis Laporan Laba Rugi",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.xAxisDcsrLabaRugi = {
      categories: [
        ["2018"],
        ["2019"],
        ["2020"],
        ["2021"],
        ["2022"],
        ["2023"],
        ["RKAP"],
        ["Outlook"],
      ]
    }
  }

  //chart DER
  initializeDERChart(){
    this.dataDER = [
      {
        name: "Net Reveneue basis Arus Kas",
        type: "column",
        data: [18, 12, 10, 14, 18, 22, 18, 20]
      },
      {
        name: "Total Debt Service",
        type: "column",
        data: [19, 23, 15, 18, 17, 14, 16, 22]
      },
      {
        name: "DCSR Basis Arus Kas",
        data: [21, 19, 14, 15, 17, 11, 16, 19]
      },
      {name: "Batasan Minimum",
        data: [15, 15, 15, 15, 15, 15, 15, 15]
      }
    ];

    this.DERChart = {
      type: 'line',
      width: 470,
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
    },

    this.DERstroke = {
      width: 5,
      curve: "straight",
      dashArray: [0, 0, 0, 8]
    }

    this.DERChartTitle =  {
      text: "DCSR Basis Laporan Laba Rugi",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.xAxisDER = {
      categories: [
        ["2018"],
        ["2019"],
        ["2020"],
        ["2021"],
        ["2022"],
        ["2023"],
        ["RKAP"],
        ["Outlook"],
      ]
    }
  }

  //chart CICR
  initializeCICRChart(){
    this.dataCICR = [
      {
        name: "Net Reveneue basis Arus Kas",
        type: "column",
        data: [15, 17, 20, 14, 16, 21, 18, 14]
      },
      {
        name: "Total Debt Service",
        type: "column",
        data: [22, 18, 16, 18, 14, 16, 19, 21]
      },
      {
        name: "DCSR Basis Arus Kas",
        data: [21, 19, 14, 15, 17, 11, 16, 19]
      },
      {name: "Batasan Minimum",
        data: [10, 10, 10, 10, 10, 10, 10, 10]
      }
    ];

    this.CICRChart = {
      type: 'line',
      width: 470,
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
    },

    this.CICRstroke = {
      width: 5,
      curve: "straight",
      dashArray: [0, 0, 0, 8]
    }

    this.CICRChartTitle =  {
      text: "DCSR Basis Laporan Laba Rugi",
      style: {
        fontSize:  '18px',
        fontWeight:  500,
        // fontFamily:  undefined,
        color:  '#000000'
      },
    }

    this.xAxisCICR = {
      categories: [
        ["2018"],
        ["2019"],
        ["2020"],
        ["2021"],
        ["2022"],
        ["2023"],
        ["RKAP"],
        ["Outlook"],
      ]
    }
  }

  initializeOutstandingDebtSummaryTahunan(){
    this.annualOutstandingSeries = [
      {
        name: "Income",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
      {
        name: "Cashflow",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      },
      {
        name: "Revenue",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }
    ]

    this.chartAdm = {
      height: 350,
      type: "line",
      stacked: false
    }

    this.dataLabels = {
      enabled: true
    }

    this.stroke = {
      width: [1, 1, 4]
    }

    this.title = {
      text: "Outstanding Debt Summary (Tahunan)",
      align: "left",
      offsetX: 110
    }

    this.xAxis = {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    }

    this.yAxis = [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#008FFB"
        },
        labels: {
          style: {
            colors: "#008FFB"
          }
        },
        title: {
          text: "Income (thousand crores)",
          style: {
            color: "#008FFB"
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: "Income",
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#00E396"
        },
        labels: {
          style: {
            colors: "#00E396"
          }
        },
        title: {
          text: "Operating Cashflow (thousand crores)",
          style: {
            color: "#00E396"
          }
        }
      },
      {
        seriesName: "Revenue",
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FEB019"
        },
        labels: {
          style: {
            colors: "#FEB019"
          }
        },
        title: {
          text: "Revenue (thousand crores)",
          style: {
            color: "#FEB019"
          }
        }
      }
    ]

    this.tooltip = {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      }
    }

    this.legend = {
      horizontalAlign: "left",
      offsetX: 40
    }

  }

  initializeAdmBarChart(){
    this.seriesBar = [44, 55, 13, 43, 22]

    this.chartAdmBar = {
      type: 'donut',
      height: 200
    }

    this.labelsBar = ["Team A", "Team B", "Team C", "Team D", "Team E"]

    this.responsiveBarChart = [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  }

  initializeColumnAdmChart(){
    this.columnAdmChartSeries = [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1],
        color: "#268294"
      },
      {
        name: "Deflection",
        data: [4.0, 3.6, 3.2, 2.3],
        color: "#2EB0C2"
      },
    ]

    this.columnAdmChart = {
      height: 350,
      type: "bar"
    }

    this.columnAdmChartPlot = {
      bar: {
        dataLabels: {
          position: "top" // top, center, bottom
        },
        borderRadius: 3,
      }
    }

    this.columnAdmChartLabel = {
      enabled: true,
        formatter: function(val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
    }

    this.columnAdmChartXaxis = {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
      ],
      position: "bottom",
      labels: {
        // offsetY: -18
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.7
          }
        }
      },
      tooltip: {
        enabled: false,
        offsetY: -35
      }
    }

    this.columnAdmChartFill = {
      type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
    }

    this.columnAdmChartYaxis = {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        formatter: function(val) {
          return val + "%";
        },
      }
    }

    this.columnAdmChartTitle = {
      text: "Monthly Inflation in Argentina, 2002",
        floating: false,
        // offsetY: 0,
        align: "center",
        style: {
          color: "#444"
        }
    }
  }

}
