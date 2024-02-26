import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovery-card',
  templateUrl: './discovery-card.component.html',
  styleUrls: ['./discovery-card.component.scss']
})
export class DiscoveryCardComponent implements OnInit {

  @Input() photo:string=""
  @Input() title:string=""
  @Input() description:string=""
  @Input() icon:string=""
  @Input() text:string=""
  @Input() small:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

}
