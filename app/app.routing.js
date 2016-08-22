"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var score_board_component_1 = require('./score-board.component');
var student_detail_component_1 = require('./student-detail.component');
var appRoutes = [
    /*{
    //この場合、ホームにアクセスした場合ダッシュボードのページに自動的に飛ぶ
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },*/ {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'students',
        component: score_board_component_1.ScoreBoardComponent
    },
    {
        path: 'student-detail/:id',
        component: student_detail_component_1.StudentDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.routing.js.map