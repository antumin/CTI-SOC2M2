import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexResponsive, ApexStroke, ChartComponent } from 'ng-apexcharts';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent = new ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: "polarArea",
        width: "100%"
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
      legend: {
        show: false
      }
    };
  }

  ngOnInit(): void {
  }
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
  legend: ApexLegend,
};
