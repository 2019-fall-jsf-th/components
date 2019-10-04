import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-topping',
  templateUrl: './pizza-topping.component.html',
  styleUrls: ['./pizza-topping.component.css']
})
export class PizzaToppingComponent implements OnInit {

  // Magic DI (dependency injection)
  constructor(private pizzaSvc: PizzaService) { }

  ngOnInit() {

    // New up a pizza service. : - (
    const ps = new PizzaService();

    // Call get pizza toppings.
    const pts = ps.getAvailablePizzaToppings();
    console.log(pts);
  }

}
