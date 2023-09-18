import { Component, OnInit } from '@angular/core';
import { Students } from '../models/students';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit{

  students: Students = new Students();

  constructor(private studentService: StudentsService, private router: Router) {

  }

  ngOnInit(): void {
      this.loadStudent()
  }
  
  loadStudent() {
    this.studentService.getAllStudent()
  }

  saveStudent() {
    this.studentService.createStudent(this.students).subscribe(
      data => {
        console.log(data);
        this.goToStudent()
      }
    );
  }

  goToStudent() {
    this.router.navigate(["/list"]);
  }

  onSubmit() {
    console.log(this.students)
  }

}
