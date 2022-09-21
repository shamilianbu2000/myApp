import { Component,  EventEmitter,  OnInit, Output  } from '@angular/core';


@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.scss']
})
export class InputfieldComponent implements OnInit {
  @Output() newAdd =new EventEmitter
NewTask = ''       // 2 component
taskList:Array<string> =[];

  constructor() { }

  ngOnInit(): void {
    
    
  }

  add(){
    console.log(`-------------------------->`,this.NewTask);
    this.newAdd.emit(this.NewTask)
    // this.taskList.push(this.NewTask) ///2   COMPONET


  
  }
  


  
}
