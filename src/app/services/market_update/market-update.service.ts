import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketUpdateService {
  static fetchDataUpdateRealisasiPDB: any;
  // getDataInflasiByParams(rowId: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }

  result: any;

  async fetchDataMacroIndicatorOverview(date:String){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/dashboard/market/overview/getMakroIndikator?date=${date}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataKurs(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/currency/getList`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataKursOverview(date:String){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/dashboard/market/overview/getCurrencies?date=${date}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestOverview(date:String){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/dashboard/market/overview/getInterestRate?date=${date}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataKursTrend(startDate: string, endDate: string){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/dashboard/market/trending/kurs/getLineChart?start_date=${startDate}&end_date=${endDate}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataKursTrendBarChart(groupParams: string, startDate: string, endDate: string){
    const option = {
      params: {
        "start_date" : startDate,
        "end_date" : endDate,
        "group" : groupParams
      }
    }
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/dashboard/market/trending/kurs/getColumnChart`,option)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestRateRKAP(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/rkap`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestRateTrending(staratDate: string, endDate: string){
    try {
      return await lastValueFrom(
        // this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/interest/getLineChart?start_date=01/01/2022&end_date=31/03/2024')
        this.http.get(`${environment.apiUrl2}/dashboard/market/trending/interest/getLineChart?start_date=${staratDate}&end_date=${endDate}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchInterestRateBarChart(params: string, startDate: string, endDate: string){
    const option = {
      params: {
        "start_date" : startDate,
        "end_date" : endDate,
        "group" : params
      }
    }
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/dashboard/market/trending/interest/getBarChart`,option)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataBondYield(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/bondyield/getList
`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataCommoditiesAll(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_real_rkap_commodities`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataCommoditiesByDate(currentDate: any){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/commodities/getRateList?date=${currentDate}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataCommoditiesOverview(date:String){

    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/dashboard/market/overview/getCommodities?date=${date}
        `)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataLineCommodities(kategori:string, startDate: string, endDate: string){
    const option = {
      params: {
        "kategori": kategori,
        "start_date": startDate,
        "end_date": endDate,
      }
    }
    try {
      return await lastValueFrom(
        // this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
        this.http.get(`${environment.apiUrl2}/dashboard/market/trending/commodities/getLineChart`, option)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataBarCommodities(kategori:string, startDate: string, endDate: string, groupParams: string){
    const option = {
      params: {
        "kategori": kategori,
        "start_date": startDate,
        "end_date": endDate,
        "group": groupParams
      }
    }
    try {
      return await lastValueFrom(
        // this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
        this.http.get(`${environment.apiUrl2}/dashboard/market/trending/commodities/getBarChart`, option)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataPDB(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataUpdateRealisasiPDB(data:any){
      const data1 = {
        "quartal": data.quartal,
        "tahun":data.tahun,
        "nilai": data.nilai
      }
    
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataRkapPDB(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataUpdateRkapPDB(data:any){
    const data1= {
      "quartal": data.quartal,
      "tahun":data.tahun,
      "nilai": data.nilai
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataOutlookPDB(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataUpdateOutlookPDB(data:any){
    const data1= {
      "quartal": data.quartal,
      "tahun":data.tahun,
      "nilai": data.nilai
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataRealisasiPDB(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataRkapPdb(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataOutlookPdb(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestRate(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/interest/getList
        `)
      );
    } catch (error) {
      console.log(error);
      return null;
    }

  }

  async fetchDataInflasi(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_inflasi`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getDataInflasiByParams(params: string){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_inflasi?bulan=${params}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataUpdateRealisasiInflasi(data:any){
    data = {
      "bulan": data.bulan,
      "nilai_year_min3": data.nilai_year_min3,
      "nilai_year_min2": data.nilai_year_min2,
      "nilai_year_min1": data.nilai_year_min1,
      "nilai_year_min0": data.nilai_year_min0
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_inflasi?id=${data.id}`, data)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataPMI(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_real_pmi
        `)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataUpdateRealisasiPMI(data:any){
    const dataSent = {
      data: {
        "bulan": data.bulan,
        "rate": data.rate,
        "tahun": data.tahun,
      }
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb?id=${data.id}`, dataSent)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataRetail(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_retail_sales`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataUpdateRealisasiRetail(data:any){
    const dataSent = {
      data: {
        "bulan": data.bulan,
        "nilai": data.nilai,
        "tahun": data.tahun,
      }
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb?id=${data.id}`, dataSent)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataMoneySupply(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_money_supply`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataUpdateRealisasMoneySupply(data:any){
    const dataSent = {
      data: {
        "bulan": data.bulan,
        "tahun": data.tahun,
        "TriliunBeredar": data.TriliunBeredar,
      }
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb?id=${data.id}`, dataSent)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataDevisa(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_mrealcadev`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataUpdateRealisasCadev(data:any){
    const dataSent = {
      data: {
        "bulan": data.bulan,
        "tahun": data.tahun,
        "MilliarUsd": data.MilliarUsd,
      }
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb?id=${data.id}`, dataSent)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataViewInflasiByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_inflasi?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataViewnMoneySupplyByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_money_supply?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataViewDevisaByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_mrealcadev?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataViewPMIByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_real_pmi?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataViewRetailByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_retail_sales?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanRKAP = async (params: string, file: File) => {
    const form = new FormData();
    form.append('file', file, file.name);

    try {
      return await lastValueFrom(
        this.http.post(
          `${environment.apiUrl1}/simloan/ws-v01/dashboard/rkap/upload_dash_rkap`, form
        )
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanMarketUpdateCurrencyRateRealisasi = async (params: string, file: File) => {
    // const headers = { 'content-type': 'multipart/form-data'}
    const form = new FormData();
    form.append('file', file, file.name)

    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/real-kurs/master-usd-nonusd/upload?globalKursUsdAndNonUsdEnum=${JSON.parse(params)}`, form)
      )
    } catch (error) {
      return null
    }
  }

  importLaporanMarketUpdateCurrencyRateOutlook = async (params: string, file: File) => {
    // const headers = { 'content-type': 'multipart/form-data'}
    const form = new FormData();
    form.append('file', file, file.name)

    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/out-kurs/master-usd-nonusd/upload?globalKursUsdAndNonUsdEnum=${JSON.parse(params)}`, form)
      )
    } catch (error) {
      return null
    }
  }

  importLaporanMarketUpdateInterestRate = async (params: string, file: File) => {
    // const headers = { 'content-type': 'multipart/form-data'}
    const form = new FormData();
    form.append('file', file, file.name)

    try {
      return await lastValueFrom(
        // this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/realisasi/non-macro/upload?globalDashboardRealisasiEnum=${JSON.parse(params)}`, form)
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/upload?globalInterestRateEnum=${JSON.parse(params)}`, form)

      )
    } catch (error) {
      return null
    }
  }

  importLaporanMarketUpdateCommodities = async (file: File, params: string) => {
    const form = new FormData()
    form.append('file', file, file.name);
    try {
      // const headers = { 'content-type': 'application/json'}
      // const body = JSON.stringify(file);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/upload/commodities?globalCommoditiesEnum=${params}
        `, form)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanMarketUpdateBondYield = async (file: File, params: string) => {
    const form = new FormData()
    form.append('file', file, file.name);
    try {
      // const headers = { 'content-type': 'application/json'}
      // const body = JSON.stringify(file);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/upload/rby?globalBondYieldEnum=${params}
        `, form)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanMacroIndicator = async (params: string, data: any) => {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(data)
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/macro/create?globalMacroIndicatorEnum=${JSON.parse(params)}`, body, {'headers': headers})
      )
    } catch (error) {
      return null
    }
    // console.log(body, `http://10.1.18.47:9051/simloan/ws-v01/dashboard/realisasi/macro/create?globalDashRealMacroIndicatorEnum=${params}`);
  }

  importLaporanMarketUpdateInterestOutlook = async (file: File, params: string) => {
    const form = new FormData()
    form.append('name', file, file.name);
    try {
      // const headers = { 'content-type': 'application/json'}
      // const body = JSON.stringify(file);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/outlook/non-macro/upload_all_interest_rates?globalInterestRateEnum=${JSON.parse(params)}
        `, form)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanMarketUpdateCommoditiesOutlook = async (file: File, params: string) => {
    const form = new FormData()
    form.append('name', file, file.name);
    try {
      // const headers = { 'content-type': 'application/json'}
      // const body = JSON.stringify(file);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/outlook/non-macro/upload_all_commodities?globalCommoditiesEnum=${params}
        `, form)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanMarketUpdateBondYieldOutlook = async (file: File, params: string) => {
    const form = new FormData()
    form.append('name', file, file.name);
    try {
      // const headers = { 'content-type': 'application/json'}
      // const body = JSON.stringify(file);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/outlook/non-macro/upload_all_bondyield?globalBondYieldEnum=${params}
        `, form)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanMarketUpdateMacroOutlook = async (file: File, params: string) => {
    const form = new FormData()
    form.append('file', file, file.name);
    try {
      // const headers = { 'content-type': 'application/json'}
      // const body = JSON.stringify(file);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/outlook/macro/all_macro?globalDashOutlookMacroIndicatorEnum=${params}
        `, form)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataRealisasiCadev(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-cad-devisa`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

}
