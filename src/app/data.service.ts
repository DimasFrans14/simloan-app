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
        this.http.get('http://10.1.18.47:9051/simloan/ws-v01/master-kurs/list')
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
        // Assuming 'result' is the variable where you want to store the data
        this.result = data;
        console.log(this.result); // Check the retrieved data
      } else {
        console.log('No data retrieved');
      }
    } catch (error) {
      console.error(error);
    }
  }

}
