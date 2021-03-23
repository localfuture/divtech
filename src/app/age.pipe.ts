import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): number {
    let today = moment();
            let birthdate = moment(value);
            let years = today.diff(birthdate, 'years');
            let html:number = years;
    return html;
}

}
