import { Component, OnInit } from '@angular/core';
import { QuestionService } from "src/services/questionService";
import { Question } from "src/models/question";
import { HttpClient } from '@angular/common/http';
import {shareService} from "src/services/share.service"
//import { Response } from "src/app/student/question/responseModel";
import { NgForm } from "@angular/forms";

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
    this.http.post<any>('http://localhost:8189/getQuestion', 1).subscribe(data=>{this.questions = data;});

    for (let index = 0; index < 2; index++) {
      this.ans[index] = 0;

    }
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
    this.http.post<any>('http://localhost:8189/saveAnswer', this.ans).subscribe();
  }
}
