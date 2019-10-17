import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills-wilks-calc',
  templateUrl: './bills-wilks-calc.component.html',
  styleUrls: ['./bills-wilks-calc.component.css']
})
export class BillsWilksCalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kilogramCoefficient = 2.20462262;
  givenWeight = 0;
  convertedWeight = '';

  convertPounds = () => {
    console.log('Hi there!');
    this.convertedWeight = Math.ceil(this.givenWeight / this.kilogramCoefficient) + ' Kgs';
  }

}
