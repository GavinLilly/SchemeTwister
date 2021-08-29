import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardType, GameSets } from 'libtwister';

import { UiVillainGroupComponent } from './ui-villain-group.component';

describe('UiVillainGroupComponent', () => {
  let component: UiVillainGroupComponent;
  let fixture: ComponentFixture<UiVillainGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiVillainGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiVillainGroupComponent);
    component = fixture.componentInstance;
    component.villainGroup = {
      id: '1310ca31-a8d5-46dc-90f0-b3f4a83f6c6f',
      name: 'Test villains',
      cardType: CardType.VILLAINGROUP,
      gameSet: GameSets.LEGENDARY,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
