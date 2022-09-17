import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:any = "contoller------>view"

  myButton(event:any){
    console.log("view------------->controler",event);
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
