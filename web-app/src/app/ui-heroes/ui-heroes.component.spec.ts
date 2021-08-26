import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardType, GameSets, Teams } from 'libtwister';

import { UiHeroesComponent } from './ui-heroes.component';

describe('UiHeroesComponent', () => {
  let component: UiHeroesComponent;
  let fixture: ComponentFixture<UiHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiHeroesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHeroesComponent);
    component = fixture.componentInstance;
    component.hero = {
      id: '86356c28-1dec-4b31-8f18-106573a700be',
      name: 'Test Hero',
      cardType: CardType.HERO,
      gameSet: GameSets.LEGENDARY,
      team: Teams.AVENGERS,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
