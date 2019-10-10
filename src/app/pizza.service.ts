import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public getAvailablePizzaToppings() {

    const pizzaToppingsFromWebService = [
      { name: "Pepperoni", price: 2.5, checked: true }
      , { name: "Sausage", price: 2.5 }
      , { name: "Chicken", price: 2.25 }
      , { name: "Olives", price: 3.5 }
      , { name: "Mushrooms", price: 2.75 }
      , { name: "Stuffed crust", price: 3.75 }
      , { name: "Extra Cheese", price: 3.75 }
      , { name: "Hot peppers", price: 1.75 }
      , { name: "Garlic powder", price: 0.75, checked: true }
    ];

    return pizzaToppingsFromWebService.map(x => ({
      ...x
      , checked: x.checked ? true : false
    }));
  }
}
