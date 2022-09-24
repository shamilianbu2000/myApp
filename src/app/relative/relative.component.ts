import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.scss']
})
export class RelativeComponent implements OnInit {
  usersList:Array<any> =[]
  userId:any ;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.usersList=[{
    "id": 1,
    "email": "shamilianbu200",
    "first_name": "sham",
    "last_name": "anbu",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
},
{
    "id": 2,
    "email": "meena@gmail.com",
    "first_name": "meena",
    "last_name": "meena",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
},
{
    "id": 3,
    "email": "surya@yahoo",
    "first_name": "surya",
    "last_name": "priya",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
},
{
    "id": 4,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
},
{
    "id": 5,
    "email": "ahi@gmail.com",
    "first_name": "ahila",
    "last_name": "tamil",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
},
{
    "id": 6,
    "email": "uma@gmail.com",
    "first_name": "uma",
    "last_name": "vedha",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
} ]
// navigate(listid:number):void
// {this.router.navigate[listid],{relativeTo:this.routes}}
console.log(`----------------------->`,);


}
// getId(){
    
//     this.router.params.subscribe((userId)=>{
//         // console.log(this.userId)
//           this.userId = [userId];
        
//         })}
}

 

