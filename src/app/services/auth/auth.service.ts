import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async loginUser(){
    try {
      const response = await lastValueFrom(this.http.get(`http://10.1.18.47:9051/simloan/ws-v01/system/users/list`))
      return response;
    } catch (error) {
      console.log(error);
      return;
    }
  }

}
