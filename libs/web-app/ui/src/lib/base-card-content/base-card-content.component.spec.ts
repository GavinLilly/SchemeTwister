import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCardContentComponent } from './base-card-content.component';

describe('BaseCardContentComponent', () => {
  let component: BaseCardContentComponent;
  let fixture: ComponentFixture<BaseCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
