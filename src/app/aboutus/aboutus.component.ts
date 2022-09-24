import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactusComponent } from '../contactus/contactus.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(userdata=>{console.log(userdata)}
        )
      //   Clicknavigate():void{
      //     this.router.navigate(['contactus'])
      // }
      
      }
  }
