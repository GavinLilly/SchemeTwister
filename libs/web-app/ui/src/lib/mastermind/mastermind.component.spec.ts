import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardType, GameSets, Henchmen } from '@legendizer/legendizer-lib';

import { MastermindComponent } from './mastermind.component';

describe('MastermindComponent', () => {
  let component: MastermindComponent;
  let fixture: ComponentFixture<MastermindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastermindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermindComponent);
    component = fixture.componentInstance;
    component.mastermind = {
      id: '15020091-de17-4d7a-85e6-bf420b845812',
      name: 'Test mastermind',
      alwaysLeads: Henchmen.LEGENDARY.DOOMBOT_LEGION,
      attackPoints: 1,
      cardType: CardType.MASTERMIND,
      gameSet: GameSets.LEGENDARY,
      victoryPoints: 1
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
