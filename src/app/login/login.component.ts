import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:Array<any>=[];
  isLoading:boolean =false;

  constructor(private form:FormBuilder) { }

  ngOnInit(): void {

  

this.userName = [
    {
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
  }
  ]
}
  event(){
    this.isLoading=true;
  }

}
