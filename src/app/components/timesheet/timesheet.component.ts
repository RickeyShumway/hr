import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/interfaces/department';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  departments: Department[] = [];
  department: any;


  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService

  ) { }

  ngOnInit(): void {
    this.departments = this.departmentService.departments;
    this.department = this.departments.find(x => x.id === this.route.snapshot.params['id']);
  }

}
