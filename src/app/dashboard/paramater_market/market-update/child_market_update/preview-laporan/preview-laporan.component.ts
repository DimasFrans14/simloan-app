import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-preview-laporan',
  templateUrl: './preview-laporan.component.html',
  styleUrls: ['./preview-laporan.component.css']
})
export class PreviewLaporanComponent implements OnInit{

  constructor(
    private tabelConfig: TableServicesService,
    private dataService: DataService
  ){
    console.log(tabelConfig);
  }

  ngOnInit(): void {
    let today = new Date();
    let formatToday = moment(today).format("DD/MM/YYYY").toString();

    let getYesterday = new Date();
    let yesterday = getYesterday.setDate(getYesterday.getDate() - 1);
    let formatYesterday = moment(yesterday).format("DD/MM/YYYY").toString();

    let getTwoDaysBefore = new Date();
    let twoDaysBefore = getTwoDaysBefore.setDate(getTwoDaysBefore.getDate() - 2);
    let formatTwoDaysBefore = moment(twoDaysBefore).format("DD/MM/YYYY").toString();

    let getThreeDaysBefore = new Date();
    let threeDaysBefore = getThreeDaysBefore.setDate(getThreeDaysBefore.getDate() - 3);
    let formatThreeDaysBefore = moment(threeDaysBefore).format("DD/MM/YYYY").toString();

    // this.tabelConfig.initializeTablePreview(formatThreeDaysBefore, formatTwoDaysBefore, formatYesterday, formatToday);
  }

}
