import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { GameSetupStore } from '../game-setup-store';
import { SchemeSelectComponent } from './scheme-select.component';

describe('SchemeSelectComponent', () => {
  let component: SchemeSelectComponent;
  let fixture: ComponentFixture<SchemeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemeSelectComponent],
      imports: [NgbModule, FormsModule],
      providers: [GameSetupStore, CookieService, NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
