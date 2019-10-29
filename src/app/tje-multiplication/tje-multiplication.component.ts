import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tje-multiplication',
  templateUrl: './tje-multiplication.component.html',
  styleUrls: ['./tje-multiplication.component.css']
})
export class TjeMultiplicationComponent implements OnInit {

  numberOne = 10;
  numberTwo = 5;
  answer = 50;
  multiplyNumbers = () => {
    this.answer = this.numberOne * this.numberTwo;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
