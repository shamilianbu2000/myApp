import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  userDetails = {userId : 1,userName:"priya"}
  childToparent= ['user 1','user 2']
   a:any;
  
  constructor() { }

  ngOnInit(): void {
    
  }
 
 


  newUserEmitted(event:any){
    this. childToparent.push(event)
     let a = this.childToparent
     console.log(a);
     
     
     
  }

}
