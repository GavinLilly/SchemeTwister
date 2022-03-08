import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadguyCardContentComponent } from './badguy-card-content.component';

describe('BadguyCardContentComponent', () => {
  let component: BadguyCardContentComponent;
  let fixture: ComponentFixture<BadguyCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadguyCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadguyCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
