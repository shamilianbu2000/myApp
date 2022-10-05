import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent implements OnInit {
  footer:any=["aboutus","main","home"];
  i:any;

  constructor() { }

  ngOnInit(): void {
  }

}
