import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDeckComponent } from './additional-deck.component';

describe('AdditionalDeckComponent', () => {
  let component: AdditionalDeckComponent;
  let fixture: ComponentFixture<AdditionalDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
