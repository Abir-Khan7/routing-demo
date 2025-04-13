import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../model/Department';

export interface DepartmentSelectEvent {
  department: Department
}

@Component({
  selector: 'app-department-list',
  imports: [],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  @Output() departmentSelected = new EventEmitter<DepartmentSelectEvent>();
  departments!: Department[]

  public selectedId = 0;

  constructor(private router: Router, private _route: ActivatedRoute, private http: HttpClient) {
    
  }

  ngOnInit() {
  }

  onSelect(department: Department) {
    this.departmentSelected.emit({department})
  }

  isSelected(department: Department) {
    return department.id == this.selectedId;
  }
}
