import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StudensListComponent } from './studens-list/studens-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { PathComponent } from './path/path.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path: "list", component: StudensListComponent},
  {path: "add", component: StudentAddComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update/:id', component: StudentUpdateComponent}
];

@NgModule({
  declarations: [
    StudensListComponent,
    HeaderComponent,
    StudentAddComponent,
    PathComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [PathComponent]
})
export class AppModule { }
