import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component implements OnInit {
  display:string;
  constructor() { }

  ngOnInit(): void {
  }
getValue(val:string)
{
this.display=val;
}
}
