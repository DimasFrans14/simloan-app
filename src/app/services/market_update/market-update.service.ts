import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketUpdateService {

  constructor(private http: HttpClient) { }

  result: any;

  localDev: string = 'http://10.1.18.47:9051'
  serverDev: string = 'http://10.1.18.47:8080'

  async fetchDataMacroIndicatorOverview(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/dashboard/market/overview/getMakroIndikator?date=11/07/2023`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataKurs(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/currency/getList`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataKursOverview(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/dashboard/market/overview/getCurrencies?date=04/12/2023`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataKursTrend(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/kurs/getLineChart?start_date=02/02/2023&end_date=02/02/2024`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataKursTrendBarChart(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/kurs/getColumnChart?start_date=01/01/2024&end_date=02/02/2024`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestRateRKAP(){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/dashboard/rkap`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestRateTrending(){
    try {
      return await lastValueFrom(
        // this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/interest/getLineChart?start_date=01/01/2022&end_date=31/03/2024')
        this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/interest/getLineChart?start_date=11/11/2023&end_date=11/02/2024')
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataBondYield(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/bondyield/getList
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
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/cm25-loan-views/view_real_rkap_commodities`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataCommoditiesByDate(currentDate: any){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/commodities/getRateList?date=${currentDate}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataCommoditiesOverview(){

    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/dashboard/market/overview/getCommodities?date=04/12/2023
        `)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataCommoditiesWTIBRENTTrend(){
    const option = {
      params: {
        "kategori": "['WTI', 'BRENT']",
        "start_date": "11/11/2023",
        "end_date": "11/02/2024"
      }
    }
    try {
      return await lastValueFrom(
        // this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
        this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataCommoditiesICPTrend(){
    const option = {
      params: {
        "kategori": "['ICP']",
        "start_date": "11/01/2020",
        "end_date": "11/02/2024"
      }
    }
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
        // this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataCommoditiesCOALTrend(){
    const option = {
      params: {
        "kategori": "['COAL']",
        "start_date": "11/11/2023",
        "end_date": "11/02/2024"
      }
    }
    try {
      return await lastValueFrom(
        // this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
        this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataCommoditiesLNGTrend(){
    const option = {
      params: {
        "kategori": "['LNG']",
        "start_date": "11/11/2023",
        "end_date": "11/02/2024"
      }
    }
    try {
      return await lastValueFrom(
        // this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
        this.http.get('http://10.1.18.47:8080/simloan-ws/dashboard/market/trending/commodities/getLineChart', option)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataPDB(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/macro/master-real-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRkapPdb(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/macro/master-real-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataOutlookPdb(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/macro/master-real-pdb`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestRate(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/interest/getList
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
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/cm25-loan-views/view_inflasi`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getDataInflasiByParams(params: string){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/cm25-loan-views/view_inflasi?bulan=${params}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataPMI(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/cm25-loan-views/view_real_pmi
        `)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataRetail(){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/cm25-loan-views/view_retail_sales`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataMoneySupply(){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/cm25-loan-views/view_money_supply`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataDevisa(){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/cm25-loan-views/view_mrealcadev`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataViewInflasiByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/cm25-loan-views/view_inflasi?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataViewnMoneySupplyByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/cm25-loan-views/view_money_supply?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataViewDevisaByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/cm25-loan-views/view_mrealcadev?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataViewPMIByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/cm25-loan-views/view_real_pmi?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataViewRetailByDate(date: any, month: String | undefined){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/cm25-loan-views/view_retail_sales?bulan=${month}`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanRKAP = async (params: string, file: File) => {
    const form = new FormData();
    form.append('name', file, file.name);

    try {
      return await lastValueFrom(
        this.http.post(
          'http://10.1.18.47:9051/simloan/ws-v01/dashboard/rkap/upload_dash_rkap', form
        )
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanMarketUpdateCurrencyRateuUSD = async (params: string, file: File) => {
    // const headers = { 'content-type': 'multipart/form-data'}
    const form = new FormData();
    form.append('name', file, file.name)

    try {
      return await lastValueFrom(
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/master-jisdors/upload/currency_rate?globalCurrencyRateEnum=${JSON.parse(params)}`, form)
      )
    } catch (error) {
      return null
    }
  }

  importLaporanMarketUpdateCurrencyRateNONUSD = async (params: string, file: File) => {
    // const headers = { 'content-type': 'multipart/form-data'}
    const form = new FormData();
    form.append('name', file, file.name)

    try {
      return await lastValueFrom(
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/master-jisdors/upload/currency_rate?globalCurrencyRateEnum=${JSON.parse(params)}`, form)
      )
    } catch (error) {
      return null
    }
  }

  importLaporanMarketUpdateInterestRate = async (params: string, file: File) => {
    // const headers = { 'content-type': 'multipart/form-data'}
    const form = new FormData();
    form.append('name', file, file.name)

    try {
      return await lastValueFrom(
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/realisasi/non-macro/upload?globalDashboardRealisasiEnum=${JSON.parse(params)}`, form)
      )
    } catch (error) {
      return null
    }
  }

  importLaporanMarketUpdateCommodities = async (file: File, params: string) => {
    const form = new FormData()
    form.append('name', file, file.name);
    try {
      // const headers = { 'content-type': 'application/json'}
      // const body = JSON.stringify(file);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/realisasi/non-macro/upload/commodities?globalRealisasiCommoditiesEnum=${params}
        `, form)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  importLaporanMarketUpdateBondYield = async (file: File, params: string) => {
    const form = new FormData()
    form.append('name', file, file.name);
    try {
      // const headers = { 'content-type': 'application/json'}
      // const body = JSON.stringify(file);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/realisasi/non-macro/upload/rby?globalRealisasiBondYieldEnum=${params}
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
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/realisasi/macro/create?globalDashRealMacroIndicatorEnum=${JSON.parse(params)}`, body, {'headers': headers})
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
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/outlook/non-macro/upload?globalDashboardRealisasiEnum=${JSON.parse(params)}
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
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/outlook/non-macro/upload_cmdities?globalRealisasiCommoditiesEnum=${params}
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
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/outlook/non-macro/upload_oby?globalRealisasiBondYieldEnum=${params}
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
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/outlook/macro/all_macro?globalDashOutlookMacroIndicatorEnum=${params}
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
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/macro/master-real-cad-devisa`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

}
