import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { TableServicesService } from './services/table_services/table-services.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private dataT: TableServicesService) { }

  result: any;

  async fetchDataKurs(){
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:9051/simloan/ws-v01/master-kurs/list?data=10')
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataInterestRateRKAP(){
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:9051/simloan/ws-v01/dashboard/rkap')
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataCommoditiesAll(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/currency/getRateList?date=05/12/202`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async fetchDataCommoditiesByDate(currentDate: any){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/market/currency/getRateList?date=${currentDate}`)
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataPDB(){
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:8080/simloan-ws/market/macroindicator/pdb/getList')
      );
    } catch (error) {
      console.log(error);
      return null;
    }

  }

  async fetchDataInflasi(){
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:8080/simloan-ws/market/macroindicator/inflasi/getList?date=12/12/2023')
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataPMI(){
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:8080/simloan-ws/market/macroindicator/pmi/getList?date=12/12/2023')
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataRetail(){
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:9051/simloan/ws-v01/cm25-loan-views/view_retail_sales')
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataMoneySupply(){
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:9051/simloan/ws-v01/cm25-loan-views/view_money_supply')
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async fetchDataDevisa(){
    try {
      return await lastValueFrom(
        this.http.get('http://10.1.18.47:9051/simloan/ws-v01/cm25-loan-views/view_mrealcadev')
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async setData() {
    try {
      const data = await this.fetchDataKurs();
      if (data) {
        this.result = data;
        console.log(this.result);
      } else {
        console.log('No data retrieved');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async fetchDataUsers(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/system/users/list`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

}
