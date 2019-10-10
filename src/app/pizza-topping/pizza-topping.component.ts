import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-topping',
  templateUrl: './pizza-topping.component.html',
  styleUrls: ['./pizza-topping.component.css']
})
export class PizzaToppingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // new up a pizza service

    const ps = new PizzaService();
    // call up a pizza toppings
    const pts = ps.getAvailablePizzaToppings();
    console.log(pts);



  }

}
