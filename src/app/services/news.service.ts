import { Injectable } from '@angular/core';

export interface news{
  title?:string;
  description?:string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news=[
    {
      title:"TRAVEL NEWS",
      description:"Lorem ipsum dolor sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.",
    },
    {
      title:"TRAVEL NEWS",
      description:"Lorem ipsum dolor sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.",
    }
  ]

  constructor() { }
}
