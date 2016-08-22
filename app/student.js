"use strict";
var Student = (function () {
    function Student() {
    }
    Student.prototype.getSum = function () { return this.japanese + this.math + this.english; };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map