import { Component, OnInit } from '@angular/core';
import { Students } from '../models/students';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studens-list',
  templateUrl: './studens-list.component.html',
  styleUrls: ['./studens-list.component.scss']
})
export class StudensListComponent implements OnInit{
  students: Students[] = [];

  constructor(private studentService: StudentsService, private router: Router) {}

  ngOnInit(): void {
      this.getAllStudent()
  }

  private getAllStudent() {
    this.studentService.getAllStudent().subscribe(data => {
      this.students = data;
    });
  }

  updateStudent(id : number) {
    this.router.navigate(["/update", id]);
  }

  deleteStudent(id: number) {
    if(confirm('Do you want delele ?')) {
      this.studentService.deleteStudent(id).subscribe(data => {
        console.log(data)
        this.getAllStudent();
      })
    }
    
  }
}
