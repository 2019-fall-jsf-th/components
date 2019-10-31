import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriangleService {

  constructor() { }


  public defaultTriangleDimensions() {

    const dimensionsFromWebService = [
      {
        coordOne: {x: 50, y: 0}
        , coordTwo: {x: 100, y: 100}
        , coordThree: {x: 0, y: 100}
      }
    ];

    return dimensionsFromWebService;

  }

}
