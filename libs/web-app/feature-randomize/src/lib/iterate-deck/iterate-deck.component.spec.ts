import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterateDeckComponent } from './iterate-deck.component';

describe('IterateDeckComponent', () => {
  let component: IterateDeckComponent;
  let fixture: ComponentFixture<IterateDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterateDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterateDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
