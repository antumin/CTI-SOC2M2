import { EventEmitter, Injectable } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { BehaviorSubject } from 'rxjs';
import { capabilities, levels } from './strings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data = [];
  public capabilities = capabilities;
  public levels = levels;
  public dataChange = new BehaviorSubject(this.data);

  constructor() {
    this.capabilities.forEach((capability, i) => {
      this.data[i] = 0;
    });
  }

  public dataUpdated(): void {
    this.dataChange.next(this.data);
    console.log(this.data);
  }
}
