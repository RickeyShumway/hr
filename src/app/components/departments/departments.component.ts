import { Component, OnInit } from '@angular/core';
import {DepartmentService } from '../../services/department.service';
import { Department } from 'src/app/interfaces/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
  });
  }
  goToDepartment(departmentId: string): void {
      this.router.navigate(['./timesheet', {id: departmentId}]);
  }}
