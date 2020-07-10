import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeComponent } from './randomize.component';

describe('RandomizeComponent', () => {
  let component: RandomizeComponent;
  let fixture: ComponentFixture<RandomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
