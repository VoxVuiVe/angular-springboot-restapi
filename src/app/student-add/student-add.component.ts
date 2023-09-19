import { Component, OnInit } from '@angular/core';
import { Students } from '../models/students';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit{
  students: Students = new Students();

  validateForm: FormGroup; //duoc su dung de quan li va kiem tra bieu mau

  constructor(private studentService: StudentsService, private router: Router, private formBuilder: FormBuilder) {
    this.validateForm = this.formBuilder.group({
      fullname:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      district: ['', Validators.required]
    });
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
