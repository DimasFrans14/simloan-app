import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Quill from 'quill';
import { QuillServicesService } from 'src/app/services/textArea_services/quill-services.service';

@Component({
  selector: 'overview-harian',
  templateUrl: './overview-harian.component.html',
  styleUrls: ['./overview-harian.component.css']
})
export class OverviewHarian implements OnInit, AfterViewInit{

  @ViewChild('keyTakeways') keyTakeways!: ElementRef;
  @ViewChild('footnote') footnote!: ElementRef;

  public quillTakeways!: Quill;
  public quillFootnote!: Quill;

  openModal: boolean = false;

  constructor(private quillConfig: QuillServicesService){
    console.log(quillConfig);
  }

  openModalTakeways(){
    this.openModal = !this.openModal;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
      const elementKeyTakeways = this.keyTakeways.nativeElement;
      const elementFootnote = this.footnote.nativeElement;
      this.quillTakeways = this.quillConfig.initializeQuillKeyTakeways(elementKeyTakeways);

      this.quillFootnote = this.quillConfig.initializeQuillFootnote(elementFootnote);
  }

  getValue(){

    // const data = {
    //   value: this.quill.getText()
    // }

    // let formatData = data.value;

    let value = this.quillTakeways.getText();

    console.log(value);
  }

  getValue2(){

    // const data = {
    //   value: this.quill.getText()
    // }

    // let formatData = data.value;

    let value = this.quillFootnote.getText();

    console.log(value);
  }

  onChange(){
    const _this = this;
    this.quillTakeways.on('text-change', function(delta, oldDelta, source) {
      if (source === 'user') {
        _this.getValue()
      }
    })
  }

  onChange2(){
    const _this = this;
    this.quillFootnote.on('text-change', function(delta, oldDelta, source) {
      if (source === 'user') {
        _this.getValue2()
      }
    })
  }

}
