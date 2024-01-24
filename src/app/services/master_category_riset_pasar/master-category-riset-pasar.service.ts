import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterCategoryRisetPasarService {

  constructor(
    private http: HttpClient
  ) { }

    fetchMasterCategory = async () => {
      try {
        return await lastValueFrom(
          this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/master-category-rst-pasar`)
        )
      } catch (error) {
        console.log(error);
        return null
      }
    }

    fetchMasterSubCategory = async () => {
      try {
        return await lastValueFrom(
          this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/master-subcategory-rst-pasar`)
        )
      } catch (error) {
        console.log(error);
        return null
      }
    }

}
