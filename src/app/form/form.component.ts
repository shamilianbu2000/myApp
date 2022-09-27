import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userName:string='';
  userMail:string='';
  message:string ='';
  isUpdate:boolean=false;
  usersList: Array<any> = [];
  userId: number = 0;
  data: any

  constructor(private appService:AppService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data);
      data.hasOwnProperty('id')?this.isUpdate = true :this.isUpdate =false;
      
      if(this.isUpdate){
        this.userId = data['id']
        this.editId(this.userId)
      }
      
    })
  }

  addUser(){
    this.appService.addUser({name:this.userName,mail:this.userMail,message:this.message}).subscribe((data)=>{
      console.log(data);
      this.routes.navigate(['userlist'])
      
    })


  }

  editId(id:number){
    this.appService.editId(id).subscribe((data)=>{
      console.log(`------------------------data`);
      this.data = data;
      this.userName =this.data.result[0].name;
      this.userMail =this.data.result[0].EMAIL;
      this.message = this.data.result[0].msg;
      
    })
  }

  update(){
    this.appService.update({id:this.userId,name:this.userName,mail:this.userMail,message:this.message}).subscribe((data)=>{
      console.log(data);
      this.routes.navigate(['userlist'])
    })
    }
  }

  