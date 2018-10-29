import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chartPresencas: Chart;

  constructor() { }

  ngOnInit() {
    this.chartPresencas = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Comportamento das presenças por dia da semana',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        max: 100,
        title: {
          text: 'Presenças (%)',
        },
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          },
          enableMouseTracking: false,
        },
      },
      series: [
        {
          name: 'Segunda',
          data: shuffle(),
        },
        {
          name: 'Terça',
          data: shuffle(),
        },
        {
          name: 'Quarta',
          data: shuffle(),
        },
        {
          name: 'Quinta',
          data: shuffle(),
        },
        {
          name: 'Sexta',
          data: shuffle(),
        },
        {
          name: 'Sábado',
          data: shuffle(),
        },
      ],

    });
  }

}

function shuffle(): number[] {
  const ret: number[] = [];
  for (let i = 0; i < 12; i++) {
      ret.push(Math.floor(Math.random() * 50.0 + Math.random() * 40.0) + 10);
  }
  return ret;
}
