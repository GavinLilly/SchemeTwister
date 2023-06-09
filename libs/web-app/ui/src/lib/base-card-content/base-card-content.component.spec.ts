import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSets, Hero } from '@schemetwister/libtwister';

import { BaseCardContentComponent } from './base-card-content.component';

describe('BaseCardContentComponent', () => {
  let component: BaseCardContentComponent<Hero>;
  let fixture: ComponentFixture<BaseCardContentComponent<Hero>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseCardContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCardContentComponent<Hero>);
    component = fixture.componentInstance;
    component.card = GameSets.LEGENDARY.Heroes.BLACK_WIDOW;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
