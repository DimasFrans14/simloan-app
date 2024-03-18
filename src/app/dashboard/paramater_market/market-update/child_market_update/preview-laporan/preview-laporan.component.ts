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

  dataATDBank: any;
  isLoading: boolean = false;

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

    this.tablePreview.tablePreview();

    let dataATD = localStorage.getItem('ATD');
    if(dataATD){
      this.dataATDBank = JSON.parse(dataATD)
    }
    this.dataATDBank = this.dataATDBank.map((item: any) => {
      return item.kode
    })
    console.log(this.dataATDBank);
  }

  dashRealMacroIndicators = {
    "dash_real_macro_indicators": this.tablePreview.dataTabelPreview
  };

  sendDataResponse: any;
  deleteInsertResponse: any;


  sendDataExcel = async () => {

    let categoryParams = localStorage.getItem('category_params')?.replace(/"/g, '')
    let subCategory_params = localStorage.getItem('subCategory_params')?.replace(/"/g, '')
    let indikatorParams = localStorage.getItem('indikator_params');
    let deskripsi_param = localStorage.getItem('deskripsi_param');
    let subCategory_deskripsi = localStorage.getItem('subCategory_deskripsi');

    const firstParams = ['CURRENCY_RATE', 'INTEREST_RATE', 'BOND_YIELD', 'COMMODITIES', 'MACRO_INDICATOR']

    // console.log(this.dashRealMacroIndicators);
    const fileExcel = this.tablePreview.fileExcel

    console.log(categoryParams, subCategory_params, indikatorParams);


      if(indikatorParams === 'RKAP'){
        try {
          this.isLoading = true;
          const response = await this.marketUpdateService.importLaporanRKAP(JSON.stringify(subCategory_params), fileExcel)
          console.log(response);

          this.sendDataResponse = response;
          console.log(this.sendDataResponse.status);

          if(this.sendDataResponse.status == 200){
            Swal.fire({
              title: "Berhasil!",
              text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil diunggah!`,
              icon: "success"
              })
              this.isLoading = false
            }
          else{
            Swal.fire({
              icon: "error",
              title: "Failed!",
              text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                });
                this.isLoading = false
              }
        } catch (error) {
          console.log(error);
          this.isLoading = false
        }
      }
      else if(categoryParams){
        if(firstParams.includes(categoryParams)){
          switch (categoryParams) {
            case 'CURRENCY_RATE':
              if(indikatorParams === 'Realisasi'){

                this.isLoading = true;
                console.log(this.isLoading);

                const deleteInsertFirst = await this.marketUpdateService.deleteInsertKurs(JSON.stringify(subCategory_params));

                // console.log(deleteInsertFirst, response);

                this.deleteInsertResponse = deleteInsertFirst

                if(this.deleteInsertResponse.status === 200){
                  const response = await this.marketUpdateService.importLaporanMarketUpdateCurrencyRateRealisasi(JSON.stringify(subCategory_params), fileExcel)

                  this.sendDataResponse = response

                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                    })
                    this.isLoading = false;
                console.log(this.isLoading);

                  }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                    });
                    this.isLoading = false
                console.log(this.isLoading);

                  }
                }
                else{
                  Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                  });
                  this.isLoading = false
                }
              }
              else if(indikatorParams === 'Outlook'){

                this.isLoading = true;
                const response = await this.marketUpdateService.importLaporanMarketUpdateCurrencyRateOutlook(JSON.stringify(subCategory_params), fileExcel)
                console.log(response);

                this.sendDataResponse = response
                if(this.sendDataResponse.status === 200){
                  Swal.fire({
                    title: "Berhasil!",
                    text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                    icon: "success"
                    })
                    this.isLoading = false
                  }
                else{
                  Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                      });
                      this.isLoading = false
                    }
              }
              else{
                alert('No parameter!');
              }
                break;
            case 'INTEREST_RATE':
              if(indikatorParams === 'Realisasi'){
                if(this.dataATDBank.includes(subCategory_params)){
                  try {
                    this.isLoading = true;
                    const response = await this.marketUpdateService.importLaporanMarketUpdateInterestRateATDBANK(JSON.stringify(subCategory_params), fileExcel);

                    console.log(response);

                    this.sendDataResponse = response
                    if(this.sendDataResponse.status === 200){
                      Swal.fire({
                        title: "Berhasil!",
                        text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                        icon: "success"
                        })
                        this.isLoading = false
                      }
                    else{
                      Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                          });
                          this.isLoading = false
                        }
                  } catch (error) {
                    console.log(error);
                    this.isLoading = false
                  }
                }
                else{
                  try {
                    this.isLoading = true;
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
                        this.isLoading = false
                      }
                    else{
                      Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                          });
                          this.isLoading = false
                        }
                  } catch (error) {
                    console.log(error);
                    this.isLoading = false
                  }
                }
              }
              else if(indikatorParams === 'Outlook'){
                try {
                  this.isLoading = true;
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
                      this.isLoading = false
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
                        this.isLoading = false
              }
                } catch (error) {
                  console.log(error);
                  this.isLoading = false
                }
              }
              else{
                alert('No parameter!');
              }
                break;
            case 'BOND_YIELD':
              if(indikatorParams === 'Realisasi'){
                try {
                  this.isLoading = true;
                  const response = await this.marketUpdateService.importLaporanMarketUpdateBondYield(fileExcel, JSON.parse(JSON.stringify(subCategory_params)))
                  // console.log(response);


                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                      this.isLoading = false
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
                        this.isLoading = false
              }
                } catch (error) {
                  console.log(error);
                  this.isLoading = false
                }
              }
              else if(indikatorParams === 'Outlook'){
                try {
                  this.isLoading = true;
                  const response = await this.marketUpdateService.importLaporanMarketUpdateBondYieldOutlook(fileExcel, JSON.parse(JSON.stringify(subCategory_params)))
                  // console.log(response);

                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                      this.isLoading = false
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
                        this.isLoading = false
              }
                } catch (error) {
                  console.log(error);
                  this.isLoading = false
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
                    this.isLoading = true;
                    const response = await this.marketUpdateService.importLaporanMarketUpdateCommodities(dataExcel, JSON.parse(JSON.stringify(subCategory_params)))

                    console.log(response, JSON.parse(JSON.stringify(subCategory_params)));


                    this.sendDataResponse = response
                    if(this.sendDataResponse.status === 200){
                      Swal.fire({
                        title: "Berhasil!",
                        text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                        icon: "success"
                        })
                        this.isLoading = false
                      }
                    else{
                      Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                          });
                          this.isLoading = false
                        }
                  } catch (error) {
                    console.log(error);
                    this.isLoading = false
                  }
                }
                else if(indikatorParams === 'Outlook'){
                  try {
                    this.isLoading = true;
                    const response = await this.marketUpdateService.importLaporanMarketUpdateCommoditiesOutlook(dataExcel, JSON.parse(JSON.stringify(subCategory_params)))

                    this.sendDataResponse = response
                    if(this.sendDataResponse.status === 200){
                      Swal.fire({
                        title: "Berhasil!",
                        text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                        icon: "success"
                        })
                        this.isLoading = false
                      }
                    else{
                      Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                          });
                          this.isLoading = false
              }
                  } catch (error) {
                    console.log(error);
                    this.isLoading = false
                  }
                }
                else{
                  alert('No parameter!');
                }
                break;
            case 'MACRO_INDICATOR':
              if(indikatorParams === 'Realisasi'){
                try {
                  this.isLoading = true;
                  const response = await this.marketUpdateService.importLaporanMacroIndicator(JSON.stringify(subCategory_params), this.dashRealMacroIndicators)
                  // console.log(response);


                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                      this.isLoading = false
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
                        this.isLoading = false
                      }
                } catch (error) {
                  console.log(error);
                  this.isLoading = false
                }
              }
              else if(indikatorParams === 'Outlook'){
                try {
                  this.isLoading = true;
                  const response = await this.marketUpdateService.importLaporanMarketUpdateMacroOutlook(fileExcel, JSON.parse(JSON.stringify(subCategory_params)))
                  // console.log(response);


                  this.sendDataResponse = response
                  if(this.sendDataResponse.status === 200){
                    Swal.fire({
                      title: "Berhasil!",
                      text: `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} berhasil di upload!`,
                      icon: "success"
                      })
                      this.isLoading = false
                    }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text:  `Data ${indikatorParams} ${(deskripsi_param == null ? '': deskripsi_param)} ${subCategory_deskripsi == null ? '' : subCategory_deskripsi} gagal di upload!`,
                        });
                        this.isLoading = false
                      }
                } catch (error) {
                  console.log(error);
                  this.isLoading = false
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
