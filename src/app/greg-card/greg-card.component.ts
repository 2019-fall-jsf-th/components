import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-greg-card',
  templateUrl: './greg-card.component.html',
  styleUrls: ['./greg-card.component.css']
})
export class GregCardComponent implements OnInit {

  constructor() { }

  someArray = [
    {name: 'fred', blah: 'zay', key: 'quai'},
    {name: 'barney', blah: 'blah-blah', key: 'qui'}
  ];


  funcs = [
    {name: 'func 1'},
    {name: 'func 2'},
    {name: 'func 3'},
    {name: 'funky!'},
    {name: 'func 5'}
  ];

  // slider values
  slideHSLColor = 15;
  slideBKGLum = 50;    //  grayscale lightness 0-100%
  slideBKGColor = 'hsl(0, 0%, ' + this.slideBKGLum + '%)';
  slideTime = 3.14159;
  slideZoom = 10;

  onHSLColorChange(event: MatSliderChange) {
    this.slideHSLColor = event.value;
  }

  onBKGColorChange(event: MatSliderChange) {
    this.slideBKGLum = event.value;
    this.slideBKGColor = 'hsl(0, 0%, ' + this.slideBKGLum + '%)';
  }
  onTimeChange(event: MatSliderChange) {
    this.slideTime = event.value;
  }
  onZoomChange(event: MatSliderChange) {
    this.slideZoom = event.value;
  }







  buttonClickHandler() {
    console.log('greg click event works');
  }

  ngOnInit() {
  }

}
