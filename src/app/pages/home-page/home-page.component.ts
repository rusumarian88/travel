import { Component, OnInit } from '@angular/core';
import { DiscoveryService } from 'src/app/services/discovery.service';
import { NewsService } from 'src/app/services/news.service';
import { PhotographService } from 'src/app/services/photograph.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public newsService:NewsService,
    public discoveryService:DiscoveryService,
    public photographService:PhotographService,
  ) { }

  ngOnInit(): void {
  }

}
