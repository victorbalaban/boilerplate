import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profesors: string [];
  professors:Professor[];
  students: string [];
  constructor(private http: HttpClient, private router: Router) {
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
   onClickSubmit(data) {
    this.professors.forEach(prof => {
      if ((data.user.name === prof.name) && (data.user.password === prof.password)) {
        this.router.navigateByUrl("/pages/note");      
      }  

    });
 }

  ngOnInit() {
  }

}
interface Professor{
  name:String;
  password:String;
}