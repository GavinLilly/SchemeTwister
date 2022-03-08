import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainDeckComponent } from './villain-deck.component';

describe('VillainDeckComponent', () => {
  let component: VillainDeckComponent;
  let fixture: ComponentFixture<VillainDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
