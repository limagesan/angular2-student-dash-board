"use strict";
var router_1 = require('@angular/router');
var students_component_1 = require('./students.component');
var student_detail_component_1 = require('./student-detail.component');
var studentdashboard_component_1 = require('./studentdashboard.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/students',
        pathMatch: 'full'
    },
    {
        path: 'students',
        component: students_component_1.StudentsComponent
    },
    {
        path: 'student-detail/:id',
        component: student_detail_component_1.StudentDetailComponent
    },
    {
        path: 'studentdashboard',
        component: studentdashboard_component_1.StudentDashboardComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map