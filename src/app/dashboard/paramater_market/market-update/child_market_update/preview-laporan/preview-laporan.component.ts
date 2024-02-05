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

  dashRealMacroIndicators = {
    "dashRealMacroIndicators": this.tablePreview.dataTabelPreview
  };



  sendDataExcel = async () => {

    let categoryParams = localStorage.getItem('category_params')?.replace(/"/g, '')
    let subCategory_params = localStorage.getItem('subCategory_params')?.replace(/"/g, '')
    let indikatorParams = localStorage.getItem('indikator_params');

    const firstParams = ['CURRENCY_RATE', 'INTEREST_RATE', 'BOND_YIELD', 'COMMODITIES', 'MACRO_INDICATOR']

    // console.log(this.dashRealMacroIndicators);
    const fileExcel = this.tablePreview.fileExcel

    if(categoryParams){
      if(firstParams.includes(categoryParams)){
        switch (categoryParams) {
          case 'CURRENCY_RATE':
              console.log('Ini adalah bagian untuk CURRENCY_RATE');
              break;
          case 'INTEREST_RATE':
            if(indikatorParams === 'Realisasi'){
              try {
                const response = await this.marketUpdateService.importLaporanNonMacroIndicator(JSON.stringify(subCategory_params), fileExcel)
                // console.log(response);

                localStorage.removeItem('category_params');
                localStorage.removeItem('subCategory_params');
                localStorage.removeItem('indikator_params');
                // alert('up realisasi done');

                // this.router.navigate(["market_update/importLaporan_marketUpdate"]);
              } catch (error) {
                console.log(error);
              }
              // this.tablePreview.previewData(

              // )
            }
            else if(indikatorParams === 'RKAP'){
              alert('up params RKAP')
            }
            else if(indikatorParams === 'Outlook'){
              alert('up params Outlook')
            }
            else{
              alert('No parameter!');
            }
              break;
          case 'BOND_YIELD':
              console.log('Ini adalah bagian untuk INTEREST_RATE');
              break;
          case 'COMMODITIES':
              const dataExcel = this.tablePreview.fileExcel

              if(indikatorParams === 'Realisasi'){
                try {
                  const response = await this.marketUpdateService.importLaporanMarketUpdateCommodities(dataExcel, JSON.parse(JSON.stringify(subCategory_params)))
                  console.log(response);

                  localStorage.removeItem('category_params');
                  localStorage.removeItem('subCategory_params');
                  localStorage.removeItem('indikator_params');
                  alert('up realisasi done');

                  this.router.navigate(["market_update/importLaporan_marketUpdate"]);
                } catch (error) {
                  console.log(error);
                }
                // this.tablePreview.previewData(

                // )
              }
              else if(indikatorParams === 'RKAP'){
                alert('up params RKAP')
              }
              else if(indikatorParams === 'Outlook'){
                alert('up params Outlook')
              }
              else{
                alert('No parameter!');
              }
              break;
          case 'MACRO_INDICATOR':
            if(indikatorParams === 'Realisasi'){
              try {
                const response = await this.marketUpdateService.importLaporanMacroIndicator(JSON.stringify(subCategory_params), this.dashRealMacroIndicators)
                // console.log(response);

                localStorage.removeItem('category_params');
                localStorage.removeItem('subCategory_params');
                localStorage.removeItem('indikator_params');
                alert('up realisasi done');

                this.router.navigate(["market_update/importLaporan_marketUpdate"]);
              } catch (error) {
                console.log(error);
              }
              // this.tablePreview.previewData(

              // )
            }
            else if(indikatorParams === 'RKAP'){
              alert('up params RKAP')
            }
            else if(indikatorParams === 'Outlook'){
              alert('up params Outlook')
            }
            else{
              alert('No parameter!');
            }
              break;
          default:
              console.log('Kategori tidak dikenali');
      }
      }
      else{
        alert('Error No Params!')
      }
    }
  }

}
