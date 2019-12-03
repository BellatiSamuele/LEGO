import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lego } from './lego';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  lego: Lego[];

  constructor(public http: HttpClient) {}

  ngOnInit(){
    this.http.get('https://3000-c92dfd2c-b87f-4331-a8fd-6db3cd98564b.ws-eu01.gitpod.io/api').subscribe(data => {
      this.lego = data['lego'];
      console.log(this.lego);
    });
  }
}
