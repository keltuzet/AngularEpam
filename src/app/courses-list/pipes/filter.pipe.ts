import { Pipe, PipeTransform } from '@angular/core';
import {Course} from "../course/course.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], query: string = ''): Course[] {

    if (!query) return  courses

    return courses.filter(course => course.title.toLowerCase().includes(query.toLowerCase()))
  }

}
