import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardType, GameSets, Henchmen } from '@schemetwister/libtwister';

import { MastermindComponent } from './mastermind.component';

describe('MastermindComponent', () => {
  let component: MastermindComponent;
  let fixture: ComponentFixture<MastermindComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MastermindComponent],
        imports: [NgbModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermindComponent);
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
