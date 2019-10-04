import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  // following is added:
  public getAvailablePizzaToppings() {
    const pizzaToppingsFromWebservice = [
      { name: "Pepperoni", price: 1.50}
      , { name: "Olives", price: 3.50}
    ];

    return pizzaToppingsFromWebservice.map( x => ({ // parens around object
        ...x
        , checked: false
      })
    );
  }
}
