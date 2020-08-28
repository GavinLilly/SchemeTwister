import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Schemes } from '@legendizer/legendizer-lib';

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
    component.scheme = Schemes.LEGENDARY.MIDTOWN_BANK_ROBBERY
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
