import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.scss']
})
export class UseridComponent implements OnInit {
  
  userId:number=0;
  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(userid=>{
      console.log(userid);
      
      this.userId =userid['userid'];
      console.log(this.userId);
      
    })
  }

}
