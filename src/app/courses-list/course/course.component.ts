import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "./course.model";
import {CourseListService} from "../services/course-list.service";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseComponent implements OnInit {

  @Input() course: Course;

  @Output() onDeleteClick = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {

  }

  onEditClick(id: number) {}

  handleDelete(id:number) {
    this.onDeleteClick.emit(id)
  }

}
