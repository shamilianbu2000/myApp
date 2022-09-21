import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  
  @Input() passvalue:string="";
  isActive:boolean=true;
  array:any =[]

  constructor() { }

  ngOnInit(): void {
  }
  //  check(event:any){
  //   this.isActive = !this.isActive
  //   console.log(this.isActive);
    
  //  }
   get(event:any){
     this.array.push(event)
     console.log(`---------------------`,event)
   }
 
}
