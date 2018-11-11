import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SensoresProvider } from '../../providers/sensores/sensores';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  sensor: Observable<any>;
  umidade: number = 0;
  chuva: number = 0;

  constructor(
    private provider: SensoresProvider
  ) {
    this.sensor = this.provider.getLast();
    this.getLast();
  }

  getLast() {
    this.sensor.subscribe(res => {
      this.umidade = res[0].umidade;
      this.chuva = res[0].chuva;
    })
  }
}