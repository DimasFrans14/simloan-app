import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShlAgreementService {

  constructor(private http: HttpClient) {}

  getAgreementData = async () => {
    try {
      return await lastValueFrom(
        this.http.get(
          `${environment.apiUrl1}/simloan/ws-v01/trx-shl-agreement?sources_of_funding=NON_PENERUSAN`
        )
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  createAgreementData = async (data: any) => {
    try {
      return await lastValueFrom(
        this.http.post(
          `${environment.apiUrl1}/simloan/ws-v01/trx-shl-agreement/create_non`, data
        )
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }

  uploadDocSHL = async (files: File[]) => {

    const data = new FormData();

    files.forEach((file: any, index: number) => {
      data.append('file', file, file.name)
    })

    try {
      return await lastValueFrom(
        this.http.post(
          `${environment.apiUrl1}/simloan/ws-v01/loan-uploads/uploadSHL`, data
        )
      )
    } catch (error) {
      console.log(error);
      return error
    }
  }
}
