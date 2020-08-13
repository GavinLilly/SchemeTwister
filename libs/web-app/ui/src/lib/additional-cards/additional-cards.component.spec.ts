import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalCardsComponent } from './additional-cards.component';

describe('AdditionalCardsComponent', () => {
  let component: AdditionalCardsComponent;
  let fixture: ComponentFixture<AdditionalCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
