import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getAvailablePizzaToppings() {

    const pizzaToppingsFromWebService = [

      {name: "Pepperoni", price: 1.5}
      , {name: "Olives", price: 3.5}
    ];

    //shaping data
    return pizzaToppingsFromWebService.map(x => ({
      ...x
      , checked: true
    }));
  }
}
