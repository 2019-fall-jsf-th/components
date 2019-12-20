import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caheilman-random-number',
  templateUrl: './caheilman-random-number.component.html',
  styleUrls: ['./caheilman-random-number.component.css']
})
export class CaheilmanRandomNumberComponent implements OnInit {

  ngOnInit() { 
    this.randomNumber = 0;
  }

  randomMin=0
  randomMax=10
  randomNumber=0

  randomize() {
    // console.log("this works")
    if ( this.randomMin > this.randomMax) {
      var errorNumber = "Minimum is greater than Maximum. Please try again."
    } else {
     var randomNumber = Math.floor((Math.random() * this.randomMax) + this.randomMin);
      console.log(randomNumber);
      return this.randomNumber
    }
    
  }

}
