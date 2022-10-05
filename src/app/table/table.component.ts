import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  usersList:any;
  data:any;
  products=[];
  cols: any[] = [];
  value:string='';
  issearch:boolean=true;
  selectedUsers:any
  user:any="";






    constructor(private route:ActivatedRoute,private appService:AppService,private router:Router) { }

    ngOnInit() {
      this.userDetails()
        // this.productService.getProductsSmall().then(data => this.products = data);
      
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'EMAIL', header: 'Email' },
            { field: 'msg', header: 'Message' },
        ];
    }
    userDetails(){
      this.appService.getUser().subscribe((data)=>{
        this.data = data
        console.log("---------->",this.data.result);
        this.usersList = this.data.result
        // if(this.usersList == )
        // return this.usersList.filter(this.usersList => 
        // user.checked);
    
        
      })
    }
}



