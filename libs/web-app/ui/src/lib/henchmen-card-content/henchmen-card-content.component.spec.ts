import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mainline } from '@schemetwister/schemetwister-series-marvel';

import { BadguyCardContentComponent } from '../badguy-card-content/badguy-card-content.component';
import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

import { HenchmenCardContentComponent } from './henchmen-card-content.component';

describe('HenchmenCardContentComponent', () => {
  let component: HenchmenCardContentComponent;
  let fixture: ComponentFixture<HenchmenCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HenchmenCardContentComponent,
        BadguyCardContentComponent,
        BaseCardContentComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HenchmenCardContentComponent);
    component = fixture.componentInstance;
    component.henchmen = mainline.LEGENDARY.Henchmen.DOOMBOT_LEGION;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
