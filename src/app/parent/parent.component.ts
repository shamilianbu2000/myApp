import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  userDetails = {userId : 1,userName:"priya"}
  childToparent= ['user 1','user 2']
  
  constructor() { }

  ngOnInit(): void {
  }
 
 
  dToparent= ['user 1','user 2']
  // changeUserDetails(){
    
  //   this.userDetails = {userId:2,userName:'New User 2'}
  // } event = "event"

  newUserEmitted(event:any){
    this. childToparent.push(event)
     let a = this.childToparent
     console.log(child);
     
  }

}
