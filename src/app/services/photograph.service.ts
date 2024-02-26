import { Injectable } from '@angular/core';

export interface photograph{
  bg?:string;
  title?:string;
  description?:string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotographService {

  photographs=[
    {
      bg:"/assets/photograph1.png",
      title:"HAPPENING NOW.",
      description:"Lorem ipsum dolor sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum ipsum dolor sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.",
    },
    {
      bg:"/assets/photograph1.png",
      title:"HAPPENING NOW.",
      description:"Lorem ipsum dolor sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum ipsum dolor sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.",
    }
  ]

  constructor() { }
}
