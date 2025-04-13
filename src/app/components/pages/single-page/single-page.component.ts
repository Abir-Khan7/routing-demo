import { Component } from '@angular/core';
import { Department } from '../../../model/Department';
import { DepartmentDetailComponent } from '../../department-detail/department-detail.component';
import {
  DepartmentListComponent,
  DepartmentSelectEvent,
} from '../../department-list/department-list.component';
import { DepartmentOverviewComponent } from '../../department-overview/department-overview.component';

@Component({
  selector: 'app-single-page',
  imports: [
    DepartmentListComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
  ],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.css',
})
export class SinglePageComponent {
  viewMode: 'DEPARTMENT_LIST' | 'DEPARTMENT_DETAIL' | 'DEPARTMENT_OVERVIEW' = 'DEPARTMENT_LIST';
  selectedDepartment!: Department | null;
  selectedDepartmentId = 0;

  constructor() {}
  
  handleSelectedDepartment(event: DepartmentSelectEvent) {
    this.selectedDepartment = event.department;
    this.selectedDepartmentId = this.selectedDepartment.id;
    this.viewMode = 'DEPARTMENT_DETAIL';
  }

  closeDepartmentDetail() {
    this.selectedDepartment = null;
    this.selectedDepartmentId = 0;
    this.viewMode = 'DEPARTMENT_LIST';
  }

  goToPreviousDepartment() {}

  goToDepartmentOverview() {
    this.viewMode = 'DEPARTMENT_OVERVIEW';
  }

  closeDepartmentOverview() {
    this.viewMode = 'DEPARTMENT_DETAIL';
  }
}
