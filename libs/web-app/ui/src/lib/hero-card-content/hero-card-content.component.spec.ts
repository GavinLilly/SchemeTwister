import { ComponentFixture, TestBed } from '@angular/core/testing';


import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

import { HeroCardContentComponent } from './hero-card-content.component';

import { mainline } from '@schemetwister/series-marvel';

describe('HeroCardContentComponent', () => {
  let component: HeroCardContentComponent;
  let fixture: ComponentFixture<HeroCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HeroCardContentComponent, BaseCardContentComponent],
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
