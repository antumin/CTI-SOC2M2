import { EventEmitter, Injectable } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  public data = [2, 1];
  public dataChange = new BehaviorSubject(this.data);
  
  constructor() { }

  public dataUpdated(): void{
    this.dataChange.next(this.data);
    console.log(this.data);
  }
}
