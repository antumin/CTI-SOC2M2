import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../model/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public dataService:DataService) { 
  }

  ngOnInit(): void {
  }

}
