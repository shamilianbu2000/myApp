import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



  constructor(private appservice:AppService) { }

  ngOnInit(): void {
    // this.appservice.getUser().subscribe((data)=>{
    //   console.log(data);

      
    // })
    
    // this.appservice.get().subscribe((data)=>{
    //   console.log(data);

      
  //   })
    

   }

}
