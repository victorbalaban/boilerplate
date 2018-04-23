import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  students: string [];

  constructor(private http: HttpClient) {
    this.http.get('http://filltext.com/?rows=20&fname={firstName}&lname={lastName}&id={numberRange|1,10}').subscribe(data=>{
          console.log(data);
          this.students = data as string [];
      },(err: HttpErrorResponse) => {
        console.log (err.message);
      })
   }

  ngOnInit() {
  }

}
