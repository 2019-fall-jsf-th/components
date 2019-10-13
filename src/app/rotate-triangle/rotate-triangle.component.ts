import { Component, OnInit } from '@angular/core';
import { TriangleService } from '../triangle.service';

@Component({
	selector: 'app-rotate-triangle',
	templateUrl: './rotate-triangle.component.html',
	styleUrls: ['./rotate-triangle.component.css']
})
export class RotateTriangleComponent implements OnInit {

	constructor(private triangleService: TriangleService) { }

	triangleDimensions = [];

	ngOnInit() {

		this.triangleDimensions = this.triangleService.defaultTriangleDimensions();
    	console.log(this.triangleDimensions);

	}

	get coords() {
		return this.triangleDimensions;
	  }

}
