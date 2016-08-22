import { Injectable } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Student } from './student';

@Injectable()
export class StudentService {
//何か処理が解決したらHEROESを渡すのか?
//resolveは処理成功時(失敗時はreject)
//ここで指定した引数が呼び出し時のThenの引数になる
//	getHeroes(){return Promise.resolve(HEROES);}
/*	getHeroesSlowly() {
  return new Promise<Hero[]>(resolve =>
    setTimeout(() => resolve(HEROES), 2000) // 2 seconds
  );
}*/

getStudent(id: number) {
  return this.getStudents()
             .then(students => students.find(student => student.id === id));
}



 private studentsUrl = 'app/students';  // URL to web api

  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentsUrl)
               .toPromise()
               .then(response => response.json().data as Student[])
               .catch(this.handleError);
  }

// Add new Student
private post(student: Student): Promise<Student> {
  let headers = new Headers({
    'Content-Type': 'application/json'});

  return this.http
             .post(this.studentsUrl, JSON.stringify(student), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
}


// Update existing Hero
private put(student: Student): Promise<Student> {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let url = `${this.studentsUrl}/${student.id}`;

  return this.http
             .put(url, JSON.stringify(student), {headers: headers})
             .toPromise()
             .then(() => student)
             .catch(this.handleError);
}


save(student: Student): Promise<Student>  {
  if (student.id) {
    return this.put(student);
  }
  return this.post(student);
}

delete(student: Student): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.studentsUrl}/${student.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

