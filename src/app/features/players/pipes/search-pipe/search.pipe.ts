import { IPlayer } from '../../models/Player.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(list: [], keys: string, searchValue: string): IPlayer[] {
    if (!searchValue) return list;

    searchValue = searchValue.toLowerCase();
    return list.filter((el) => {
      return JSON.stringify(el[keys]).toLowerCase().includes(searchValue);
    });

  }
}
