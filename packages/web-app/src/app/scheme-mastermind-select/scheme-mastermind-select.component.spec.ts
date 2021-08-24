import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeMastermindSelectComponent } from './scheme-mastermind-select.component';

describe('SchemeMastermindSelectComponent', () => {
  let component: SchemeMastermindSelectComponent;
  let fixture: ComponentFixture<SchemeMastermindSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeMastermindSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeMastermindSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
