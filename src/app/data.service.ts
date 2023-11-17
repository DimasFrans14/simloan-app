import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  async getData(){
    try {
      return await lastValueFrom(
        this.http.get('https://jsonplaceholder.typicode.com/users')
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}
