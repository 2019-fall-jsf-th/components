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

	setPointOneX(event) {
		this.triangleDimensions = this.triangleDimensions.map(c => ({...c, coordOne: {x: parseFloat(event.target.value), y: c.coordOne.y}}) );
		//console.log(this);
	}

	setPointOneY(event) {
		this.triangleDimensions = this.triangleDimensions.map(c => ({...c, coordOne: {x: c.coordOne.x, y: parseFloat(event.target.value)}}) );
	}


	setPointTwoX(event) {
		this.triangleDimensions = this.triangleDimensions.map(c => ({...c, coordTwo: {x: parseFloat(event.target.value), y: c.coordTwo.y}}) );
	}

	setPointTwoY(event) {
		this.triangleDimensions = this.triangleDimensions.map(c => ({...c, coordTwo: {x: c.coordTwo.x, y: parseFloat(event.target.value)}}) );
	}


	setPointThreeX(event) {
		this.triangleDimensions = this.triangleDimensions.map(c => ({...c, coordThree: {x: parseFloat(event.target.value), y: c.coordThree.y}}) );
	}

	setPointThreeY(event) {
		this.triangleDimensions = this.triangleDimensions.map(c => ({...c, coordThree: {x: c.coordThree.x, y: parseFloat(event.target.value)}}) );
	}

}
