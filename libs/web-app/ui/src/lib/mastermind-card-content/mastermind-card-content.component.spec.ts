import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GameSets } from '@schemetwister/libtwister';

import { MastermindCardContentComponent } from './mastermind-card-content.component';

describe('MastermindCardContentComponent', () => {
  let component: MastermindCardContentComponent;
  let fixture: ComponentFixture<MastermindCardContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MastermindCardContentComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermindCardContentComponent);
    component = fixture.componentInstance;
    component.mastermind = GameSets.LEGENDARY.Masterminds.DR_DOOM;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
