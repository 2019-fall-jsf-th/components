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

  // Longer version of contructor above (above is TypeScript): 
  // pizzaSvc2: PizzaService;
  // constructor2Example(pizzaSvc: PizzaService) {
  //   this.pizzaSvc2 = pizzaSvc;
  // }

  availablePizzaToppings = [];

  ngOnInit() {
    // Wrong... let angular inject class instances:
    // const ps = new PizzaService();
    // const pts = ps.getAvailablePizzaToppings();
    // console.log(pts);

    this.availablePizzaToppings = this.pizzaSvc.getAvailablePizzaToppings();
    console.log(this.availablePizzaToppings);
  }

}