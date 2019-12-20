import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caheilman-random-number',
  templateUrl: './caheilman-random-number.component.html',
  styleUrls: ['./caheilman-random-number.component.css']
})
export class CaheilmanRandomNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  randomNumber() {
    // console.log("this works")
    
    var x = Math.floor((Math.random() * 10) + 1);
    console.log(x);
  }



}
