import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';

import { SchemeCardComponent } from './scheme-card.component';

describe('SchemeCardComponent', () => {
  let component: SchemeCardComponent;
  const initialState = { gameSetup: GameSetup.empty() };
  let fixture: ComponentFixture<SchemeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemeCardComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
