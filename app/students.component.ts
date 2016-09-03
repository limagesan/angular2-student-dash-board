import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-students',
  templateUrl: 'app/students.component.html',
  styleUrls:  ['app/students.component.css']
})



export class StudentsComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;
  newstudent : Student;


  constructor(
    private router: Router,
    private studentService: StudentService) { }

  getStudents(): void {
    this.studentService.getStudents().then(students =>
      {this.students = students;
        this.getsum();
      });
  }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student, i: number): void {
    this.selectedStudent = student;
    this.selectedStudent.num = i;
  }

  gotoDetail(): void {
    this.router.navigate(['/student-detail', this.selectedStudent.id]);
  }

  delete(): void {
    this.students.splice(this.selectedStudent.num ,1);
    this.selectedStudent = null;
  }

  makenewStudent(): void {
    if(this.students.length !== 0){

    this.newstudent = {id : this.students[this.students.length-1].id + 1, name : "" , japanese : 0, math : 0 , english : 0 , num : 0, sum : 0};
  }else{
    this.newstudent = {id : 1, name : "" , japanese : 0, math : 0 , english : 0 , num : 0, sum : 0};
  }
    this.students.push(this.newstudent);

    this.router.navigate(['/student-detail', this.newstudent.id ]);
  }

getsum():void{
    this.studentService.getSum( this.students.length );



}
}
