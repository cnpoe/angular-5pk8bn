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
  showForm:boolean = false;

  onChange(value: string) {
    if (value) {
      this.students.sort((a, b) => {
        if (a[value] > b[value]) {
          return 1;
        }
        if (a[value] < b[value]) {
          return -1;
        }
        return 0;
      })
    }
  }

  openForm() {
    this.showForm = true;
  }

  addStudent() {
    this.student.therapies = this.student.therapies.split(',');
    this.students.push(this.student);
    this.student = new Student();
    console.log(this.student);
    this.showForm = false;
  }

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
    this.student = new Student();
  }

  deleteElement(id: number, event: any) {
    this.students.splice(id, 1);
  }
}