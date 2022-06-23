import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() name: string = 'Manikandan'
  public response: string = ''

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.get().subscribe(result => {
      this.response =JSON.stringify(result);
    })
  }

}
