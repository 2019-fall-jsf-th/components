import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wisconsin-sales-tax',
  templateUrl: './wisconsin-sales-tax.component.html',
  styleUrls: ['./wisconsin-sales-tax.component.css']
})
export class WisconsinSalesTaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userInput = 0;
  totalWithTax = 0;

  calculateSalesTax() {
    let wisconsinSalesTax = 1.05;
    this.totalWithTax = this.userInput * wisconsinSalesTax;
  }
}
