import {Component, Input, OnInit} from '@angular/core';
import {Course} from "./course/course.model";
import {FilterPipe} from "./pipes/filter.pipe";
import {CourseListService} from "./services/course-list.service";
import {AuthService} from "../header/authentication/services/auth.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {


  public searchQuery: string = ''


  constructor(public courseListService: CourseListService) {
  }

  courseList: Course[];

  ngOnInit(): void {
    this.courseList = this.courseListService.getList()
  }

  handleSearch(): void {
    let filter = new FilterPipe()
    this.courseList = filter.transform(this.courseList, this.searchQuery)
    this.searchQuery = ''
  }

  handleDelete = (id: number) => {
    this.courseListService.removeCourse(id)
    this.courseList = this.courseListService.getList()
  }

  handleLoadMore(): void {
    console.log("there's nothing to load")
  }

  trackById(index: number, course: Course) {
    return course.id
  }


  handleRedefine() {
    this.courseList = this.courseListService.handleRedefine()
  }



}
