import { Injectable } from '@angular/core';
import { truncate } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public getAvailablePizzaTopping() {
    const pizzaToppingsFromWebService = [
      { name: "Pepperoni", price: 1.5 }
      , { name: "Olives", price: 3.5}
    ];

    return pizzaToppingsFromWebService.map(x => ({
      ...x
      , checked: false
    }));
  }
}
