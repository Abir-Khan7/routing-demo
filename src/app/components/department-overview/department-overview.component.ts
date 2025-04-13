import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Department } from '../../model/Department';

@Component({
  selector: 'app-department-overview',
  imports: [ButtonModule],
  templateUrl: './department-overview.component.html',
  styleUrl: './department-overview.component.css',
})
export class DepartmentOverviewComponent {
  @Input() department: Department | null = null;

  @Output() close = new EventEmitter<void>();

  backToDetail() {
    this.close.emit();
  }
}
