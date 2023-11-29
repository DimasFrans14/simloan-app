import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements AfterViewInit{

  localData: { roleValue: string } | null = null;


  ngAfterViewInit(): void {
    const localStorageData = localStorage.getItem('dataRegister');

    // let localData: any;

    if (localStorageData !== null) {
      this.localData = JSON.parse(localStorageData);
      console.log(this.localData);

    } else {
      console.log('data kosong');
    }
  }

}
