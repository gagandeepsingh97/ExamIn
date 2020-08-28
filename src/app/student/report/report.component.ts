import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from "src/models/report";
import { shareService } from 'src/services/share.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  [x: string]: any;

   data1:Report;
  pass:boolean;
  fail:boolean;
  marks:any;

  validateForm(){
    
  }
  constructor(private http: HttpClient) { 
    this.pass=false;
    this.fail=false;
  }

  ngOnInit(): void {

    this.data1= new Report();
    this.data1.studentId= (sessionStorage.getItem("userId"));
   this.data1.subjectId =1;
   console.log(this.data1.subjectId);
    console.log(this.data1);
    this.marks = sessionStorage.getItem("marks");
    this.marks>30?this.pass=true:this.fail=true;
  }

  logout():void {
    sessionStorage.clear();
    // this.router.navigate(['/home']);
    window.location.href = "http://localhost:4200/home";
  }
  
}
