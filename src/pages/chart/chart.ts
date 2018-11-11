import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SensoresProvider } from '../../providers/sensores/sensores';

declare var google;

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage {

  sensores: Observable<any>;

  constructor(
    private provider: SensoresProvider
  ) {

    this.sensores = this.provider.getAll();
    this.showChart();
  }

  showChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Hora do Dia');
    data.addColumn('number', 'Umidade');
    data.addColumn('number', 'Chuva');

    this.sensores.forEach(function (s1) {
      let rows = [];
      let i = 0;
      s1.forEach(function (sensor) {
        console.log(sensor);
        let row = [{ v: [8 + i, 0, 0], f: (8 + i) + '' }, sensor.umidade, sensor.chuva];
        rows.push(row);
        i++;
      });
      console.log(rows);

      data.addRows(rows);

      var options = {
        chart: {
          title: 'Umidade do Solo e Quantidade de Chuva',
          subTitle: 'Médias das Últimas Horas'
        },
        axes: {
          x: {
            0: { side: 'top' }
          }
        },
        hAxis: {
          title: 'Hora do Dia',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 0, 0],
            max: [19, 0, 0]
          }
        },
        vAxis: {
          title: '%, mm3',
        }
      };

      var materialChart = new google.visualization.AreaChart(document.getElementById('chart'));
      materialChart.draw(data, options);

    });
  }
}