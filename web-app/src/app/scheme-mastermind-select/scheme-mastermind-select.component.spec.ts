import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { SchemeMastermindSelectComponent } from './scheme-mastermind-select.component';

describe('SchemeMastermindSelectComponent', () => {
  let component: SchemeMastermindSelectComponent;
  let fixture: ComponentFixture<SchemeMastermindSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemeMastermindSelectComponent],
      imports: [NgbModalModule, FormsModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeMastermindSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
