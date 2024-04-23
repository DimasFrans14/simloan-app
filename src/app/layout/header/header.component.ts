import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() headerTitle: string = ''

  toggle(){
    const element = document.body as HTMLBodyElement;
    const header = document.querySelector('#header') as HTMLHeadingElement;

    header.classList.toggle('header-closed');
    element.classList.toggle('toggle-sidebar');
  }

  userAccount: any;

  ngOnInit(): void {
    const getDataAccount =  localStorage.getItem('account');
    getDataAccount ? this.userAccount = JSON.parse(getDataAccount) : this.userAccount = {}

    console.log(this.userAccount);


  }

}
