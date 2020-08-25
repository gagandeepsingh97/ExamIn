import { Injectable } from '@angular/core';
import { Question } from "src/models/question";
import { HttpClient } from "@angular/common/http";
//import { Login } from "src/models/login";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    question1 : Question;
  constructor(private http: HttpClient) {}
  getA(question1){
    let url='http://localhost:8082/getQuestion';
    return this.http.get<any>(url,question1);
  }
}
