import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SensoresProvider } from '../../providers/sensores/sensores';

declare var google;

@Component({
  selector: 'page-table',
  templateUrl: 'table.html'
})
export class TablePage {

  sensores: Observable<any>;

  constructor(
    private provider: SensoresProvider
  ) {

    this.sensores = this.provider.getAll();
    this.drawTable();
  }


  drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Hora do Dia');
    data.addColumn('number', 'Umidade (%)');
    data.addColumn('number', 'Chuva  (mm3)');

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

      var table = new google.visualization.Table(document.getElementById('table'));

      table.draw(data, { showRowNumber: false, width: '100%', height: '100%' });
    });
  }

}
