import { Pipe, PipeTransform } from '@angular/core';

// custom pipe which filters the personsList based on the courseChosen
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    if (value.length === 0 || !filterString || !propName) {
      console.log(filterString);
      return value;
    }

    return value.filter(_person => {
      return _person[propName] === filterString;
    });
  }

}
