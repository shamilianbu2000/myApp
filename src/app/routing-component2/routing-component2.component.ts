import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-component2',
  templateUrl: './routing-component2.component.html',
  styleUrls: ['./routing-component2.component.scss']
})
export class RoutingComponent2Component implements OnInit {
  userId:any
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit() {
    // this.route.params.subscribe((paramsData)=>{
    //   console.log('paramsData',paramsData)
      
    // })}
    this.route.params.subscribe(userId=>{
    console.log(this.userId)
      this.userId =userId;
    
    })}
}
