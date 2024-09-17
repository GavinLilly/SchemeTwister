import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { mainline } from '@schemetwister/series-marvel';

import { BadguyCardContentComponent } from '../badguy-card-content/badguy-card-content.component';
import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

import { MastermindCardContentComponent } from './mastermind-card-content.component';

describe('MastermindCardContentComponent', () => {
  let component: MastermindCardContentComponent;
  let fixture: ComponentFixture<MastermindCardContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MastermindCardContentComponent,
        BaseCardContentComponent,
        BadguyCardContentComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermindCardContentComponent);
    component = fixture.componentInstance;
    component.mastermind = mainline.LEGENDARY.Masterminds.DR_DOOM;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
