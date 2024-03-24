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
//kurs
  async fetchDataKurs(year: string){
    try {
      const params = new HttpParams().set('date', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/currency/getList`, {params})
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRealisasiKursUsd(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/real-kurs/master-usd-nonusd/list`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRealisasiKursUsd(data:any){
    const data1= {
      "id_mst_jisdor": data.id_mst_jisdor,
      "mata_uang": data.mataUang,
      "nilai": data.nilai,
      "tanggal": data.tanggal
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/real-kurs/master-usd-nonusd/create_jisdor`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRealisasiKursUsd(data:any){
    const data1 = {
      "id_mst_jisdor": data.idJisdor,
      "mata_uang":data.tahun,
      "nilai": data.nilai,
      "tanggal": data.tanggal,
      "is_active": true
    }
    console.log(data1)
    try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/real-kurs/master-usd-nonusd/real_update_jisdor?id=${data.idJisdor}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
  }
  }
  async fetchDeleteDataRealisasiCurrencyRate(data:any){
    const id ={
      "id": data.idJisdor
    }
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}http://10.1.18.47:9051/simloan/ws-v01/real-kurs/master-usd-nonusd/delete_jisdor?id=${id.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRealisasiKursNonUsd(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/real-kurs/master-usd-nonusd/nonusd`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRealisasiKursNonUsd(data:any){
    const data1= {
      "mata_uang": data.mataUang,
      "nilai": data.nilai,
      "kurs": data.kurs,
      "tanggal": data.tanggal
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/real-kurs/master-usd-nonusd/create_nonusd`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRealisasiKursNonUsd(data:any){
    const data1 = {
      "id_mst_jisdor": data.idJisdor,
      "mata_uang":data.mataUang,
      "nilai": data.nilai,
      "tanggal": data.tanggal,
      "is_active": true
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/real-kurs/master-usd-nonusd/real?id=${data.idJisdor}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
  }
  }
  async fetchDeleteDataRealisasiCurrencyRateNonUsd(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/rkap/non-macro/list_rby?=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRkapKursUsd(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/rkap-kurs/master-usd-nonusd/list`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRkapKursUsd(data:any){
    const data1= {
      "mata_uang":data.tahun,
      "nilai": data.nilai,
      "kurs": data.kurs,
      "tanggal": true
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/rkap-kurs/master-usd-nonusd/create_jisdor`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRkapKursUsd(data:any){
    const data1 = {
      "id_mstr_rkap_jisdor": data.idJisdor,
      "mata_uang":data.mataUang,
      "nilai": data.nilai,
      "kurs": data.kurs,
      "tanggal": data.tanggal,
      "is_active":true
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/rkap-kurs/master-usd-nonusd/update_jisdor?id=${data.idJisdor}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
  }
  }
  async fetchDeleteDataRkapKursUsd(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/rkap/non-macro/list_rby?=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRkapKursNonUsd(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/rkap-kurs/master-usd-nonusd/nonusd`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRkapKursNonUsd(data:any){
    const data1= {
      "mata_uang":data.tahun,
      "nilai": data.nilai,
      "kurs": data.kurs,
      "tanggal": true
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/rkap-kurs/master-usd-nonusd/create`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRkapKursNonUsd(data:any){
    const data1 = {
      "id_mstr_rkap_kurs": data.idNonJisdor,
      "mata_uang":data.mataUang,
      "nilai": data.nilai,
      "tanggal": data.tanggal,
      "is_active": true
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/rkap-kurs/master-usd-nonusd/update?id=${data.idNonJisdor}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
  }
  }
  async fetchDeleteDataRkapNonUsd(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/rkap/non-macro/list_rby?=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataOutlookKursUsd(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/out-kurs/master-usd-nonusd/list`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataOutlookKursNonUsd(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/out-kurs/master-usd-nonusd/nonusd`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputOutlookKursUsd(data:any){
    const data1= {
      "mata_uang":data.mataUang,
      "nilai": data.nilai,
      "tanggal": data.tanggal
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/out-kurs/master-usd-nonusd/jisdor`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookKursUsd(data:any){
    const data1 = {
      "mata_uang": data.mataUang,
      "nilai": data.nilai,
      "kurs": data.kurs,
      "tanggal": data.tanggal,
      "is_active": true
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/out-kurs/master-usd-nonusd/jisdor=${data.id_mst_outjisdor}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
  }
  }
  //belum ada end point
  async fetchDeleteDataOutlookCurrencyRate(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/rkap/non-macro/list_rby?=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataOutlookNonUsd(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/out-kurs/master-usd-nonusd/nonusd`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputOutlookNonUsd(data:any){
    const data1= {
      "mata_uang":data.tahun,
      "nilai": data.nilai,
      "kurs": data.kurs,
      "tanggal": data.tanggal
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/out-kurs/master-usd-nonusd/nonusd`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookNonUsd(data:any){
    const data1 = {
      "mata_uang": data.mataUang,
      "nilai": data.nilai,
      "kurs": data.kurs,
      "tanggal": data.tanggal
    }
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/out-kurs/master-usd-nonusd/usd_nonusd=${data.idNonJisdor}`, data1)
    )
  } catch (error) {
    console.log(error);
    return error
  }
  }
  async fetchDataUpdateRkapKurs(data:any){
    const data1= {
      "kuartal": data.quartal,
      "tahun":data.tahun,
      "Kurs": data.Kurs,
      "is_active": true
    }
    try {
      return await lastValueFrom(
        this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-Kurs?id=${data.id}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataInputRkapKurs(data:any){
    const data1= {
      "master_rkap_Kurs_creates": [{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "Kurs": data.Kurs,
        "is_active": true
      }]
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-Kurs`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataOutlookKurs(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-Kurs`)
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async fetchDataInputOutlookKurs(data:any){
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
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-Kurs`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookKurs(data:any){
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

  async fetchDataKursTrendBarChart(date: string){
    const option = {
      params: {
        "date": date
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

  async fetchInterestRateBarChart(date: string){
    const option = {
      params: {
        "date": date
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
  // bond Yield SBN
  async fetchDataBondYield(year: string){
    try {
      const params = new HttpParams().set('date', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/bondyield/getList`, {params})
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRealisasiBondYieldSBN(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/list_rby?grup=SBN`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRealisasiBondYieldSBN(data:any){
    const params = {
      "ustreasury_usbn": "US_TREASURY"
    }
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/update_by?id=${data.id}&ustreasury_usbn=SBN`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRealisasiBondYieldSBN(data:any){
    const params = {
      "ustreasury_usbn": "SBN"
    }
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-realisasi-bondyield?ustreasury_usbn=${params}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDeleteDataRealisasuBondYieldSBN(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/bondyield_usbn?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRkapBondYieldSBN(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-bondyield`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRkapBondYieldSBN(data:any){
    const params = {
      "ustreasury_usbn": "SBN"
    }
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-realisasi-bondyield?ustreasury_usbn=${params}`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataInputRkapBondYieldSBN(data:any){
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-realisasi-bondyield?ustreasury_usbn=SBN`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDeleteDataRkapBondYieldSBN(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-bondyield?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataOutlookBondYieldSBN(){
    try {
      const params = {  
        "grup": "SBN"
      }
      console.log(params)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-bond-yield?grup=SBN`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputOutlookBondYieldSBN(data:any){
    const data1= {
      "tanggal": data.tanggal,
      "get_5y": data.get_5y,
      "get_7y": data.get_7y,
      "get_10y": data.get_10y,
      "get_15y": data.get_15y,
      "get_20y": data.get_20y,
      "get_25y": data.get_25y,
      "get_30y": data.get_30y,
      "group":data.group,
      "is_active": true
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-bond-yield?grup=US_TREASURY`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookBondYieldSBN(data:any){
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-bond-yield?id=${data.id}&grup=US_TREASURY`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDeleteDataOutlookBondYieldSBN(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-bond-yield?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  //bond Yield US treasury
  async fetchDataBondYieldTreasury(year: string){
    try {
      const params = new HttpParams().set('date', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/bondyield/getList`, {params})
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRealisasiBondYieldUsTreasury(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/list_rby?grup=US_TREASURY`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRealisasiBondYieldTreasury(data:any){
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/update_by?id=${data.id}&ustreasury_usbn=US_TREASURY`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataInputRealisasiBondYieldUsTreasury(data:any){
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
  async fetchDeleteDataRealisasiBondYieldUsTreasury(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/bondyield_usbn?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRkapBondYieldUsTreasury(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-bondyield`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataUpdateRkapBondYieldUsTreasury(data:any){
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-bondyield?id=1&ustreasury_usbn=US_TREASURY`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataInputRkapBondYieldUsTreasury(data:any){
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
  async fetchDeleteDataRkapBondYieldUsTreasury(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-bondyield?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataOutlookBondYieldUsTreasury(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-bond-yield?grup=US_TREASURY`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputOutlookBondYieldUsTreasury(data:any){
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-bond-yield?grup=US_TREASURY`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookBondYieldUsTreasury(data:any){
    const data1= {
      "tanggal": data.tanggal,
      "yr5": data.yr5,
      "yr7": data.yr7,
      "yr10": data.yr10,
      "yr15": data.yr15,
      "yr20": data.yr20,
      "yr25": data.yr25,
      "yr30": data.yr30
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-bond-yield?id=${data.id}&grup=US_TREASURY`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDeleteDataOutlookBondYieldUsTreasury(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-bond-yield?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  //commodities
  async fetchDataCommoditiesAll(year: string){
    try {
      const params = new HttpParams().set('date', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/commodities/getRateList`, {params})
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
  async fetchDataInputRealisasiCommodities(data:any){
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
  async fetchDeleteDataRealisasiCommodities(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-money-supply?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputRkapCommodities(data:any){
    const data1= {
      "master_rkap_commodities_creates":[{
        "kode_item": data.quartal,
        "nilai":data.tahun,
        "tanggal": data.nilai,
        "tahun": data.nilai,
        "keterangan": data.nilai,
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
  async fetchDataUpdateRkapCommodities(data:any){
    const data1 = {
      "id": data.id,
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
  async fetchDeleteDataRkapCommodities(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-money-supply?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  // belum di cek
  async fetchDataInputOutlookCommodities(data:any){
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
  async fetchDeleteDataOutlookCommodities(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-money-supply?id=${data.id}`)
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

  async fetchDataBarCommodities(kategori:string, date:string){
    const option = {
      params: {
        "kode": kategori,
        "date": date
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
//pdb
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
  async fetchDeleteDataRealisasiPDB(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pdb?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDeleteDataRkapPDB(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-pdb?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDeleteDataOutlookPDB(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-pdb?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
// inflasi
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
  async fetchDeleteDataRealisasiInflasi(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-inflasi?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDeleteDataRkapInflasi(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-inflasi?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputOutlookInflasi(data:any){
    const data1= {
      "master_rkap_inflasi_creates":[{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "pdb": data.pdb
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-inflasi`, data1)
      )
    } catch (error) {
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
  async fetchDeleteDataOutlookInflasi(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-inflasi?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
//PMI
  async fetchDataPMI(){
    try {
      // const params = new HttpParams().set('date', year);
      // const params = new HttpParams().set('date', year);
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
  async fetchDataInputRealisasiPMI(data:any){
    const data1= {
      "master_real_pmi_creates":[{
        "rate": data.rate,
        "bulan": data.bulan,
        "tahun":data.tahun,
        "is_active": true
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pmi`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
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
  async fetchDeleteDataRealisasiPMI(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-pmi?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputRkapPMI(data:any){
    const data1= {
      "master_rkap_inflasi_creates":[{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "pdb": data.pdb
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-pmi`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRkapPMI(data:any){
    const data1 = {
      "kuartal": data.quartal,
      "tahun": data.tahun,
      "pdb": data.pdb,
      "is_active": true
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
  async fetchDeleteDataRkapPMI(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-pmi?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputOutlookPMI(data:any){
    const data1= {
      "master_rkap_inflasi_creates":[{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "pdb": data.pdb
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-Outlook-inflasi`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
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
  async fetchDeleteDataOutlookPMI(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-pmi?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
//Retail sales
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
  async fetchDataInputRealisasiRetail(data:any){
    const data1= {
      "master_real_retail_sales_creates":[{
        "bulan": data.bulan,
        "tahun":data.tahun,
        "nilai": data.nilai
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-retail-sales`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
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
  async fetchDeleteDataRealisasiRetail(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-retail-sales?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputRkapRetail(data:any){
    const data1= {
      "master_rkap_retail_sales_creates":[{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "pdb": data.pdb
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-rtsales`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
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
  async fetchDeleteDataRkapRetail(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-retail-sales?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputOutlookRetail(data:any){
    const data1= {
      "master_outlook_retail_sales_creates":[{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "pdb": data.pdb
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-rtsales`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookRetail(data:any){
      const data1 = {
        "kuartal": data.quartal,
        "tahun": data.tahun,
        "pdb": data.pdb,
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
  async fetchDeleteDataOutlookRetail(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-retail-sales?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
// money supply
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
  async fetchDataInputRealisasiMoneySupply(data:any){
    const data1= {
      "master_real_money_supply_creates":[{
        "bulan": data.bulan,
        "tahun":data.tahun,
        "triliun_beredar": data.triliun_beredar,
        "is_active": true
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-money-supply`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
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
  async fetchDeleteDataRealisasiMoneySupply(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-money-supply?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputRkapMoneySupply(data:any){
    const data1= {
      "master_rkap_money_supply_creates":[{
        "pdb": data.pdb,
        "quartal": data.quartal,
        "tahun":data.tahun,
        "is_active": true
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-msupply`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRkapMoneySupply(data:any){
    const data1 = {
      "kuartal": data.quartal,
      "tahun": data.tahun,
      "pdb": data.pdb,
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
  async fetchDeleteDataRkapMoneySupply(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-money-supply?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputOutlookMoneySupply(data:any){
    const data1= {
        "master_outlook_money_supply_creates":[{
          "bulan": data.bulan,
          "tahun":data.tahun,
          "triliun_beredar": data.triliun_beredar,
          "is_active": true
        }]
      }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-msupply`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
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
  async fetchDeleteDataOutlookMoneySupply(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-money-supply?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
//CADEV
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
  async fetchDataInputRealisasiCadev(data:any){
    const data1= {
      "mstr_real_cad_devisa_creates":[{
        "bulan": data.bulan,
        "tahun":data.tahun,
        "miliar_usd": data.miliar_usd,
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-cad-devisa`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRealisasiCadev(data:any){
      const data1 = {
        "bulan": data.bulan,
        "tahun": data.tahun,
        "miliarUsd": data.miliar_usd,
        "is_active": true
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
  async fetchDeleteDataRealisasiCadev(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-real-cad-devisa?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputRkapCadev(data:any){
    const data1= {
      "master_rkap_pdb_creates":[{
        "quartal": data.quartal,
        "tahun":data.tahun,
        "pdb": data.pdb
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-cadev`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateRkapCadev(data:any){
    const data1 = {
      "kuartal": data.quartal,
      "tahun": data.tahun,
      "pdb": data.pdb,
      "is_active": true
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
  async fetchDeleteDataRkapCadev(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-rkap-cad-devisa?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
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
  async fetchDataInputOutlookCadev(data:any){
    const data1= {
      "master_outlook_cadangan_devisa_creates":[{
        "bulan": data.bulan,
        "tahun":data.tahun,
        "miliar_usd": data.miliar_usd
      }]
    }
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-cadev`, data1)
      )
    } catch (error) {
      console.log(error);
      return error
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
  async fetchDeleteDataOutlookCadev(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/macro/master-outlook-cad-devisa?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  //interest rate
  async fetchDataInterestRate(year:string){
    try {
      const params = new HttpParams().set('date', year)
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl2}/market/interest/getList`, {params})
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataRealisasiInterestRate(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/list/interest`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRealisasiInterestRate(data:any){
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
  async fetchDataUpdateRealisasiInterestRate(data:any){
    const data1 = {
      "grup": data.interest_rate_enum,
      "tanggal": data.tanggal,
      "tahun": data.tahun,
      "rate": data.rate,
      "month3": data.month3,
      "month6": data.month6
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
  async fetchDeleteDataRealisasiInterestRate(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/non-macro/list/interest?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  //end point belum ada
  async fetchDataRkapInterestRate(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/rkap`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputRkapInterestRate(data:any){
    const data1 = {
      "grup": data.interest_rate_enum,
      "tanggal": data.tanggal,
      "tahun": data.tahun,
      "rate": data.rate,
      "month3": data.month3,
      "month6": data.month6
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
  async fetchDataUpdateRkapInterestRate(data:any){
    const data1 = {
      "grup": data.interest_rate_enum,
      "tanggal": data.tanggal,
      "tahun": data.tahun,
      "rate": data.rate,
      "month3": data.month3,
      "month6": data.month6
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
  async fetchDeleteDataRkapInterestRate(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/rkap/non-macro/list/interest?id=${data.id}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataOutlookInterestRate(){
    try {
      return await lastValueFrom(
        this.http.get(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-interest-rate`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataInputOutlookInterestRate(data:any){
    const data1 = {
      "grup": data.grup,
      "tanggal": data.tanggal,
      "tahun": data.tahun,
      "rate": data.rate,
      "month3": data.month3,
      "month6": data.month6,
    }
    console.log(data1)
  try {
    return await lastValueFrom(
      this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-interest-rate?interest_rate_enum=${data.interest_rate_enum}`, data1)
    )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDataUpdateOutlookInterestRate(data:any){
    const data1 = {
      "grup": data.interest_rate_enum,
      "tanggal": data.tanggal,
      "tahun": data.tahun,
      "rate": data.rate,
      "month3": data.month3,
      "month6": data.month6
    }
    console.log(data1)
  try {
    return await lastValueFrom(
      this.http.put(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-interest-rate?id=${data.id}&interest_rate_enum=${data.interest_rate_enum}`, data1)
    )
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async fetchDeleteDataOutlookInterestRate(data:any){
    try {
      return await lastValueFrom(
        this.http.delete(`${environment.apiUrl1}/simloan/ws-v01/dashboard/non-macro/outlook-interest-rate?id=${data.id}`)
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

  importLaporanMacroIndicator = async (params: string, file: File) => {
    const form = new FormData()
    form.append('file', file, file.name);
    try {
      return await lastValueFrom(
        this.http.post(`${environment.apiUrl1}/simloan/ws-v01/dashboard/realisasi/macro/upload?globalDashboardRealisasiEnum=${JSON.parse(params)}`, form)
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
