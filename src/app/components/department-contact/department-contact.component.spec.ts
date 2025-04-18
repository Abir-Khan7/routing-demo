import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentContactComponent } from './department-contact.component';

describe('DepartmentContactComponent', () => {
  let component: DepartmentContactComponent;
  let fixture: ComponentFixture<DepartmentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
