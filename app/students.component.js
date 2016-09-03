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
var StudentsComponent = (function () {
    function StudentsComponent(router, studentService) {
        this.router = router;
        this.studentService = studentService;
    }
    StudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents().then(function (students) {
            _this.students = students;
            _this.getsum();
        });
    };
    StudentsComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    StudentsComponent.prototype.onSelect = function (student, i) {
        this.selectedStudent = student;
        this.selectedStudent.num = i;
    };
    StudentsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/student-detail', this.selectedStudent.id]);
    };
    StudentsComponent.prototype.delete = function () {
        this.students.splice(this.selectedStudent.num, 1);
        this.selectedStudent = null;
    };
    StudentsComponent.prototype.makenewStudent = function () {
        if (this.students.length !== 0) {
            this.newstudent = { id: this.students[this.students.length - 1].id + 1, name: "", japanese: 0, math: 0, english: 0, num: 0, sum: 0 };
        }
        else {
            this.newstudent = { id: 1, name: "", japanese: 0, math: 0, english: 0, num: 0, sum: 0 };
        }
        this.students.push(this.newstudent);
        this.router.navigate(['/student-detail', this.newstudent.id]);
    };
    StudentsComponent.prototype.getsum = function () {
        this.studentService.getSum(this.students.length);
    };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'my-students',
            templateUrl: 'app/students.component.html',
            styleUrls: ['app/students.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, student_service_1.StudentService])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map