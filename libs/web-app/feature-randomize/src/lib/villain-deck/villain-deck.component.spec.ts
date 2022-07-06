import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';

import { VillainDeckComponent } from './villain-deck.component';

describe('VillainDeckComponent', () => {
  let component: VillainDeckComponent;
  const initialState = { gameSetup: GameSetup.empty() };
  let fixture: ComponentFixture<VillainDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VillainDeckComponent],
      imports: [NgbAccordionModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainDeckComponent);
    component = fixture.componentInstance;
    component.villainDeck$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
