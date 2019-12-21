import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caheilman-random-number',
  templateUrl: './caheilman-random-number.component.html',
  styleUrls: ['./caheilman-random-number.component.css']
})
export class CaheilmanRandomNumberComponent implements OnInit {



  randomMin: number = 0;
  randomMax: number = 10;
  randomNumber: any = 0;

  randomize() {
    // console.log("this works")
    if ( this.randomMin >= this.randomMax) {
     this.randomNumber = "impossible: minimum is greater than or equal to Maximum. Please try again."
    } else {
     this.randomNumber = Math.floor((Math.random() * this.randomMax) + this.randomMin);
      console.log(this.randomNumber);
    }
  }
  
  // // get randomNumber

  ngOnInit() { 
  }

}
