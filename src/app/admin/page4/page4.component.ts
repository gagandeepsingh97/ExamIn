import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
  city: string;
  cityData: any;
  state: string;
  stateData: any;
  sub: string;
  subData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  viewCity(){
    this.http.post<any>('http://localhost:8189/searchStudentByCity', this.city).subscribe(res=>{
      if(res)
      this.cityData = res;
    });
  }

  viewState(){
    this.http.post<any>('http://localhost:8189/searchStudentByState', this.state).subscribe(res1=>{
      if(res1)
      this.stateData = res1;
    });
  }

  viewSub(){
    this.http.post<any>('http://localhost:8189/searchStudentBySub', this.sub).subscribe(res=>{
      if(res)
      this.subData = res;
    });
  }
}
