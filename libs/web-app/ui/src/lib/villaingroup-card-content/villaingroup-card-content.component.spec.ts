import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mainline } from '@schemetwister/schemetwister-series-marvel';

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
    component.villaingroup = mainline.LEGENDARY.Villains.BROTHERHOOD;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
