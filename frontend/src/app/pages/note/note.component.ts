import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('http://filltext.com/?rows=20&fname={firstName}&lname={lastName}').subscribe(res=>{
          console.log(res);
      })
   }

  ngOnInit() {
  }

}
