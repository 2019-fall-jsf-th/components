import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jps-math',
  templateUrl: './jps-math.component.html',
  styleUrls: ['./jps-math.component.css']
})
export class JpsMathComponent implements OnInit {

  constructor() { }

  numberOne: number;
  numberTwo: number;
  answer: number;
  selectedOperator: string;

  options = [
    { name: "+", value: "+" },
    { name: "-", value: "-" },
    { name: "*", value: "*" },
    { name: "/", value: "/" }
  ]

  calculateNumbers = () => {
    if (this.selectedOperator == "+") {
      this.answer = this.numberOne + this.numberTwo;
    } else if (this.selectedOperator == "-") {
      this.answer = this.numberOne - this.numberTwo;
    } else if (this.selectedOperator == "*") {
      this.answer = this.numberOne * this.numberTwo;
    } else if (this.selectedOperator == "/") {
      this.answer = this.numberOne / this.numberTwo;      
    }
  }

  ngOnInit() {
  }

}
