import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../model/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  activeIds: string[] = []

  constructor(public dataService:DataService) { 
    dataService.capabilities.forEach((capability, i) => {
      this.activeIds.push("panel" + i);
    });
    console.log(this.activeIds);
  }

  ngOnInit(): void {
  }

}
