import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteItemsComponent } from './user-delete-items.component';

describe('UserDeleteItemsComponent', () => {
  let component: UserDeleteItemsComponent;
  let fixture: ComponentFixture<UserDeleteItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
