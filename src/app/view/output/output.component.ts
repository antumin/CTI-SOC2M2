import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexResponsive, ApexStroke, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { DataService } from '../../model/data.service';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  private labels = [];

  constructor(public dataService: DataService) {
    this.dataService.capabilities.forEach(capability =>{
      this.labels.push(capability.name);
    });

    this.chartOptions = {
      series: dataService.data,
      colors: this.setColors(),
      labels: this.labels,
      chart: {
        type: "polarArea",
        width: "100%",
        animations: {
          enabled: false
        }
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
      legend: {
        show: false
      },
      yaxis: {
        tickAmount:5,
        min:5,
        max:5,
      },
      xaxis: {
      }
    };
  }

  ngOnInit(): void {
    this.dataService.dataChange.subscribe((data)=>{
      let values: number[] = [];
      data.forEach((value)=>{
        values.push(value);
      });
      this.chartOptions.series = values;
      this.chartOptions.colors = this.setColors();
    })
  }

  private setColors(): any[]{
    let colors:any[] = [];
    this.dataService.data.forEach((data, i) =>{
      colors[i] = this.dataService.levels[data].color;
    });
    return colors;
  }
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
  legend: ApexLegend;
  yaxis: ApexYAxis;
  colors: any[];
  xaxis: ApexXAxis;
};

