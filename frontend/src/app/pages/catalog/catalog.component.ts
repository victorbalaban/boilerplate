import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  profs: string [];
  constructor(private http: HttpClient) {
    this.http.get('http://filltext.com/?rows=7&country={country}&id={numberRange|1,10}').subscribe(data=>{
          console.log(data);
          this.profs = data as string [];
      },(err: HttpErrorResponse) => {
        console.log (err.message);
      })
   }

  ngOnInit() {
  }

}
