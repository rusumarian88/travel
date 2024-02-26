import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photograph-card',
  templateUrl: './photograph-card.component.html',
  styleUrls: ['./photograph-card.component.scss']
})
export class PhotographCardComponent implements OnInit {
  
  @Input() bg:string=""
  @Input() title:string=""
  @Input() description:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
