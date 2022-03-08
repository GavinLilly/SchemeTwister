import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermindCardComponent } from './mastermind-card.component';

describe('MastermindCardComponent', () => {
  let component: MastermindCardComponent;
  let fixture: ComponentFixture<MastermindCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastermindCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermindCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
