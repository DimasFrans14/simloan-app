import { Component } from '@angular/core';
import { CreateLiabilitiesComponent } from '../create-liabilities/create-liabilities.component';

@Component({
  selector: 'app-preview-liabilities',
  templateUrl: './preview-liabilities.component.html',
  styleUrls: ['./preview-liabilities.component.css']
})
export class PreviewLiabilitiesComponent {
  today: number = Date.now();
}

