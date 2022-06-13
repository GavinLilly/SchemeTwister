import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { GameSets } from '@schemetwister/libtwister';

import { VillainDeckComponent } from './villain-deck.component';

describe('VillainDeckComponent', () => {
  let component: VillainDeckComponent;
  let fixture: ComponentFixture<VillainDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VillainDeckComponent],
      imports: [NgbAccordionModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainDeckComponent);
    component = fixture.componentInstance;
    component.villainDeck = {
      villains: [GameSets.LEGENDARY.Villains.BROTHERHOOD],
      henchmen: [GameSets.LEGENDARY.Henchmen.DOOMBOT_LEGION],
      numMasterStrikes: 5,
      numTwists: 8,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
