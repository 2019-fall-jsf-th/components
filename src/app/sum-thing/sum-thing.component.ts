import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-thing',
  templateUrl: './sum-thing.component.html',
  styleUrls: ['./sum-thing.component.css']
})
export class SumThingComponent implements OnInit {

    number1 = 0;
    number2 = 0;
    operator = "sum";

    get sum() {
        return this.number1 + this.number2;
    }

    get difference() {
        return this.number1 - this.number2;
    }

    get product() {
        return this.number1 * this.number2;
    }

    get quotient() {
        return this.number1 / this.number2;
    }

    calculate() {
        switch (this.operator) {
            case "sum":
                return this.sum;

            case "difference":
                return this.difference;

            case "product":
                return this.product;

            case "quotient":
                return this.quotient;

            default:
                return this.sum;
        }
    }

    symbol() {
        switch (this.operator) {
            case "sum":
                return "+";

            case "difference":
                return "-";

            case "product":
                return "*";

            case "quotient":
                return "/";

            default:
                return "+";
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
