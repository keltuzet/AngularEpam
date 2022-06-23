import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "./course.model";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  @Input() course!: Course ;

  @Output() onDeleteClick = new EventEmitter<number>()

  // public TopRated: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }


  get durationTime() : string | null {
    if (this.course) {
      return (Math.floor(this.course.duration / 60) + 'h ' + (this.course.duration % 60) + 'min')
    } else {
      return null
    }
  }



  handleDelete(id:number) {
    this.onDeleteClick.emit(id)
  }



}
