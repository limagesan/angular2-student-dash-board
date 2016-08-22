export class InMemoryStudentDataService {
  createDb() {
    let students = [
      {id: 1, name: '山田太郎', japanese:60, math: 80, english:40},
      {id: 2, name: '鈴木一郎', japanese:70, math: 60, english:70},
      {id: 3, name: '小島花子', japanese:85, math: 30, english:90}
    ];
    return {students};
  }
}

