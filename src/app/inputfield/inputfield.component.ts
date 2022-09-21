import { Component,  OnInit  } from '@angular/core';


@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.scss']
})
export class InputfieldComponent implements OnInit {
NewTask = ''
taskList:Array<string> =[];

  constructor() { }

  ngOnInit(): void {
    
    
  }

  add(){
    console.log(`-------------------------->`,this.NewTask);
    this.taskList.push(this.NewTask)
  //  this.addNewList.emit(this.newTask)
  }
  // showList(event:any){
  //   console.log(event.target.value);
  //   let a = event.target.value
  
  // }


  
}
