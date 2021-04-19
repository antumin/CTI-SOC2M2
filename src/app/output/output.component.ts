import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexResponsive, ApexStroke, ChartComponent } from 'ng-apexcharts';
import { DataService } from '../data.service';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private dataService: DataService) {
    this.chartOptions = {
      series: dataService.data,
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
      }
    };
  }

  ngOnInit(): void {
    this.dataService.dataChange.subscribe((data)=>{
      console.log("updating");
      let values: number[] = [];
      data.forEach((value)=>{
        values.push(value);
      })
      this.chartOptions.series = values;
    })
  }
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
  legend: ApexLegend
};
