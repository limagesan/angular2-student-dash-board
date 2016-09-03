"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var student_service_1 = require('./student.service');
var StudentDashboardComponent = (function () {
    function StudentDashboardComponent(router, studentService) {
        this.router = router;
        this.studentService = studentService;
        this.students = [];
        this.bestthree = [-1, -1, -1];
    }
    StudentDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getStudents()
            .then(function (students) {
            for (var i = 0; i < 3; i++) {
                var max = 0;
                if (students[i] === null) {
                    _this.bestthree[i] = -1;
                    break;
                }
                for (var j = 0; j < students.length; j++) {
                    if (students[j].sum > max && j !== _this.bestthree[0] && j !== _this.bestthree[1] && j !== _this.bestthree[2]) {
                        max = students[j].sum;
                        _this.bestthree[i] = j;
                    }
                }
            }
            for (var i = 0; i < 3; i++) {
                if (_this.bestthree[i] === -1) {
                    _this.students[i] = { id: -1, name: "該当者なし", japanese: 0, math: 0, english: 0, num: 0, sum: 0 };
                }
                else {
                    _this.students[i] = students[_this.bestthree[i]];
                }
            }
        });
    };
    StudentDashboardComponent.prototype.gotoDetail = function (student) {
        if (student.id !== -1) {
            var link = ['/student-detail', student.id];
            this.router.navigate(link);
        }
    };
    StudentDashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/studentdashboard.component.html',
            styleUrls: ['app/studentdashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, student_service_1.StudentService])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());
exports.StudentDashboardComponent = StudentDashboardComponent;
//# sourceMappingURL=studentdashboard.component.js.map