import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
numb:number;
dis:number;
  constructor() { }

  ngOnInit(): void {
  }
display():void{
if(this.numb%2==0){
  this.dis=this.numb*this.numb-1;
}
else{
  this.dis=this.numb*this.numb+1;
}
}
}
