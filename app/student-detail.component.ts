import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-student-detail',
  templateUrl: 'app/student-detail.component.html',
  styleUrls: ['app/student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;
  newStudent: Student = null;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.studentService.getStudent(id)
        .then(student => {if( student === undefined ){
          this.newStudent={id : id , name : "" ,japanese :0 ,math : 0 , english :0 ,num : 0,sum : 0};
          this.student = this.newStudent;
        }else{this.student = student} });
    });
  }

  goBack(): void {
    window.history.back();
  }

}
