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
    	//console.log(this.triangleDimensions);

	}

	get coords() {
		return this.triangleDimensions;
	}
	get points() {
		let newPoints: string;
		
		newPoints = this.triangleDimensions[0].coordOne.x + ', ';
		newPoints += this.triangleDimensions[0].coordOne.y + ', ';
		newPoints += this.triangleDimensions[0].coordTwo.x + ', ';
		newPoints += this.triangleDimensions[0].coordTwo.y + ', ';
		newPoints += this.triangleDimensions[0].coordThree.x + ', ';
		newPoints += this.triangleDimensions[0].coordThree.y;

		console.log(newPoints);

		return newPoints;
	}

	get pointOneX() {
		return '10, 0, 100, 100, 0, 100';
		//return this.triangleDimensions.map(c => ({...c, coordOne: {x: 10} }) );
	}

	setPointOneX(event) {
		let xValue: number;
		xValue = parseFloat(event.target.value);
		//console.log(xValue);
		this.triangleDimensions = this.triangleDimensions.map(c => ({...c, coordOne: {x: xValue, y: c.coordOne.y}}) );
	}

}
