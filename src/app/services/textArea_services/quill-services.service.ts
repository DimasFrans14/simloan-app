import { Injectable } from '@angular/core';
import Quill from 'quill';


@Injectable({
  providedIn: 'root'
})
export class QuillServicesService {

  constructor() {
    // this.initializeQuillConfig(element)
   }

   quillKeyTakeways: any;
   quillFootnote: any;

  initializeQuillKeyTakeways(element: HTMLElement){
   return new Quill(element, {
      modules: {
        toolbar:[
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
      ]
      },
      theme: 'snow'
    })
  }

  initializeQuillFootnote(element: HTMLElement){
   return new Quill(element, {
      modules: {
        toolbar:[
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
      ]
      },
      theme: 'snow'
    })
  }

  ngAfterViewInit(): void {

  }
}
