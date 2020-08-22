import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuesSingleComponent } from './add-ques-single.component';

describe('AddQuesSingleComponent', () => {
  let component: AddQuesSingleComponent;
  let fixture: ComponentFixture<AddQuesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
