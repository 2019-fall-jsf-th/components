import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slugging-percentage',
  templateUrl: './slugging-percentage.component.html',
  styleUrls: ['./slugging-percentage.component.css']
})
export class SluggingPercentageComponent implements OnInit {

  atBats = 0;
  bases = 0;

  constructor() { }

  ngOnInit() {


  }

  get slugging() {
    return this.bases / this.atBats;
  }

}
