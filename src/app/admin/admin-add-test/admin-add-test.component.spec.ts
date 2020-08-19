import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddTestComponent } from './admin-add-test.component';

describe('AdminAddTestComponent', () => {
  let component: AdminAddTestComponent;
  let fixture: ComponentFixture<AdminAddTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
