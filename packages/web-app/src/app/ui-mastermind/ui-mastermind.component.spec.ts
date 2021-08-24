import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardType, GameSets, Henchmen } from 'libtwister';

import { UiMastermindComponent } from './ui-mastermind.component';

describe('UiMastermindComponent', () => {
  let component: UiMastermindComponent;
  let fixture: ComponentFixture<UiMastermindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiMastermindComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMastermindComponent);
    component = fixture.componentInstance;
    component.mastermind = {
      id: '15020091-de17-4d7a-85e6-bf420b845812',
      name: 'Test mastermind',
      alwaysLeads: [Henchmen.LEGENDARY.DOOMBOT_LEGION],
      attackPoints: 1,
      cardType: CardType.MASTERMIND,
      gameSet: GameSets.LEGENDARY,
      victoryPoints: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
