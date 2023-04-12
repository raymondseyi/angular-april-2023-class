import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(public user : UserService,public router:Router){}
  ngOnInit(){
    this.user.getData().subscribe((response)=>{
      console.log(response)
    })
    console.log(this.user.myName)
    // alert("hello")
  }
  // profile(){
  //   this.router.navigate(["/profile"])
  // }
}
