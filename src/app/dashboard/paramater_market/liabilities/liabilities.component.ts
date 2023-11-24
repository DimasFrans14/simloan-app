import { Component } from '@angular/core';

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.css']
})
export class LiabilitiesComponent {

  files: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  openModal: boolean = false;

  openModalcard1(){
    this.openModal = !this.openModal;
  }

  openModalinfo(){
    this.openModal = !this.openModal;
  }
  openModalfootnote(){
    this.openModal = !this.openModal;
  }

  constructor(){

  }

  ngOnInit(): void {

  }
}
