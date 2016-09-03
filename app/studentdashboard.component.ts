import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './student';
import { StudentService } from './student.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/studentdashboard.component.html',
  styleUrls: ['app/studentdashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  students: Student[] = [];
  bestthree: number[] = [ -1 , -1 , -1 ];

  constructor(
    private router: Router,
    private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.getStudents()
      .then(students => {
        for(let i=0 ; i<3 ; i++){
          let max = 0;

          if(students[i] === null){
            this.bestthree[i] = -1 ;
            break;
          }

          for(let j=0 ; j<students.length ; j++){
            if( students[j].sum > max && j !== this.bestthree[0] && j !== this.bestthree[1] && j !== this.bestthree[2])
            {
              max = students[j].sum ;
              this.bestthree[i] = j ;
            }

          }
        }

        for(let i=0 ; i<3 ; i++)
        {
          if(this.bestthree[i]=== -1){
              this.students[i] = {id : -1 , name  : "該当者なし" , japanese : 0 , math  : 0 , english : 0 , num : 0 , sum : 0};
          }else{
            this.students[i] = students[this.bestthree[i]];
          }
      }
      });
  }

  gotoDetail(student: Student): void {
    if(student.id !== -1){
    let link = ['/student-detail', student.id];
    this.router.navigate(link);
  }
  }
}
