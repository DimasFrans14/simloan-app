import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-hitung-fincost',
  templateUrl: './hitung-fincost.component.html',
  styleUrls: ['./hitung-fincost.component.css']
})
export class HitungFincostComponent {

  public hitungKalkulasi:boolean = true;
  public buttonHitung:any = 'hideHitungKalkulasi';

  toggleHitungKalkulasi() {
    this.hitungKalkulasi = !this.hitungKalkulasi;
    if(this.hitungKalkulasi)  
      this.buttonHitung = "showhitungKalkulasi";
    else
      this.buttonHitung = "HideInterestRate";
  }

}
