import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  @Output() courseDateChange = new EventEmitter<string>()
  @Input() courseDate: string

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(value: string) {
    this.courseDateChange.emit(value)
  }
}
