import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterRoleService {

  constructor(private http: HttpClient) { }

  getMasterRole = async () => {
    try {
      return lastValueFrom(
        this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/system/roles/list`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }
}
