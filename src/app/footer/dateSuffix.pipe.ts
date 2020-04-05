import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'addDaySuffix'})
export class DateSuffixPipe implements PipeTransform {
  transform(date: string): string {
    let parts = date.split(" ");
    let dayOfMonthIndex = parts.findIndex(x => x.match("^\\d+$"))
    let day = parts[dayOfMonthIndex];

    if (+day == 1) {
      day += "st"
    } else if (+day == 2) {
      day += "nd"
    } else if (+day == 3) {
      day += "rd"
    } else {
      day += "th"
    }

    parts[dayOfMonthIndex] = day;
    return parts.join(" ");
  }
}
