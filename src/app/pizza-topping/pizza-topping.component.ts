import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-pizza-topping',
  templateUrl: './pizza-topping.component.html',
  styleUrls: ['./pizza-topping.component.css']
})
export class PizzaToppingComponent implements OnInit {

  // Magic DI (dependency injection)
  constructor(private pizzaSvc: PizzaService) { }

 // same as code in line 13
  // pizzaSvc2: PizzaService;
  // constructor2(private pizzaSvc: PizzaService) { 
  //   this.pizzaSvc2 = pizzaSvc;
  // }

  availablePizzaToppings = [];

  ngOnInit() {

    // New up a pizza service :-( We don't new things up in Angular
    // const ps = new PizzaService();

    // call get pizza toppings.
    // const pts = ps.getAvailablePizzaTopping();
    // console.log(pts);

    this.availablePizzaToppings = this.pizzaSvc.getAvailablePizzaTopping();
  }

}
