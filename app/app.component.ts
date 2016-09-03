import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/students" routerLinkActive="active">MyStudents</a>
      <a routerLink="/studentdashboard" routerLinkActive="active">Top 3</a>
 </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  title = '成績管理表';
}
