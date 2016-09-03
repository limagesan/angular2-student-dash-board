import { Student } from './student';
import { Injectable } from '@angular/core';


var ja : number;
var ma : number;
var en : number;


@Injectable()
export class StudentService {

  STUDENT : Student[] = [
    {id: 1, name: '山田一郎' ,japanese:60,math:80,english:40, num:0 ,sum : null},
    {id: 2, name: '田中元気' ,japanese:40,math:70,english:60, num:0 ,sum : null},
    {id: 3, name: '鈴木風子' ,japanese:90,math:40,english:85, num:0 ,sum : null}
  ];





  getStudents(): Promise<Student[]> {

    return Promise.resolve(this.STUDENT);
  }


  getStudent(id: number): Promise<Student> {
    return this.getStudents()
               .then(students => students.find(student => student.id === id));
  }


  getSum(length : number): void {

    for( var i=0 ; i<length ;i++){
      ja = <number>this.STUDENT[i].japanese;
      ma = <number>this.STUDENT[i].math;
      en = <number>this.STUDENT[i].english;

      this.STUDENT[i].sum = Number (ja) + Number (ma) + Number (en);
    }

  }

}
