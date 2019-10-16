import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apweek6',
  templateUrl: './apweek6.component.html',
  styleUrls: ['./apweek6.component.css']
})
export class Apweek6Component implements OnInit {

  numberOne = 10;
  numberTwo = 5;
  answer = 15;
  addNumbers = () => {
    this.answer = this.numberOne + this.numberTwo;
  }
  constructor() { }

  ngOnInit() {
  }

}
