import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';

import { MastermindCardComponent } from './mastermind-card.component';

describe('MastermindCardComponent', () => {
  let component: MastermindCardComponent;
  const initialState = { gameSetup: GameSetup.empty() };
  let fixture: ComponentFixture<MastermindCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
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
