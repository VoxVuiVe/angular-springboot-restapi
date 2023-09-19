import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../models/students';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  // private students: Students[] = [];
  // getAll(): Students[] {
  //   return this.students
  // }

  private getURL = "http://localhost:8080/api/v1/students";

  constructor(private httpClient: HttpClient) { }

  getAllStudent(): Observable<Students[]> {
    return this.httpClient.get<Students[]>(`${this.getURL}`)
  }

  createStudent(students: Students): Observable<Object> {
    return this.httpClient.post(`${this.getURL}`, students)
  }

  getStudentById(id: number): Observable<Students> { 
    return this.httpClient.get<Students>(`${this.getURL}/${id}`);
  }

  updateStudent(id: number, students: Students): Observable<Object>{
    return this.httpClient.put(`${this.getURL}/${id}`, students);
  }

  deleteStudent(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.getURL}/${id}`);
  }

  searchStudents(searchString: string): Observable<Students[]> {
    if (searchString.trim() === '') {
      // If the search string is empty, return all students
      return this.getAllStudent();
    } else {
      // If there is a search string, filter students based on the criteria
      return this.getAllStudent().pipe(
        map((students: Students[]) =>
          students.filter(student => {
            const searchStudents = searchString.toLowerCase();
            return (
              student.fullname.toLowerCase().includes(searchStudents) ||
              student.email.toLowerCase().includes(searchStudents) ||
              student.phone.toString().toLowerCase().includes(searchStudents) ||
              student.district.toLowerCase().includes(searchStudents) ||
              student.dob.toLowerCase().includes(searchStudents) ||
              student.gender.toLowerCase().includes(searchStudents)
            );
          })
        )
      );
    }
  }
}
