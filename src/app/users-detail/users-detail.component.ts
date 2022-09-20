import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

 
  @Input() userDetail:any;
  @Input() userIndex:any;
  
  
  @Output() removeUserEvent = new EventEmitter();
   constructor() { }
 
   ngOnInit() {
   }
   removeUser(){
     console.log(this.userIndex)
     this.removeUserEvent.emit(this.userIndex)
   }
 }


