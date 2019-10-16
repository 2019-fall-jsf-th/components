import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-thing',
  templateUrl: './sum-thing.component.html',
  styleUrls: ['./sum-thing.component.css']
})
export class SumThingComponent implements OnInit {

    number1 = 0;
    number2 = 0;

    get sum() {
        return this.number1 + this.number2;
    }

    constructor() { }

    ngOnInit() {
    }

}
