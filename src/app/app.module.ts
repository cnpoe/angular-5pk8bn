import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentsComponent } from './students.component';
import { StudentPipe } from './student-pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentsComponent,
    StudentPipe,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
