import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '@schemetwister/libtwister';
import { mainline } from '@schemetwister/series-marvel';

import { BaseCardContentComponent } from './base-card-content.component';

describe('BaseCardContentComponent', () => {
  let component: BaseCardContentComponent<Hero>;
  let fixture: ComponentFixture<BaseCardContentComponent<Hero>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BaseCardContentComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent<BaseCardContentComponent<Hero>>(
      BaseCardContentComponent
    );
    component = fixture.componentInstance;
    component.card = mainline.LEGENDARY.Heroes.BLACK_WIDOW;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
