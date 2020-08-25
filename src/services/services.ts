import { Injectable } from '@angular/core';
import { Student } from "src/models/student";
import { HttpClient } from "@angular/common/http";
//import { Login } from "src/models/login";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Service {
    student : Student;
  constructor(private http: HttpClient) { 
    //   this.student =
  }
  registerAStudent(student){
      console.log(student);
      console.log("what is happening");
    let url='http://localhost:8080/registration';
    console.log("what is happening");
    return this.http.post<any>(url,student);
    console.log("what is happening");
  }
}

//   loginACustomer(login :Login):Observable<any>{
//     var url="http://localhost:8888/login";
//     return this.http.post(url,login);
//   } 