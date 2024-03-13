import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterAnakPerusahaanService {
  constructor(private http: HttpClient) {}

  getAnakPerusahaan = async () => {
    try {
      return await lastValueFrom(
        this.http.get(
          `${environment.apiUrl1}/simloan/ws-v01/master-anak-perusahan`
        )
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}
