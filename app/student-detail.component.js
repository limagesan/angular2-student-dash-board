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
var StudentDetailComponent = (function () {
    function StudentDetailComponent(studentService, route) {
        this.studentService = studentService;
        this.route = route;
        this.newStudent = null;
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.studentService.getStudent(id)
                .then(function (student) {
                if (student === undefined) {
                    _this.newStudent = { id: id, name: "", japanese: 0, math: 0, english: 0, num: 0, sum: 0 };
                    _this.student = _this.newStudent;
                }
                else {
                    _this.student = student;
                }
            });
        });
    };
    StudentDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    StudentDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-student-detail',
            templateUrl: 'app/student-detail.component.html',
            styleUrls: ['app/student-detail.component.css']
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, router_1.ActivatedRoute])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());
exports.StudentDetailComponent = StudentDetailComponent;
//# sourceMappingURL=student-detail.component.js.map