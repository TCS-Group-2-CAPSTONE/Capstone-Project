import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewItemsComponent } from './user-view-items.component';

describe('UserViewItemsComponent', () => {
  let component: UserViewItemsComponent;
  let fixture: ComponentFixture<UserViewItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
