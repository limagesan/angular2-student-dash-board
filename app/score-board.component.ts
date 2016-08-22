import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { Student } from './student';
import { StudentService } from './student.service';


@Component({
  selector: 'score-board',
  templateUrl: 'app/score-board.component.html',
  styleUrls:  ['app/score-board.component.css']		

})

export class ScoreBoardComponent implements OnInit {
title ="Tour of Heroes";
	error: any;

	students: Student[];
	selectedStudent: Student;
	addingStudent = false;

	constructor( private router: Router,
		private studentService: StudentService) { }

getStudents(): void {
    this.studentService.getStudents().then(students => this.students = students);
  }

	 ngOnInit():void {
    this.getStudents();
  }

	onSelect(student: Student): void { this.selectedStudent = student; }
 gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStudent.id]);
  }

addStudent(): void {
  this.addingStudent = true;
  this.selectedStudent = null;
}

close(savedStudent: Student): void {
  this.addingStudent = false;
  if (savedStudent) { this.getStudents(); }
}
deleteStudent(student: Student, event: any): void {
  event.stopPropagation();
  this.studentService
      .delete(student)
      .then(res => {
        this.students = this.students.filter(h => h !== student);
        if (this.selectedStudent === student) { this.selectedStudent = null; }
      })
      .catch(error => this.error = error);
}

}

