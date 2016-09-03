import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent }    from './students.component';
import { StudentDetailComponent }  from './student-detail.component';
import { StudentDashboardComponent }   from './studentdashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'student-detail/:id',
    component: StudentDetailComponent
  },
  {
    path: 'studentdashboard',
    component: StudentDashboardComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
