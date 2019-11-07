import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lx-subtract',
  templateUrl: './lx-subtract.component.html',
  styleUrls: ['./lx-subtract.component.css']
})
export class LxSubtractComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  firstNumber = 2;
  secondNumber = 1;
  subtractionAnswer = 1;

  subtractNumbers() {
    this.subtractionAnswer = this.firstNumber - this.secondNumber;
  }

}
