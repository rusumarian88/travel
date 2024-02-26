import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {

  constructor(
    public newsService:NewsService,
  ) { }

  ngOnInit(): void {
  }

}
