import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mainline } from '@schemetwister/schemetwister-series-marvel';

import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

import { HeroCardContentComponent } from './hero-card-content.component';

describe('HeroCardContentComponent', () => {
  let component: HeroCardContentComponent;
  let fixture: ComponentFixture<HeroCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroCardContentComponent, BaseCardContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardContentComponent);
    component = fixture.componentInstance;
    component.hero = mainline.LEGENDARY.Heroes.BLACK_WIDOW;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
