import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public getAvailablePizzaToppings() {
    const pizzaToppingsFromWebService = [
      { name: "Pepperoni", price: 1.50 }
      , { name: "Olives", price: 3.50 }
    ];
    
    return pizzaToppingsFromWebService.map(x => ({
      ...x
      , checked: true
    }))
  }
}
