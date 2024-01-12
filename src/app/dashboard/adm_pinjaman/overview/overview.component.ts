import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  itemAdmPinjaman = [
    {
      'titleAdm': 'Disbursement',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    },
    {
      'titleAdm': 'Unused Loan',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    },
    {
      'titleAdm': 'Principal Payment',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    },
    {
      'titleAdm': 'Interest Payment',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    },
    {
      'titleAdm': 'Outstanding',
      'value': '0.23',
      'val_indikator': '4.29',
      'sub_title': 'Eqv. Rp. Tn - From last Year'
    }
  ]

}
