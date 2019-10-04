import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public getAvailablePizzaToppings() {

    const pizzaToppingFromWebService = [
      { name: "Pepperoni", price: "1.5" }
      ,{ name: "Green Olives", price: "3.5" }
    ];

    return pizzaToppingFromWebService.map(x => ({
      ...x
      , checked: true
    }));
  }
}
