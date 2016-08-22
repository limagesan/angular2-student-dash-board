import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import {  HeroDetailComponent } from './hero-detail.component';

import {  ScoreBoardComponent } from './score-board.component';
import {  StudentDetailComponent } from './student-detail.component';

const appRoutes: Routes = [

/*{
//この場合、ホームにアクセスした場合ダッシュボードのページに自動的に飛ぶ
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},*/  {
    path: 'dashboard',
    component: DashboardComponent
  },
{
    path: 'heroes',
    component: HeroesComponent
  },
{
  path: 'detail/:id',
  component: HeroDetailComponent
},
{
	path: 'students',
	component: ScoreBoardComponent
},
{
	path: 'student-detail/:id',
	component: StudentDetailComponent
}
];

export const routing = RouterModule.forRoot(appRoutes);

export class AppModule {
}
