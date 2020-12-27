import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuComponent } from './form-bu.component';

describe('FormBuComponent', () => {
  let component: FormBuComponent;
  let fixture: ComponentFixture<FormBuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
