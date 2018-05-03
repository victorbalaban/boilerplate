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
  
username: string;
password: string;
info: string;

  profesors: Professor [];
  students: Student [];
  constructor(private http: HttpClient, private router: Router) {
    this.http.get('http://localhost:3000/profesors').subscribe(data=>{
          console.log("proffessors : ");
          console.log(data);
          this.profesors = data as Professor [];
      },(err: HttpErrorResponse) => {
        console.log (err.message);
      })
      this.http.get('http://localhost:3000/students').subscribe(data=>{
        console.log("students : ");
          console.log(data);
          this.students = data as Student [];
      },(err: HttpErrorResponse) => {
        console.log (err.message);
      })

   }

 onLoginProfessor(){
   if(!(this.username && this.password)){
    this.info="Please fill in username and password fields!";
    return;
   }
  this.profesors.forEach(prof => {
    if ((this.username === prof.username) && (this.password === prof.password)) {
      this.info = "Login successfully";
      this.router.navigateByUrl("/pages/note");
      return;  
    }  
  });
  this.info="Invalid username or password!"
 }

 onLoginStudent(){
  if(!(this.username && this.password)){
    this.info="Please fill in username and password fields!";
    return;
   }
  this.students.forEach(stud => {
    if ((this.username === stud.username) && (this.password === stud.password)) {
      this.info = "Login successfully";
      this.router.navigateByUrl("/pages/catalog");
      return;  
    }  
  });
  this.info="Invalid username or password!"
 }


 onCancelClick(){
   this.username = undefined;
   this.password = undefined;
   this.info = undefined;
 }

  ngOnInit() {
  }

}

interface Professor{
  username:String;
  password:String;
}

interface Student{
  username:String;
  password:String;
}