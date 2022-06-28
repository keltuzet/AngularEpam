import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "./course.model";
import {CourseListService} from "../services/course-list.service";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  @Input() course!: Course ;

  @Output() onDeleteClick = new EventEmitter<number>()

  constructor(public courseService: CourseListService) {}

  ngOnInit(): void {

  }

  handleDelete(id:number) {
    this.onDeleteClick.emit(id)
  }



}
