import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profesors: string [];
  students: string [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/profesors').subscribe(data=>{
          console.log(data);
          this.profesors = data as string [];
      },(err: HttpErrorResponse) => {
        console.log (err.message);
      })
      this.http.get('http://localhost:3000/students').subscribe(data=>{
          console.log(data);
          this.students = data as string [];
      },(err: HttpErrorResponse) => {
        console.log (err.message);
      })

   }

   verifyProf(username:String, password:String)
   {

   this.profesors.length

    

   
   }



  ngOnInit() {
  }

}
