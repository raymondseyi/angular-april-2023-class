import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) { }
  myName = "kunle";
  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
    // return this.http.post("https://jsonplaceholder.typicode.com/users",data);
  }
}
