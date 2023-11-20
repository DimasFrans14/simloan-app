import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  inputValue:any;

  getValueSelect(val: string) {
    this.inputValue = val;
    console.log(val);
  }



}
