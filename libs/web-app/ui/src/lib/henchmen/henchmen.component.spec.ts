import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardType, GameSets } from '@schemetwister/libtwister';

import { HenchmenComponent } from './henchmen.component';

describe('HenchmenComponent', () => {
  let component: HenchmenComponent;
  let fixture: ComponentFixture<HenchmenComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HenchmenComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HenchmenComponent);
    component = fixture.componentInstance;
    component.henchmen = {
      id: '9c4bb2dc-2516-443c-a713-d511aa26dcf2',
      name: 'Test Henchmen',
      gameSet: GameSets.LEGENDARY,
      cardType: CardType.HENCHMEN,
      attackPoints: 1,
      fight: 'No effect',
      victoryPoints: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
