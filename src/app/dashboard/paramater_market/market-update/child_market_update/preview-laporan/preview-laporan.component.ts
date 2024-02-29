import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataService } from 'src/app/data.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';
import { TablePreviewServices } from 'src/app/services/tablePreview_Services/table-preview-services.service';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import Swal from 'sweetalert2';

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

    // let params = localStorage.getItem('subCategory_params')?.replace(/"/g, '')

    this.tablePreview.tablePreview()
  }

  dashRealMacroIndicators = {
    "dashRealMacroIndicators": this.tablePreview.dataTabelPreview
  };

  sendDataResponse: any;


  sendDataExcel = async () => {

    let categoryParams = localStorage.getItem('category_params')?.replace(/"/g, '')
    let subCategory_params = localStorage.getItem('subCategory_params')?.replace(/"/g, '')
    let indikatorParams = localStorage.getItem('indikator_params');
    let deskripsi_param = localStorage.getItem('deskripsi_param');
    let subCategory_deskripsi = localStorage.getItem('subCategory_deskripsi');

    const firstParams = ['CURRENCY_RATE', 'INTEREST_RATE', 'BOND_YIELD', 'COMMODITIES', 'MACRO_INDICATOR']

    let dataATD = localStorage.getItem('ATD');
    console.log(dataATD);

    // console.log(this.dashRealMacroIndicators);
    const fileExcel = this.tablePreview.fileExcel

    console.log(categoryParams, subCategory_params, indikatorParams);


      if(indikatorParams === 'RKAP'){
        try {
          const response = this.marketUpdateService.importLaporanRKAP(JSON.stringify(subCategory_params), fileExcel)
          console.log(response);

          this.sendDataResponse = response
          if(this.sendDataResponse.status == 200){
            Swal.fire({
              title: "Berhasil!",
              text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil diunggah!`,
              icon: "success"
              })
            }
          else{
            Swal.fire({
              icon: "error",
              title: "Failed!",
              text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                });
              }
        } catch (error) {
          console.log(error);
        }
      }
      else if(categoryParams){
        if(firstParams.includes(categoryParams)){
          switch (categoryParams) {
            case 'CURRENCY_RATE':
              if(indikatorParams === 'Realisasi'){

                const response = await this.marketUpdateService.importLaporanMarketUpdateCurrencyRateRealisasi(JSON.stringify(subCategory_params), fileExcel)
                console.log(response);

                this.sendDataResponse = response
                if(this.sendDataResponse.status === 200){
                  Swal.fire({
                    title: "Berhasil!",
                    text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                    icon: "success"
                  })
                }
                else{
                  Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                  });
                }
              }
              else if(indikatorParams === 'Outlook'){

                const response = await this.marketUpdateService.importLaporanMarketUpdateCurrencyRateOutlook(JSON.stringify(subCategory_params), fileExcel)
                console.log(response);

                this.sendDataResponse = response
                if(this.sendDataResponse.status === 200){
                  Swal.fire({
                    title: "Berhasil!",
                    text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                    icon: "success"
                    })
                  }
                else{
                  Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                      });
                    }
              }
              else{
                alert('No parameter!');
              }
                break;
            case 'INTEREST_RATE':
              if(indikatorParams === 'Realisasi'){
                if(dataATD?.includes(JSON.stringify(subCategory_params))){

                }
                else{
                  try {
                    const response = await this.marketUpdateService.importLaporanMarketUpdateInterestRate(JSON.stringify(subCategory_params), fileExcel)
                    console.log(response);
                    // alert('up realisasi done');

                    this.sendDataResponse = response
                    if(this.sendDataResponse.status === 200){
                      Swal.fire({
                        title: "Berhasil!",
                        text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                        icon: "success"
                        })
                      }
                    else{
                      Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                          });
                        }
                  } catch (error) {
                    console.log(error);
                  }
                }
              }
              else if(indikatorParams === 'Outlook'){
                try {
                  const response = await this.marketUpdateService.importLaporanMarketUpdateInterestOutlook(fileExcel, JSON.stringify(subCategory_params))
                  console.log(response);
                  // alert('up realisasi done');

                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
              }
                } catch (error) {
                  console.log(error);
                }
              }
              else{
                alert('No parameter!');
              }
                break;
            case 'BOND_YIELD':
              if(indikatorParams === 'Realisasi'){
                try {
                  const response = await this.marketUpdateService.importLaporanMarketUpdateBondYield(fileExcel, JSON.parse(JSON.stringify(subCategory_params)))
                  // console.log(response);


                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
              }
                } catch (error) {
                  console.log(error);
                }
              }
              else if(indikatorParams === 'Outlook'){
                try {
                  const response = await this.marketUpdateService.importLaporanMarketUpdateBondYieldOutlook(fileExcel, JSON.parse(JSON.stringify(subCategory_params)))
                  // console.log(response);

                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
              }
                } catch (error) {
                  console.log(error);
                }
              }
              else{
                alert('No parameter!');
              }
                break;
            case 'COMMODITIES':
                const dataExcel = this.tablePreview.fileExcel

                if(indikatorParams === 'Realisasi'){
                  try {
                    const response = await this.marketUpdateService.importLaporanMarketUpdateCommodities(dataExcel, JSON.parse(JSON.stringify(subCategory_params)))

                    console.log(response, JSON.parse(JSON.stringify(subCategory_params)));


                    this.sendDataResponse = response
                    if(this.sendDataResponse.status === 200){
                      Swal.fire({
                        title: "Berhasil!",
                        text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                        icon: "success"
                        })
                      }
                    else{
                      Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                          });
                        }
                  } catch (error) {
                    console.log(error);
                  }
                }
                else if(indikatorParams === 'Outlook'){
                  try {
                    const response = await this.marketUpdateService.importLaporanMarketUpdateCommoditiesOutlook(dataExcel, JSON.parse(JSON.stringify(subCategory_params)))

                    this.sendDataResponse = response
                    if(this.sendDataResponse.status === 200){
                      Swal.fire({
                        title: "Berhasil!",
                        text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                        icon: "success"
                        })
                      }
                    else{
                      Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                          });
              }
                  } catch (error) {
                    console.log(error);
                  }
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


                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
                      }
                } catch (error) {
                  console.log(error);
                }
              }
              else if(indikatorParams === 'Outlook'){
                try {
                  const response = await this.marketUpdateService.importLaporanMarketUpdateMacroOutlook(fileExcel, JSON.parse(JSON.stringify(subCategory_params)))
                  // console.log(response);


                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
                      }
                } catch (error) {
                  console.log(error);
                }
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
