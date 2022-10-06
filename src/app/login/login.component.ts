import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng/api';
import { AppService } from '../app.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:Array<any>=[];
  isLoading:boolean =false;
  isactive:boolean=true;
  usersList:any;
  data:any;
  sidebar:any;
  passwordToolTip = "At least 8 characters in length Should contain:" +
  "Lower case letters (a-z)" +
  "Upper case letters (A-Z)" +
  "Numbers (i.e. 0-9)";
  value3:string='';
  hi: string='';

  constructor(private form:FormBuilder,private msgservice:MessageService,private confirmation:ConfirmationService,private appService:AppService,private primengConfig: PrimeNGConfig ) { }

  ngOnInit(): void {

    this.userDetails();
    this.primengConfig.ripple = true;
    }

   userDetails(){
    this.appService.getUser().subscribe((data)=>{
      this.data = data
      console.log("---------->",this.data.result[0]);
      this.usersList = this.data.result
      
    })
  

// this.usersList = [
//     {
//       "msg": 1,
//       "EMAIL": "shamilianbu200",
//       "name": "sham",
//       "last_name": "anbu",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg"
//   },
//   {
//       "msg": 2,
//       "EMAIL": "meena@gmail.com",
//       "name": "meena",
//       "last_name": "meena",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//   },
//   {
//       "msg": 3,
//       "EMAIL": "surya@yahoo",
//       "name": "surya",
//       "last_name": "priya",
//       "avatar": "https://reqres.in/img/faces/9-image.jpg"
//   },
//   {
//       "msg": 4,
//       "EMAIL": "byron.fields@reqres.in",
//       "name": "Byron",
//       "last_name": "Fields",
//       "avatar": "https://reqres.in/img/faces/10-image.jpg"
//   },
//   {
//       "id": 5,
//       "email": "ahi@gmail.com",
//       "first_name": "ahila",
//       "last_name": "tamil",
//       "avatar": "https://reqres.in/img/faces/11-image.jpg"
//   },
//   {
 
//     "id": 6,
//       "email": "uma@gmail.com",
//       "first_name": "uma",
//       "last_name": "vedha",
//       "avatar": "https://reqres.in/img/faces/12-image.jpg"
//   }
//   ]
 }
  event(){
    this.isLoading=true;
  }

  addSingle() {
    this.msgservice.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    this.isactive=false
}

confirm() {
  this.confirmation.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          console.log('hi')
      },reject:()=>{
        
      } 
       });
}


login(){}
}
