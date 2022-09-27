import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private appService:AppService,private router:Router) { }
  usersList:any;
  data:any;
  

  ngOnInit(): void {
    this.userDetails();
    }
   userDetails(){
    this.appService.getUser().subscribe((data)=>{
      this.data = data
      console.log("---------->",this.data.result[0]);
      this.usersList = this.data.result
      
    })
  }
  editUser(id : number){
      this.router.navigate(['edituser',id],{relativeTo : this.route});
  }


  deleteUser(id:number){
    this.appService.delete(id).subscribe((data)=>{
      this.userDetails();
    })
    
  }
 

}
