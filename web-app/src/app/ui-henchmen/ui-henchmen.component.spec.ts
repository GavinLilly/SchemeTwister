import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardType, GameSets } from 'libtwister';

import { UiHenchmenComponent } from './ui-henchmen.component';

describe('UiHenchmenComponent', () => {
  let component: UiHenchmenComponent;
  let fixture: ComponentFixture<UiHenchmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiHenchmenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHenchmenComponent);
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
