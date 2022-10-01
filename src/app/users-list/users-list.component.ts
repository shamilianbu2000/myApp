
import { Component, OnInit } from '@angular/core';

interface InterfaceUser {
  id : number,
  email : string,
  first_name : string,
  last_name :  string,
  avatar : string
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList:InterfaceUser[] = [];
  constructor() { }

  ngOnInit() {
    this.usersList = [
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

  userRemoved(userIndex:any){
    console.log('before',userIndex,this.usersList)
    this.usersList.splice(userIndex,1) ////remove index with element
    console.log('after',userIndex,this.usersList)
  }
}
