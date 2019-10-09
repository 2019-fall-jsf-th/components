import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-addition',
  templateUrl: './tjs-addition.component.html',
  styleUrls: ['./tjs-addition.component.css']
})
export class TjsAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numberOne = 1;
  numberTwo = 2;
  total = 3;

  addNumbers() {
    this.total = this.numberOne + this.numberTwo;
  }

}
