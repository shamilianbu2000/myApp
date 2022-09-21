import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  
  //  @Output() addNewList = new EventEmitter();
  @Input() passvalue:string="";

  constructor() { }

  ngOnInit(): void {
  }
 
 
}
