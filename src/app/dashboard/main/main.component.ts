import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit{

  userAccount: any;

  ngOnInit(): void {
    const getDataAccount =  localStorage.getItem('account');
    getDataAccount ? this.userAccount = JSON.parse(getDataAccount) : this.userAccount = {}

    console.log(this.userAccount);
  }

}
