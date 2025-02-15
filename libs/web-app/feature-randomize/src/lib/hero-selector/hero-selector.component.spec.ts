import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LibTwister } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/series-marvel';

import { HeroSelectorComponent } from './hero-selector.component';

describe('HeroSelectorComponent', () => {
  let component: HeroSelectorComponent;
  let fixture: ComponentFixture<HeroSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSelectorComponent, NgbModule],
      providers: [NgbActiveModal, NgbModal],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSelectorComponent);
    component = fixture.componentInstance;
    component.availableHeroesInput = new LibTwister({
      series: [marvelSeries],
    }).stores.heroStore.availableCards;
    component.numberOfHeroes = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 slots for heroes', () =>
    expect(component.numHeroesArray).toHaveLength(5));
});
