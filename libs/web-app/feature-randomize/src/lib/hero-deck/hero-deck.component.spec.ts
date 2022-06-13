import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { GameSets } from '@schemetwister/libtwister';

import { HeroDeckComponent } from './hero-deck.component';

describe('HeroDeckComponent', () => {
  let component: HeroDeckComponent;
  let fixture: ComponentFixture<HeroDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDeckComponent],
      imports: [NgbAccordionModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDeckComponent);
    component = fixture.componentInstance;
    component.heroDeck = {
      heroes: [GameSets.LEGENDARY.Heroes.BLACK_WIDOW],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
