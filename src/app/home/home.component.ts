import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  inputs:["alpha"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() alpha: any;
  @Output() onYell = new EventEmitter();
  yell(e:any){
    this.onYell.emit(e);
  }

  homeTitle = 'Welcome to the Home Page!';
  myString = 20;
  alertMe() {
    console.log("Hello!"); 
  } 
  ninja = {
    name : 'Shwan',
    belt : 'black'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
