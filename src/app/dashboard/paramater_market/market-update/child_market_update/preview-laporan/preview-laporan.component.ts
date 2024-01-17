import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import { TablePreviewServices } from 'src/app/services/tablePreview_Services/table-preview-services.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';

@Component({
  selector: 'app-preview-laporan',
  templateUrl: './preview-laporan.component.html',
  styleUrls: ['./preview-laporan.component.css']
})
export class PreviewLaporanComponent implements OnInit{

  constructor(
    // private tabelConfig: TableServicesService,
    private tablePreview: TablePreviewServices,
    private marketUpdateService: MarketUpdateService,
    private router: Router
  ){

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

    let object = this.tablePreview.objectKeys

    console.log(object);

    let params = localStorage.getItem('params_upload')?.replace(/"/g, '')

    if(params == 'PDB'){
      this.tablePreview.tablePreviewMacroIndicatorPDB(object)
    }
    else{
      this.tablePreview.tablePreviewMacroIndicator(object)
    }
  }

  fileExcelMacroIndicators = {
    "dashRealMacroIndicators": this.tablePreview.dataTabelPreview
  };


  sendDataExcel = async () => {

    let params = localStorage.getItem('params_upload')?.replace(/"/g, '')
    let indikatorParams = localStorage.getItem('indikator_params');

    if(indikatorParams === 'Realisasi'){
      try {
        const response = await this.marketUpdateService.importLaporanMarketUpdate(this.fileExcelMacroIndicators, JSON.parse(JSON.stringify(params)))
        console.log(response);

        localStorage.removeItem('params_upload');
        localStorage.removeItem('indikator_params');

        alert('up realisasi done')

        this.router.navigate(["market_update/importLaporan_marketUpdate"])
      } catch (error) {
        console.log(error);
      }
    }
    else{
      alert('bukan realisasi');
    }

  }

}
