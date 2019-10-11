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

  total = 0;
  calculateTotal() {
    this.total = this.availablePizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price
        , 0
      )
    ;
  }

  checkAll() {
      this.availablePizzaToppings = this.availablePizzaToppings
          .map(x => ({ ...x, checked: true }));
  }

  uncheckAll() {
    this.availablePizzaToppings = this.availablePizzaToppings
        .map(x => ({ ...x, checked: false }));
  }

  ngOnInit() {
      // don't ever use "new", let Angular inject instead
      // const pizzaService = new PizzaService();
      // const pizzaTopppings = pizzaService.getAvailablePizzaToppings();
      // console.log(pizzaTopppings);
      // :(

    // New up a pizza service. : - (
    //const ps = new PizzaService();

    // Call get pizza toppings.
    //const pts = ps.getAvailablePizzaToppings();
    //console.log(pts);

    this.availablePizzaToppings = this.pizzaService.getAvailablePizzaToppings();
    console.log(this.availablePizzaToppings);
    this.calculateTotal();
  }
}
