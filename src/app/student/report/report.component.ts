import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from "src/models/report";
import { shareService } from 'src/services/share.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  marks : any;
  data1:Report;
  pass:boolean;
  fail:boolean;

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
   console.log(  this.data1.subjectId);
    console.log(this.data1);
    // data.credentials.push(this.subject.toString());
    this.http.post<any>('http://localhost:8189/calculateMarks', this.data1).subscribe(data=>{this.marks = data;
    console.log(data);
    if(this.marks>30)
    {
      this.pass=true;
    }
    else
    {
      this.fail=true;
    }
    
  });
  }

}
