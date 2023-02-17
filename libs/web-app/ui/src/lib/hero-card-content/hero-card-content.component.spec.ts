import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSets } from '@schemetwister/libtwister';

import { HeroCardContentComponent } from './hero-card-content.component';

describe('HeroCardContentComponent', () => {
  let component: HeroCardContentComponent;
  let fixture: ComponentFixture<HeroCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroCardContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardContentComponent);
    component = fixture.componentInstance;
    component.hero = GameSets.LEGENDARY.Heroes.BLACK_WIDOW;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});