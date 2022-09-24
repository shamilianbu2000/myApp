import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  
  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate{['list'],{relativeTo:this.routes}}
    // }, 2000);
    
}
}