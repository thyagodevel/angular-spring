import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //courserService: CoursesService;

  constructor(
    private courserService: CoursesService,
    public dialog: MatDialog
  ) {
    //this.courses = [];
    //this.courserService = new CoursesService();
    this.courses$ = this.courserService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([]);
      })
    )
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}