import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../models/students';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

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
}
