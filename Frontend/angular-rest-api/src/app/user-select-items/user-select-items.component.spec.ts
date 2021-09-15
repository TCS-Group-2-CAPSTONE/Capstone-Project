import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectItemsComponent } from './user-select-items.component';

describe('UserSelectItemsComponent', () => {
  let component: UserSelectItemsComponent;
  let fixture: ComponentFixture<UserSelectItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSelectItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelectItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
