import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/model/data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input()  data;
  @Output() dataChange = new EventEmitter<number>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onDataChange(): void{
    this.dataChange.emit(this.data);
    this.dataService.dataUpdated();
  }
}
