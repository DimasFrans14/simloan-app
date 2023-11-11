import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  toggle(){
    const element = document.body as HTMLBodyElement;
    const header = document.querySelector('#header') as HTMLHeadingElement;

    header.classList.toggle('header-closed');
    element.classList.toggle('toggle-sidebar');
  }

}
