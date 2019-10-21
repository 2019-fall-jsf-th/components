import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-thing',
  templateUrl: './sum-thing.component.html',
  styleUrls: ['./sum-thing.component.css']
})
export class SumThingComponent implements OnInit {

    number1 = 0;
    number2 = 0;
    operator = '+';

    operations = [
        {
            'name': 'sum'
            , 'symbol': '+'
            , 'f': (a: number, b: number): number => a + b
        }
        , {
            'name': 'difference'
            , 'symbol': '-'
            , 'f': (a: number, b: number): number => a - b
        }
        , {
            'name': 'product'
            , 'symbol': '*'
            , 'f': (a: number, b: number): number => a * b
        }
        , {
            'name': 'quotient'
            , 'symbol': '/'
            , 'f': (a: number, b: number): number => a / b
        }
    ];

    calculate() {
        return this.operations.filter((op) => op.symbol === this.operator).pop().f(this.number1, this.number2);
    }

    symbol() {
        return this.operator;
    }

    constructor() { }

    ngOnInit() {
    }

}
