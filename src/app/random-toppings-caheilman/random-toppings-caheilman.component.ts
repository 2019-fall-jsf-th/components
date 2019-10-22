import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
    selector: 'slider-overview-example',
    templateUrl: 'slider-overview-example.html',
    styleUrls: ['slider-overview-example.css'],
  })
  export class SliderOverviewExample {}

  @Component({
    selector: 'checkbox-overview-example',
    templateUrl: 'checkbox-overview-example.html',
    styleUrls: ['checkbox-overview-example.css'],
  })
  export class CheckboxOverviewExample {}
  
  @Component({
    selector: 'slide-toggle-overview-example',
    templateUrl: 'slide-toggle-overview-example.html',
    styleUrls: ['slide-toggle-overview-example.css'],
  })
  export class SlideToggleOverviewExample {}

  @Component({
  selector: 'app-random-toppings-caheilman',
  templateUrl: './random-toppings-caheilman.component.html',
  styleUrls: ['./random-toppings-caheilman.component.css']
})
export class RandomToppingsCaheilmanComponent {
    
}