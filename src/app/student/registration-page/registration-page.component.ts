import { Component, OnInit } from '@angular/core';
import { Service } from "src/services/services";
import { Student } from "src/models/student";
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  student1 : Student;
  status;
  constructor(private service :Service) {
    this.student1 = new Student();
   }
   
  ngOnInit(): void {
  }
  registerAStudent(){
    this.service.registerAStudent(this.student1).subscribe(
      data=>{
        this.status=data;
      }
    )
  }
}
 
 

