import { Component, OnInit } from '@angular/core';
import { QuestionService } from "src/services/questionService";
import { Question } from "src/models/question";
import { HttpClient } from '@angular/common/http';
import {shareService} from "src/services/share.service"
//import { Response } from "src/app/student/question/responseModel";
import { NgForm } from "@angular/forms";
import { ResponseModel } from "src/models/responseModel";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  
  // question1 : Question;
  questions : any;
  ans:number[] = [];
  subject:number;
  check : String = sessionStorage.getItem("counter");
  count : number = 0 ;
  status;
  constructor(private questionService :QuestionService, private http: HttpClient, private shareService : shareService) {
    // this.question1 = new Question();
   }
   
   counter() {
    this.count++;
    console.log(this.count);
   }
   
  ngOnInit(): void {
    this.shareService.fetchSubjectList();
    this.subject = this.shareService.getSubjectValue();
    this.http.post<any>('http://localhost:8189/getQuestion', this.subject).subscribe(data=>{this.questions = data;});

    for (let index = 0; index < 10; index++) {
      this.ans[index] = 0;
    }
    setTimeout(() => this.onSubmit(),30000);//10 sec
  }
  

  onItemChange(res){
    if(this.ans[this.count] == null){
      this.ans.push(res);
    }
    else {
        this.ans[this.count]=res;
    }
  }
  onSubmit() {
    //let response1 = new Response(this.ans);
    let data = new ResponseModel();
    data.answes = this.ans;
    data.credentials = [];
    data.credentials.push(sessionStorage.getItem("userId"));
    data.credentials.push(sessionStorage.getItem("subjectId"));
    // data.credentials.push(this.subject.toString());
    this.http.post<any>('http://localhost:8189/saveAnswer', data).subscribe(res=>{
      sessionStorage.setItem("marks",res);
    });
    sessionStorage.setItem("counter","false");
    window.location.href = "http://localhost:4200/report";
  }
}
