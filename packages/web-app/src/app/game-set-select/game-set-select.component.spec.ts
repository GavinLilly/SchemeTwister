import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSetSelectComponent } from './game-set-select.component';

describe('GameSetSelectComponent', () => {
  let component: GameSetSelectComponent;
  let fixture: ComponentFixture<GameSetSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSetSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
