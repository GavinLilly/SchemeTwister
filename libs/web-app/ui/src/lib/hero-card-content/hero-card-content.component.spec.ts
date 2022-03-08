import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardContentComponent } from './hero-card-content.component';

describe('HeroCardContentComponent', () => {
  let component: HeroCardContentComponent;
  let fixture: ComponentFixture<HeroCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
