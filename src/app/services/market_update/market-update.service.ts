import { HttpClient } from '@angular/common/http';
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

  async fetchDataKurs(){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/master-kurs/list/mrk`)
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

  async fetchDataBondYield(){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/dashboard/realisasi/non-macro/list_rby`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataCommoditiesAll(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/master-rkap-commodities`)
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

  async fetchDataPDB(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/macroindicator/pdb/getList`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestRate(){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/dashboard/realisasi/list/interest?tanggal=`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }

  }

  async fetchDataInflasi(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/macroindicator/inflasi/getList?date=12/12/2023`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataPMI(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/macroindicator/pmi/getList?date=12/12/2023`)
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

  importLaporanMarketUpdate = async (data: any, params: string) => {
    try {
      const headers = { 'content-type': 'application/json'}
      const body = JSON.stringify(data);
      console.log(params);
      return await lastValueFrom(
        this.http.post(`http://10.1.18.47:9051/simloan/ws-v01/dashboard/realisasi/macro/create?globalDashRealMacroIndicatorEnum=${params}`, data,{'headers':headers})
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

}
