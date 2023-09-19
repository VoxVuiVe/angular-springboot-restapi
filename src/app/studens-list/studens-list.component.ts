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
  //Search
  searchStudents = '';

  //Paging
  totalLength: any;
  page: number = 1;

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

  // search() {
  //   if (this.searchStudents.trim() === '') {
  //     this.getAllStudent()
  //   } else {
  //     // Nếu có từ khóa tìm kiếm, lọc danh sách sinh viên dựa trên từ khóa
  //     this.students = this.studentService.getAll().filter(student => { //Dung filter de loc tu khoa tim kiem
  //       const searchStudents = this.searchStudents.toLowerCase();
  //       return (
  //         student.fullname.toLowerCase().includes(searchStudents) ||
  //         student.email.toLowerCase().includes(searchStudents) ||
  //         student.phone.toString().toLowerCase().includes(searchStudents) ||
  //         student.district.toLowerCase().includes(searchStudents) ||
  //         student.dob.toLowerCase().includes(searchStudents) ||
  //         student.gender.toLowerCase().includes(searchStudents)
  //       );
  //     });
  //   }
  // }

  search() {
      this.studentService.searchStudents(this.searchStudents)
      .subscribe(filteredStudents => {
        this.students = filteredStudents;
    });
  }
}
