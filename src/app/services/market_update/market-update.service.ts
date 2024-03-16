import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  async fetchDataKurs(year: string){
    try {
      const params = new HttpParams().set('tahun', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/currency/getList`, {params})
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

  async fetchDataBondYield(year: string){
    try {
      const params = new HttpParams().set('tahun', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/bondyield/getList
`, {params})
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataCommoditiesAll(year: string){
    try {
      const params = new HttpParams().set('tahun', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/simloan-ws/market/commodities/getRateList`, {params})
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRealisasiCommodities(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/realisasi_commodities`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRealisasiCommodities(data:any){
    const data1 = {
      "kode_item": data.kode_item,
      "tahun": data.tahun,
      "tanggal": data.tanggal,
      "nilai": data.nilai,
      "kategori": data.kategori,
      "is_active": true
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pmi?id=${data.id}`, data1)
    )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataRkapCommodities(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/master-rkap-commodities`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRkapCommodities(data:any){
    const data1 = {
      "kode_item": data.kode_item,
      "nilai": data.nilai,
      "tanggal": data.tanggal,
      "tahun": data.tahun,
      "keterangan": data.keterangan,
      "is_active": true
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/master-rkap-commodities?id=${data.id}`, data1)
    )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookCommodities(data:any){
    const data1 = {
      "kode_item": data.kode_item,
      "tahun": data.tahun,
      "tanggal": data.tanggal,
      "nilai": data.nilai,
      "keterangan": data.keterangan,
      "is_active": true
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/outlook-commodities?id=${data.id_outlook_com}`, data1)
    )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataOutlookCommodities(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-commodities`)
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

  fetchDataCompareChangeRKAP = async () => {
    try {
      const params = new HttpParams().set('tanggal', "21/02/2024")
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/dashboard/market/trending/kurs/compare`, {params})
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
        "nilai": data.nilai,
        "is_active": true
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
  async fetchDataInputRealisasiPDB(data:any){
    const data1= {
      "master_real_pdb_creates":[{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "nilai": data.nilai,
        "is_active": true
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb`, data1)
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
      "kuartal": data.quartal,
      "tahun":data.tahun,
      "pdb": data.pdb,
      "is_active": true
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-pdb?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataInputRkapPDB(data:any){
    const data1= {
      "master_rkap_pdb_creates": [{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "pdb": data.pdb,
        "is_active": true
      }]
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-pdb`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataOutlookPdb(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-pdb`)
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async fetchDataInputOutlookPDB(data:any){
    const data1= {
      "master_rkap_outlook_creates": [{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "nilai": data.nilai,
        "is_active": true
      }]
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-pdb`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookPDB(data:any){
    const data1 = {
      "quartal": data.quartal,
      "tahun":data.tahun,
      "nilai": data.nilai,
      "is_active": true
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-pdb?id=${data.id}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
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
  async fetchDataRealisasiInflasi(){
    try{
      return lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-inflasi`)
      )
    } catch (error){
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRealisasiInflasi(data:any){
    const data1= {
      "master_real_inflasi_creates":[{
        "bulan": data.bulan,
        "tahun":data.tahun,
        "nilai": data.nilai,
        "is_active": true
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-inflasi`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRealisasiInflasi(data:any){
    const data1 = {
      "bulan": data.bulan,
      "tahun": data.tahun,
      "nilai": data.nilai,
      "is_active": true
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-inflasi?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataRkapInflasi(){
    try{
      return lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-inflasi`)
      )
    } catch (error){
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRkapInflasi(data:any){
    const data1= {
      "master_rkap_inflasi_creates":[{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "pdb": data.pdb
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-inflasi`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRkapInflasi(data:any){
    data = {
      "bulan": data.bulan,
      "tahun": data.tahun,
      "nilai": data.nilai
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}http://10.1.18.47:9051/simloan/ws-v01/dashboard/macro/master-rkap-inflasi?id=${data.id}`, data)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataOutlookInflasi(){
    try{
      return lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-inflasi`)
      )
    } catch (error){
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookInflasi(data:any){
    data = {
      "bulan": data.bulan,
      "tahun": data.tahun,
      "nilai": data.nilai
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}http://10.1.18.47:9051/simloan/ws-v01/dashboard/macro/master-outlook-inflasi?id=${data.id}`, data)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async fetchDataPMI(){
    try {
      // const params = new HttpParams().set('tahun', year);
      // const params = new HttpParams().set('tahun', year);
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/cm25-loan-views/view_real_pmi`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRealisasiPMI(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pmi`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRealisasiPMI(data:any){
      const data1 = {
        "rate": data.rate,
        "bulan": data.bulan,
        "tahun": data.tahun,
        "is_active": true
      }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pmi?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataRkapPMI(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-pmi`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRkapPMI(data:any){
    const data1 = {
      "rate": data.rate,
      "bulan": data.bulan,
      "tahun": data.tahun,
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-pmi?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataOutlookPMI(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-pmi`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateOutlookPMI(data:any){
    const data1 = {
      "rate": data.rate,
      "bulan": data.bulan,
      "tahun": data.tahun,
      "is_active": true
    }
    console.log(data1)
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-pmi?id=${data.id}`, data1)
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
  async fetchDataRealisasiRetail(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-retail-sales`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRealisasiRetail(data:any){
      const data1 = {
        "bulan": data.bulan,
        "tahun": data.tahun,
        "nilai": data.nilai,
        "is_active":true
      }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-retail-sales?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataRkapRetail(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-rtsales`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRkapRetail(data:any){
      const data1 = {
        "bulan": data.bulan,
        "tahun": data.tahun,
        "nilai": data.nilai,
        "is_active":true
      }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-rtsales?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataOutlookRetail(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-rtsales`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateOutlookRetail(data:any){
      const data1 = {
        "bulan": data.bulan,
        "tahun": data.tahun,
        "nilai": data.nilai,
        "is_active":true
      }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-rtsales?id=${data.id}`, data1)
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
  async fetchDataRealisasiMoneySupply(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-money-supply`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRealisasiMoneySupply(data:any){
      const data1 = {
        "bulan": data.bulan,
        "tahun": data.tahun,
        "triliun_beredar": data.triliun_beredar,
        "is_active": true
      }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-money-supply?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataRkapMoneySupply(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-msupply`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRkapMoneySupply(data:any){
    const data1 = {
      "bulan": data.bulan,
      "tahun": data.tahun,
      "triliun_beredar": data.triliun_beredar,
      "is_active": true
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-msupply?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataOutlookMoneySupply(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-msupply`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateOutlookMoneySupply(data:any){
    const data1 = {
      "bulan": data.bulan,
      "tahun": data.tahun,
      "triliun_beredar": data.triliun_beredar,
      "is_active": true
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-msupply?id=${data.id}`, data1)
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
  async fetchDataUpdateRealisasiCadev(data:any){
      const data1 = {
        "bulan": data.bulan,
        "tahun": data.tahun,
        "MilliarUsd": data.MilliarUsd,
      }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-cad-devisa?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataRkapCadev(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-cadev`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRkapCadev(data:any){
    const data1 = {
      "bulan": data.bulan,
      "tahun": data.tahun,
      "MilliarUsd": data.MilliarUsd,
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-cadev?id=${data.id}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
  }
}
  async fetchDataOutlookCadev(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-cadev`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateOutlookCadev(data:any){
    const data1 = {
      "bulan": data.bulan,
      "tahun": data.tahun,
      "miliar_usd": data.miliar_usd,
      "is_active":true
    }
    console.log(data1)
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-cadev?id=${data.id}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
  }
  }
  

  async fetchDataInterestRate(year:string){
    try {
      const params = new HttpParams().set('tahun', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/interest/getList`, {params})
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
    console.log(file);
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

  importLaporanMarketUpdateInterestRateATDBANK = async (params: string, file: File) => {
    // const headers = { 'content-type': 'multipart/form-data'}
    const form = new FormData();
    form.append('file', file, file.name)

    try {
      return await lastValueFrom(
        // this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/realisasi/non-macro/upload?globalDashboardRealisasiEnum=${JSON.parse(params)}`, form)
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/master-atd-banks/upload_bank_atd_all?globalMasterBankAtdEnum=${JSON.parse(params)}`, form)

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
    form.append('file', file, file.name);
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
    form.append('file', file, file.name);
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
    form.append('file', file, file.name);
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
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/outlook/macro/all_macro?globalMacroIndicatorEnum=${params}
        `, form)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  deleteInsertKurs = async (params: string) => {
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/real-kurs/master-usd-nonusd/delete_all_jisdor_nonusd?jisdor_non_usd=${JSON.parse(params)}
        `)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

}
