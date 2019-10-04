import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-topping',
  templateUrl: './pizza-topping.component.html',
  styleUrls: ['./pizza-topping.component.css']
})
export class PizzaToppingComponent implements OnInit {

	// private pizzaSrv: PizzaService = new PizzaService()
	// Will need to use "this" -> this.pizzaSrv
	constructor(private pizzaSrv: PizzaService) { } 

	toppings = [];

	ngOnInit() {

		const ps = new PizzaService();

		this.toppings = this.pizzaSrv.getAvailablePizzaToppings();

		console.log(this.toppings);

	}

}
