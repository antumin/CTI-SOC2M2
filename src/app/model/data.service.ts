import { EventEmitter, Injectable } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { BehaviorSubject } from 'rxjs';
import { capabilities, capabilityLevels, maturityLevels } from './strings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data = [];
  public maturityLevel = 0;
  public maturity = maturityLevels[0].name;
  public capabilities = capabilities;
  public levels = capabilityLevels;
  public dataChange = new BehaviorSubject(this.data);
  public maturityLevels = maturityLevels;

  constructor() {
    this.capabilities.forEach((capability, i) => {
      this.data[i] = 0;
    });
  }

  public dataUpdated(): void {
    this.dataChange.next(this.data);
    this.maturityLevel = this.calculateMaturity(this.data);
    this.maturity = maturityLevels[Math.round(this.maturityLevel)].name;
    console.log(this.maturityLevel)
  }

  private calculateMaturity(data: number[]){
    let sum = 0;
    data.forEach(data => {
      sum += data;
    });
    console.log(sum + "/" + data.length)
    return sum/data.length;
  }
}
