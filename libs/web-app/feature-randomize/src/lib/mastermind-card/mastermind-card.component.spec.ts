import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';

import { MastermindCardComponent } from './mastermind-card.component';

describe('MastermindCardComponent', () => {
  let component: MastermindCardComponent;
  const initialState = { gameSetup: GameSetup.empty() };
  let fixture: ComponentFixture<MastermindCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MastermindCardComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
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
