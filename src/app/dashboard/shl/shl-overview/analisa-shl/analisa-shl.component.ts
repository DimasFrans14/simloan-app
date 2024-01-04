import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-analisa-shl',
  templateUrl: './analisa-shl.component.html',
  styleUrls: ['./analisa-shl.component.css']
})
export class AnalisaShlComponent{

  constructor(private dataService: DataService){

  }

  data: any;

  ngOnInit() {
    this.dataService.getDataAnalisaSHL().subscribe(data => {
      this.data = data;
    });
  }
}
