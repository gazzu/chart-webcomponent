import { Component, Element, Prop, h, } from '@stencil/core';
import { format } from '../../utils/utils';
import Chart from 'chart.js';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  private canvas?: HTMLCanvasElement;
  // @Element() element;
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  public drawChart(canvas) {
    new Chart(canvas, {

      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
          }
        ]
      }
    });
  }

  componentDidLoad() {
    // console.log('element', this.element); // outputs HTMLElement <my-component ...
    console.log('canvas', this.canvas);
    this.drawChart(this.canvas);
  }


  render() {
    return <div>
      <p>Hello, World! I'm {this.getText()}</p>
      <canvas ref={el => this.canvas = el as HTMLCanvasElement}></canvas>
    </div>;
  }
}
