import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student'

@Pipe({name: 'studentPipe'})
export class StudentPipe implements PipeTransform {
  transform(itemList: Student[], query: string) {
    if (! itemList) {
      return [];
    }
    if (!query) {
      return itemList;
    }
    return itemList.filter(
      item => {
        return item.name.toLowerCase().includes(query); // || item.type.toLowerCase().includes(query);
      }
    )
  }
}
