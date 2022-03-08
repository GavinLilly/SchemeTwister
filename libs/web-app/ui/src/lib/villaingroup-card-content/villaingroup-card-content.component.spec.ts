import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaingroupCardContentComponent } from './villaingroup-card-content.component';

describe('VillaingroupCardContentComponent', () => {
  let component: VillaingroupCardContentComponent;
  let fixture: ComponentFixture<VillaingroupCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaingroupCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaingroupCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
