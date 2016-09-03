import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';


import { StudentService }  from './student.service';
import { StudentsComponent }    from './students.component';
import { StudentDetailComponent }  from './student-detail.component';
import { StudentDashboardComponent }   from './studentdashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    StudentDashboardComponent
  ],
  providers: [
    StudentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
