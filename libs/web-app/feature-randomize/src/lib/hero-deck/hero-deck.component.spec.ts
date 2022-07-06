import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';

import { HeroDeckComponent } from './hero-deck.component';

describe('HeroDeckComponent', () => {
  let component: HeroDeckComponent;
  const initialState = { gameSetup: GameSetup.empty() };
  let fixture: ComponentFixture<HeroDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDeckComponent],
      imports: [NgbAccordionModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
