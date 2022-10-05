import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppService } from '../app.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

login: any;
data: any;
isDisabled:boolean = false;

constructor(private appService: AppService, private routers: Router,
  private messageService: MessageService) { }

ngOnInit(): void {

  this.login = new FormGroup({

    email: new FormControl(null, [Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),

    password: new FormControl(null, [Validators.required,
])
  })
}

get form() {
  return this.login.controls
}

log() {
  
  this.isDisabled = true ;
  console.log(this.login);
  
  if (this.login.invalid) {
   this.addSingle("error","please fill the all fields")
   return this.login.markAllAsTouched();
  }

  this.appService.loign(this.login.value).subscribe((data: any) => {

    this.data = data

    if (this.data['flag']) {
      localStorage.setItem('token', this.data['token']);
      localStorage.setItem('roleId',this.data.roleId);

      this.addSingle("success", this.data.message);
      this.routers.navigate(['users-home']);
      this.isDisabled  = false;
      return;
    }
    this.addSingle("error", this.data.message);
    this.isDisabled = false;
  })
}

addSingle(status: string, message: string) {
  this.messageService.add({ severity: status, summary: status, detail: message, styleClass: 'myLoginToats' });
}


}

