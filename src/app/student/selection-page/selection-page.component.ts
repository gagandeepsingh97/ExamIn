import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.css']
})
export class SelectionPageComponent implements OnInit {
  useName: string;
  userId: any;
  reportsData: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.useName = sessionStorage.getItem("userName");
    this.userId =sessionStorage.getItem("userId");
  }
  viewReports(){
    this.http.post<any>('http://localhost:8189/getReportOfAStudent',this.userId).subscribe(res=>{
      if(res)
      this.reportsData = res;
    });
  }
  
  // logout():void {
  //   //sessionStorage.clear();
  //   // this.router.navigate(['/home']);
  //   window.location.href = "http://localhost:4200/home";
  // }
}
