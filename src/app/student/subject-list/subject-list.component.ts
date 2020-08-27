import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {shareService} from "src/services/share.service"

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjectId:number;
  tempString: string;
  constructor(private shareService : shareService, private http: HttpClient) { }

  ngOnInit(): void {
    this.shareService.returnSubjectValue().subscribe(data=>{
      if(data) {
        this.shareService.setSubjectValue(this.subjectId);
      }
    });
  }
  setSubjectId(res) {
   this.tempString = res;
     this.http.post<any>('http://localhost:8189/getExamPaperId', res).subscribe(result=>{
       if(result)
         this.subjectId = result;
         sessionStorage.setItem("subjectId",this.subjectId.toString());
     });
 //   this.shareService.id=1;
  }
  

}
