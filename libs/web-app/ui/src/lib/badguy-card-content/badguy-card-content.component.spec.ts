import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mainline } from '@schemetwister/series-marvel';

import { BadguyCardContentComponent } from './badguy-card-content.component';

describe('BadguyCardContentComponent', () => {
  let component: BadguyCardContentComponent;
  let fixture: ComponentFixture<BadguyCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BadguyCardContentComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadguyCardContentComponent);
    component = fixture.componentInstance;
    component.card = mainline.LEGENDARY.Henchmen.HAND_NINJAS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
