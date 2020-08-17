import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainGroupComponent } from './villain-group.component';

describe('VillainGroupComponent', () => {
  let component: VillainGroupComponent;
  let fixture: ComponentFixture<VillainGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
