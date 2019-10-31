import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jp-subtract',
  templateUrl: './jp-subtract.component.html',
  styleUrls: ['./jp-subtract.component.css']
})
export class JpSubtractComponent implements OnInit {

  numberOne = 20;
  numberTwo = 10;
  answer = 10;
  subtractNumbers = () => {
    this.answer = this.numberOne - this.numberTwo;
  }

  constructor() { }

  ngOnInit() {
  }

}
