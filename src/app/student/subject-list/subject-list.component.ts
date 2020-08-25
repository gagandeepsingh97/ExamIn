import { Component, OnInit } from '@angular/core';
import {shareService} from "src/services/share.service"

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjectId:number;
  constructor(private shareService : shareService) { }

  ngOnInit(): void {
    this.shareService.returnSubjectValue().subscribe(data=>{
      if(data) {
        this.shareService.setSubjectValue(this.subjectId);
      }
    });
  }
  setSubjectId(res) {
    this.subjectId = res;
  }
  

}
