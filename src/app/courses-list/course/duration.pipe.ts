import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60)

    if (hours) {
      return (hours + 'h ' + (value % 60) + 'min')
    } else
      return (value % 60) + 'min'
  }

}
