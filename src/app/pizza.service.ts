import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public getAvailablePizzaToppings() {

    // pretend like we got this data from the internet somewhere....
    const pizzaToppingsFromWebService = [
      { name: "Pepperoni", price: 1.5 },
      { name: "Olives", price: 3.5 }
    ];

    // use map to transform - add a checked property to each obj
    return pizzaToppingsFromWebService.map( x => ({ 
      ...x
      , checked: false 
    }));
  }
}
