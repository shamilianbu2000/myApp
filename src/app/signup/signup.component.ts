import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  

  value:string=''
  signUp:any;
  isDisabled:boolean=false;
  constructor(private appService:AppService,private messageService:MessageService) {}

  ngOnInit(): void {

    this.signUp = new FormGroup ({
      email:new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }

  get form() {
    return this.signUp.controls;
  }

  signup(){
    if(this.signUp.invalid){
      this.isDisabled = true;
      return this.signUp.markAllAsTouched();

    }
    this.appService.signup(this.signUp.value).subscribe((data:any) => {
      
      if (data.flag){
        this.addSingle("success",data.message);
        return;
      }
      this.addSingle("error",data.message);
    })   
  }

  addSingle(status: string, message: string) {
    this.messageService.add({ severity: status, summary: "MAIL SENT SUCCEESFULLY", detail: message, styleClass: 'myLoginToats' });
  }
}



