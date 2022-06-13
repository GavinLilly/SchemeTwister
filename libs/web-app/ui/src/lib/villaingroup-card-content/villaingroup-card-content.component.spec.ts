import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSets } from '@schemetwister/libtwister';

import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

import { VillaingroupCardContentComponent } from './villaingroup-card-content.component';

describe('VillaingroupCardContentComponent', () => {
  let component: VillaingroupCardContentComponent;
  let fixture: ComponentFixture<VillaingroupCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        VillaingroupCardContentComponent,
        BaseCardContentComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaingroupCardContentComponent);
    component = fixture.componentInstance;
    component.villaingroup = GameSets.LEGENDARY.Villains.BROTHERHOOD;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
