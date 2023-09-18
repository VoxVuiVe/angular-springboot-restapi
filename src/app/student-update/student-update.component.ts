import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Students } from '../models/students';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss']
})
export class StudentUpdateComponent implements OnInit{
  id: number;
  students: Students = new Students();

  constructor(private studentService: StudentsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.students = data;
    })
  }

  updateStudent() {
    this.studentService.updateStudent(this.id, this.students).subscribe(data => {
      console.log(data)
      this.goToStudent();
    })
  }

  goToStudent() {
    this.router.navigate(["/list"]);
  }
}
