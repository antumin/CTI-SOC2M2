import { EventEmitter, Injectable } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  public data = [];
  public capabilities = [
    'Vulnerability Management', 
    'Log and Event Management', 
    'Security Monitoring, Analysis & Threat Detection', 
    'Threat Hunting, Penetration Testing & Digital Forensics', 
    'Security Incident Management & Incident Response', 
    'Core Cyber Threat Intelligence'];
  public dataLabels = ['Source', 'Quality', 'Integration', 'Automation', 'Improvement'];
  public dataChange = new BehaviorSubject(this.data);
  
  constructor() { 
    this.capabilities.forEach((capability, i) => {
      this.data[i] = 0;
    });
  }

  public dataUpdated(): void{
    this.dataChange.next(this.data);
    console.log(this.data);
  }
}
