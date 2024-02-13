import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Quill from 'quill';
import 'quill-mention';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuillServicesService {

  constructor(
    private http: HttpClient
  ) {
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


  initializeQuillMention(element: HTMLElement){

    const MentionBlot = Quill.import("blots/mention");

      class StyledMentionBlot extends MentionBlot {
        static render(data: any) {
          const element = document.createElement('span');
          element.innerText = data.value;
          element.style.color = data.color;
          return element;
        }
      }
      StyledMentionBlot['blotName'] = "styled-mention";

      Quill.register(StyledMentionBlot);

    const atValues = [
      { id: 1, value: "Fredrik Sundqvist" },
      { id: 2, value: "Patrik Sjölin" }
    ];
    const hashValues = [
      { id: 3, value: "Fredrik Sundqvist 2" },
      { id: 4, value: "Patrik Sjölin 2" }
    ];

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
        ],
        mention:{
          allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@", "#"],
      source: function(searchTerm: any, renderList: any, mentionChar: any) {
        let values;

        if (mentionChar === "@") {
          values = atValues;
        } else {
          values = hashValues;
        }

        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          const matches = [];
          for (let i = 0; i < values.length; i++)
            if (
              ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
            )
              matches.push(values[i]);
          renderList(matches, searchTerm);
        }
      },
      dataAttributes: ['id', 'value', 'denotationChar', 'link', 'target', 'disabled', 'color'],
      blotName: 'styled-mention',
    }
        },
      theme: 'snow'
    })
  }

  //SERVICES OVERVIEW HARIAN

  async getKeyTakeways(){
    try {
      return await lastValueFrom(
        this.http.get(`http://10.1.18.47:8080/simloan-ws/dashboard/market/keytakeways/get?dashboard_date=12/02/2024`)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async sendKeyTakeways(data: any){
    try {
      return await lastValueFrom(
        this.http.post(`http://10.1.18.47:8080/simloan-ws/dashboard/market/keytakeways/insert`, data)
      )
    } catch (error) {
      console.log(error);
      return null
    }
  }

  async sendFootnote(arrayData: any, elementHTML: string){
    const data = {
      'arrayData' : arrayData,
      'elementHTML': elementHTML
    }
    // try {
    //   return await lastValueFrom(
    //     this.http.post(`http://10.1.18.47:8080/simloan-ws/dashboard/market/keytakeways/insert`, data)
    //   )
    // } catch (error) {
    //   console.log(error);
    //   return null
    // }
    console.log(data);
  }

  //SERVICES OVERVIEW HARIAN

}
