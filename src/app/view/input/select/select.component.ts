import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list/selection-list';
import { DataService } from 'src/app/model/data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() data;
  @Input() title;
  @Output() dataChange = new EventEmitter<number>();
  options: number[] = [];
  questions: { text: string, disabled: boolean }[] = [];
  relevantLevels = [];

  constructor(public dataService: DataService) {
    this.relevantLevels = this.dataService.levels.slice(1, this.dataService.levels.length);
  }

  ngOnInit(): void {
    this.questions.push({ disabled: false, text: this.relevantLevels[0].question });
  }

  onDataChange(event: MatSelectionListChange): void {
    if (this.questions.length > this.options.length + 1) {
      this.questions.pop();
    } else if (this.questions.length < this.relevantLevels.length) {
      this.questions.push({ disabled: false, text: this.relevantLevels[this.options.length].question })
    } 

    if(this.options.length > 1){
      this.questions[this.options.length - 2].disabled = true
    }

    if(this.options.length > 0){
      this.questions[this.options.length - 1].disabled = false;
    }

    this.data = this.options.length;
    this.dataChange.emit(this.data);
    this.dataService.dataUpdated();
  }
}
