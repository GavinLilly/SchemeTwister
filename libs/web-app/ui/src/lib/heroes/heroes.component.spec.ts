import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSets } from '@legendizer/legendizer-lib';
import { CardType } from '@legendizer/legendizer-lib';
import { Teams } from '@legendizer/legendizer-lib';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    component.hero = {
      id: '86356c28-1dec-4b31-8f18-106573a700be',
      name: 'Test Hero',
      cardType: CardType.HERO,
      gameSet: GameSets.LEGENDARY,
      team: Teams.AVENGERS
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
