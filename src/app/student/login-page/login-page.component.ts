import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { LoginDetails } from "src/models/loginDetails";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userName: String;
  password: String;
  studentId: string;
  studentName: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let data =  new LoginDetails(); 
    data.email = this.userName;
    data.password = this.password;
    this.http.post<any>('http://localhost:8189/login', data).subscribe(res=>{
      if(res.status == "SUCCESS"){
        this.studentId = res.studentId;
        this.studentName = res.name;
        sessionStorage.setItem("userName",this.studentName);
        sessionStorage.setItem("userId", this.studentId);
        sessionStorage.setItem("counter","true");
        window.location.href = "http://localhost:4200/selection";
      }
    });
  }
}
