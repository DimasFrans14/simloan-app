import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  localDev: string = 'http://10.1.18.47:9051'
  serverDev: string = 'http://10.1.18.47:8080'

  async loginUser(username: string, password: string){
    try {
      const headers = { 'content-type': 'application/json'}
      const body = {
        username,
        password
      }
      const response = await lastValueFrom(this.http.post(`${this.localDev}/simloan/ws-v01/system/auth/login`, body, {'headers': headers}))
      return response;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async registerUser(data: any){
    try {
      const headers = { 'content-type': 'application/json'}
      const response = await lastValueFrom(this.http.post(`${this.localDev}/simloan/ws-v01/system/users/create`, data, {'headers': headers}))
      return response;
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async fetchDataUsers(){
    try {
      return await lastValueFrom(
        this.http.get(`${this.localDev}/simloan/ws-v01/system/users/list`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

}
