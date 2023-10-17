import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'date'
})

export class CustomdatePipe implements PipeTransform{

  constructor(private datePipe: DatePipe) { }

  transform(value: Date | string | number, format?: string, timezone?: string, locale?: string): any {
    if (isNaN(new Date(value).getDate())) {
      return 'Invalid Date';
    } else {
      return this.datePipe.transform(value, 'medium');
    }
  }
}
