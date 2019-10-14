import { Component, OnInit } from '@angular/core';

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

  buttonClickHandler() {
    console.log('greg click event works');
  }

  ngOnInit() {
  }

}
