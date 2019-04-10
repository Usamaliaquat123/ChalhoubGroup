import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {
  transform(value: Date|moment.Moment, ...args: any[]): any {
      let [dayNow] = args;
      return moment(value).startOf(dayNow).fromNow();
  }
}
