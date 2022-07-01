import {Component, Input, OnInit} from '@angular/core';
import {Course} from "./course/course.model";
import {FilterPipe} from "./pipes/filter.pipe";
import {CourseListService} from "./services/course-list.service";
import {AuthService} from "../header/authentication/services/auth.service";
import {Router} from "@angular/router";

// 1. event Click, Mousein
// 2. @Input
// 3. async

// 1. Observable, Promise subscribe
// 2. Settimeout

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {


  public searchQuery: string = ''


  constructor(public courseListService: CourseListService, public router: Router, private filterPipe: FilterPipe) {
  }

  // Place before constructor
  courseList: Course[];

  ngOnInit(): void {
    this.courseList = this.courseListService.getList()
  }

  // Provide FilterPipe
  handleSearch(): void {
    this.courseList = this.filterPipe.transform(this.courseList, this.searchQuery)
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

  onAddCourseClick() {
    this.router.navigate(['edit'])
  }

}
