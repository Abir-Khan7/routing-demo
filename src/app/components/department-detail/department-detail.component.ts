import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../model/Department';

@Component({
  selector: 'app-department-detail',
  imports: [],
  templateUrl: './department-detail.component.html',
  styleUrl: './department-detail.component.css',
})
export class DepartmentDetailComponent implements OnInit {
  @Input() department: Department | null = null

  @Output() close = new EventEmitter<string>();
  @Output() goToNext = new EventEmitter<null>();
  @Output() goToPrev = new EventEmitter<null>();
  @Output() goToOverview = new EventEmitter<null>();
  @Output() goToContact = new EventEmitter<null>();

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
  }

  //Turn all these methods into output events to tell single-page to do other stuff

  goPrevious() {
    this.goToPrev.emit();
  }

  goNext() {
    this.goToNext.emit();
  }

  goToDepartments() {
    this.close.emit('Back to event list');
  }

  showOverview() {
    this.goToOverview.emit();
  }

  showContact() {
    this.goToContact.emit();
  }
}
