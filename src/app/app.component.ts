import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'simloan-app';

  dataArr: any;

  constructor(private dataService: DataService){
   this.loadData();
  }

 async loadData(){
  let data = await this.dataService.getData();
  // console.log(data);

  this.dataArr = data;
  // console.log('dataArr', this.dataArr);
 }

  ngOnInit() {

  }
}
