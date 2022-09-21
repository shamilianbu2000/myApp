import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-header',
  templateUrl: './to-header.component.html',
  styleUrls: ['./to-header.component.scss']
})
export class ToHeaderComponent implements OnInit {
@Input() value:any;
isActive:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

   check(event:any){
    this.isActive=!this.isActive
    console.log(this.isActive);
    
   }

}
