import {Component, OnInit} from '@angular/core';
import {Course} from "./course/course.model";
import {FilterPipe} from "./pipes/filter.pipe";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courseList!: Course[];

  public handleDelete = (id: number) => {
    console.log(id)
  }

  public searchQuery: string = ''


  constructor() {
  }

  ngOnInit(): void {
    console.log(`ngOnInit`);
    this.courseList = [
      {
        id: 111,
        title: 'Video Course 2. Name tag',
        creationDate: new Date(2021, 8, 8),
        duration: 88,
        TopRated: false,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and\n' +
          '      details about various components of a course description. Course descriptions report information about a\n' +
          '      university or college\'s classes. They\'re published both in course catalogs that outline degree requirements\n' +
          '      and in course schedules that contain descriptions for all courses offered during a particular semester.'
      },
      {
        id: 222,
        title: 'Video Course 3. Best ed',
        creationDate: new Date(2022, 5, 22),
        duration: 88,
        TopRated: false,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and\n' +
          '      details about various components of a course description. Course descriptions report information about a\n' +
          '      university or college\'s classes. They\'re published both in course catalogs that outline degree requirements\n' +
          '      and in course schedules that contain descriptions for all courses offered during a particular semester.'
      },
      {
        id: 333,
        title: 'Video Course 1. Best op',
        creationDate:  new Date(2020, 7, 28),
        duration: 88,
        TopRated: true,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and\n' +
          '      details about various components of a course description. Course descriptions report information about a\n' +
          '      university or college\'s classes. They\'re published both in course catalogs that outline degree requirements\n' +
          '      and in course schedules that contain descriptions for all courses offered during a particular semester.'
      }
    ]
  }

  handleSearch(): void {
    let filter = new FilterPipe()
    this.courseList = filter.transform(this.courseList, this.searchQuery)
    console.log(this.searchQuery)
    this.searchQuery = ''
  }

  handleLoadMore(): void {
    console.log("there's nothing to load")
  }

  trackById(index: number, course: Course) {
    return course.id
  }



  handleRedefine(): void {
    this.courseList = [
      {
        id: 111,
        title: 'Video Course 2. Name tag',
        creationDate: new Date(2021, 8, 8),
        duration: 88,
        TopRated: true,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and\n' +
          '      details about various components of a course description. Course descriptions report information about a\n' +
          '      university or college\'s classes. They\'re published both in course catalogs that outline degree requirements\n' +
          '      and in course schedules that contain descriptions for all courses offered during a particular semester.'
      },
      {
        id: 222,
        title: 'Video Course 3. Best ed',
        creationDate: new Date(2022, 5, 22),
        duration: 88,
        TopRated: false,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and\n' +
          '      details about various components of a course description. Course descriptions report information about a\n' +
          '      university or college\'s classes. They\'re published both in course catalogs that outline degree requirements\n' +
          '      and in course schedules that contain descriptions for all courses offered during a particular semester.'
      },
      {
        id: 333,
        title: 'Video Course 1. Best op',
        creationDate:  new Date(2020, 7, 28),
        duration: 88,
        TopRated: true,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and\n' +
          '      details about various components of a course description. Course descriptions report information about a\n' +
          '      university or college\'s classes. They\'re published both in course catalogs that outline degree requirements\n' +
          '      and in course schedules that contain descriptions for all courses offered during a particular semester.'
      }
    ]
  }

  ngOnChanges() {
    console.log(`OnChanges`);
  }

  ngDoCheck() {
    console.log(`ngDoCheck`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`)
  }
}
