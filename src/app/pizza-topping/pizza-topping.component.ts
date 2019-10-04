import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-topping',
  templateUrl: './pizza-topping.component.html',
  styleUrls: ['./pizza-topping.component.css']
})
export class PizzaToppingComponent implements OnInit {

  // MAGIC DI (dependency injection)
  constructor(private pizzaSvc: PizzaService) {




  }


  availablePizzaToppings = [];

  ngOnInit() {
    
    // new up a pizza service.   :-( ===> (if we're every 'new'ing something in Angular, we're probably doing something wrong)
    // const ps = new PizzaService();

    // call to get pizza toppings.
    // const pts = ps.getAvailablePizzaToppings();
    // console.log(pts);

    this.availablePizzaToppings = this.pizzaSvc.getAvailablePizzaToppings();
    console.log(this.availablePizzaToppings);
  }


  total = 0;

  calculateTotal() {
    this.total = this.availablePizzaToppings
      .filter( x => x.checked )
      .reduce(
        (acc, x) => acc + x.price
        , 0
      )
    ;

  }

}
