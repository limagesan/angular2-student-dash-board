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
var ja;
var ma;
var en;
var StudentService = (function () {
    function StudentService() {
        this.STUDENT = [
            { id: 1, name: '山田一郎', japanese: 60, math: 80, english: 40, num: 0, sum: null },
            { id: 2, name: '田中元気', japanese: 40, math: 70, english: 60, num: 0, sum: null },
            { id: 3, name: '鈴木風子', japanese: 90, math: 40, english: 85, num: 0, sum: null }
        ];
    }
    StudentService.prototype.getStudents = function () {
        return Promise.resolve(this.STUDENT);
    };
    StudentService.prototype.getStudent = function (id) {
        return this.getStudents()
            .then(function (students) { return students.find(function (student) { return student.id === id; }); });
    };
    StudentService.prototype.getSum = function (length) {
        for (var i = 0; i < length; i++) {
            ja = this.STUDENT[i].japanese;
            ma = this.STUDENT[i].math;
            en = this.STUDENT[i].english;
            this.STUDENT[i].sum = Number(ja) + Number(ma) + Number(en);
        }
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map