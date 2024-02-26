import { Injectable } from '@angular/core';

export interface discovery{
  photo?:string;
  title?:string;
  description?:string;
  icon?:string;
  text?:string;
}

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  discovery=[
    {
      photo:"https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/08/purplemountains-0.jpg",
      title:"Lorem ipsum dolor",
      description:"Sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.",
      icon:"/assets/icon-clock.png",
      text:"2 day ago"
    },
    {
      photo:"/assets/discovery2.png",
      title:"Lorem ipsum dolor",
      description:"Sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.",
      icon:"/assets/icon-clock.png",
      text:"2 day ago"
    },
    {
      photo:"/assets/discovery3.png",
      title:"Lorem ipsum dolor",
      description:"Sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.",
      icon:"/assets/icon-clock.png",
      text:"2 day ago"
    }
  ]

  discoveryA=[
    {
      photo:"/assets/discovery-a.png",
      title:"Lorem ipsum dolor",
      description:"Sit amet consectetur. Lectus diam turpis condimentum convallis in.",
      icon:"/assets/icon-clock.png",
      text:"2 day ago"
    },
    {
      photo:"/assets/discovery-b.png",
      title:"Lorem ipsum dolor",
      description:"Sit amet consectetur. Lectus diam turpis condimentum convallis in.",
      icon:"/assets/icon-clock.png",
      text:"2 day ago"
    },
    {
      photo:"/assets/discovery-c.png",
      title:"Lorem ipsum dolor",
      description:"Sit amet consectetur. Lectus diam turpis condimentum convallis in.",
      icon:"/assets/icon-clock.png",
      text:"2 day ago"
    }
  ]

  constructor() { }
}
