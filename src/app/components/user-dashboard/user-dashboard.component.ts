import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  // dataset: Array<number> = [1, 2, 3, 4, 5];
  // data set for simple bar char
  dataset2 = [80, 100, 56, 120, 180, 30, 40, 120, 160];

  dataset = [
    { Month: 'January', Height: 30, fill: 'magenta' },
    { Month: 'February', Height: 30, fill: 'green' },
    { Month: 'March', Height: 30, fill: 'blue' },
    { Month: 'April', Height: 30, fill: 'pink' },
    { Month: 'Mai', Height: 30, fill: 'purple' },
  ];

  constructor() {
    // console.log(this.canvas, this.svg, this.rect);
    // console.log(`This dataset2: ${this.dataset2}`);
  }

  ngOnInit(): void {
    this.draw(this.dataset);
  }

  draw(dataset) {
    const canvas = d3.select('#container');
    let svg = canvas
      .append('svg')
      .attr('width', canvas.width, 'height', canvas.height);
    // svg = this.canvas.append('svg').attr('width', '800').attr('height', '600');
    let rect = svg.selectAll('rect');
    // this.draw(this.dataset2);
    rect
      .data(this.dataset)
      .enter()
      .append('rect')
      .attr('width', (d) => 24)
      .attr('height', (d) => d.Height)
      .attr('fill', (d) => d.fill)
      .attr('y', (d, i) => d.Height)
      .attr('x', (d, i) => i * 25);
  }
}
