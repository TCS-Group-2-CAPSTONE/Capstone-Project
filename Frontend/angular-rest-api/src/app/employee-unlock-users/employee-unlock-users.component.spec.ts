import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUnlockUsersComponent } from './employee-unlock-users.component';

describe('EmployeeUnlockUsersComponent', () => {
  let component: EmployeeUnlockUsersComponent;
  let fixture: ComponentFixture<EmployeeUnlockUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUnlockUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUnlockUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
