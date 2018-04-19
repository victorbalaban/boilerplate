import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('http://filltext.com/?rows=20&fname={firstName}&lname={lastName}&nota={randomNumberRange|1to10}').subscribe(res=>{
          console.log(res);
      })
   }

  ngOnInit() {
  }

}
