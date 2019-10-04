import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-topping',
  templateUrl: './pizza-topping.component.html',
  styleUrls: ['./pizza-topping.component.css']
})
export class PizzaToppingComponent implements OnInit {

  // magic dependency injection (DI)
  constructor(private pizzaService: PizzaService) { }
  // above (note 'private'--TypeScript automatic properties) is equivalent to the following:
  //pizzaServiceInstanceVar: PizzaService;
  // constructor(pizzaService: PizzaService) {
  //   this.pizzaServiceInstanceVar = pizzaService;
  // }

  availablePizzaToppings = [];
  ngOnInit() {
    // don't ever use "new", let Angular inject instead
    // const pizzaService = new PizzaService();
    // const pizzaTopppings = pizzaService.getAvailablePizzaToppings();
    // console.log(pizzaTopppings);
    // :(
      this.availablePizzaToppings = this.pizzaService.getAvailablePizzaToppings();
      console.log(this.availablePizzaToppings);
  }

}
