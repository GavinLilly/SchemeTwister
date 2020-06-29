import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeComponent } from './scheme.component';

describe('SchemeComponent', () => {
  let component: SchemeComponent;
  let fixture: ComponentFixture<SchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
