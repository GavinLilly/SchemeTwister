import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSetupsComponent } from './latest-setups.component';

describe('LatestSetupsComponent', () => {
  let component: LatestSetupsComponent;
  let fixture: ComponentFixture<LatestSetupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestSetupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestSetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
