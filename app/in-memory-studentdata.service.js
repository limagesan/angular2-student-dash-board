"use strict";
var InMemoryStudentDataService = (function () {
    function InMemoryStudentDataService() {
    }
    InMemoryStudentDataService.prototype.createDb = function () {
        var students = [
            { id: 1, name: '山田太郎', japanese: 60, math: 80, english: 40 },
            { id: 2, name: '鈴木一郎', japanese: 70, math: 60, english: 70 },
            { id: 3, name: '小島花子', japanese: 85, math: 30, english: 90 }
        ];
        return { students: students };
    };
    return InMemoryStudentDataService;
}());
exports.InMemoryStudentDataService = InMemoryStudentDataService;
//# sourceMappingURL=in-memory-studentdata.service.js.map