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

  profesors: Professor [];
  students: Student [];
  constructor(private http: HttpClient, private router: Router) {
    this.http.get('http://localhost:3000/profesors').subscribe(data=>{
          console.log(data);
          this.profesors = data as Professor [];
      },(err: HttpErrorResponse) => {
        console.log (err.message);
      })
      this.http.get('http://localhost:3000/students').subscribe(data=>{
          console.log(data);
          this.students = data as Student [];
      },(err: HttpErrorResponse) => {
        console.log (err.message);
      })

   }
   onClickSubmit(data) {
    this.profesors.forEach(prof => {
      if ((data.user.name === prof.name) && (data.user.password === prof.password)) {
        this.router.navigateByUrl("/pages/note");      
      }  

    });
 }  

 onClickSubmitStudent(data) {
  this.students.forEach(stud => {
    if ((data.user.name === stud.name) && (data.user.password === stud.password)) {
      this.router.navigateByUrl("/pages/catalog");      
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

interface Student{
  name:String;
  password:String;
}