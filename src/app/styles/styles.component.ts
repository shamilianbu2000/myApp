import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {
  

  constructor() { }

  isActive : boolean = true;
  names = ['meena','aki','surya']
  list:object = [{'id':1,name:"developer"},{id:2,name:"programer"}]
  ngOnInit(): void {
  }



}

 
  


 

  

  






  

