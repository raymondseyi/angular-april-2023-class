import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamicpage',
  templateUrl: './dynamicpage.component.html',
  styleUrls: ['./dynamicpage.component.css']
})
export class DynamicpageComponent {
  constructor(public actRoute:ActivatedRoute){}
  ngOnInit(){
    console.log(this.actRoute.snapshot.params['id'])
  }
}
