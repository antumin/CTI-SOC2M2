import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list/selection-list';
import { DataService } from 'src/app/model/data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input()  data;
  @Input()  title;
  @Output() dataChange = new EventEmitter<number>();
  options: number[] = [];
  questions: {text,disabled}[] = [];
  relevantLevels = [];
  

  constructor(public dataService: DataService) { 
    this.relevantLevels = this.dataService.levels.slice(1,this.dataService.levels.length);
  }

  ngOnInit(): void {
    this.questions.push({disabled: false, text:this.relevantLevels[0].question});
  }

  onDataChange(event: MatSelectionListChange): void{
    this.options.forEach((option, index) =>{
      if(index + 1 < this.options.length){
        this.questions[index].disabled = true;
      }
      if(index + 1 < this.relevantLevels.length){
        this.questions[index + 1] = {disabled: false, text:this.relevantLevels[index + 1].question};
      }
    });
    if(this.options.length == 1){
      this.questions[0].disabled = false;
    }
    this.questions.forEach((question) =>{
      if(this.questions.length > this.options.length + 1){
        this.questions.pop();
      }
    });

    this.data = this.options.length;
    this.dataChange.emit(this.data);
    this.dataService.dataUpdated();
  }
}
