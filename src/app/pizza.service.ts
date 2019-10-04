import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

	constructor() { }

	public getAvailablePizzaToppings() {

		const pizzaToppingsFromWebService = [
			// tslint:disable-next-line: indent
			{ name: 'Pepperoni', price: 1.5 },
			{ name: 'Olives', price: 3.5 }
		];

		return pizzaToppingsFromWebService
			.map( toppings => ({
				...toppings, checked: true
				})
			);

	}

}
