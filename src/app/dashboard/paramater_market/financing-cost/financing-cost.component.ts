import { Component } from '@angular/core';

@Component({
  selector: 'app-financing-cost',
  templateUrl: './financing-cost.component.html',
  styleUrls: ['./financing-cost.component.css']
})
export class FinancingCostComponent {

  openModal: boolean = false;

  openModalfincost(){
    this.openModal = !this.openModal;
  }

  openModalfootnote(){
    this.openModal = !this.openModal;
  }

}
