import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';

import { AdditionalDeckComponent } from './additional-deck.component';

describe('AdditionalDeckComponent', () => {
  let component: AdditionalDeckComponent;
  const initialState = { gameSetup: GameSetup.empty() };
  let fixture: ComponentFixture<AdditionalDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditionalDeckComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
