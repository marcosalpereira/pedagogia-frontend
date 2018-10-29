import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

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
  let previous = getRandomInt(40, 60);
  const ret: number[] = [];
  for (let i = 0; i < 12; i++) {
      let offset = getRandomInt(5, 10) * (getRandomInt(0,1) ? 1 : -1);
      let val = previous + offset;
      if (val > 100) val = 100;
      if (val < 0) val = 0;
      ret.push(val);
      previous = val;
  }
  return ret;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}