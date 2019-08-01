import { Component } from '@angular/core';

import { StudentsDataService } from './students-data.service';
import { Student } from './student';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: [ './students.component.css' ]
})
export class StudentsComponent  {
  students = StudentsDataService.generate(100);
  student = new Student();

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    if (property === 'therapies') {
      this.students[id][property] = editField.split(',');
    }
    else{
      this.students[id][property] = editField;
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.student = event.target.textContent;
  }
}